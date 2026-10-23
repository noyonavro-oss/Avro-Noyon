import React, { useState } from 'react';
import { FAQS, AGENCY_CONTACT } from '../data/agencyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-2">
          <span className="text-xs font-semibold text-tertiary uppercase tracking-widest">
            Clarification
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface">
            Questions? Let's Make Things Clear.
          </h2>
          <p className="text-body-md text-on-surface-variant max-w-lg">
            Everything you need to know about partnering with Next Growth BD.
          </p>
        </div>

        <div className="flex flex-col gap-3.5 pt-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-surface-container border border-outline-variant/20 hover:border-outline-variant/40 transition-all overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <h3 className="font-headline-sm text-base sm:text-lg font-bold text-on-surface">
                    {faq.question}
                  </h3>
                  <span
                    className={`material-symbols-outlined text-secondary transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-tertiary' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-on-surface-variant text-xs sm:text-sm leading-relaxed border-t border-outline-variant/10 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick query helper */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 gap-4 mt-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-tertiary/20 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface">Have a specific question not listed here?</p>
              <p className="text-[11px] text-on-surface-variant">Our team is active on WhatsApp 7 days a week.</p>
            </div>
          </div>
          <a
            href={`https://wa.me/${AGENCY_CONTACT.whatsappNumber}?text=Hello%20Next%20Growth%20BD,%20I%20have%20a%20question%20about%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-tertiary text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
