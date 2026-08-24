import React, { useState, useEffect } from 'react';
import {
  Layers, Cpu, Server, Activity, CheckCircle2, AlertTriangle, Radio,
  ArrowRight, ShieldCheck, RefreshCw, Database, Terminal, FileCode2, Zap, Send, Code, Globe, Search
} from 'lucide-react';
import { interoperabilityAPI, complaintAPI } from '../services/api';
import { useLanguage } from '../context/LanguageContext';

const getGatewayDetailsForCategory = (category) => {
  if (category === 'Road Damage' || category === 'Pothole') {
    return { code: 'ROAD-PW-API', name: 'Roads & Municipal Infrastructure Portal', prefix: 'ROAD-PW' };
  } else if (category === 'Water Leakage' || category === 'Drainage' || category === 'Sewage') {
    return { code: 'WATER-WSS-API', name: 'Water Supply & Sewerage Board Gateway', prefix: 'WATER-WSS' };
  } else if (category === 'Garbage') {
    return { code: 'WASTE-SWM-API', name: 'Solid Waste Management & Sanitation System', prefix: 'WASTE-SWM' };
  } else if (category === 'Streetlight') {
    return { code: 'LIGHT-ELEC-API', name: 'Street Lighting & Power Grid Control System', prefix: 'LIGHT-ELEC' };
  } else if (category === 'Public Safety' || category === 'Tree/Parks') {
    return { code: 'HEALTH-PHE-API', name: 'Public Health & Emergency Hazard Response', prefix: 'HEALTH-PHE' };
  }
  return { code: 'MUNI-CP-API', name: 'Unified Central Municipal Grievance Portal', prefix: 'MUNI-CP' };
};

