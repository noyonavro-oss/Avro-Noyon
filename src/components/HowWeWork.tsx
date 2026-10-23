import React from 'react';

export const HowWeWork: React.FC = () => {
  return (
    <section className="w-full py-20 bg-surface-container-lowest border-y border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              Execution Methodology
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mt-1">
              A Clear Process for Moving Forward.
            </h2>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-sm">
            Simple, methodical, and predictable. We strip away friction so you see tangible progress every week.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/20 hover:border-secondary/40 transition-all flex flex-col gap-4 shadow-lg group">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container/20 text-secondary flex items-center justify-center font-headline-md text-lg font-bold">
              01
            </div>
            <h3 className="font-headline-sm text-lg font-bold text-on-surface">Discover</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Understand your business model, customer psychology, core objectives, and historical roadblocks through structured deep dives.
            </p>
            <div className="flex items-center gap-1.5 text-secondary text-xs font-medium mt-auto pt-2">
              <span className="material-symbols-outlined text-[16px]">search</span>
              <span>Research & Audit</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/20 hover:border-primary-fixed/40 transition-all flex flex-col gap-4 shadow-lg group">
            <div className="w-12 h-12 rounded-2xl bg-primary-container/20 text-primary-fixed flex items-center justify-center font-headline-md text-lg font-bold">
              02
            </div>
            <h3 className="font-headline-sm text-lg font-bold text-on-surface">Strategize</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Identify the optimal channel mix, creative direction, conversion funnels, and prioritize actions for highest velocity impact.
            </p>
            <div className="flex items-center gap-1.5 text-primary-fixed text-xs font-medium mt-auto pt-2">
              <span className="material-symbols-outlined text-[16px]">map</span>
              <span>Roadmapping</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/20 hover:border-tertiary/40 transition-all flex flex-col gap-4 shadow-lg group">
            <div className="w-12 h-12 rounded-2xl bg-tertiary-container/30 text-tertiary flex items-center justify-center font-headline-md text-lg font-bold">
              03
            </div>
            <h3 className="font-headline-sm text-lg font-bold text-on-surface">Execute</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Produce thumb-stopping creative, build landing experiences, deploy targeted campaigns, and configure tracking infrastructure.
            </p>
            <div className="flex items-center gap-1.5 text-tertiary text-xs font-medium mt-auto pt-2">
              <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
              <span>Launch Phase</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/20 hover:border-secondary/40 transition-all flex flex-col gap-4 shadow-lg group">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container/20 text-secondary flex items-center justify-center font-headline-md text-lg font-bold">
              04
            </div>
            <h3 className="font-headline-sm text-lg font-bold text-on-surface">Optimize</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Analyze behavioral telemetry, A/B test ad variations, refine copy, and systematically allocate budget to highest ROAS winners.
            </p>
            <div className="flex items-center gap-1.5 text-secondary text-xs font-medium mt-auto pt-2">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>Continuous Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
