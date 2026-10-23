import React, { useState, useEffect } from 'react';
import { Header, NavPath } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectDrawer } from './components/ProjectDrawer';
import { ServiceModal } from './components/ServiceModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AdminModal } from './components/AdminModal';
import { AdminProvider } from './context/AdminContext';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { AboutUsView } from './views/AboutUsView';
import { PortfolioView } from './views/PortfolioView';
import { BlogView } from './views/BlogView';
import { ContactView } from './views/ContactView';
import { ServiceItem, PortfolioItem, AGENCY_CONTACT } from './data/agencyData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<NavPath>('home');
  const [currency, setCurrency] = useState<'USD' | 'BDT'>('BDT');
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioItem | null>(null);

  // Sync hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'about-us', 'portfolio', 'blog', 'contact'].includes(hash)) {
        setCurrentPath(hash as NavPath);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: NavPath) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'USD' ? 'BDT' : 'USD'));
  };

  const handleOpenConsultation = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsProjectDrawerOpen(true);
  };

  return (
    <AdminProvider>
      <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-secondary-container selection:text-on-secondary-container font-sans antialiased">
        {/* Fixed Sticky Header */}
        <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {currentPath === 'home' && (
          <HomeView
            onStartProject={handleOpenConsultation}
            onSelectService={(s) => setSelectedService(s)}
            onSelectPortfolioItem={(item) => setSelectedCaseStudy(item)}
            onExploreFullPortfolio={() => handleNavigate('portfolio')}
            onExploreServices={() => handleNavigate('services')}
            currency={currency}
          />
        )}

        {currentPath === 'services' && (
          <ServicesView
            onSelectService={(s) => setSelectedService(s)}
            onInquire={handleOpenConsultation}
            currency={currency}
          />
        )}

        {currentPath === 'about-us' && (
          <AboutUsView
            onStartProject={handleOpenConsultation}
          />
        )}

        {currentPath === 'portfolio' && (
          <PortfolioView
            onSelectItem={(item) => setSelectedCaseStudy(item)}
            onInquire={handleOpenConsultation}
          />
        )}

        {currentPath === 'blog' && (
          <BlogView
            onStartProject={handleOpenConsultation}
          />
        )}

        {currentPath === 'contact' && (
          <ContactView
            currency={currency}
          />
        )}
      </main>

      {/* Global Agency Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Modals & Drawers */}
      <ProjectDrawer
        isOpen={isProjectDrawerOpen}
        onClose={() => setIsProjectDrawerOpen(false)}
        preselectedServiceId={preselectedServiceId}
        currency={currency}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={(srvId) => {
          setSelectedService(null);
          handleOpenConsultation(srvId);
        }}
        currency={currency}
      />

      <CaseStudyModal
        item={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onInquire={(title) => {
          setSelectedCaseStudy(null);
          handleOpenConsultation(title);
        }}
      />

      {/* Floating WhatsApp Action Pill */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
        <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-surface-container-high/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-tertiary shadow-xl border border-outline-variant/30 pointer-events-none">
          Live WhatsApp Support (+8801774749768)
        </div>
        <a
          href={`https://wa.me/${AGENCY_CONTACT.whatsappNumber}?text=Hello%20Next%20Growth%20BD,%20I%20would%20like%20to%20discuss%20my%20business%20growth`}
          target="_blank"
          rel="noopener noreferrer"
          title="Direct WhatsApp with Next Growth BD"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-tertiary-container to-tertiary text-on-tertiary flex items-center justify-center shadow-[0_8px_25px_rgba(42,227,112,0.4)] hover:scale-110 transition-transform relative"
        >
          <span className="material-symbols-outlined text-[28px]">chat</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-secondary-container border-2 border-surface flex items-center justify-center text-[9px] font-bold text-surface-container-lowest">
            1
          </span>
        </a>
      </div>

      {/* Admin Management Modal */}
      <AdminModal />
    </div>
  </AdminProvider>
);
}
