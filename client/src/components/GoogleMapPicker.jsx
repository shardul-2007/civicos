import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapPin, Navigation, Search, AlertCircle, CheckCircle2, RefreshCw, Compass, Shield } from 'lucide-react';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

// Parse reverse geocoding address components into structured fields
function parseAddressComponents(components) {
  let houseBuilding = '';
  let road = '';
  let sublocality = '';
  let locality = '';
  let district = '';
  let state = '';
  let pincode = '';
  let country = '';

  if (!Array.isArray(components)) {
    return { houseBuilding, road, sublocality, locality, district, state, pincode, country };
  }

  for (const comp of components) {
    const types = comp.types || [];
    if (types.includes('street_number') || types.includes('premise') || types.includes('building')) {
      houseBuilding = comp.long_name;
    }
    if (types.includes('route')) {
      road = comp.long_name;
    }
    if (types.includes('sublocality_level_1') || types.includes('sublocality') || types.includes('neighborhood')) {
      sublocality = comp.long_name;
    }
    if (types.includes('locality') || types.includes('administrative_area_level_3')) {
      locality = comp.long_name;
    }
    if (types.includes('administrative_area_level_2')) {
      district = comp.long_name;
    }
    if (types.includes('administrative_area_level_1')) {
      state = comp.long_name;
    }
    if (types.includes('postal_code')) {
      pincode = comp.long_name;
    }
    if (types.includes('country')) {
      country = comp.long_name;
    }
  }

  const city = locality || sublocality || district || 'Pune';
  return { houseBuilding, road, sublocality, locality, city, district: district || city, state, pincode, country: country || 'India' };
}

