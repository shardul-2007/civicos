import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Navigation, Search, AlertCircle, CheckCircle2, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LeafletErrorBoundary from './LeafletErrorBoundary';

// Custom Emerald Teal Leaflet Issue Marker Pin
const createPinIcon = () => {
  if (typeof window === 'undefined' || !L || !L.divIcon) return null;
  return L.divIcon({
    className: 'custom-leaflet-pin',
    html: `
      <div style="
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid #ffffff;
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.9), 0 4px 12px rgba(0,0,0,0.5);
        cursor: grab;
      "></div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

// Helper component to programmatic fly to position on map view change
function MapController({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center && center[0] && center[1] && !isNaN(center[0]) && !isNaN(center[1])) {
      map.flyTo(center, zoom || 16, { duration: 1.2 });
    }
  }, [center, zoom, map]);
  return null;
}

// Helper component to handle Leaflet Map Click (Method C)
function MapClickListener({ onMapClick }) {
  useMapEvents({
    click(e) {
      if (e?.latlng) {
        onMapClick(e.latlng.lat, e.latlng.lng);
      }
    },
  });
  return null;
}

export default function LeafletMapPicker({
  selectedLocation,
  onLocationSelect,
  onConfirm,
  confirmed = false
}) {
  const { t } = useLanguage();
  const defaultLat = selectedLocation?.latitude || 18.5204;
  const defaultLng = selectedLocation?.longitude || 73.8567;

  const [lat, setLat] = useState(defaultLat);
  const [lng, setLng] = useState(defaultLng);
  const [accuracy, setAccuracy] = useState(selectedLocation?.accuracy || null);
  const [address, setAddress] = useState(selectedLocation?.address || 'Near Main Junction');
  const [city, setCity] = useState(selectedLocation?.city || 'Pune');
  const [district, setDistrict] = useState(selectedLocation?.district || 'Pune');
  const [stateName, setStateName] = useState(selectedLocation?.state || 'Maharashtra');
  const [pincode, setPincode] = useState(selectedLocation?.pincode || '411001');
  const [country, setCountry] = useState(selectedLocation?.country || 'India');

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [searching, setSearching] = useState(false);
  const [showPredictions, setShowPredictions] = useState(false);

  // Status & error states
  const [loadingGps, setLoadingGps] = useState(false);
  const [geocoding, setGeocoding] = useState(false);
  const [gpsError, setGpsError] = useState('');

  const pinIcon = useMemo(() => createPinIcon(), []);

  // Update parent location state
  const notifyLocationChange = useCallback((newLoc) => {
    if (onLocationSelect) {
      onLocationSelect(newLoc);
    }
  }, [onLocationSelect]);

  // Reverse Geocoding helper using OpenStreetMap Nominatim
  const reverseGeocode = useCallback((latitude, longitude, accuracyVal = null) => {
    setGeocoding(true);
    setGpsError('');

    const applyData = (formattedAddr, parsed) => {
      const fullAddr = formattedAddr || `${parsed.road ? parsed.road + ', ' : ''}${parsed.city}, ${parsed.state} ${parsed.pincode}`;
      setAddress(fullAddr);
      setCity(parsed.city);
      setDistrict(parsed.district);
      setStateName(parsed.state);
      setPincode(parsed.pincode);
      setCountry(parsed.country);

      notifyLocationChange({
        latitude,
        longitude,
        accuracy: accuracyVal,
        address: fullAddr,
        city: parsed.city,
        district: parsed.district,
        state: parsed.state,
        pincode: parsed.pincode,
        country: parsed.country,
      });
    };

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`, {
      headers: { 'Accept-Language': 'en' }
    })
      .then((res) => res.json())
      .then((data) => {
        const addr = data.address || {};
        const formattedAddr = data.display_name || '';
        const parsed = {
          road: addr.road || addr.pedestrian || addr.suburb || '',
          city: addr.city || addr.town || addr.village || addr.suburb || 'Selected Location',
          district: addr.state_district || addr.county || addr.district || 'Municipal District',
          state: addr.state || 'Maharashtra',
          pincode: addr.postcode || '400001',
          country: addr.country || 'India',
        };
        applyData(formattedAddr, parsed);
      })
      .catch((err) => {
        console.warn('[Leaflet Reverse Geocode] OpenStreetMap fallback:', err.message);
        const fallbackObj = {
          road: 'Municipal Ward Corridor',
          city: 'Selected Region',
          district: 'District',
          state: 'Maharashtra',
          pincode: '400001',
          country: 'India',
        };
        applyData(`Point (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`, fallbackObj);
      })
      .finally(() => {
        setGeocoding(false);
      });
  }, [notifyLocationChange]);

  // Method A: GPS Geolocation Button
  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setGpsError('Geolocation is not supported by your browser.');
      return;
    }

    setLoadingGps(true);
    setGpsError('');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const currentLat = pos.coords.latitude;
        const currentLng = pos.coords.longitude;
        const acc = Math.round(pos.coords.accuracy || 12);

        setLat(currentLat);
        setLng(currentLng);
        setAccuracy(acc);
        setLoadingGps(false);

        reverseGeocode(currentLat, currentLng, acc);
      },
      (err) => {
        setLoadingGps(false);
        if (err.code === 1) {
          setGpsError('GPS permission denied. Please allow location access or select location manually on map.');
        } else if (err.code === 2) {
          setGpsError('GPS position unavailable. Try searching location by name.');
        } else {
          setGpsError('GPS request timed out. Please try again.');
        }
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
    );
  };

  // Method B: Forward Geocoding Nominatim Search Across India
  useEffect(() => {
    if (!searchQuery || searchQuery.trim().length < 2) {
      setPredictions([]);
      setShowPredictions(false);
      return;
    }

    const timer = setTimeout(() => {
      setSearching(true);
      fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=in&q=${encodeURIComponent(searchQuery)}`, {
        headers: { 'Accept-Language': 'en' }
      })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            const mapped = data.map((item) => ({
              description: item.display_name,
              lat: parseFloat(item.lat),
              lng: parseFloat(item.lon),
            }));
            setPredictions(mapped);
            setShowPredictions(true);
          }
        })
        .catch((e) => {
          console.warn('[Nominatim Search Error]', e.message);
        })
        .finally(() => {
          setSearching(false);
        });
    }, 450);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSelectPrediction = (p) => {
    setSearchQuery(p.description);
    setShowPredictions(false);
    setLat(p.lat);
    setLng(p.lng);
    setAccuracy(null);

    reverseGeocode(p.lat, p.lng);
  };

  // Method C: Map Click
  const handleMapClick = (clickedLat, clickedLng) => {
    setLat(clickedLat);
    setLng(clickedLng);
    setAccuracy(null);
    reverseGeocode(clickedLat, clickedLng);
  };

  // Method D: Draggable Pin Drag End
  const eventHandlers = useMemo(
    () => ({
      dragend(e) {
        const marker = e.target;
        if (marker != null) {
          const pos = marker.getLatLng();
          setLat(pos.lat);
          setLng(pos.lng);
          setAccuracy(null);
          reverseGeocode(pos.lat, pos.lng);
        }
      },
    }),
    [reverseGeocode]
  );

  const handleConfirmClick = () => {
    const finalLocation = {
      latitude: lat,
      longitude: lng,
      accuracy,
      address,
      city,
      district,
      state: stateName,
      pincode,
      country,
    };
    if (onConfirm) {
      onConfirm(finalLocation);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>

      {/* Control Tools Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>

        {/* Search Bar Across India */}
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#34d399', pointerEvents: 'none', zIndex: 2 }} />
            <input
              type="text"
              className="form-input-dark"
              style={{ paddingLeft: '2.8rem', width: '100%', height: '48px', fontSize: '0.9rem', boxSizing: 'border-box' }}
              placeholder={t('searchLocationPlace')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => predictions.length > 0 && setShowPredictions(true)}
            />
            {searching && (
              <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)', borderTopColor: '#34d399', animation: 'spin 0.8s linear infinite' }} />
            )}
          </div>

          {/* Autocomplete Predictions Dropdown */}
          {showPredictions && predictions.length > 0 && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: '#121722', border: '1px solid rgba(16,185,129,0.3)',
              borderRadius: '0.5rem', marginTop: '0.35rem', zIndex: 1100,
              boxShadow: '0 20px 40px rgba(0,0,0,0.9)', maxHeight: '220px', overflowY: 'auto'
            }}>
              {predictions.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectPrediction(p)}
                  style={{
                    padding: '0.75rem 0.9rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(16,185,129,0.12)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <MapPin size={14} color="#34d399" style={{ flexShrink: 0 }} />
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {p.description}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Method A: GPS Location Button (Full Width Mobile-First) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', width: '100%' }}>
          <button
            type="button"
            onClick={handleUseCurrentLocation}
            className="btn-glass"
            disabled={loadingGps}
            style={{ width: '100%', minHeight: '48px', justifyContent: 'center', fontSize: '0.9rem', borderColor: 'rgba(16,185,129,0.4)', color: '#34d399', fontWeight: 700 }}
          >
            {loadingGps ? (
              <>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#34d399', animation: 'spin 0.8s linear infinite' }} />
                {t('detectingGps')}
              </>
            ) : (
              <>
                <Navigation size={16} color="#34d399" /> {t('useGpsBtn')}
              </>
            )}
          </button>

          {accuracy !== null && (
            <div style={{ fontSize: '0.78rem', color: accuracy <= 50 ? '#34d399' : '#f59e0b', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
              <Compass size={14} /> {t('gpsAccuracy')}: ±{accuracy} m
            </div>
          )}
        </div>

        {/* GPS Error Alert */}
        {gpsError && (
          <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '0.65rem 0.9rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <AlertCircle size={15} style={{ flexShrink: 0 }} /> {gpsError}
          </div>
        )}
      </div>

      {/* Main Leaflet Map View */}
      <div style={{ height: '320px', width: '100%', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 10px 30px rgba(0,0,0,0.6)', position: 'relative' }}>
        <LeafletErrorBoundary>
          <MapContainer
            key={`l-map-${lat}-${lng}`}
            center={[lat, lng]}
            zoom={16}
            style={{ height: '100%', width: '100%' }}
            zoomControl={true}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapController center={[lat, lng]} zoom={16} />
            <MapClickListener onMapClick={handleMapClick} />
            {pinIcon && (
              <Marker
                position={[lat, lng]}
                icon={pinIcon}
                draggable={true}
                eventHandlers={eventHandlers}
              />
            )}
          </MapContainer>
        </LeafletErrorBoundary>

        {geocoding && (
          <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(18,23,34,0.92)', border: '1px solid rgba(16,185,129,0.4)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.4rem', zIndex: 1000 }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#34d399', animation: 'spin 0.8s linear infinite' }} />
            {t('fetchingAddress')}
          </div>
        )}
      </div>

      {/* Selected Location Information Card */}
      <div className="natural-glass-card" style={{ padding: '1.25rem', border: confirmed ? '1px solid rgba(16,185,129,0.5)' : '1px solid rgba(255,255,255,0.1)', background: '#121722' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
          <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <MapPin size={16} color="#34d399" /> {t('selectedLocation')}
          </div>
          {confirmed && (
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#34d399', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', padding: '0.2rem 0.6rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <CheckCircle2 size={12} /> {t('locationConfirmed')}
            </span>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.65rem', fontSize: '0.82rem', marginBottom: '1.1rem' }}>
          <div style={{ gridColumn: '1 / -1', background: 'rgba(255,255,255,0.03)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: 700 }}>{t('address')}</div>
            <div style={{ color: '#ffffff', fontWeight: 700, lineHeight: 1.4 }}>{address}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{t('city')}</div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{city}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{t('district')}</div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{district}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{t('state')}</div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{stateName}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{t('pincode')}</div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{pincode}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{t('latitude')}</div>
            <div style={{ color: '#34d399', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{lat.toFixed(6)}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{t('longitude')}</div>
            <div style={{ color: '#34d399', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{lng.toFixed(6)}</div>
          </div>
        </div>

        {/* Explicit Confirm Location Action Button */}
        <button
          type="button"
          onClick={handleConfirmClick}
          className="btn-sage"
          style={{ width: '100%', minHeight: '48px', justifyContent: 'center', fontSize: '0.92rem', fontWeight: 700 }}
        >
          <CheckCircle2 size={16} /> {t('confirmLocationBtn')}
        </button>
      </div>

    </div>
  );
}
