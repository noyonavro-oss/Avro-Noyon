import React, { useState } from 'react';
import { AGENCY_CONTACT } from '../data/agencyData';
import { useAdmin } from '../context/AdminContext';

interface ContactViewProps {
  currency: 'USD' | 'BDT';
}

export const ContactView: React.FC<ContactViewProps> = ({ currency }) => {
  const { services } = useAdmin();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [selectedService, setSelectedService] = useState('Facebook & Instagram Ads');
  const [budget, setBudget] = useState(currency === 'USD' ? '$1,000 - $3,000' : '৳50,000 - ৳150,000');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const generateWhatsAppUrl = () => {
    const text = `Hello Next Growth BD! 🚀
I'd like to discuss a project:

👤 Name: ${name || 'Prospective Partner'}
🏢 Company: ${company || 'N/A'}
📱 Phone/WhatsApp: ${phone || 'N/A'}
📧 Email: ${email || 'N/A'}
🛠️ Primary Service: ${selectedService}
💰 Estimated Budget: ${budget}
📝 Details: ${message || 'Looking for an initial consultation.'}`;

    return `https://wa.me/${AGENCY_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <div className="w-full min-h-screen py-16 flex flex-col gap-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-secondary text-xs font-semibold border border-outline-variant/30">
            <span className="material-symbols-outlined text-[16px]">contact_support</span>
            <span>Direct Strategic Communication</span>
          </div>
          <h1 className="font-headline-xl text-3xl sm:text-5xl font-extrabold text-on-surface">
            Let's Discuss Your Next Growth Phase
          </h1>
          <p className="text-body-md text-on-surface-variant max-w-xl">
            Whether you want to audit existing ad accounts, scale e-commerce revenue, or build modern digital infrastructure, our team is ready.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/20 shadow-xl flex flex-col gap-6">
              <h3 className="font-headline-md text-xl font-bold text-on-surface">Agency Contact Center</h3>
              
              <div className="flex flex-col gap-4 text-xs text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <span className="text-on-surface font-semibold block text-sm">Headquarters</span>
                    <span className="leading-relaxed">{AGENCY_CONTACT.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-container/25 text-tertiary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div>
                    <span className="text-on-surface font-semibold block text-sm">WhatsApp Direct Line</span>
                    <a
                      href={`https://wa.me/${AGENCY_CONTACT.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiary font-bold hover:underline"
                    >
                      {AGENCY_CONTACT.phone}
                    </a>
                    <span className="text-[11px] text-on-surface-variant block mt-0.5">Average response time: &lt; 15 mins</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <span className="text-on-surface font-semibold block text-sm">Inquiries & Proposals</span>
                    <a href={`mailto:${AGENCY_CONTACT.email}`} className="hover:text-primary transition-colors">
                      {AGENCY_CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/15 text-xs">
                <span className="text-secondary font-semibold uppercase tracking-wider block mb-2 text-[10px]">
                  Operating Hours (BST / GMT+6)
                </span>
                <div className="space-y-1 text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Saturday – Thursday:</span>
                    <span className="text-on-surface font-medium">9:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday:</span>
                    <span className="text-tertiary font-medium">Emergency Campaign Monitoring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-tertiary-container/30 to-surface-container border border-tertiary/30 shadow-xl flex items-center justify-between gap-4">
              <div>
                <h4 className="font-headline-sm text-sm font-bold text-on-surface">Prefer a rapid conversation?</h4>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Message our lead strategist directly on WhatsApp.</p>
              </div>
              <a
                href={`https://wa.me/${AGENCY_CONTACT.whatsappNumber}?text=Hello%20Next%20Growth%20BD,%20I%20want%20to%20discuss%20a%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-full glow-btn text-surface-container-lowest font-bold text-xs uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/20 shadow-xl">
            {status === 'success' ? (
              <div className="p-8 text-center flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-tertiary-container/30 text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface">
                  Brief Received Successfully!
                </h3>
                <p className="text-xs text-on-surface-variant max-w-md leading-relaxed">
                  Thank you, <strong className="text-on-surface">{name}</strong>. We have logged your request. For the quickest review, you can also transmit your brief directly to our strategy desk via WhatsApp below:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-6 rounded-full glow-btn text-surface-container-lowest font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Send via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setStatus('idle')}
                    className="py-3.5 px-6 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-semibold"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface">Request a Strategic Proposal</h3>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Fill out the form below. We prepare an actionable scope before any call.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nasir Uddin"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">Business / Brand Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Global"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +880 1774 749768"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">Work Email</label>
                    <input
                      type="email"
                      placeholder="e.g. contact@business.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">Primary Required Service</label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title} className="bg-surface-container text-on-surface">
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">Estimated Budget ({currency})</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors"
                    >
                      {currency === 'USD' ? (
                        <>
                          <option value="$500 - $1,000">$500 - $1,000</option>
                          <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                          <option value="$3,000 - $7,500">$3,000 - $7,500</option>
                          <option value="$7,500+">$7,500+</option>
                        </>
                      ) : (
                        <>
                          <option value="৳30,000 - ৳50,000">৳30,000 - ৳50,000</option>
                          <option value="৳50,000 - ৳150,000">৳50,000 - ৳150,000</option>
                          <option value="৳150,000 - ৳500,000">৳150,000 - ৳500,000</option>
                          <option value="৳500,000+">৳500,000+</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Brief Description of Project</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand, current roadblocks, and specific goals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-4 px-6 rounded-full glow-btn text-surface-container-lowest font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>Submit Proposal Request</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-6 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-tertiary border border-tertiary/30 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Direct WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
