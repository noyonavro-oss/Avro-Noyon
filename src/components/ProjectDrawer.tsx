import React, { useState } from 'react';
import { AGENCY_CONTACT } from '../data/agencyData';
import { useAdmin } from '../context/AdminContext';

interface ProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  currency: 'USD' | 'BDT';
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  currency
}) => {
  const { services } = useAdmin();
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedServiceId ? [preselectedServiceId] : ['facebook-instagram-ads']
  );
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [market, setMarket] = useState<'Bangladesh' | 'Global'>('Bangladesh');
  const [budgetTier, setBudgetTier] = useState<string>(
    currency === 'USD' ? '$1,000 - $3,000' : '৳50,000 - ৳1,50,000'
  );
  const [timeline, setTimeline] = useState('Immediately (Within 7 days)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const selectedServiceNames = selectedServices
    .map((sId) => services.find((s) => s.id === sId)?.title)
    .filter(Boolean)
    .join(', ');

  const generateWhatsAppUrl = () => {
    const text = `Hello Next Growth BD! 🚀
I'd like to discuss a project with your team.

👤 Name: ${name || 'Prospective Client'}
🏢 Business: ${businessName || 'Not specified'}
📱 WhatsApp: ${whatsapp || 'N/A'}
📧 Email: ${email || 'N/A'}
🎯 Target Market: ${market}
🛠️ Interested Services: ${selectedServiceNames || 'Multiple Services'}
💰 Estimated Budget: ${budgetTier}
⏱️ Timeline: ${timeline}
📝 Notes: ${notes || 'Looking forward to your strategy recommendation.'}`;

    return `https://wa.me/${AGENCY_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!whatsapp.trim() && !email.trim()) {
      setValidationError('Please provide either your WhatsApp number or Email.');
      return;
    }
    setValidationError('');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-end bg-surface-container-lowest/80 backdrop-blur-md transition-all">
      <div 
        className="w-full max-w-xl h-full bg-surface-container-low border-l border-outline-variant/30 shadow-2xl flex flex-col overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between sticky top-0 bg-surface-container-low/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Start a Project</h3>
              <p className="text-xs text-on-surface-variant">Tell us your goals & get a customized roadmap</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 flex-1 flex flex-col gap-6">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center p-8 bg-surface-container rounded-3xl border border-tertiary/30 my-auto">
              <div className="w-16 h-16 rounded-2xl bg-tertiary-container/30 text-tertiary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Proposal Request Initiated!</h4>
              <p className="text-body-sm text-on-surface-variant max-w-md mb-6">
                Thank you, <strong className="text-on-surface">{name}</strong>. Our senior growth strategist will review your requirements for <strong className="text-secondary">{businessName || 'your business'}</strong> and reach out within 12 hours.
              </p>
              
              <div className="w-full bg-surface-container-lowest p-4 rounded-2xl text-left border border-outline-variant/20 mb-6 text-xs text-on-surface-variant space-y-2">
                <p><span className="text-on-surface font-semibold">Services:</span> {selectedServiceNames}</p>
                <p><span className="text-on-surface font-semibold">Budget:</span> {budgetTier}</p>
                <p><span className="text-on-surface font-semibold">Market:</span> {market}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl glow-btn text-surface-container-lowest font-medium text-sm flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Open Direct on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="py-3.5 px-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-sm font-medium transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {validationError && (
                <div className="p-3.5 rounded-xl bg-error/10 border border-error/30 text-error text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">error</span>
                  <span>{validationError}</span>
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2.5">
                  1. Which Services Do You Require? (Select multiple)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((srv) => {
                    const isSelected = selectedServices.includes(srv.id);
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => toggleService(srv.id)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 ${
                          isSelected
                            ? 'bg-primary-container/20 border-primary text-on-surface shadow-sm'
                            : 'bg-surface-container/60 border-outline-variant/20 text-on-surface-variant hover:border-outline-variant/50'
                        }`}
                      >
                        <span className={`material-symbols-outlined text-[18px] shrink-0 ${isSelected ? 'text-secondary' : 'text-outline'}`}>
                          {isSelected ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                        <div>
                          <div className="font-semibold">{srv.title}</div>
                          <div className="text-[11px] opacity-75">{srv.categoryLabel}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Market Scope */}
              <div>
                <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2.5">
                  2. Primary Market Target
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMarket('Bangladesh')}
                    className={`p-3.5 rounded-xl border text-xs text-center font-medium transition-all flex items-center justify-center gap-2 ${
                      market === 'Bangladesh'
                        ? 'bg-tertiary-container/30 border-tertiary text-tertiary shadow-sm'
                        : 'bg-surface-container/60 border-outline-variant/20 text-on-surface-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">flag</span>
                    <span>Bangladesh Ecosystem (bKash/Local)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMarket('Global')}
                    className={`p-3.5 rounded-xl border text-xs text-center font-medium transition-all flex items-center justify-center gap-2 ${
                      market === 'Global'
                        ? 'bg-secondary-container/20 border-secondary-container text-secondary shadow-sm'
                        : 'bg-surface-container/60 border-outline-variant/20 text-on-surface-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">public</span>
                    <span>International / Global Markets</span>
                  </button>
                </div>
              </div>

              {/* Budget Tier */}
              <div>
                <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2.5">
                  3. Approximate Monthly Budget ({currency})
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(currency === 'USD'
                    ? ['$500 - $1,000', '$1,000 - $3,000', '$3,000 - $7,500', '$7,500+']
                    : ['৳30K - ৳50K', '৳50K - ৳150K', '৳150K - ৳500K', '৳500K+']
                  ).map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setBudgetTier(tier)}
                      className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all ${
                        budgetTier === tier
                          ? 'bg-primary-container text-on-primary-container border-primary-container shadow-sm'
                          : 'bg-surface-container/60 border-outline-variant/20 text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div className="space-y-4 pt-2">
                <label className="block text-xs font-semibold text-secondary uppercase tracking-wider">
                  4. Your Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Nasir Uddin"
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface placeholder:text-outline text-xs focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Apex Retail"
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface placeholder:text-outline text-xs focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="e.g. +880 1774 749768"
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface placeholder:text-outline text-xs focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. hello@brand.com"
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface placeholder:text-outline text-xs focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-on-surface-variant mb-1">Project Goals & Details</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Describe your current bottleneck, target metrics, or existing ad spend..."
                    className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface placeholder:text-outline text-xs focus:outline-none focus:border-secondary transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-4 px-6 rounded-full glow-btn text-surface-container-lowest font-semibold text-xs tracking-wide uppercase flex items-center justify-center gap-2"
                >
                  <span>Submit Project Brief</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-tertiary border border-tertiary/20 font-semibold text-xs tracking-wide uppercase flex items-center justify-center gap-2 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Instant WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
