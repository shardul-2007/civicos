import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';

// Layout Shell Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Navbar from './layouts/Navbar';
import CommandPalette from './components/CommandPalette';
import NotificationDrawer from './components/NotificationDrawer';
import ReportExportModal from './components/ReportExportModal';
import Footer from './layouts/Footer';
import { ToastProvider } from './context/ToastContext';
import { useAuth } from './context/AuthContext';
import FluidWaterCursor from './components/FluidWaterCursor';
import { Shield, ShieldAlert, ArrowLeft } from 'lucide-react';

// Pages
import Login from './pages/Auth/Login';
import Overview from './pages/AdminCommandCenter/Overview';
import MapExperience from './pages/MapExperience';
import ComplaintsList from './pages/ComplaintsList';
import ComplaintDetail from './pages/ComplaintDetail';
import AiIntelligence from './pages/AiIntelligence';
import Departments from './pages/Departments';
import SlaMonitor from './pages/SlaMonitor';
import Analytics from './pages/AdminCommandCenter/Analytics';
import Predictions from './pages/AdminCommandCenter/Predictions';
import ReportComplaint from './pages/CitizenPortal/ReportComplaint';
import TrackComplaint from './pages/CitizenPortal/TrackComplaint';
import CitizenHistory from './pages/CitizenPortal/CitizenHistory';
import FieldOfficerDesk from './pages/FieldOfficerDesk';

// Root Entry Guard: Unauthenticated -> Login; Authenticated -> Role Dashboard
function RootRouteGuard() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ background: '#0a0d14', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#34d399', gap: '1rem' }}>
        <div style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          <Shield size={26} />
        </div>
        <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>CivicOS Loading...</div>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '3px solid rgba(16,185,129,0.2)', borderTopColor: '#10b981', animation: 'spin 0.8s linear infinite' }} />
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  // Role-based dashboard redirect for authenticated user opening root
  if (user.role === 'ADMIN') {
    return <Navigate to="/admin" replace />;
  } else if (user.role === 'OFFICER') {
    return <Navigate to="/officer" replace />;
  } else {
    return <Navigate to="/citizen" replace />;
  }
}

