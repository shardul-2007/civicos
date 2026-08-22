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
                setMobileOpen((prev) => !prev);
                setCollapsed((prev) => !prev);
              }}
            />
          )}

          <main style={{ flex: 1 }}>
            <Routes>
              {/* Landing Page & Auth */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />

              {/* Main Municipal Command Routes */}
              <Route path="/admin" element={<Overview />} />
              <Route path="/map" element={<MapExperience />} />
              <Route path="/complaints" element={<ComplaintsList />} />
              <Route path="/complaints/:id" element={<ComplaintDetail />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/sla" element={<SlaMonitor />} />
              <Route path="/ai" element={<AiIntelligence />} />
              <Route path="/admin/analytics" element={<Analytics />} />
              <Route path="/admin/predictions" element={<Predictions />} />

              {/* Citizen Portal Routes */}
              <Route path="/report" element={<ReportComplaint />} />
              <Route path="/citizen" element={<Navigate to="/report" replace />} />
              <Route path="/citizen/report" element={<ReportComplaint />} />
              <Route path="/citizen/track" element={<TrackComplaint />} />
              <Route path="/citizen/history" element={<CitizenHistory />} />

              {/* Field Officer Mobile Desk */}
              <Route path="/officer" element={<FieldOfficerDesk />} />

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