export default function InteroperabilityCenter() {
  const { t } = useLanguage();
  const [services, setServices] = useState([]);
  const [logs, setLogs] = useState([]);
  const [complaintsList, setComplaintsList] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [selectedTrackingCode, setSelectedTrackingCode] = useState('');
  const [searchCode, setSearchCode] = useState('');

  const [loading, setLoading] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [simMessage, setSimMessage] = useState('Ready to receive department callback');
  const [simError, setSimError] = useState('');

  const loadAllData = async () => {
    setLoading(true);
    try {
      // 1. Fetch connected gateways
      const sRes = await interoperabilityAPI.getServices();
      if (sRes.data?.success && sRes.data.data) {
        setServices(sRes.data.data);
      }

      // 2. Fetch gateway audit logs
      const lRes = await interoperabilityAPI.getLogs();
      if (lRes.data?.success && lRes.data.data) {
        setLogs(lRes.data.data);
      }

      // 3. Fetch real complaints from MongoDB
      const cRes = await complaintAPI.list({ limit: 20 });
      if (cRes.data?.success && Array.isArray(cRes.data.data) && cRes.data.data.length > 0) {
        const list = cRes.data.data;
        setComplaintsList(list);
        
        // Select first complaint if not selected yet
        if (!selectedComplaint) {
          setSelectedComplaint(list[0]);
          setSelectedTrackingCode(list[0].trackingCode);
        } else {
          // Refresh current selection from database
          const updated = list.find(item => item.trackingCode === selectedTrackingCode) || list[0];
          setSelectedComplaint(updated);
          setSelectedTrackingCode(updated.trackingCode);
        }
      }
    } catch (err) {
      console.warn('[InteroperabilityCenter] Error loading data:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const handleSelectComplaint = (code) => {
    const found = complaintsList.find(c => c.trackingCode === code);
    if (found) {
      setSelectedComplaint(found);
      setSelectedTrackingCode(found.trackingCode);
      setSimMessage('Ready to receive department callback');
      setSimError('');
    }
  };

  const handleManualSearch = (e) => {
    e.preventDefault();
    if (!searchCode.trim()) return;
    const clean = searchCode.trim().toUpperCase();
    const found = complaintsList.find(c => c.trackingCode.toUpperCase() === clean);
    if (found) {
      setSelectedComplaint(found);
      setSelectedTrackingCode(found.trackingCode);
      setSimMessage('Ready to receive department callback');
      setSimError('');
    } else {
      setSimError(`⚠️ No issue found matching code "${clean}" in active list.`);
    }
  };

  const handleSimulateStatus = async (newStatus) => {
    if (!selectedComplaint) return;
    setSimulating(true);
    setSimError('');
    setSimMessage(`Executing department API callback for ${selectedTrackingCode}...`);

    try {
      const gatewayInfo = getGatewayDetailsForCategory(selectedComplaint.category);
      const res = await interoperabilityAPI.simulateDeptStatus({
        trackingCode: selectedTrackingCode,
        status: newStatus,
        note: `${gatewayInfo.name} (${gatewayInfo.code}) Callback: Status updated to ${newStatus}.`,
      });

      if (res.data?.success && res.data.data?.complaint) {
        const updatedDoc = res.data.data.complaint;
        setSelectedComplaint(updatedDoc);
        setSimMessage(`Department callback received: ${selectedTrackingCode} → ${newStatus}`);
        
        // Refresh audit logs from backend
        const lRes = await interoperabilityAPI.getLogs();
        if (lRes.data?.success && lRes.data.data) {
          setLogs(lRes.data.data);
        }
      } else {
        throw new Error(res.data?.message || 'Callback failed');
      }
    } catch (err) {
      console.error('[Simulate Callback Error]:', err);
      setSimError(err.response?.data?.message || err.message || 'Department callback simulation failed.');
    } finally {
      setSimulating(false);
    }
  };

  // Derive dynamic gateway and CIV-ODF schema from selected real complaint
  const activeCategory = selectedComplaint?.category || 'Road Damage';
  const activeGateway = getGatewayDetailsForCategory(activeCategory);
  const activeExtId = selectedComplaint?.externalDepartmentId || `${activeGateway.prefix}-${Math.floor(1000 + Math.random() * 9000)}`;

  const activeOdfSchema = selectedComplaint ? {
    schemaVersion: 'CIV-ODF v1.0',
    requestId: selectedComplaint.trackingCode,
    externalDepartmentId: activeExtId,
    secondaryDepartmentName: selectedComplaint.secondaryDepartmentName || null,
    secondaryExternalId: selectedComplaint.secondaryExternalId || null,
    sourcePlatform: 'CivicOS Interoperability Engine v2.5',
    category: selectedComplaint.category,
    subCategory: selectedComplaint.subCategory || 'General',
    severity: selectedComplaint.severity || 'MEDIUM',
    priorityScore: selectedComplaint.priorityScore || 65,
    primaryDepartment: selectedComplaint.departmentName || activeGateway.name,
    status: selectedComplaint.status || 'SUBMITTED',
    interoperabilityStatus: selectedComplaint.interoperabilityStatus || 'ACCEPTED_BY_DEPT_API',
    location: {
      latitude: selectedComplaint.latitude || 18.5204,
      longitude: selectedComplaint.longitude || 73.8567,
      address: selectedComplaint.address || 'Municipal Location',
      city: selectedComplaint.city || 'Pune',
      state: selectedComplaint.state || 'Maharashtra',
    },
    citizenInfo: {
      name: selectedComplaint.citizenName || 'Citizen User',
      email: selectedComplaint.citizenEmail || 'citizen@civicos.gov',
    },
    dispatchTimestamp: selectedComplaint.createdAt || new Date().toISOString(),
  } : null;

  return (
    <div style={{ background: 'var(--bg-app)', minHeight: '100vh', padding: '5.5rem 1rem 3rem', color: 'var(--text-primary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* SIH Problem Statement Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(59,130,246,0.1) 100%)',
          border: '1px solid rgba(16,185,129,0.3)',
          borderRadius: '1.25rem',
          padding: '1.75rem',
          marginBottom: '2rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
            <span className="badge badge-sage" style={{ padding: '0.3rem 0.75rem', fontSize: '0.78rem' }}>
              <Layers size={13} /> SIH 2026 ARCHITECTURAL LAYER
            </span>
            <span style={{ fontSize: '0.78rem', color: '#60a5fa', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Government Platform Interoperability Engine v2.5
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 900, color: '#ffffff', marginBottom: '0.6rem' }}>
            CivicOS Government Services Interoperability Center
          </h1>

          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '980px', marginBottom: '1.2rem' }}>
            Addressing the SIH Target Problem: <strong style={{ color: '#34d399' }}>"System integration and interoperability among government digital platforms, resulting in fragmented service delivery."</strong> CivicOS acts as the unified integration middleware bridging disparate departmental silos through a Common Data Standard (CIV-ODF v1.0).
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Connected Services</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34d399' }}>6 Gateways Active</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>API Gateway Health</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#60a5fa' }}>99.8% Uptime</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Data Standard</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f59e0b' }}>CIV-ODF v1.0 JSON</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Avg Sync Latency</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#2dd4bf' }}>14 ms</div>
            </div>
          </div>
        </div>

        {/* ── Interoperability Architecture Visualization Diagram ── */}
        <div className="natural-glass-card" style={{ padding: '1.75rem', marginBottom: '2rem', background: '#121722' }}>
          <div style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
            System Architecture
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
            Unified Civic Data Interoperability Flow
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', alignItems: 'center' }}>

            {/* Step 1 */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '1.1rem', borderRadius: '0.85rem', textAlign: 'center' }}>
              <div style={{ background: 'rgba(16,185,129,0.15)', width: '38px', height: '38px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', marginBottom: '0.5rem' }}>
                <Globe size={18} />
              </div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.9rem' }}>1. Citizen Request</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.2rem' }}>Mobile App / Web GPS Report</div>
            </div>

            <div className="desktop-only" style={{ textAlign: 'center', color: '#34d399' }}><ArrowRight size={22} /></div>

            {/* Step 2 */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(16,185,129,0.3)', padding: '1.1rem', borderRadius: '0.85rem', textAlign: 'center' }}>
              <div style={{ background: 'var(--grad-sage)', width: '38px', height: '38px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', marginBottom: '0.5rem' }}>
                <Cpu size={18} />
              </div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.9rem' }}>2. CivicOS Engine</div>
              <div style={{ fontSize: '0.75rem', color: '#34d399', marginTop: '0.2rem' }}>AI Triage & Geo-clustering</div>
            </div>

            <div className="desktop-only" style={{ textAlign: 'center', color: '#34d399' }}><ArrowRight size={22} /></div>

            {/* Step 3 */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(59,130,246,0.3)', padding: '1.1rem', borderRadius: '0.85rem', textAlign: 'center' }}>
              <div style={{ background: 'rgba(59,130,246,0.15)', width: '38px', height: '38px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', marginBottom: '0.5rem' }}>
                <Code size={18} />
              </div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.9rem' }}>3. API Adapter Layer</div>
              <div style={{ fontSize: '0.75rem', color: '#60a5fa', marginTop: '0.2rem' }}>CIV-ODF v1.0 Common Standard</div>
            </div>

            <div className="desktop-only" style={{ textAlign: 'center', color: '#34d399' }}><ArrowRight size={22} /></div>

            {/* Step 4 */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(245,158,11,0.3)', padding: '1.1rem', borderRadius: '0.85rem', textAlign: 'center' }}>
              <div style={{ background: 'rgba(245,158,11,0.15)', width: '38px', height: '38px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', marginBottom: '0.5rem' }}>
                <Server size={18} />
              </div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.9rem' }}>4. Govt Department API</div>
              <div style={{ fontSize: '0.75rem', color: '#fbbf24', marginTop: '0.2rem' }}>Linked Ext ID ({activeGateway.prefix})</div>
            </div>

          </div>
        </div>

        {/* ── Real Complaint Selection & Case Inspector Bar ── */}
        <div className="natural-glass-card" style={{ padding: '1.25rem 1.5rem', marginBottom: '2rem', background: '#121722', border: '1px solid rgba(16,185,129,0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <label style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Select Active Database Complaint to Inspect & Simulate:
              </label>
              <select
                className="form-select-dark"
                value={selectedTrackingCode}
                onChange={(e) => handleSelectComplaint(e.target.value)}
                style={{ width: '100%', height: '44px', fontWeight: 700, fontSize: '0.9rem' }}
              >
                {complaintsList.map((c) => (
                  <option key={c._id || c.trackingCode} value={c.trackingCode}>
                    {c.trackingCode} — [{c.category}] {c.title} ({c.status})
                  </option>
                ))}
              </select>
            </div>

            <form onSubmit={handleManualSearch} style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
              <input
                type="text"
                className="form-input-dark"
                placeholder="Or enter CIV-2026-XXXXXX"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                style={{ height: '44px', fontSize: '0.85rem', width: '210px' }}
              />
              <button type="submit" className="btn-sage" style={{ padding: '0.5rem 1rem', height: '44px' }}>
                <Search size={15} /> Find
              </button>
            </form>
          </div>
        </div>

        {/* ── Interactive Integration Inspector & Callback Simulator ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          
          {/* Left: JSON Common Data Standard (CIV-ODF v1.0) Payload Inspector */}
          <div className="natural-glass-card" style={{ padding: '1.5rem', background: '#121722' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase' }}>Data Standard Inspector</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>CIV-ODF v1.0 Normalized Payload</h3>
              </div>
              <span className="badge badge-teal"><FileCode2 size={12} /> Live Schema</span>
            </div>

            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.85rem' }}>
              Active Case: <strong style={{ color: '#34d399', fontFamily: 'monospace' }}>{selectedTrackingCode}</strong> | Target Gateway: <strong style={{ color: '#60a5fa', fontFamily: 'monospace' }}>{activeGateway.code}</strong>
            </div>

            <pre style={{
              background: '#0a0d14',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.75rem',
              padding: '1rem',
              fontSize: '0.78rem',
              color: '#34d399',
              fontFamily: 'monospace',
              overflowX: 'auto',
              maxHeight: '270px',
              lineHeight: 1.5,
            }}>
              {JSON.stringify(activeOdfPayload || activeOdfSchema, null, 2)}
            </pre>
          </div>

          {/* Right: SIH Demo Callback Simulator */}
          <div className="natural-glass-card" style={{ padding: '1.5rem', background: '#121722' }}>
            <div style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
              SIH Jury Interactive Demonstration
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
              Department API Callback Simulator
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Simulate <strong style={{ color: '#ffffff' }}>{activeGateway.name}</strong> (`{activeGateway.code}`) updating the status of issue <strong style={{ color: '#34d399' }}>{selectedTrackingCode}</strong>.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.9rem 1rem', borderRadius: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '0.3rem' }}>
                CivicOS Request ID: <strong style={{ color: '#34d399', fontFamily: 'monospace' }}>{selectedTrackingCode}</strong>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '0.3rem' }}>
                Linked Ext Dept ID: <strong style={{ color: '#60a5fa', fontFamily: 'monospace' }}>{activeExtId}</strong>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                Current DB Status: <strong style={{ color: '#f59e0b', fontWeight: 800 }}>{selectedComplaint?.status || 'SUBMITTED'}</strong>
              </div>
            </div>

            {/* Callback Feedback Status */}
            {simError ? (
              <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '0.65rem 0.85rem', borderRadius: '0.5rem', fontSize: '0.82rem', marginBottom: '1rem' }}>
                {simError}
              </div>
            ) : (
              <div style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#60a5fa', padding: '0.65rem 0.85rem', borderRadius: '0.5rem', fontSize: '0.82rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={15} /> {simMessage}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => handleSimulateStatus('IN_PROGRESS')}
                disabled={simulating}
                className="btn-teal"
                style={{ justifyContent: 'center', fontSize: '0.85rem', padding: '0.65rem' }}
              >
                {simulating ? 'Syncing...' : <><Zap size={15} /> Simulate API: In Progress</>}
              </button>
              <button
                type="button"
                onClick={() => handleSimulateStatus('RESOLVED')}
                disabled={simulating}
                className="btn-sage"
                style={{ justifyContent: 'center', fontSize: '0.85rem', padding: '0.65rem' }}
              >
                {simulating ? 'Syncing...' : <><CheckCircle2 size={15} /> Simulate API: Resolved</>}
              </button>
            </div>
          </div>

        </div>

        {/* ── Connected Government Department Services Hub ── */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Department Service Registry
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>Connected Government Gateways</h2>
            </div>
            <button onClick={loadAllData} className="btn-glass" style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}>
              <RefreshCw size={14} /> Refresh Gateways
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.1rem' }}>
            {services.map((s) => (
              <div key={s.id} className="natural-glass-card" style={{ padding: '1.35rem', background: '#121722', borderRadius: '1rem', border: s.code === activeGateway.code ? '1px solid rgba(16,185,129,0.5)' : '1px solid rgba(255,255,255,0.08)' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: s.code === activeGateway.code ? '#34d399' : '#60a5fa', fontFamily: 'monospace' }}>{s.code}</span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginTop: '0.15rem' }}>{s.name}</h3>
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#34d399', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', padding: '0.2rem 0.55rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} /> {s.status}
                  </span>
                </div>

                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.85rem' }}>
                  Primary Department: <strong style={{ color: '#ffffff' }}>{s.department}</strong>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem', background: 'rgba(255,255,255,0.025)', padding: '0.6rem', borderRadius: '0.5rem', marginBottom: '0.85rem', fontSize: '0.78rem' }}>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.68rem' }}>Uptime</div>
                    <div style={{ color: '#34d399', fontWeight: 800 }}>{s.health}</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.68rem' }}>Avg Latency</div>
                    <div style={{ color: '#60a5fa', fontWeight: 800 }}>{s.latencyMs} ms</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.68rem' }}>Success Rate</div>
                    <div style={{ color: '#f59e0b', fontWeight: 800 }}>{s.successRate}</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.72rem', color: '#94a3b8', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', padding: '0.4rem 0.65rem', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{s.label}</span>
                  <span style={{ fontWeight: 700, color: '#60a5fa' }}>{s.requestsToday} reqs/day</span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ── Live API Gateway Audit Transaction Logs ── */}
        <div className="natural-glass-card" style={{ padding: '1.5rem', background: '#121722' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase' }}>Real-time Gateway Audit Stream</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>Interoperability API Transaction Logs</h3>
            </div>
            <span className="badge badge-sage"><Activity size={12} /> Live Gateway Sync</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {logs.map((log) => (
              <div key={log.id} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', padding: '0.85rem 1rem', borderRadius: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#34d399', fontFamily: 'monospace' }}>{log.requestId}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60a5fa', fontFamily: 'monospace' }}>↔ {log.externalId}</span>
                    <span className="badge badge-blue">{log.gatewayCode}</span>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{new Date(log.timestamp).toLocaleTimeString()}</span>
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#ffffff', fontWeight: 600 }}>{log.details}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2dd4bf', background: 'rgba(45,212,191,0.12)', padding: '0.2rem 0.55rem', borderRadius: '999px' }}>
                    {log.latencyMs} ms
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#34d399', background: 'rgba(16,185,129,0.15)', padding: '0.2rem 0.55rem', borderRadius: '999px' }}>
                    {log.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
