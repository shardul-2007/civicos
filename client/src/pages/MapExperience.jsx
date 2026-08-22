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

const fallbackMapComplaints = [
  {
    _id: '65f8a0000000000000000101',
    trackingCode: 'CIV-138987-644E',
    title: 'Water Leakage & Supply Pressure Burst',
    description: 'Major water pipeline leak near Ward 14 bus stop causing street flooding.',
    category: 'Water Leakage',
    severity: 'CRITICAL',
    priorityScore: 88,
    status: 'IN_PROGRESS',
    ward: 14,
    address: 'Near College Gate, Main Road, Ward 14',
    citizenName: 'Amitav Ghosh',
    departmentName: 'Water Supply & Sanitation',
    location: { coordinates: [73.87583, 18.53705] }
  },
  {
    _id: '65f8a0000000000000000102',
    trackingCode: 'CIV-284791-889B',
    title: 'Asphalt Pothole & Road Deterioration',
    description: 'Deep pothole causing traffic slowdown near Sector 4 main junction.',
    category: 'Road Damage',
    severity: 'HIGH',
    priorityScore: 74,
    status: 'ASSIGNED',
    ward: 14,
    address: 'Sector 4 Main Corridor, Ward 14',
    citizenName: 'Priya Sharma',
    departmentName: 'Roads & Municipal Infrastructure',
    location: { coordinates: [73.8667, 18.5304] }
  },
  {
    _id: '65f8a0000000000000000103',
    trackingCode: 'CIV-993812-441A',
    title: 'Streetlight Substation Transformer Outage',
    description: 'Entire street dark between Block B and Block C due to luminaire failure.',
    category: 'Streetlight',
    severity: 'MEDIUM',
    priorityScore: 56,
    status: 'RESOLVED',
    ward: 7,
    address: 'Block B Main Road, Ward 7',
    citizenName: 'Shardul Parihar',
    departmentName: 'Electrical Services',
    location: { coordinates: [73.8567, 18.5204] }
  },
  {
    _id: '65f8a0000000000000000104',
    trackingCode: 'CIV-551920-192C',
    title: 'Open Drain Overflow & Stormwater Hazard',
    description: 'Clogged stormwater drain spilling onto pedestrian footpath.',
    category: 'Drainage',
    severity: 'HIGH',
    priorityScore: 79,
    status: 'ACCEPTED',
    ward: 12,
    address: 'Market Yard Crossing, Ward 12',
    citizenName: 'Karan Patel',
    departmentName: 'Public Health & Sanitation',
    location: { coordinates: [73.8400, 18.5100] }
  },
  {
    _id: '65f8a0000000000000000105',
    trackingCode: 'CIV-883019-332D',
    title: 'Commercial Refuse Accumulation',
    description: 'Uncollected solid waste piling up near residential colony gate.',
    category: 'Garbage',
    severity: 'MEDIUM',
    priorityScore: 62,
    status: 'SUBMITTED',
    ward: 3,
    address: 'Green Park Extension, Ward 3',
    citizenName: 'Ananya Roy',
    departmentName: 'Solid Waste Management',
    location: { coordinates: [73.8800, 18.5450] }
  }
];

const fallbackMapHotspots = [
  { id: 'h1', title: 'Ward 14 Infrastructure Risk Hub', centroid: [73.87583, 18.53705], complaintCount: 14 },
  { id: 'h2', title: 'Ward 12 Drainage Flood Cluster', centroid: [73.8400, 18.5100], complaintCount: 9 }
];

export default function MapExperience() {
  const [complaints, setComplaints] = useState(fallbackMapComplaints);
  const [hotspots, setHotspots] = useState(fallbackMapHotspots);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showHotspots, setShowHotspots] = useState(true);
  const [loading, setLoading] = useState(false);

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

      if (cRes.data?.success && cRes.data.data.length > 0) {
        setComplaints(cRes.data.data);
      } else {
        setComplaints(fallbackMapComplaints);
      }

      if (hRes.data?.success && hRes.data.data.length > 0) {
        setHotspots(hRes.data.data);
      } else {
        setHotspots(fallbackMapHotspots);
      }
    } catch (err) {
      console.warn('[MapExperience] Using fallback map dataset:', err.message);
      setComplaints(fallbackMapComplaints);
      setHotspots(fallbackMapHotspots);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMapData();
  }, [categoryFilter, severityFilter, wardFilter]);

  const filteredComplaints = complaints.filter((c) => {
    if (categoryFilter && c.category !== categoryFilter) return false;
    if (severityFilter && c.severity !== severityFilter) return false;
    if (wardFilter && c.ward !== parseInt(wardFilter)) return false;
    return true;
  });

  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 64px)', width: '100%', overflow: 'hidden', background: '#0a0d14' }}>
      
      {/* Top Map Filter Controls Bar */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          right: '1rem',
          zIndex: 800,
          background: 'rgba(18, 23, 34, 0.95)',
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
            {filteredComplaints.length} Live Incidents
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
      <MapContainer center={[18.5304, 73.8667]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Hotspot Radii Circles (500m) */}
        {showHotspots &&
          hotspots.map((h, i) => {
            if (!h?.centroid || h.centroid.length < 2 || isNaN(h.centroid[0]) || isNaN(h.centroid[1])) return null;
            return (
              <Circle
                key={i}
                center={[h.centroid[1], h.centroid[0]]}
                radius={500}
                pathOptions={{ color: '#ef4444', fillColor: '#ef4444', fillOpacity: 0.25 }}
              />
            );
          })}

        {/* Complaint Glowing Pins */}
        {filteredComplaints.map((c) => {
          const coords = c.location?.coordinates;
          if (!coords || coords.length < 2 || isNaN(coords[0]) || isNaN(coords[1])) return null;
          const lat = typeof coords[1] === 'number' ? coords[1] : 18.5304;
          const lng = typeof coords[0] === 'number' ? coords[0] : 73.8667;

          return (
            <Marker
              key={c._id}
              position={[lat, lng]}
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
          );
        })}
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
