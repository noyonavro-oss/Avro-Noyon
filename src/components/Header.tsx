import React, { useState } from 'react';
import { AGENCY_CONTACT } from '../data/agencyData';
import { useAdmin } from '../context/AdminContext';

export type NavPath = 'home' | 'services' | 'about-us' | 'portfolio' | 'blog' | 'contact';

interface HeaderProps {
  currentPath: NavPath;
  onNavigate: (path: NavPath) => void;
  onOpenConsultation: (serviceId?: string) => void;
  currency: 'USD' | 'BDT';
  onToggleCurrency: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenConsultation,
  currency,
  onToggleCurrency
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAdminLoggedIn, adminUser, setIsAdminModalOpen } = useAdmin();

  const navItems: { path: NavPath; label: string }[] = [
    { path: 'home', label: 'Home' },
    { path: 'services', label: 'Services' },
    { path: 'about-us', label: 'About Us' },
    { path: 'portfolio', label: 'Portfolio' },
    { path: 'blog', label: 'Blog' },
    { path: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (path: NavPath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-surface-container-lowest/85 backdrop-blur-xl border-b border-outline-variant/15 shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          {/* Brand Zone */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <img
              src={AGENCY_CONTACT.logoUrl}
              alt="NextGrowth BD Digital Marketing Agency Logo"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                // Fallback styling if local image path has issue
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-secondary transition-colors whitespace-nowrap">
                Next Growth BD
              </span>
              <span className="text-[10px] text-tertiary font-semibold tracking-wider uppercase hidden sm:block">
                Digital Marketing Agency
              </span>
            </div>
          </button>

          {/* Navigation links - 3-Zone contract */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-surface-container-low/80 p-1.5 rounded-full border border-outline-variant/20 shadow-inner">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-surface-container-high text-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Admin Portal Trigger */}
            <button
              onClick={() => setIsAdminModalOpen(true)}
              title={isAdminLoggedIn ? `Admin Portal: ${adminUser?.name || 'Administrator'} (Manage Services)` : 'Admin Login'}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                isAdminLoggedIn
                  ? 'bg-tertiary-container/30 border-tertiary text-tertiary shadow-[0_0_15px_rgba(42,227,112,0.25)]'
                  : 'bg-surface-container border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-secondary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isAdminLoggedIn ? 'admin_panel_settings' : 'lock'}
              </span>
              <span className="hidden md:inline">
                {isAdminLoggedIn ? 'Admin' : 'Admin'}
              </span>
              {isAdminLoggedIn && (
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
              )}
            </button>

            {/* Currency Selector */}
            <button
              onClick={onToggleCurrency}
              title={`Switch currency to ${currency === 'USD' ? 'BDT (৳)' : 'USD ($)'}`}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container text-xs font-medium text-on-surface-variant hover:text-secondary border border-outline-variant/20 transition-colors"
            >
              <span className="text-secondary font-bold">{currency === 'USD' ? '$' : '৳'}</span>
              <span>{currency}</span>
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() => onOpenConsultation()}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-primary-container to-secondary-container text-surface-container-lowest px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-[0_4px_20px_rgba(0,207,255,0.25)] hover:shadow-[0_6px_25px_rgba(0,207,255,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Let's Talk</span>
            </button>

            {/* WhatsApp Quick Link */}
            <a
              href={`https://wa.me/${AGENCY_CONTACT.whatsappNumber}?text=Hello%20Next%20Growth%20BD,%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20project`}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (+8801774749768)"
              className="w-9 h-9 rounded-full bg-tertiary-container/30 border border-tertiary/40 text-tertiary flex items-center justify-center hover:bg-tertiary hover:text-on-tertiary transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">forum</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 pt-20 bg-surface-container-lowest/95 backdrop-blur-2xl flex flex-col p-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20 mb-4">
            <span className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
              Navigation Menu
            </span>
            <button
              onClick={onToggleCurrency}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-xs text-secondary border border-outline-variant/30"
            >
              <span>Currency:</span>
              <span className="font-bold">{currency === 'USD' ? 'USD ($)' : 'BDT (৳)'}</span>
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left px-4 py-3 rounded-2xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container'
                      : 'text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward_ios
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-outline-variant/20 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAdminModalOpen(true);
              }}
              className={`w-full py-3 rounded-2xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 ${
                isAdminLoggedIn
                  ? 'bg-tertiary-container/30 border-tertiary text-tertiary'
                  : 'bg-surface-container border-outline-variant/30 text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isAdminLoggedIn ? 'admin_panel_settings' : 'lock'}
              </span>
              <span>{isAdminLoggedIn ? 'Admin Portal (Manage Services)' : 'Admin Login'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-4 rounded-2xl glow-btn text-surface-container-lowest font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
              <span>Start a Project</span>
            </button>

            <a
              href={`https://wa.me/${AGENCY_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-surface-container-high text-tertiary border border-tertiary/20 text-center text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>WhatsApp: +8801774749768</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
