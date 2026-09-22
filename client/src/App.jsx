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

import FuturisticEnergyCommandCenter from './pages/FuturisticEnergyCommandCenter';

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
import InteroperabilityCenter from './pages/InteroperabilityCenter';

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

  const isFuturisticEnergyPage =
    location.pathname === '/' ||
    location.pathname === '/energy' ||
    location.pathname === '/admin' ||
    location.pathname === '/dashboard';

  // Public/Citizen standalone navbar layout vs Municipal Command Shell
  const isPublicPage =
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/report' ||
    location.pathname === '/track' ||
    location.pathname === '/citizen' ||
    location.pathname === '/citizen/report' ||
    location.pathname === '/citizen/track' ||
    location.pathname === '/citizen/history' ||
    location.pathname === '/interoperability' ||
    location.pathname === '/services';

  return (
    <ToastProvider>
      <FluidWaterCursor />
      <div className="app-shell" style={{ background: '#05080B' }}>

        {/* Top Navbar for Public & Citizen pages */}
        {isPublicPage && !isFuturisticEnergyPage && <Navbar />}

        {/* Collapsible Left Sidebar for Municipal Command Shell */}
        {!isPublicPage && !isFuturisticEnergyPage && (
          <Sidebar
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        )}

        <div
          className={`main-wrapper ${!isPublicPage && !isFuturisticEnergyPage ? (collapsed ? 'admin-main-collapsed' : 'admin-main') : ''}`}
          style={isFuturisticEnergyPage ? { marginLeft: 0, width: '100%' } : {}}
        >

          {/* Persistent Top Header for Municipal Command Shell */}
          {!isPublicPage && !isFuturisticEnergyPage && (
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
              {/* Futuristic City Energy Command Center */}
              <Route path="/" element={<FuturisticEnergyCommandCenter />} />
              <Route path="/energy" element={<FuturisticEnergyCommandCenter />} />
              <Route path="/admin" element={<FuturisticEnergyCommandCenter />} />
              <Route path="/dashboard" element={<FuturisticEnergyCommandCenter />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Login />} />
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
              <Route path="/track" element={<TrackComplaint />} />
              <Route path="/citizen" element={<CitizenHistory />} />
              <Route path="/citizen/report" element={<ReportComplaint />} />
              <Route path="/citizen/track" element={<TrackComplaint />} />
              <Route path="/citizen/history" element={<CitizenHistory />} />

              {/* Field Officer Mobile Desk */}
              <Route path="/officer" element={<FieldOfficerDesk />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {!isFuturisticEnergyPage && <Footer />}

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
