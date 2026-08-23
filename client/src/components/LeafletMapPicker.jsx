import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Navigation, Search, AlertCircle, CheckCircle2, Compass } from 'lucide-react';
import LeafletErrorBoundary from './LeafletErrorBoundary';

// Custom Emerald Teal Leaflet Issue Marker Pin
const createPinIcon = () => {
  if (typeof window === 'undefined' || !L || !L.divIcon) return null;
  return L.divIcon({
    className: 'custom-leaflet-pin',
    html: `
      <div style="
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 3px solid #ffffff;
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.9), 0 4px 12px rgba(0,0,0,0.5);
        cursor: grab;
      "></div>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
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
  const defaultLat = selectedLocation?.latitude || 18.5204;
  const defaultLng = selectedLocation?.longitude || 73.8567;

  const [lat, setLat] = useState(defaultLat);
  const [lng, setLng] = useState(defaultLng);
  const [accuracy, setAccuracy] = useState(selectedLocation?.accuracy || null);
  const [address, setAddress] = useState(selectedLocation?.address || 'Near College Gate, Main Road, Ward 14');
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

      const locObj = {
        latitude,
        longitude,
        address: fullAddr,
        city: parsed.city,
        district: parsed.district,
        state: parsed.state,
        pincode: parsed.pincode,
        country: parsed.country,
        accuracy: accuracyVal,
      };

      notifyLocationChange(locObj);
      setGeocoding(false);
    };

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`)
      .then(res => res.json())
      .then(data => {
        const display = data.display_name || `Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`;
        const addrObj = data.address || {};
        const cty = addrObj.city || addrObj.town || addrObj.village || addrObj.suburb || 'Pune';
        const dist = addrObj.county || addrObj.state_district || cty;
        const st = addrObj.state || 'Maharashtra';
        const pin = addrObj.postcode || '411001';
        const cntry = addrObj.country || 'India';
        applyData(display, { road: addrObj.road || '', city: cty, district: dist, state: st, pincode: pin, country: cntry });
      })
      .catch(() => {
        applyData(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`, { city: 'Pune', district: 'Pune', state: 'Maharashtra', pincode: '411001', country: 'India' });
      });
  }, [notifyLocationChange]);

  // Update marker position & trigger reverse geocoding
  const updatePosition = useCallback((newLat, newLng, accuracyVal = null) => {
    setLat(newLat);
    setLng(newLng);
    if (accuracyVal !== null) setAccuracy(accuracyVal);
    reverseGeocode(newLat, newLng, accuracyVal);
  }, [reverseGeocode]);

  // Method D: Draggable marker event handler
  const eventHandlers = useMemo(() => ({
    dragend(e) {
      const marker = e.target;
      if (marker != null) {
        const latLng = marker.getLatLng();
        updatePosition(latLng.lat, latLng.lng, null);
      }
    },
  }), [updatePosition]);

  // Method C: Map click event handler
  const handleMapClick = (clickLat, clickLng) => {
    updatePosition(clickLat, clickLng, null);
  };

  // Method A: Current GPS Location Handler
  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setGpsError('Geolocation is not supported by your device/browser.');
      return;
    }

    setLoadingGps(true);
    setGpsError('');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLoadingGps(false);
        const { latitude, longitude, accuracy: acc } = pos.coords;
        const roundAcc = Math.round(acc);
        updatePosition(latitude, longitude, roundAcc);
      },
      (err) => {
        setLoadingGps(false);
        console.warn('[Geolocation] Error code:', err.code, err.message);
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setGpsError('Location permission was denied. You can search or select the issue location manually on the map.');
            break;
          case err.POSITION_UNAVAILABLE:
            setGpsError('Your device location is currently unavailable.');
            break;
          case err.TIMEOUT:
            setGpsError('Location detection timed out. Please try again or search manually.');
            break;
          default:
            setGpsError('Unable to detect GPS position. Please select location on the map.');
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 0,
      }
    );
  };

  // Method B: Search Box Handler across ALL OF INDIA
  const handleSearchInputChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);

    if (val.trim().length < 2) {
      setPredictions([]);
      setShowPredictions(false);
      return;
    }

    setSearching(true);
    setShowPredictions(true);

    fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=in&q=${encodeURIComponent(val)}&limit=6`)
      .then(res => res.json())
      .then(data => {
        setSearching(false);
        if (Array.isArray(data)) {
          setPredictions(data.map(item => ({
            description: item.display_name,
            lat: parseFloat(item.lat),
            lng: parseFloat(item.lon),
          })));
        }
      })
      .catch(() => setSearching(false));
  };

  const handleSelectPrediction = (pred) => {
    setShowPredictions(false);
    setSearchQuery(pred.description);
    updatePosition(pred.lat, pred.lng, null);
  };

  // Confirm Location Handler
  const handleConfirmClick = () => {
    const locObj = {
      latitude: lat,
      longitude: lng,
      address,
      city,
      district,
      state: stateName,
      pincode,
      country,
      accuracy,
    };
    notifyLocationChange(locObj);
    if (onConfirm) onConfirm(locObj);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Top Search Controls & GPS Button */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

        {/* Method B: Search input across India */}
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={16} style={{ position: 'absolute', left: '14px', color: 'var(--text-muted)', pointerEvents: 'none', zIndex: 2 }} />
            <input
              type="text"
              className="form-input-dark"
              style={{ paddingLeft: '2.6rem', paddingRight: '2.5rem', width: '100%', height: '44px', fontSize: '0.88rem', boxSizing: 'border-box' }}
              placeholder="Search address, landmark, road, city or PIN code..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              onFocus={() => searchQuery.trim().length >= 2 && setShowPredictions(true)}
            />
            {searching && (
              <div style={{ position: 'absolute', right: '14px', width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#34d399', animation: 'spin 0.8s linear infinite' }} />
            )}
          </div>

          {/* Autocomplete Predictions Dropdown */}
          {showPredictions && predictions.length > 0 && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              marginTop: '4px',
              background: '#121722',
              border: '1px solid rgba(16,185,129,0.3)',
              borderRadius: 'var(--radius-md)',
              maxHeight: '220px',
              overflowY: 'auto',
              zIndex: 9999,
              boxShadow: '0 12px 36px rgba(0,0,0,0.8)',
            }}>
              {predictions.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectPrediction(p)}
                  style={{
                    padding: '0.65rem 0.9rem',
                    fontSize: '0.82rem',
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

        {/* Method A: GPS Location Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={handleUseCurrentLocation}
            className="btn-glass"
            disabled={loadingGps}
            style={{ fontSize: '0.85rem', padding: '0.55rem 1.1rem', borderColor: 'rgba(16,185,129,0.4)', color: '#34d399', fontWeight: 700 }}
          >
            {loadingGps ? (
              <>
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#34d399', animation: 'spin 0.8s linear infinite' }} />
                Detecting your current location...
              </>
            ) : (
              <>
                <Navigation size={14} color="#34d399" /> Use Current GPS Location
              </>
            )}
          </button>

          {accuracy !== null && (
            <div style={{ fontSize: '0.75rem', color: accuracy <= 50 ? '#34d399' : '#f59e0b', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Compass size={13} /> GPS Accuracy: ±{accuracy} meters
            </div>
          )}
        </div>

        {/* GPS Error Alert */}
        {gpsError && (
          <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '0.6rem 0.9rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <AlertCircle size={15} style={{ flexShrink: 0 }} /> {gpsError}
          </div>
        )}

        {/* Low Accuracy Warning */}
        {accuracy !== null && accuracy > 50 && (
          <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', color: '#fbbf24', padding: '0.55rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <AlertCircle size={14} style={{ flexShrink: 0 }} /> GPS accuracy is low. You can drag the pin to pinpoint the exact issue location on the map.
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
          <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(18,23,34,0.9)', border: '1px solid rgba(16,185,129,0.3)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.4rem', zIndex: 1000 }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#34d399', animation: 'spin 0.8s linear infinite' }} />
            Fetching address...
          </div>
        )}
      </div>

      {/* Selected Location Information Card */}
      <div className="natural-glass-card" style={{ padding: '1.25rem', border: confirmed ? '1px solid rgba(16,185,129,0.5)' : '1px solid rgba(255,255,255,0.1)', background: '#121722' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <MapPin size={16} color="#34d399" /> Selected Issue Location
          </div>
          {confirmed && (
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#34d399', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', padding: '0.2rem 0.6rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <CheckCircle2 size={12} /> Location Confirmed
            </span>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', fontSize: '0.82rem', marginBottom: '1.1rem' }}>
          <div style={{ gridColumn: '1 / -1', background: 'rgba(255,255,255,0.03)', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: 700 }}>Formatted Address</div>
            <div style={{ color: '#ffffff', fontWeight: 700, lineHeight: 1.4 }}>{address}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>City / Locality</div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{city}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>District</div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{district}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>State</div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{stateName}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>PIN Code</div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{pincode}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>Latitude</div>
            <div style={{ color: '#34d399', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{lat.toFixed(6)}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.15rem' }}>Longitude</div>
            <div style={{ color: '#34d399', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{lng.toFixed(6)}</div>
          </div>
        </div>

        {/* Explicit Confirm Location Action Button */}
        <button
          type="button"
          onClick={handleConfirmClick}
          className="btn-sage"
          style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', fontSize: '0.92rem', fontWeight: 700 }}
        >
          <CheckCircle2 size={16} /> Confirm Issue Location
        </button>
      </div>

    </div>
  );
}
