import React, { useState, useEffect } from 'react';
import {
  Layers, Cpu, Server, Activity, CheckCircle2, AlertTriangle, Radio,
  ArrowRight, ShieldCheck, RefreshCw, Database, Terminal, FileCode2, Zap, Send, Code, Globe, Search,
  Check, Clock, ChevronDown, ChevronUp
} from 'lucide-react';
import { interoperabilityAPI, complaintAPI } from '../services/api';
import { useLanguage } from '../context/LanguageContext';

const getGatewayDetailsForCategory = (category) => {
  if (category === 'Road Damage' || category === 'Pothole') {
    return {
      code: 'ROAD-PW-API',
      name: 'Public Works / Road Department',
      department: 'Public Works / Road Department',
      prefix: 'ROAD-PW',
      defaultExtId: 'ROAD-PW-4012'
    };
  } else if (category === 'Water Leakage' || category === 'Drainage' || category === 'Sewage') {
    return {
      code: 'WATER-WSS-API',
      name: 'Water Supply & Sewerage Board',
      department: 'Water Supply & Sewerage',
      prefix: 'WATER-WSS',
      defaultExtId: 'WATER-WSS-8891'
    };
  } else if (category === 'Garbage') {
    return {
      code: 'WASTE-SWM-API',
      name: 'Solid Waste Management & Sanitation',
      department: 'Solid Waste Management',
      prefix: 'WASTE-SWM',
      defaultExtId: 'WASTE-SWM-2180'
    };
  } else if (category === 'Streetlight') {
    return {
      code: 'LIGHT-ELEC-API',
      name: 'Street Lighting & Electrical Grid',
      department: 'Electrical Services',
      prefix: 'LIGHT-ELEC',
      defaultExtId: 'LIGHT-ELEC-7714'
    };
  } else if (category === 'Public Safety' || category === 'Tree/Parks') {
    return {
      code: 'HEALTH-PHE-API',
      name: 'Public Health & Hazard Response',
      department: 'Public Health & Safety',
      prefix: 'HEALTH-PHE',
      defaultExtId: 'HEALTH-PHE-1092'
    };
  }
  return {
    code: 'MUNI-CP-API',
    name: 'Unified Central Municipal Portal',
    department: 'General Municipal Services',
    prefix: 'MUNI-CP',
    defaultExtId: 'MUNI-CP-5510'
  };
};

