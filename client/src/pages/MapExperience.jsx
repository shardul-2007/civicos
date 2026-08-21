import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { MapPin, Filter, Layers, AlertTriangle, Eye, X, RefreshCw, Sparkles, Navigation, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { complaintAPI, analyticsAPI } from '../services/api';
import ComplaintQuickViewDrawer from '../components/ComplaintQuickViewDrawer';

const createCustomMarker = (color) => {
  return L.divIcon({
    className: 'custom-leaflet-pin',
    html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 12px ${color};"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
};

const markersBySeverity = {
  CRITICAL: createCustomMarker('#ef4444'),
  HIGH: createCustomMarker('#f97316'),
  MEDIUM: createCustomMarker('#f59e0b'),
  LOW: createCustomMarker('#10b981'),
};

export default function MapExperience() {
  const [complaints, setComplaints] = useState([]);
  const [hotspots, setHotspots] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showHotspots, setShowHotspots] = useState(true);
  const [loading, setLoading] = useState(true);

  // Filters
  const [categoryFilter, setCategoryFilter] = useState('');
  const [severityFilter, setSeverityFilter] = useState('');
  const [wardFilter, setWardFilter] = useState('');

  const loadMapData = async () => {
    setLoading(true);
    try {
      const [cRes, hRes] = await Promise.all([
        complaintAPI.list({
          category: categoryFilter,
          severity: severityFilter,
          ward: wardFilter,
          limit: 100,
        }),
        analyticsAPI.getHotspots(),
      ]);

      if (cRes.data.success) setComplaints(cRes.data.data);
      if (hRes.data.success) setHotspots(hRes.data.data);
    } catch (err) {
      console.warn('Failed loading map data:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMapData();
  }, [categoryFilter, severityFilter, wardFilter]);

  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 64px)', width: '100%', overflow: 'hidden', background: '#0a0d14' }}>
      
      {/* Top Map Filter Controls Bar */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          right: '1rem',
          zIndex: 200, // --z-overlay
          background: 'rgba(18, 23, 34, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '0.75rem 1.25rem',
          borderRadius: '0.75rem',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '0.95rem', color: '#ffffff' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.15)', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
            <MapPin size={16} />
          </div>
          <span>Geospatial Intelligence Map</span>
          <span className="badge badge-sage" style={{ fontSize: '0.65rem' }}>
            {complaints.length} Live Incidents
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
          <select
            className="form-input-dark"
            style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem', minHeight: '36px' }}
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Road Damage">Road Damage</option>
            <option value="Water Leakage">Water Leakage</option>
            <option value="Drainage">Drainage</option>
            <option value="Garbage">Garbage</option>
            <option value="Streetlight">Streetlight</option>
          </select>

          <select
            className="form-input-dark"
            style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem', minHeight: '36px' }}
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
          >
            <option value="">All Severities</option>
            <option value="CRITICAL">CRITICAL</option>
            <option value="HIGH">HIGH</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="LOW">LOW</option>
          </select>

          <select
            className="form-input-dark"
            style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem', minHeight: '36px' }}
            value={wardFilter}
            onChange={(e) => setWardFilter(e.target.value)}
          >
            <option value="">All Wards</option>
            {Array.from({ length: 20 }, (_, i) => (
              <option key={i + 1} value={i + 1}>Ward {i + 1}</option>
            ))}
          </select>

          <button
            onClick={() => setShowHotspots(!showHotspots)}
            className={showHotspots ? 'btn-sage' : 'btn-glass'}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', minHeight: '36px' }}
          >
            <Layers size={14} /> Hotspots {showHotspots ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={loadMapData}
            className="btn-glass"
            style={{ padding: '0.35rem 0.6rem', fontSize: '0.8rem', minHeight: '36px' }}
            title="Refresh Data"
          >
            <RefreshCw size={14} />
          </button>
        </div>
      </div>

      {/* Main Map Canvas */}
      <MapContainer center={[18.5204, 73.8567]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Hotspot Radii Circles (500m) */}
        {showHotspots &&
          hotspots.map((h, i) => (
            <Circle
              key={i}
              center={[h.centroid[1], h.centroid[0]]}
              radius={500}
              pathOptions={{ color: '#ef4444', fillColor: '#ef4444', fillOpacity: 0.25 }}
            />
          ))}

        {/* Complaint Glowing Pins */}
        {complaints.map((c) => (
          <Marker
            key={c._id}
            position={[c.location.coordinates[1], c.location.coordinates[0]]}
            icon={markersBySeverity[c.severity] || markersBySeverity.MEDIUM}
            eventHandlers={{
              click: () => setSelectedComplaint(c),
            }}
          >
            <Popup>
              <div style={{ fontSize: '0.85rem', color: '#f8fafc', lineHeight: 1.4 }}>
                <div style={{ fontFamily: 'monospace', fontWeight: 800, color: '#34d399' }}>{c.trackingCode}</div>
                <strong style={{ color: '#ffffff' }}>{c.title}</strong><br />
                <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>{c.address} (Ward {c.ward})</span><br />
                <div style={{ marginTop: '0.3rem', display: 'flex', gap: '0.3rem' }}>
                  <span className={`badge ${c.severity === 'CRITICAL' ? 'badge-critical' : 'badge-high'}`}>{c.severity}</span>
                  <span className="badge badge-sage">{c.status}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Quick View Drawer Modal on Map Click */}
      <ComplaintQuickViewDrawer
        complaint={selectedComplaint}
        isOpen={!!selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
        onRefresh={loadMapData}
      />

    </div>
  );
}