// Protected Route Guard Component with Role Verification & Unauthorized Card
function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ background: '#0a0d14', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#34d399', gap: '1rem' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '3px solid rgba(16,185,129,0.2)', borderTopColor: '#10b981', animation: 'spin 0.8s linear infinite' }} />
        <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Authenticating Session...</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return (
      <div style={{ background: 'var(--bg-app)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
        <div className="natural-glass-card" style={{ maxWidth: '440px', width: '100%', textAlign: 'center', padding: '2rem 1.5rem', background: '#121722', borderRadius: '1rem', border: '1px solid rgba(239,68,68,0.3)' }}>
          <div style={{ background: 'rgba(239,68,68,0.15)', width: '52px', height: '52px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', marginBottom: '1rem' }}>
            <ShieldAlert size={28} />
          </div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
            Unauthorized Access
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            Your account role (<strong style={{ color: '#34d399' }}>{user.role}</strong>) does not have authorization to view this administrative page.
          </p>
          <Link
            to={user.role === 'ADMIN' ? '/admin' : user.role === 'OFFICER' ? '/officer' : '/citizen'}
            className="btn-sage"
            style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', textDecoration: 'none' }}
          >
            <ArrowLeft size={16} /> Return to My Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return children;
}

export default function App() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Modals & Drawers state
  const [commandOpen, setCommandOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);

  // Global Ctrl + K Keyboard Shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Public/Citizen navbar layout vs Admin Shell
  const isPublicPage =
    location.pathname === '/' ||
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/report' ||
    location.pathname === '/citizen' ||
    location.pathname === '/citizen/report' ||
    location.pathname === '/citizen/track' ||
    location.pathname === '/citizen/history';

  return (
    <ToastProvider>
      <FluidWaterCursor />
      <div className="app-shell">

        {/* Top Navbar for Public & Citizen pages */}
        {isPublicPage && <Navbar />}

        {/* Collapsible Left Sidebar for Municipal Command Shell */}
        {!isPublicPage && (
          <Sidebar
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        )}

        <div
          className={`main-wrapper ${!isPublicPage ? (collapsed ? 'admin-main-collapsed' : 'admin-main') : ''}`}
        >

          {/* Persistent Top Header for Municipal Command Shell */}
          {!isPublicPage && (
            <Header
              title="CivicOS Municipal Operating System"
              onOpenCommand={() => setCommandOpen(true)}
              onOpenNotifications={() => setNotificationsOpen(true)}
              onOpenExport={() => setExportOpen(true)}
              onToggleMobileSidebar={() => {
                if (window.innerWidth < 768) {
                  setMobileOpen((prev) => !prev);
                } else {
                  setCollapsed((prev) => !prev);
                }
              }}
            />
          )}

          <main style={{ flex: 1 }}>
            <Routes>
              {/* Root Entry Guard: Shows Login if unauthenticated */}
              <Route path="/" element={<RootRouteGuard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Login />} />

              {/* Main Municipal Command Routes (Protected) */}
              <Route path="/admin" element={<ProtectedRoute allowedRoles={['ADMIN', 'OFFICER']}><Overview /></ProtectedRoute>} />
              <Route path="/map" element={<ProtectedRoute allowedRoles={['ADMIN', 'OFFICER']}><MapExperience /></ProtectedRoute>} />
              <Route path="/complaints" element={<ProtectedRoute allowedRoles={['ADMIN', 'OFFICER']}><ComplaintsList /></ProtectedRoute>} />
              <Route path="/complaints/:id" element={<ProtectedRoute allowedRoles={['ADMIN', 'OFFICER']}><ComplaintDetail /></ProtectedRoute>} />
              <Route path="/departments" element={<ProtectedRoute allowedRoles={['ADMIN', 'OFFICER']}><Departments /></ProtectedRoute>} />
              <Route path="/sla" element={<ProtectedRoute allowedRoles={['ADMIN', 'OFFICER']}><SlaMonitor /></ProtectedRoute>} />
              <Route path="/ai" element={<ProtectedRoute allowedRoles={['ADMIN', 'OFFICER']}><AiIntelligence /></ProtectedRoute>} />
              <Route path="/admin/analytics" element={<ProtectedRoute allowedRoles={['ADMIN']}><Analytics /></ProtectedRoute>} />
              <Route path="/admin/predictions" element={<ProtectedRoute allowedRoles={['ADMIN']}><Predictions /></ProtectedRoute>} />

              {/* Citizen Portal Routes (Protected) */}
              <Route path="/report" element={<ProtectedRoute><ReportComplaint /></ProtectedRoute>} />
              <Route path="/citizen" element={<ProtectedRoute><CitizenHistory /></ProtectedRoute>} />
              <Route path="/citizen/report" element={<ProtectedRoute><ReportComplaint /></ProtectedRoute>} />
              <Route path="/citizen/track" element={<TrackComplaint />} />
              <Route path="/citizen/history" element={<ProtectedRoute><CitizenHistory /></ProtectedRoute>} />

              {/* Field Officer Mobile Desk */}
              <Route path="/officer" element={<ProtectedRoute allowedRoles={['OFFICER', 'ADMIN']}><FieldOfficerDesk /></ProtectedRoute>} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />

        </div>

        {/* Global Modals */}
        <CommandPalette
          isOpen={commandOpen}
          onClose={() => setCommandOpen(false)}
          onOpenExport={() => setExportOpen(true)}
        />

        <NotificationDrawer
          isOpen={notificationsOpen}
          onClose={() => setNotificationsOpen(false)}
        />

        <ReportExportModal
          isOpen={exportOpen}
          onClose={() => setExportOpen(false)}
        />

      </div>
    </ToastProvider>
  );
}
