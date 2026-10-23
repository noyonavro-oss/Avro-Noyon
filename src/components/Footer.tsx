import React, { useState } from 'react';
import { AGENCY_CONTACT } from '../data/agencyData';
import { NavPath } from './Header';

interface FooterProps {
  onNavigate: (path: NavPath) => void;
  onOpenConsultation: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNav = (path: NavPath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="w-full bg-surface-container-lowest text-on-surface pt-16 pb-12 border-t border-outline-variant/20 shadow-[0_-1px_12px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-outline-variant/15">
            {/* Col 1-2: Brand & Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={AGENCY_CONTACT.logoUrl}
                  alt="NextGrowth BD Digital Marketing Logo"
                  className="h-9 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="font-headline-sm text-xl font-bold text-on-surface">Next Growth BD</span>
              </div>
              <p className="font-headline-sm text-sm font-semibold text-tertiary">
                {AGENCY_CONTACT.tagline}
              </p>
              <p className="text-xs text-on-surface-variant max-w-md leading-relaxed">
                Next Growth BD is a premier digital marketing agency empowering high-velocity brands with performance marketing, precision analytics, creative content, and conversion optimization strategies designed to scale revenue.
              </p>
              
              <div className="flex flex-col gap-2 text-xs text-on-surface-variant pt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
                  <span>{AGENCY_CONTACT.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">mail</span>
                  <a href={`mailto:${AGENCY_CONTACT.email}`} className="hover:text-primary transition-colors">
                    {AGENCY_CONTACT.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">phone_iphone</span>
                  <a
                    href={`https://wa.me/${AGENCY_CONTACT.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-tertiary transition-colors"
                  >
                    WhatsApp: {AGENCY_CONTACT.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Col 3: Performance Services */}
            <div className="flex flex-col gap-3">
              <h4 className="font-headline-sm text-sm font-bold text-on-surface uppercase tracking-wider text-secondary">
                Performance
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-on-surface-variant">
                <li>
                  <button onClick={() => onOpenConsultation('google-business-local-seo')} className="hover:text-primary transition-colors text-left">
                    Search Engine Optimization (SEO)
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation('facebook-instagram-ads')} className="hover:text-primary transition-colors text-left">
                    Pay-Per-Click Advertising (PPC)
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation('social-media-management')} className="hover:text-primary transition-colors text-left">
                    Social Media Marketing
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation('digital-strategy-consultation')} className="hover:text-primary transition-colors text-left">
                    Conversion Rate Optimization
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Growth & Tech */}
            <div className="flex flex-col gap-3">
              <h4 className="font-headline-sm text-sm font-bold text-on-surface uppercase tracking-wider text-secondary">
                Growth & Tech
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-on-surface-variant">
                <li>
                  <button onClick={() => onOpenConsultation('content-writing-copywriting')} className="hover:text-primary transition-colors text-left">
                    Performance Content Marketing
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation('ai-tools-automation')} className="hover:text-primary transition-colors text-left">
                    Email & Automation Funnels
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation('youtube-creator-services')} className="hover:text-primary transition-colors text-left">
                    Influencer & Creator Services
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation('digital-strategy-consultation')} className="hover:text-primary transition-colors text-left">
                    Web Analytics & Attribution
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 5: Creative & Brand */}
            <div className="flex flex-col gap-3">
              <h4 className="font-headline-sm text-sm font-bold text-on-surface uppercase tracking-wider text-secondary">
                Creative & Brand
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-on-surface-variant">
                <li>
                  <button onClick={() => onOpenConsultation('logo-design-brand-identity')} className="hover:text-primary transition-colors text-left">
                    Brand Strategy & Identity
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation('website-ecommerce-dev')} className="hover:text-primary transition-colors text-left">
                    UI/UX & Landing Page Design
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation('ai-promotional-video-editing')} className="hover:text-primary transition-colors text-left">
                    Video Production & Creative Ads
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation('website-ecommerce-dev')} className="hover:text-primary transition-colors text-left">
                    E-Commerce Growth Systems
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant text-xs">
            <p>© {new Date().getFullYear()} Next Growth BD. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-on-surface transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-on-surface transition-colors"
              >
                Terms of Service
              </button>
              <a
                href={`https://wa.me/${AGENCY_CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:underline flex items-center gap-1 font-semibold"
              >
                <span className="material-symbols-outlined text-[16px]">forum</span>
                <span>Direct WhatsApp Support</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Dialog */}
      {legalModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-surface-container-low rounded-3xl border border-outline-variant/30 p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
              <h3 className="font-headline-sm text-base font-bold text-on-surface">
                {legalModal === 'privacy' ? 'Privacy Policy - Next Growth BD' : 'Terms of Service - Next Growth BD'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="text-xs text-on-surface-variant space-y-3 leading-relaxed max-h-96 overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>At Next Growth BD, accessible from https://nextgrowthbd.com, one of our main priorities is the privacy of our visitors and clients.</p>
                  <p><strong>Information We Collect:</strong> We collect information you voluntarily provide during project inquiries, including your name, business details, phone number, and marketing requirements. We use this exclusively to communicate proposals, execute contracted campaigns, and deliver project analytics.</p>
                  <p><strong>Confidentiality:</strong> We treat all client business data, margin structures, ad accounts, and proprietary customer lists with strict NDA-level confidentiality. We never sell, lease, or share client data with third parties.</p>
                </>
              ) : (
                <>
                  <p>By engaging Next Growth BD for digital marketing, creative production, or engineering services, you agree to our standard terms of cooperation.</p>
                  <p><strong>Scope of Work:</strong> All deliverables, timelines, and milestones are defined transparently in individual service agreements or agreed project briefs prior to campaign launch.</p>
                  <p><strong>Payment & Retainers:</strong> Monthly retainers are invoiced at the commencement of each billing cycle. Ad spend is paid directly by the client to advertising platforms (Meta, Google) or coordinated through authorized escrow accounts.</p>
                  <p><strong>Intellectual Property:</strong> Upon final settlement of invoices, all graphic assets, ad copy, website code, and creative files produced become the sole property of the client.</p>
                </>
              )}
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-surface-container-high text-on-surface text-xs font-semibold hover:bg-surface-container-highest"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