export default function InteroperabilityCenter() {
  const { t } = useLanguage();
  const [services, setServices] = useState([]);
  const [logs, setLogs] = useState([]);
  const [complaintsList, setComplaintsList] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [selectedTrackingCode, setSelectedTrackingCode] = useState('CIV-138987-644E');
  const [searchCode, setSearchCode] = useState('');

  const [loading, setLoading] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [animStep, setAnimStep] = useState(0); // 0: Idle, 1: Dept Callback, 2: Adapter, 3: CIV-ODF, 4: CivicOS DB
  const [activeCallbackResult, setActiveCallbackResult] = useState(null);
  const [simError, setSimError] = useState('');
  const [showJsonInspector, setShowJsonInspector] = useState(true);

  const loadAllData = async () => {
    setLoading(true);
    try {
      const sRes = await interoperabilityAPI.getServices();
      if (sRes.data?.success && sRes.data.data) {
        setServices(sRes.data.data);
      }

      const lRes = await interoperabilityAPI.getLogs();
      if (lRes.data?.success && Array.isArray(lRes.data.data) && lRes.data.data.length > 0) {
        setLogs(lRes.data.data);
      } else {
        setLogs([
          { id: 'log-1', requestId: 'CIV-2026-809489', externalId: 'ROAD-PW-4012', gatewayCode: 'ROAD-PW-API', timestamp: new Date(Date.now() - 60000 * 2).toISOString(), details: 'CIV-ODF payload dispatched & acknowledged by Public Works Department Gateway.', latencyMs: 142, status: '200 OK' },
          { id: 'log-2', requestId: 'CIV-2026-620245', externalId: 'WATER-WSS-8891', gatewayCode: 'WATER-WSS-API', timestamp: new Date(Date.now() - 60000 * 8).toISOString(), details: 'Cross-department pipe leak callback synced to Water Supply Board API.', latencyMs: 188, status: '200 OK' },
          { id: 'log-3', requestId: 'CIV-2026-406977', externalId: 'WASTE-SWM-2180', gatewayCode: 'WASTE-SWM-API', timestamp: new Date(Date.now() - 60000 * 15).toISOString(), details: 'Solid waste management dispatch request normalized into CIV-ODF v1.0 standard.', latencyMs: 115, status: '200 OK' },
          { id: 'log-4', requestId: 'CIV-2026-174829', externalId: 'LIGHT-ELEC-7714', gatewayCode: 'LIGHT-ELEC-API', timestamp: new Date(Date.now() - 60000 * 24).toISOString(), details: 'Electrical lighting outage status callback synchronized with Central Power Board.', latencyMs: 165, status: '200 OK' },
        ]);
      }

      const cRes = await complaintAPI.list({ limit: 20 });
      if (cRes.data?.success && Array.isArray(cRes.data.data) && cRes.data.data.length > 0) {
        const list = cRes.data.data;
        setComplaintsList(list);
        
        if (!selectedComplaint) {
          setSelectedComplaint(list[0]);
          setSelectedTrackingCode(list[0].trackingCode);
        } else {
          const updated = list.find(item => item.trackingCode === selectedTrackingCode) || list[0];
          setSelectedComplaint(updated);
          setSelectedTrackingCode(updated.trackingCode);
        }
      }

      // Automatically populate initial CIV-ODF payload so inspector is active on load
      const activeCode = selectedTrackingCode || 'CIV-2026-809489';
      setActiveCallbackResult({
        timestamp: new Date().toLocaleTimeString(),
        externalId: 'ROAD-PW-4012',
        status: 'SUBMITTED',
        payload: {
          civOdfVersion: "1.0",
          trackingCode: activeCode,
          externalDepartmentId: "ROAD-PW-4012",
          departmentName: "Public Works Department",
          category: "Road Damage",
          status: "SUBMITTED",
          interoperabilityStatus: "NORMALIZED_AND_SYNCHRONIZED",
          timestamp: new Date().toISOString(),
          normalizedData: {
            address: "Main Road, Ward 14, Pune",
            latitude: 18.5204,
            longitude: 73.8567,
            priorityScore: 80,
            severity: "HIGH"
          }
        }
      });
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
      setAnimStep(0);
      setActiveCallbackResult(null);
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
      setAnimStep(0);
      setActiveCallbackResult(null);
      setSimError('');
    } else {
      setSimError(`⚠️ No issue found matching code "${clean}" in active list.`);
    }
  };

  const handleSimulateStatus = async (newStatus) => {
    if (!selectedComplaint) return;
    setSimulating(true);
    setSimError('');
    setAnimStep(1);

    setTimeout(() => setAnimStep(2), 300);
    setTimeout(() => setAnimStep(3), 600);

    try {
      const res = await interoperabilityAPI.simulateDeptStatus({
        trackingCode: selectedTrackingCode,
        status: newStatus,
        note: `${activeGateway.name} (${activeGateway.code}) Callback: Status updated to ${newStatus}.`,
      });

      setTimeout(async () => {
        if (res.data?.success && res.data.data?.complaint) {
          const updatedDoc = res.data.data.complaint;
          setSelectedComplaint(updatedDoc);
          setAnimStep(4);

          setActiveCallbackResult({
            externalId: activeExtId,
            status: newStatus,
            trackingCode: selectedTrackingCode,
            timestamp: new Date().toLocaleTimeString(),
            payload: res.data.data.odfPayload || activeOdfSchema,
          });

          const lRes = await interoperabilityAPI.getLogs();
          if (lRes.data?.success && lRes.data.data) {
            setLogs(lRes.data.data);
          }
        } else {
          throw new Error(res.data?.message || 'Callback synchronization failed');
        }
        setSimulating(false);
      }, 950);

    } catch (err) {
      console.error('[Simulate Callback Error]:', err);
      setSimError(err.response?.data?.message || err.message || 'Department callback synchronization failed.');
      setSimulating(false);
      setAnimStep(0);
    }
  };

  const activeCategory = selectedComplaint?.category || 'Water Leakage';
  const activeGateway = getGatewayDetailsForCategory(activeCategory);
  const activeExtId = selectedComplaint?.externalDepartmentId || activeGateway.defaultExtId;

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
    primaryDepartment: activeGateway.department,
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
    <div style={{ background: 'var(--bg-app)', minHeight: '100vh', padding: '5.5rem 1rem 3rem', color: 'var(--text-primary)', width: '100%', maxWidth: '100%', boxSizing: 'border-box', overflowX: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

        {/* ── 1. HERO / INTRO SECTION ── */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(59,130,246,0.1) 100%)',
          border: '1px solid rgba(16,185,129,0.3)',
          borderRadius: '1.25rem',
          padding: '1.75rem',
          marginBottom: '2rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
            <span className="badge badge-sage" style={{ padding: '0.3rem 0.75rem', fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="pulse-dot" style={{ width: '7px', height: '7px', background: '#34d399', borderRadius: '50%' }} />
              INTEROPERABILITY LAYER ACTIVE
            </span>
            <span style={{ fontSize: '0.78rem', color: '#60a5fa', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              CivicOS Core Middleware
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 900, color: '#ffffff', marginBottom: '0.6rem' }}>
            Government Systems, Connected.
          </h1>

          <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.6, maxWidth: '980px', marginBottom: '0' }}>
            CivicOS provides a unified interoperability layer that connects fragmented government platforms, normalizes their responses, and gives citizens one consistent service experience.
          </p>
        </div>

        {/* ── 2. ANIMATED ARCHITECTURE VISUALIZATION ── */}
        <div className="natural-glass-card" style={{ padding: '1.75rem', marginBottom: '2rem', background: '#121722', border: '1px solid rgba(16,185,129,0.25)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                System Architecture
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                Unified Civic Data Interoperability Flow
              </h2>
            </div>
            <span className="badge badge-teal" style={{ fontSize: '0.75rem' }}>
              CIV-ODF v1.0 Normalization Active
            </span>
          </div>

          {/* Desktop & Mobile Flow Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', alignItems: 'center' }}>

            {/* Node 1: Citizen */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '0.85rem', textAlign: 'center', transition: 'all 0.2s ease' }}>
              <div style={{ background: 'rgba(16,185,129,0.15)', width: '38px', height: '38px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', marginBottom: '0.4rem' }}>
                <Globe size={18} />
              </div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.88rem' }}>Citizen Request</div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.15rem' }}>GPS Issue Report</div>
            </div>

            <div className="desktop-only" style={{ textAlign: 'center', color: animStep >= 1 ? '#34d399' : '#60a5fa' }}>
              <ArrowRight size={20} className={simulating ? 'pulse-dot' : ''} />
            </div>

            {/* Node 2: CivicOS */}
            <div style={{ background: animStep === 1 || animStep === 2 ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.03)', border: animStep === 1 || animStep === 2 ? '1px solid #34d399' : '1px solid rgba(16,185,129,0.3)', padding: '1rem', borderRadius: '0.85rem', textAlign: 'center', transition: 'all 0.2s ease' }}>
              <div style={{ background: 'var(--grad-sage)', width: '38px', height: '38px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', marginBottom: '0.4rem' }}>
                <Cpu size={18} />
              </div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.88rem' }}>CivicOS Gateway</div>
              <div style={{ fontSize: '0.72rem', color: '#34d399', marginTop: '0.15rem' }}>AI Triage & Router</div>
            </div>

            <div className="desktop-only" style={{ textAlign: 'center', color: animStep >= 2 ? '#34d399' : '#60a5fa' }}>
              <ArrowRight size={20} className={simulating ? 'pulse-dot' : ''} />
            </div>

            {/* Node 3: CIV-ODF */}
            <div style={{ background: animStep === 3 ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.03)', border: animStep === 3 ? '1px solid #f59e0b' : '1px solid rgba(245,158,11,0.3)', padding: '1rem', borderRadius: '0.85rem', textAlign: 'center', transition: 'all 0.2s ease' }}>
              <div style={{ background: 'rgba(245,158,11,0.15)', width: '38px', height: '38px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', marginBottom: '0.4rem' }}>
                <FileCode2 size={18} />
              </div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.88rem' }}>CIV-ODF v1.0</div>
              <div style={{ fontSize: '0.72rem', color: '#fbbf24', marginTop: '0.15rem' }}>Common Normalizer</div>
            </div>

            <div className="desktop-only" style={{ textAlign: 'center', color: animStep >= 3 ? '#34d399' : '#60a5fa' }}>
              <ArrowRight size={20} className={simulating ? 'pulse-dot' : ''} />
            </div>

            {/* Node 4: Dept API */}
            <div style={{ background: animStep === 4 ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.03)', border: animStep === 4 ? '1px solid #60a5fa' : '1px solid rgba(59,130,246,0.3)', padding: '1rem', borderRadius: '0.85rem', textAlign: 'center', transition: 'all 0.2s ease' }}>
              <div style={{ background: 'rgba(59,130,246,0.15)', width: '38px', height: '38px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', marginBottom: '0.4rem' }}>
                <Server size={18} />
              </div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.88rem' }}>{activeGateway.name}</div>
              <div style={{ fontSize: '0.72rem', color: '#60a5fa', marginTop: '0.15rem' }}>Ext ID: {activeExtId}</div>
            </div>

          </div>
        </div>

        {/* ── Active Database Complaint Selector ── */}
        <div className="natural-glass-card" style={{ padding: '1.25rem 1.5rem', marginBottom: '2rem', background: '#121722', border: '1px solid rgba(16,185,129,0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <label style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Select Active Case to Inspect & Synchronize:
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

            <form onSubmit={handleManualSearch} style={{ display: 'flex', gap: '0.4rem', flexShrink: 0, width: '100%', maxWidth: '320px' }}>
              <input
                type="text"
                className="form-input-dark"
                placeholder="Or enter CIV-2026-XXXXXX"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                style={{ height: '44px', fontSize: '0.85rem', flex: 1 }}
              />
              <button type="submit" className="btn-sage" style={{ padding: '0.5rem 1rem', height: '44px', minHeight: '44px' }}>
                <Search size={15} /> Find
              </button>
            </form>
          </div>
        </div>

        {/* ── 3. LIVE INTEROPERABILITY DEMONSTRATION SECTION ── */}
        <div className="natural-glass-card" style={{ padding: '1.75rem', marginBottom: '2rem', background: '#121722', border: '1px solid rgba(16,185,129,0.4)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>
                Interactive Gateway Synchronization
              </div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff' }}>
                Live Interoperability Demonstration
              </h2>
            </div>
            <div style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399', padding: '0.4rem 0.85rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }} className="pulse-dot" />
              CASE STATUS: {selectedComplaint?.status || 'SUBMITTED'}
            </div>
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
            See how CivicOS receives a department response, normalizes it through <strong style={{ color: '#f59e0b' }}>CIV-ODF v1.0</strong>, and synchronizes the result to a unified citizen case.
          </p>

          {/* Demonstration Case Card Details */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.025)', padding: '1.25rem', borderRadius: '0.85rem', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>CivicOS Request ID</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34d399', fontFamily: 'monospace', wordBreak: 'break-all' }}>
                {selectedTrackingCode}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Government Department</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
                {activeGateway.department}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>External Department ID</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#60a5fa', fontFamily: 'monospace', wordBreak: 'break-all' }}>
                {activeExtId}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Integration Status</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.15rem' }}>
                <CheckCircle2 size={16} /> Connected ({activeGateway.code})
              </div>
            </div>
          </div>

          {/* Interactive Simulation Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <button
              type="button"
              onClick={() => handleSimulateStatus('IN_PROGRESS')}
              disabled={simulating}
              className="btn-teal"
              style={{ justifyContent: 'center', fontSize: '0.9rem', padding: '0.8rem 1.25rem', minHeight: '48px', fontWeight: 800 }}
            >
              {simulating && animStep > 0 ? (
                <span>Synchronizing...</span>
              ) : (
                <><Zap size={16} /> Simulate API: In Progress</>
              )}
            </button>

            <button
              type="button"
              onClick={() => handleSimulateStatus('RESOLVED')}
              disabled={simulating}
              className="btn-sage"
              style={{ justifyContent: 'center', fontSize: '0.9rem', padding: '0.8rem 1.25rem', minHeight: '48px', fontWeight: 800 }}
            >
              {simulating && animStep > 0 ? (
                <span>Synchronizing...</span>
              ) : (
                <><CheckCircle2 size={16} /> Simulate API: Resolved</>
              )}
            </button>
          </div>

          {/* Step-by-Step Callback Event Panel */}
          {activeCallbackResult && (
            <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '0.75rem', padding: '1.1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={15} /> Department Callback Execution Log ({activeCallbackResult.timestamp})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <div>✔ Department callback received: <strong style={{ color: '#60a5fa', fontFamily: 'monospace' }}>{activeCallbackResult.externalId}</strong> → <strong style={{ color: '#34d399' }}>{activeCallbackResult.status}</strong></div>
                <div>✔ Response validated through integration gateway API adapter</div>
                <div>✔ CIV-ODF v1.0 payload normalized successfully</div>
                <div>✔ CivicOS request updated: <strong style={{ color: '#34d399', fontFamily: 'monospace' }}>{activeCallbackResult.trackingCode}</strong> → <strong style={{ color: '#34d399' }}>{activeCallbackResult.status}</strong></div>
              </div>
            </div>
          )}

          {simError && (
            <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', padding: '0.85rem', borderRadius: '0.65rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              ⚠ {simError}
            </div>
          )}

          {/* Visual Callback Flow Bar */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.1rem', borderRadius: '0.85rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              CALLBACK FLOW PIPELINE
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', alignItems: 'center' }}>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.65rem', color: '#60a5fa', fontWeight: 800 }}>01 Govt API</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff', fontFamily: 'monospace' }}>{activeExtId}</div>
              </div>

              <div className="desktop-only" style={{ textAlign: 'center', color: '#60a5fa' }}><ArrowRight size={16} /></div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.65rem', color: '#34d399', fontWeight: 800 }}>02 CivicOS Adapter</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>API Intercept</div>
              </div>

              <div className="desktop-only" style={{ textAlign: 'center', color: '#34d399' }}><ArrowRight size={16} /></div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.65rem', color: '#f59e0b', fontWeight: 800 }}>03 CIV-ODF v1.0</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>Schema Normalizer</div>
              </div>

              <div className="desktop-only" style={{ textAlign: 'center', color: '#f59e0b' }}><ArrowRight size={16} /></div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.65rem', color: '#2dd4bf', fontWeight: 800 }}>04 CivicOS Case</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff', fontFamily: 'monospace' }}>{selectedTrackingCode}</div>
              </div>

              <div className="desktop-only" style={{ textAlign: 'center', color: '#2dd4bf' }}><ArrowRight size={16} /></div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.65rem', color: '#34d399', fontWeight: 800 }}>05 Citizen Tracking</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#34d399' }}>Synced ({selectedComplaint?.status || 'SUBMITTED'})</div>
              </div>

            </div>
          </div>
        </div>

        {/* ── 4. CONNECTED GOVERNMENT GATEWAYS ── */}
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.1rem' }}>
            {services.slice(0, 4).map((s) => (
              <div key={s.id} className="natural-glass-card" style={{ padding: '1.35rem', background: '#121722', borderRadius: '1rem', border: s.code === activeGateway.code ? '1px solid rgba(16,185,129,0.5)' : '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.2s ease' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: s.code === activeGateway.code ? '#34d399' : '#60a5fa', fontFamily: 'monospace' }}>{s.code}</span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginTop: '0.15rem' }}>{s.name}</h3>
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#34d399', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', padding: '0.2rem 0.55rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} className="pulse-dot" /> {s.status}
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

        {/* ── 5. CIV-ODF v1.0 EXPLANATION & NORMALIZED PAYLOAD INSPECTOR ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          
          <div className="natural-glass-card" style={{ padding: '1.5rem', background: '#121722', border: '1px solid rgba(245,158,11,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <span className="badge badge-amber"><FileCode2 size={13} /> CIV-ODF v1.0 STANDARD</span>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
              CIV-ODF v1.0 Normalization Layer
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              CivicOS Open Data Format is the normalization layer that converts heterogeneous government department responses into a common structure without requiring departments to replace their existing systems.
            </p>
            <button
              onClick={() => setShowJsonInspector(!showJsonInspector)}
              className="btn-glass"
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              {showJsonInspector ? <><ChevronUp size={14} /> Hide Normalized Response</> : <><ChevronDown size={14} /> View Normalized Response</>}
            </button>
          </div>

          {showJsonInspector && (
            <div className="natural-glass-card" style={{ padding: '1.5rem', background: '#121722' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase' }}>Data Standard Inspector</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>Normalized CIV-ODF Payload</h3>
                </div>
                <span className="badge badge-teal" style={{ fontSize: '0.72rem' }}>CIV-ODF v1.0</span>
              </div>

              {(() => {
                const displayPayload = activeCallbackResult?.payload || {
                  civOdfVersion: "1.0",
                  trackingCode: selectedTrackingCode || "CIV-2026-809489",
                  externalDepartmentId: activeExtId || "ROAD-PW-4012",
                  departmentName: activeGateway.department || "Public Works Department",
                  category: selectedComplaint?.category || "Road Damage",
                  title: selectedComplaint?.title || "Road Infrastructure Defect",
                  status: selectedComplaint?.status || "IN_PROGRESS",
                  interoperabilityStatus: "NORMALIZED_AND_SYNCHRONIZED",
                  timestamp: new Date().toISOString(),
                  normalizedFields: {
                    address: selectedComplaint?.address || "Main Road, Ward 14, Pune",
                    latitude: selectedComplaint?.latitude || 18.5204,
                    longitude: selectedComplaint?.longitude || 73.8567,
                    priorityScore: selectedComplaint?.priorityScore || 80,
                    severity: selectedComplaint?.severity || "HIGH"
                  }
                };

                return (
                  <pre style={{
                    background: '#0a0d14',
                    border: '1px solid rgba(16,185,129,0.3)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    fontSize: '0.75rem',
                    color: '#34d399',
                    fontFamily: 'monospace',
                    overflowX: 'auto',
                    maxHeight: '230px',
                    lineHeight: 1.4,
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.5)',
                  }}>
                    {JSON.stringify(displayPayload, null, 2)}
                  </pre>
                );
              })()}
            </div>
          )}

        </div>

        {/* ── 6. INTEROPERABILITY API TRANSACTION LOGS ── */}
        <div className="natural-glass-card" style={{ padding: '1.5rem', background: '#121722' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 800, textTransform: 'uppercase' }}>Supporting Audit Stream</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>Interoperability API Transaction Logs</h3>
            </div>
            <span className="badge badge-sage"><Activity size={12} /> Live Gateway Sync</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {logs.map((log) => (
              <div key={log.id} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', padding: '0.85rem 1rem', borderRadius: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '240px' }}>
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
