import React from 'react';

export function Expertise() {
  return (
    <section className="py-space-3xl flex flex-col gap-space-2xl" id="expertise">
      <div>
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-indigo-600 dark:text-secondary font-semibold dark:font-normal">
          Integrated Capabilities
        </span>
        <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-on-surface mt-1 font-bold dark:font-normal">
          Craft &amp; Engineering Disciplines
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
        {/* Bento Card 1: Product & UX Architecture (7/8 cols) */}
        <div className="md:col-span-12 lg:col-span-7 rounded-2xl bg-white dark:bg-surface-container-low/75 border border-slate-200/80 dark:border-none dark:backdrop-blur-xl p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-primary-container/20 border border-indigo-100 dark:border-none flex items-center justify-center text-indigo-600 dark:text-primary-fixed-dim mb-space-md shadow-sm dark:shadow-none">
              <span className="material-symbols-outlined text-2xl">architecture</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 dark:text-on-surface font-bold dark:font-normal">
              Product &amp; UX Architecture
            </h3>
            <p className="font-body-md text-body-md text-slate-600 dark:text-on-surface-variant mt-2 max-w-xl leading-relaxed">
              Constructing durable digital product foundations through rigorous information architecture, systematic component libraries, and user journey mapping validated by qualitative research.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-space-md">
              <div className="p-3.5 dark:p-3 rounded-lg bg-slate-50 dark:bg-surface-container-lowest border border-slate-200/70 dark:border-none">
                <div className="font-headline-sm text-body-sm text-slate-900 dark:text-on-surface font-semibold dark:font-normal">Design Tokens &amp; Figma</div>
                <p className="font-body-sm text-body-sm text-slate-500 dark:text-on-surface-variant mt-1">Synchronized semantic variables and component variants.</p>
              </div>
              <div className="p-3.5 dark:p-3 rounded-lg bg-slate-50 dark:bg-surface-container-lowest border border-slate-200/70 dark:border-none">
                <div className="font-headline-sm text-body-sm text-slate-900 dark:text-on-surface font-semibold dark:font-normal">User Journey Mapping</div>
                <p className="font-body-sm text-body-sm text-slate-500 dark:text-on-surface-variant mt-1">Heuristic audits, usability tests, and funnel optimization.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-space-lg text-indigo-700 dark:text-secondary font-label-code text-label-code font-semibold dark:font-normal">
            <span className="material-symbols-outlined text-sm text-emerald-600 dark:text-secondary">check_circle</span>
            <span>Zero-drift Figma to React design token automation</span>
          </div>
        </div>

        {/* Bento Card 2: Modern Frontend Engineering (5 cols) */}
        <div className="md:col-span-12 lg:col-span-5 rounded-2xl bg-white dark:bg-surface-container-low/75 border border-slate-200/80 dark:border-none dark:backdrop-blur-xl p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-secondary-container/20 border border-cyan-100 dark:border-none flex items-center justify-center text-cyan-600 dark:text-secondary mb-space-md shadow-sm dark:shadow-none">
              <span className="material-symbols-outlined text-2xl">code</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 dark:text-on-surface font-bold dark:font-normal">
              Frontend Engineering
            </h3>
            <p className="font-body-md text-body-md text-slate-600 dark:text-on-surface-variant mt-2 leading-relaxed">
              Writing clean, modular TypeScript with modern reactive architectures. Obsessed with bundle budgets and snappy interactions.
            </p>

            {/* Code snippet widget */}
            <div className="mt-space-md p-3.5 dark:p-3 rounded-lg bg-slate-900 dark:bg-surface-container-lowest border border-slate-800 dark:border-none font-label-code text-label-code text-xs">
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 dark:border-surface-container-highest text-slate-400 dark:text-on-surface-variant mb-2">
                <span>useFluidSpring.ts</span>
                <span className="text-cyan-400 dark:text-secondary font-semibold dark:font-normal">TypeScript</span>
              </div>
              <p className="text-indigo-300 dark:text-primary-fixed-dim">export function <span className="text-cyan-300 dark:text-secondary">useFluidSpring</span>(velocity) {`{`}</p>
              <p className="text-slate-400 dark:text-on-surface-variant pl-4">const stiffness = 420;</p>
              <p className="text-slate-400 dark:text-on-surface-variant pl-4">const damping = 32;</p>
              <p className="text-indigo-300 dark:text-primary-fixed-dim pl-4">return {`{`} transform: spring(stiffness) {`}`};</p>
              <p className="text-indigo-300 dark:text-primary-fixed-dim">{`}`}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-space-md text-slate-700 dark:text-primary font-label-code text-label-code font-semibold dark:font-normal">
            <span className="material-symbols-outlined text-sm text-indigo-600 dark:text-primary">memory</span>
            <span>React 19 Server Actions &amp; WebGL Canvas</span>
          </div>
        </div>

        {/* Bento Card 3: Motion & Micro-interactions (6 cols) */}
        <div className="md:col-span-6 rounded-2xl bg-white dark:bg-surface-container-low/75 border border-slate-200/80 dark:border-none dark:backdrop-blur-xl p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-tertiary-container/20 border border-violet-100 dark:border-none flex items-center justify-center text-violet-600 dark:text-tertiary mb-space-md shadow-sm dark:shadow-none">
              <span className="material-symbols-outlined text-2xl">auto_awesome</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 dark:text-on-surface font-bold dark:font-normal">
              Tactile Motion &amp; Choreography
            </h3>
            <p className="font-body-md text-body-md text-slate-600 dark:text-on-surface-variant mt-2 leading-relaxed">
              Using physical mass, friction, and responsive gestures to provide continuous spatial orientation and tactile joy.
            </p>
          </div>
          <div className="mt-space-md flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-surface-container-highest border border-slate-200/70 dark:border-none font-label-caps text-label-caps text-slate-700 dark:text-on-surface-variant font-semibold dark:font-normal">Framer Motion</span>
            <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-surface-container-highest border border-slate-200/70 dark:border-none font-label-caps text-label-caps text-slate-700 dark:text-on-surface-variant font-semibold dark:font-normal">Spring Physics</span>
            <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-surface-container-highest border border-slate-200/70 dark:border-none font-label-caps text-label-caps text-slate-700 dark:text-on-surface-variant font-semibold dark:font-normal">FLIP Animations</span>
          </div>
        </div>

        {/* Bento Card 4: Accessibility & Performance (6 cols) */}
        <div className="md:col-span-6 rounded-2xl bg-white dark:bg-surface-container-low/75 border border-slate-200/80 dark:border-none dark:backdrop-blur-xl p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-surface-container-highest border border-emerald-100 dark:border-none flex items-center justify-center text-emerald-600 dark:text-secondary mb-space-md shadow-sm dark:shadow-none">
              <span className="material-symbols-outlined text-2xl">accessibility_new</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 dark:text-on-surface font-bold dark:font-normal">
              Accessibility &amp; Runtime Performance
            </h3>
            <p className="font-body-md text-body-md text-slate-600 dark:text-on-surface-variant mt-2 leading-relaxed">
              Accessibility is non-negotiable. Designing for WCAG 2.2 AAA standard compliance, full keyboard navigability, and screen readers.
            </p>
          </div>
          <div className="mt-space-md flex items-center gap-space-sm text-emerald-700 dark:text-secondary font-label-code text-label-code font-semibold dark:font-normal">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span>100% Core Web Vitals Pass Rate Guaranteed</span>
          </div>
        </div>

      </div>
    </section>
  );
}
