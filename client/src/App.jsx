import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

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

// Pages
import LandingPage from './pages/LandingPage';
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

// Protected Route Guard Component
function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ background: 'var(--bg-app)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '3px solid rgba(255,255,255,0.2)', borderTopColor: '#34d399', animation: 'spin 0.8s linear infinite' }} />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
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
      // Escape closes mobile sidebar
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

  // Check if public/citizen standalone page vs municipal command shell
  const isPublicPage =
    location.pathname === '/' ||
    location.pathname === '/login' ||
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
              {/* Landing Page & Auth */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />

              {/* Main Municipal Command Routes */}
              <Route path="/admin" element={<ProtectedRoute allowedRoles={['ADMIN', 'OFFICER']}><Overview /></ProtectedRoute>} />
              <Route path="/map" element={<MapExperience />} />
              <Route path="/complaints" element={<ComplaintsList />} />
              <Route path="/complaints/:id" element={<ComplaintDetail />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/sla" element={<SlaMonitor />} />
              <Route path="/ai" element={<AiIntelligence />} />
              <Route path="/admin/analytics" element={<Analytics />} />
              <Route path="/admin/predictions" element={<Predictions />} />

              {/* Citizen Portal Routes (Protected for Authenticated Users) */}
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