export default function GoogleMapPicker({
  selectedLocation,
  onLocationSelect,
  onConfirm,
  confirmed = false
}) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerInstanceRef = useRef(null);
  const geocoderRef = useRef(null);
  const autocompleteServiceRef = useRef(null);

  // Initial coordinates default to India (Pune center if unset)
  const defaultLat = selectedLocation?.latitude || 18.5204;
  const defaultLng = selectedLocation?.longitude || 73.8567;

  const [lat, setLat] = useState(defaultLat);
  const [lng, setLng] = useState(defaultLng);
  const [accuracy, setAccuracy] = useState(selectedLocation?.accuracy || null);
  const [address, setAddress] = useState(selectedLocation?.address || 'Selected Issue Location, Ward 14');
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
  const [mapsLoaded, setMapsLoaded] = useState(false);
  const [apiError, setApiError] = useState('');

  // Update parent location state
  const notifyLocationChange = useCallback((newLoc) => {
    if (onLocationSelect) {
      onLocationSelect(newLoc);
    }
  }, [onLocationSelect]);

  // Reverse Geocoding helper using Google JS Geocoder or REST API fallback
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

    if (window.google && window.google.maps && geocoderRef.current) {
      geocoderRef.current.geocode(
        { location: { lat: latitude, lng: longitude } },
        (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const res = results[0];
            const parsed = parseAddressComponents(res.address_components);
            applyData(res.formatted_address, parsed);
          } else {
            console.warn('[ReverseGeocode] Geocoder status:', status);
            const fallbackAddr = `Location (${latitude.toFixed(5)}, ${longitude.toFixed(5)})`;
            applyData(fallbackAddr, { city: 'Pune', district: 'Pune', state: 'Maharashtra', pincode: '411001', country: 'India' });
          }
        }
      );
    } else {
      // Fallback via OpenStreetMap Nominatim / Geocoding API REST if Google script is loading or restricted
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`)
        ? fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`)
            .then(res => res.json())
            .then(data => {
              const display = data.display_name || `Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`;
              const addrObj = data.address || {};
              const cty = addrObj.city || addrObj.town || addrObj.village || addrObj.suburb || 'Pune';
              const dist = addrObj.county || addrObj.state_district || cty;
              const st = addrObj.state || 'Maharashtra';
              const pin = addrObj.postcode || '411001';
              const cntry = addrObj.country || 'India';
              applyData(display, { city: cty, district: dist, state: st, pincode: pin, country: cntry });
            })
            .catch(() => {
              applyData(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`, { city: 'Pune', district: 'Pune', state: 'Maharashtra', pincode: '411001', country: 'India' });
            })
        : applyData(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`, { city: 'Pune', district: 'Pune', state: 'Maharashtra', pincode: '411001', country: 'India' });
    }
  }, [notifyLocationChange]);

  // Move marker and pan map
  const updateMarkerPosition = useCallback((newLat, newLng, accuracyVal = null, zoomLevel = 16) => {
    setLat(newLat);
    setLng(newLng);
    if (accuracyVal !== null) setAccuracy(accuracyVal);

    if (mapInstanceRef.current) {
      mapInstanceRef.current.panTo({ lat: newLat, lng: newLng });
      if (zoomLevel) mapInstanceRef.current.setZoom(zoomLevel);
    }

    if (markerInstanceRef.current) {
      markerInstanceRef.current.setPosition({ lat: newLat, lng: newLng });
    }

    reverseGeocode(newLat, newLng, accuracyVal);
  }, [reverseGeocode]);

  // Load Google Maps Script
  useEffect(() => {
    let isMounted = true;

    const initGoogleMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      try {
        const centerPos = { lat: defaultLat, lng: defaultLng };

        // Create Map instance
        const map = new window.google.maps.Map(mapRef.current, {
          center: centerPos,
          zoom: 15,
          mapTypeId: 'roadmap',
          zoomControl: true,
          streetViewControl: false,
          fullscreenControl: true,
          mapTypeControl: false,
          styles: [
            { elementType: 'geometry', stylers: [{ color: '#1d2c4d' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#8ec3b9' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#1a3646' }] },
            { featureType: 'administrative.country', elementType: 'geometry.stroke', stylers: [{ color: '#4b687a' }] },
            { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#6f9ba5' }] },
            { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#304a7d' }] },
            { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#98a5be' }] },
            { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#2f3948' }] },
            { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0e1626' }] },
            { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#4e6d70' }] },
          ],
        });

        mapInstanceRef.current = map;
        geocoderRef.current = new window.google.maps.Geocoder();

        if (window.google.maps.places) {
          autocompleteServiceRef.current = new window.google.maps.places.AutocompleteService();
        }

        // Draggable Issue Location Marker
        const marker = new window.google.maps.Marker({
          position: centerPos,
          map: map,
          draggable: true,
          title: 'Drag to exact issue location',
          animation: window.google.maps.Animation.DROP,
        });

        markerInstanceRef.current = marker;

        // Method D — Drag marker listener
        marker.addListener('dragend', (e) => {
          const newLat = e.latLng.lat();
          const newLng = e.latLng.lng();
          updateMarkerPosition(newLat, newLng, null, null);
        });

        // Method C — Map click listener
        map.addListener('click', (e) => {
          const newLat = e.latLng.lat();
          const newLng = e.latLng.lng();
          updateMarkerPosition(newLat, newLng, null, null);
        });

        if (isMounted) {
          setMapsLoaded(true);
        }
      } catch (err) {
        console.error('[GoogleMapPicker] Initialization error:', err);
        if (isMounted) setApiError('Google Maps initialized in fallback mode.');
      }
    };

    if (window.google && window.google.maps) {
      initGoogleMap();
    } else {
      const scriptId = 'google-maps-js-sdk';
      let existingScript = document.getElementById(scriptId);

      if (!existingScript) {
        existingScript = document.createElement('script');
        existingScript.id = scriptId;
        const apiKeyParam = API_KEY ? `key=${API_KEY}&` : '';
        existingScript.src = `https://maps.googleapis.com/maps/api/js?${apiKeyParam}libraries=places,geocoding`;
        existingScript.async = true;
        existingScript.defer = true;

        existingScript.onload = () => {
          if (isMounted) initGoogleMap();
        };

        existingScript.onerror = () => {
          if (isMounted) {
            setApiError('Unable to load Google Maps SDK. Fallback coordinate system active.');
          }
        };

        document.head.appendChild(existingScript);
      } else {
        existingScript.addEventListener('load', initGoogleMap);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [defaultLat, defaultLng, updateMarkerPosition]);

  // Method A — Current GPS Location Button Handler
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
        updateMarkerPosition(latitude, longitude, roundAcc, 17);
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

  // Method B — Google Places Autocomplete / Geocoding Search across all of India
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

    if (autocompleteServiceRef.current && window.google && window.google.maps) {
      autocompleteServiceRef.current.getPlacePredictions(
        {
          input: val,
          componentRestrictions: { country: 'in' }, // India-wide search restriction
        },
        (results, status) => {
          setSearching(false);
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
            setPredictions(results);
          } else {
            setPredictions([]);
          }
        }
      );
    } else {
      // Fallback India-wide search via Nominatim Geocoding API
      fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=in&q=${encodeURIComponent(val)}&limit=5`)
        .then(res => res.json())
        .then(data => {
          setSearching(false);
          if (Array.isArray(data)) {
            setPredictions(data.map(item => ({
              description: item.display_name,
              place_id: item.place_id,
              lat: parseFloat(item.lat),
              lng: parseFloat(item.lon),
              isFallback: true
            })));
          }
        })
        .catch(() => setSearching(false));
    }
  };

  // Handle selecting a prediction result
  const handleSelectPrediction = (pred) => {
    setShowPredictions(false);
    setSearchQuery(pred.description);

    if (pred.isFallback) {
      updateMarkerPosition(pred.lat, pred.lng, null, 16);
      return;
    }

    if (geocoderRef.current) {
      geocoderRef.current.geocode({ placeId: pred.place_id }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const loc = results[0].geometry.location;
          updateMarkerPosition(loc.lat(), loc.lng(), null, 16);
        }
      });
    }
  };

  // Explicit Confirm Location Handler
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

      {/* Top Controls: Search Bar & GPS Button */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

        {/* Method B: Search input across India */}
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={16} style={{ position: 'absolute', left: '14px', color: 'var(--text-muted)', pointerEvents: 'none', zIndex: 2 }} />
            <input
              type="text"
              className="form-input-dark"
              style={{ paddingLeft: '2.6rem', paddingRight: '2.5rem', width: '100%', height: '44px', fontSize: '0.88rem', boxSizing: 'border-box' }}
              placeholder="Search address, road, landmark, city or PIN code..."
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
              {predictions.map((p) => (
                <div
                  key={p.place_id || p.description}
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

        {/* Method A: GPS Location Button & Warnings */}
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
                <Navigation size={14} color="#34d399" /> Use My Current Location
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

        {/* Low GPS Accuracy Hint */}
        {accuracy !== null && accuracy > 50 && (
          <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', color: '#fbbf24', padding: '0.55rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <AlertCircle size={14} style={{ flexShrink: 0 }} /> GPS accuracy is low. You can drag the red marker to pinpoint the exact issue location on the map.
          </div>
        )}
      </div>

      {/* Main Google Maps Canvas Container */}
      <div style={{ height: '320px', width: '100%', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 10px 30px rgba(0,0,0,0.6)', position: 'relative' }}>
        <div ref={mapRef} style={{ height: '100%', width: '100%' }} />

        {/* Loading / Fallback Banner Overlay */}
        {geocoding && (
          <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(18,23,34,0.9)', border: '1px solid rgba(16,185,129,0.3)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.4rem', zIndex: 10 }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#34d399', animation: 'spin 0.8s linear infinite' }} />
            Finding address...
          </div>
        )}
      </div>

      {/* Location Details Card */}
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
