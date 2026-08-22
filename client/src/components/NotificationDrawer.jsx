import React from 'react';
import { X, AlertTriangle, Clock, Brain, ShieldAlert, CheckCircle2, Bell } from 'lucide-react';

export default function NotificationDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  const notifications = [
    { id: 1, type: 'critical', title: 'Critical Hazard Alert', text: '4 complaints in Ward 14 require immediate dispatch.', time: '10m ago', icon: ShieldAlert, color: '#ef4444', badge: 'CRITICAL' },
    { id: 2, type: 'sla', title: 'SLA Breach Warning', text: 'Complaint #CIV-2847 consumed 85% of SLA threshold.', time: '25m ago', icon: Clock, color: '#f59e0b', badge: 'WARNING' },
    { id: 3, type: 'ai', title: 'AI Cluster Detected', text: '3 duplicate reports merged into Cluster #INC-1042.', time: '1h ago', icon: Brain, color: '#3b82f6', badge: 'AI MERGE' },
    { id: 4, type: 'system', title: 'Preventive Task Completed', text: 'Sanitation inspection completed in Sector 4.', time: '2h ago', icon: CheckCircle2, color: '#10b981', badge: 'COMPLETED' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(5, 8, 15, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 2500,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        className="glass-drawer-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#121722',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          width: '100%',
          maxWidth: '400px',
          height: '100%',
          boxShadow: '-15px 0 40px rgba(0,0,0,0.8)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideLeft 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#0a0d14',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', width: '34px', height: '34px', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
              <Bell size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>System Activity Alerts</h3>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>4 active municipal alerts</div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0.4rem',
              color: '#cbd5e1',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* List */}
        <div style={{ padding: '1.25rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                style={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#0a0d14',
                  borderLeft: `4px solid ${n.color}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Icon size={16} color={n.color} /> {n.title}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{n.time}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.4, marginBottom: '0.4rem' }}>{n.text}</p>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.4rem',
                    borderRadius: '4px',
                    background: `${n.color}22`,
                    color: n.color,
                    border: `1px solid ${n.color}44`,
                  }}
                >
                  {n.badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
