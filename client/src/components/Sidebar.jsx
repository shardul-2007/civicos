import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Shield,
  LayoutDashboard,
  FileText,
  MapPin,
  Building2,
  TrendingUp,
  Brain,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
  PlusCircle,
  Search,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const location = useLocation();
  const { user } = useAuth();
  const { t } = useLanguage();

  const role = user?.role || 'CITIZEN';

  // Navigation Items per Role
  let navItems = [];

  if (role === 'ADMIN') {
    navItems = [
      { label: t('navOverview'), path: '/admin', icon: LayoutDashboard },
      { label: t('navComplaints'), path: '/complaints', icon: FileText },
      { label: t('navMap'), path: '/map', icon: MapPin },
      { label: t('navDepartments'), path: '/departments', icon: Building2 },
      { label: t('navAnalytics'), path: '/admin/analytics', icon: TrendingUp },
      { label: t('navAi'), path: '/ai', icon: Brain },
      { label: t('navPredictions'), path: '/admin/predictions', icon: ZapIcon },
      { label: t('navSla'), path: '/sla', icon: Clock },
      { label: t('navOfficer'), path: '/officer', icon: Users },
    ];
  } else if (role === 'OFFICER') {
    navItems = [
      { label: t('navOfficer'), path: '/officer', icon: Users },
      { label: t('navComplaints'), path: '/complaints', icon: FileText },
      { label: t('navMap'), path: '/map', icon: MapPin },
      { label: t('navSla'), path: '/sla', icon: Clock },
    ];
  } else {
    // CITIZEN or Guest Navigation
    navItems = [
      { label: t('reportIssue'), path: '/report', icon: PlusCircle },
      { label: t('trackIssue'), path: '/citizen/track', icon: Search },
      { label: t('navComplaints'), path: '/complaints', icon: FileText },
      { label: t('navMap'), path: '/map', icon: MapPin },
    ];
  }

  const handleNavClick = () => {
    if (mobileOpen && setMobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(5, 8, 15, 0.85)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 999998,
          }}
        />
      )}

      <aside
        className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
        style={{ zIndex: mobileOpen ? 999999 : undefined }}
      >
        {/* Brand Header */}
        <div style={{ padding: '1.25rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Link to="/" onClick={handleNavClick} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ background: '#059669', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <Shield size={20} />
            </div>
            {(!collapsed || mobileOpen) && (
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
                  CivicOS
                </div>
                <div style={{ fontSize: '0.65rem', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                  {role} PORTAL
                </div>
              </div>
            )}
          </Link>

          {/* Desktop Collapse Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="desktop-only"
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0.25rem' }}
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>

          {/* Mobile Close Button */}
          {mobileOpen && (
            <button
              onClick={() => setMobileOpen(false)}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0.25rem' }}
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Navigation List */}
        <div style={{ padding: '1rem 0', flex: 1, overflowY: 'auto' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                title={collapsed ? item.label : ''}
              >
                <Icon size={18} />
                {(!collapsed || mobileOpen) && <span>{item.label}</span>}
              </Link>
            );
          })}
        </div>

        {/* System Status Footer */}
        {(!collapsed || mobileOpen) && (
          <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#090d16' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>
              <span className="pulse-dot"></span> System Operational
            </div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.2rem' }}>
              Role: <strong style={{ color: '#ffffff' }}>{role}</strong>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

function ZapIcon({ size = 18, color, style, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      className={className}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
