import React from 'react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Split: Photo & Dimension */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full h-[500px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/30">
            <img
              className="w-full h-full object-cover"
              alt="High-tech digital marketing agency war room in deep navy, cyan, and emerald green lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT-jv3_GDWK3P9p-XhaV1TlvnsVMPoh_6y-fUgaVLo8m9U4iEP4XFf13DPYB_780YfG4P46RSIfF5vRyyWUNf914MuOVZc_vKpWumSm1ZILF7tKxILrKa8qGI_uoTwQm0I7-n_Um_tLPtGg3c6QA7PjAkodd0jObDblfPNHbNpFOFpNAeiQTshlfwICqNM85GEKdzQ72uKdeuc7_N-B3FVwrT1VUxY5V-9AlDYqVVlKog21NMwbE4rUA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface/40 to-transparent" />
            
            {/* Floating Inset Pill */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface-container-high/90 backdrop-blur-xl border border-outline-variant/30 shadow-lg flex items-center justify-between">
              <div>
                <p className="font-headline-sm text-sm font-bold text-on-surface">Performance-Driven</p>
                <p className="text-[11px] text-tertiary">Zero vanity metrics. Genuine scale.</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary border border-tertiary/30">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Split: 6 Pillars */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              Why Next Growth BD
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mt-1 leading-tight">
              Big Ideas. Thoughtful Execution. <br className="hidden sm:inline" />
              <span className="text-secondary">Better Digital Experiences.</span>
            </h2>
            <p className="text-body-md text-on-surface-variant mt-3 leading-relaxed">
              We operate not merely as an external vendor, but as an embedded strategic partner invested directly in your sustained growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-secondary">
                <span className="material-symbols-outlined text-[20px]">adjust</span>
                <h4 className="font-headline-sm text-sm font-bold text-on-surface">Tailored Solutions</h4>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Custom strategies built specifically for your niche, margin structure, and growth stage.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-tertiary">
                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                <h4 className="font-headline-sm text-sm font-bold text-on-surface">Consistent Branding</h4>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Cohesive visual aesthetics across social, web, and ads to reinforce trust and memorability.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-primary-fixed">
                <span className="material-symbols-outlined text-[20px]">person_search</span>
                <h4 className="font-headline-sm text-sm font-bold text-on-surface">Audience-Focused</h4>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Deep psychological triggers and value positioning crafted for high consumer retention.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-secondary">
                <span className="material-symbols-outlined text-[20px]">insights</span>
                <h4 className="font-headline-sm text-sm font-bold text-on-surface">Data-Informed Actions</h4>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Every marketing dollar is tracked, evaluated, and directed towards top-performing channels.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-tertiary">
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                <h4 className="font-headline-sm text-sm font-bold text-on-surface">Clear Communication</h4>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Direct WhatsApp access and clear reports without ambiguous marketing jargon.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-primary-fixed">
                <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                <h4 className="font-headline-sm text-sm font-bold text-on-surface">Collaborative Workflows</h4>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Agile review cycles and rapid feedback integration to keep initiatives running ahead of schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
