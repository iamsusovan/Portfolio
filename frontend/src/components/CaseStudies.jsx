import React from 'react';

export function CaseStudies() {
  return (
    <section className="py-space-3xl flex flex-col gap-space-2xl" id="selected-work">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div>
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-indigo-600 dark:text-primary font-semibold dark:font-normal">
            Flagship Engineering &amp; Design
          </span>
          <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-on-surface mt-1 font-bold dark:font-normal">
            Featured Case Studies
          </h2>
        </div>
        <p className="font-body-sm text-body-sm text-slate-600 dark:text-on-surface-variant max-w-md">
          Deep-dive projects highlighting end-to-end craftsmanship: from ergonomic system architecture to high-performance component engineering.
        </p>
      </div>

      {/* Asymmetric Bento Case Studies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        
        {/* Project 1: Aura Cloud Intelligence (8 Columns) */}
        <article className="lg:col-span-12 xl:col-span-8 rounded-2xl bg-white dark:bg-surface-container-low/80 border border-slate-200/80 dark:border-none dark:backdrop-blur-xl p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-xl hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] dark:hover:shadow-2xl transition-all duration-300 group">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
              <div className="flex items-center gap-2">
                <span className="px-space-sm py-1 rounded-full bg-indigo-50 dark:bg-primary-container/20 border border-indigo-100 dark:border-none text-indigo-700 dark:text-primary-fixed-dim font-label-caps text-label-caps uppercase font-semibold dark:font-normal">Design Systems</span>
                <span className="px-space-sm py-1 rounded-full bg-cyan-50 dark:bg-surface-container-highest border border-cyan-100 dark:border-none text-cyan-700 dark:text-secondary font-label-caps text-label-caps uppercase font-semibold dark:font-normal">Next.js &amp; Tailwind</span>
                <span className="px-space-sm py-1 rounded-full bg-slate-100 dark:bg-surface-container-highest text-slate-600 dark:text-on-surface-variant font-label-caps text-label-caps uppercase font-semibold dark:font-normal">Data Viz</span>
              </div>
              <span className="font-label-code text-label-code text-slate-500 dark:text-on-surface-variant">2024 • Enterprise Telemetry</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 dark:text-on-surface group-hover:text-indigo-600 dark:group-hover:text-primary-fixed-dim transition-colors font-bold dark:font-normal">
              Aura Cloud Intelligence — Real-Time Telemetry Platform
            </h3>
            <p className="font-body-md text-body-md text-slate-600 dark:text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
              Redesigned the mission-critical cloud observability console for 40,000+ SREs. Reduced alert cognitive fatigue by 42% and delivered 60fps canvas node rendering under heavy cluster load.
            </p>

            {/* Rich UI Dashboard Mockup Card */}
            <div className="mt-space-lg p-space-md rounded-xl bg-slate-900 dark:bg-surface-container-lowest border border-slate-800 dark:border-none shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-slate-800/80 dark:bg-surface-container-low/40 px-3 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 dark:bg-error"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 dark:bg-tertiary"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 dark:bg-secondary"></div>
                  <span className="font-label-code text-label-code text-slate-400 dark:text-on-surface-variant ml-2">us-east-1 // cluster-telemetry-live.sh</span>
                </div>
                <span className="font-label-code text-label-code text-cyan-400 dark:text-secondary font-semibold dark:font-normal">Latency: 14ms • 99.99%</span>
              </div>

              {/* Inline Chart Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm mb-space-sm">
                <div className="p-3 rounded-lg bg-slate-800/60 dark:bg-surface-container-low border border-slate-700/50 dark:border-none flex flex-col justify-between">
                  <span className="font-label-caps text-label-caps uppercase text-slate-400 dark:text-on-surface-variant font-semibold dark:font-normal">P99 Query Latency</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-headline-sm text-headline-sm text-white dark:text-on-surface">18.4ms</span>
                    <span className="font-label-caps text-label-caps text-cyan-400 dark:text-secondary font-semibold dark:font-normal">-14.2%</span>
                  </div>
                  {/* SVG Sparkline */}
                  <svg className="w-full h-8 mt-2 text-cyan-400 dark:text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 24">
                    <path d="M0 18 Q 20 6, 40 14 T 80 4 T 100 8"></path>
                  </svg>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/60 dark:bg-surface-container-low border border-slate-700/50 dark:border-none flex flex-col justify-between">
                  <span className="font-label-caps text-label-caps uppercase text-slate-400 dark:text-on-surface-variant font-semibold dark:font-normal">Worker Memory Nodes</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-headline-sm text-headline-sm text-white dark:text-on-surface">64.2%</span>
                    <span className="font-label-caps text-label-caps text-indigo-400 dark:text-primary font-semibold dark:font-normal">Stable</span>
                  </div>
                  <div className="w-full bg-slate-700 dark:bg-surface-container-highest rounded-full h-2 mt-4 overflow-hidden">
                    <div className="bg-indigo-500 dark:bg-primary h-full rounded-full" style={{ width: '64%' }}></div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/60 dark:bg-surface-container-low border border-slate-700/50 dark:border-none flex flex-col justify-between">
                  <span className="font-label-caps text-label-caps uppercase text-slate-400 dark:text-on-surface-variant font-semibold dark:font-normal">Active Trace Pods</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-headline-sm text-headline-sm text-white dark:text-on-surface">1,428</span>
                    <span className="font-label-caps text-label-caps text-cyan-400 dark:text-secondary font-semibold dark:font-normal">+18 pods</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-secondary animate-pulse"></span>
                    <span className="font-label-code text-label-code text-slate-300 dark:text-on-surface-variant">All Nodes Healthy</span>
                  </div>
                </div>
              </div>

              {/* Context Image Preview Mockup */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden mt-space-xs border border-slate-800 dark:border-none">
                <img className="w-full h-full object-cover" data-alt="High fidelity dark UI screenshot of Aura Cloud Intelligence analytics dashboard" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 dark:from-surface-container-lowest via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-space-lg">
            <a className="inline-flex items-center gap-1 font-headline-sm text-body-sm text-indigo-600 dark:text-primary hover:text-indigo-800 dark:hover:text-secondary font-semibold dark:font-normal transition-colors" href="#">
              <span>Read Deep Dive Case Study</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a className="inline-flex items-center gap-1 font-label-code text-label-code text-slate-500 dark:text-on-surface-variant hover:text-slate-900 dark:hover:text-on-surface transition-colors" href="#">
              <span>Live Console Demo</span>
              <span className="material-symbols-outlined text-sm">launch</span>
            </a>
          </div>
        </article>

        {/* Project 2: Strata FinTech Banking (4 Columns) */}
        <article className="lg:col-span-12 xl:col-span-4 rounded-2xl bg-white dark:bg-surface-container-low/80 border border-slate-200/80 dark:border-none dark:backdrop-blur-xl p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-xl hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] dark:hover:shadow-2xl transition-all duration-300 group">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-space-md">
              <span className="px-space-sm py-1 rounded-full bg-sky-50 dark:bg-secondary-container/20 border border-sky-100 dark:border-none text-sky-700 dark:text-secondary-fixed font-label-caps text-label-caps uppercase font-semibold dark:font-normal">FinTech UI/UX</span>
              <span className="px-space-sm py-1 rounded-full bg-slate-100 dark:bg-surface-container-highest text-slate-600 dark:text-on-surface-variant font-label-caps text-label-caps uppercase font-semibold dark:font-normal">React 19</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 dark:text-on-surface group-hover:text-indigo-600 dark:group-hover:text-secondary transition-colors font-bold dark:font-normal">
              Strata FinTech Banking
            </h3>
            <p className="font-body-sm text-body-sm text-slate-600 dark:text-on-surface-variant mt-2 leading-relaxed">
              Cross-border enterprise treasury &amp; settlement portal. Redesigned multi-currency approval pipelines, lifting checkout conversion by +28%.
            </p>

            {/* Visual Component Demo */}
            <div className="mt-space-md p-space-sm rounded-xl bg-slate-50 dark:bg-surface-container-lowest border border-slate-200/70 dark:border-none flex flex-col gap-2.5">
              <div className="flex justify-between items-center text-slate-500 dark:text-on-surface-variant font-label-code text-label-code font-semibold dark:font-normal">
                <span>Multi-Asset Liquidity</span>
                <span className="text-cyan-700 dark:text-secondary font-bold dark:font-normal">$4.2M Cleared</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white dark:bg-surface-container-low border border-slate-200/80 dark:border-none flex items-center justify-between shadow-sm dark:shadow-none">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-surface-container-highest text-indigo-700 dark:text-primary flex items-center justify-center font-headline-sm text-body-sm font-bold dark:font-normal">€</div>
                  <div>
                    <div className="font-headline-sm text-body-sm text-slate-900 dark:text-on-surface font-semibold dark:font-normal">EUR / USD Swap</div>
                    <div className="font-label-code text-label-code text-slate-500 dark:text-on-surface-variant text-xs">Instant Settlement</div>
                  </div>
                </div>
                <span className="font-label-caps text-label-caps text-emerald-600 dark:text-secondary font-bold dark:font-normal">+0.48%</span>
              </div>
              <div className="relative w-full h-36 rounded-lg overflow-hidden mt-1 border border-slate-200 dark:border-none">
                <img className="w-full h-full object-cover" data-alt="Dark modern fintech dashboard view showing currency exchange cards" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200"/>
              </div>
            </div>
          </div>
          <div className="pt-space-lg flex items-center justify-between">
            <a className="inline-flex items-center gap-1 font-headline-sm text-body-sm text-indigo-600 dark:text-secondary hover:text-indigo-800 dark:hover:text-primary font-semibold dark:font-normal transition-colors" href="#">
              <span>Read Case Study</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <span className="font-label-code text-label-code text-slate-500 dark:text-on-surface-variant font-semibold dark:font-normal">WCAG AAA</span>
          </div>
        </article>

        {/* Project 3: Synapse AI Workspace (5 Columns) */}
        <article className="lg:col-span-12 xl:col-span-5 rounded-2xl bg-white dark:bg-surface-container-low/80 border border-slate-200/80 dark:border-none dark:backdrop-blur-xl p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-xl hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] dark:hover:shadow-2xl transition-all duration-300 group">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-space-md">
              <span className="px-space-sm py-1 rounded-full bg-violet-50 dark:bg-tertiary-container/20 border border-violet-100 dark:border-none text-violet-700 dark:text-tertiary font-label-caps text-label-caps uppercase font-semibold dark:font-normal">AI Product Design</span>
              <span className="px-space-sm py-1 rounded-full bg-slate-100 dark:bg-surface-container-highest text-slate-600 dark:text-on-surface-variant font-label-caps text-label-caps uppercase font-semibold dark:font-normal">Multiplayer Canvas</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 dark:text-on-surface group-hover:text-indigo-600 dark:group-hover:text-tertiary transition-colors font-bold dark:font-normal">
              Synapse AI Workspace
            </h3>
            <p className="font-body-sm text-body-sm text-slate-600 dark:text-on-surface-variant mt-2 leading-relaxed">
              Collaborative canvas for agentic LLM pipelines. Created an intuitive node visualizer accelerating prompt engineer onboarding by 3.5x.
            </p>
            <div className="mt-space-md p-space-sm rounded-xl bg-slate-50 dark:bg-surface-container-lowest border border-slate-200/70 dark:border-none flex flex-col gap-2">
              <div className="flex items-center justify-between font-label-code text-label-code text-slate-500 dark:text-on-surface-variant font-semibold dark:font-normal">
                <span>Agent Graph Engine</span>
                <span className="text-violet-700 dark:text-tertiary font-semibold dark:font-normal">Live Cursors (4)</span>
              </div>
              <div className="relative w-full h-44 rounded-lg overflow-hidden border border-slate-200 dark:border-none">
                <img className="w-full h-full object-cover" data-alt="Futuristic dark UI showing node-based AI graph editor" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200"/>
              </div>
            </div>
          </div>
          <div className="pt-space-lg">
            <a className="inline-flex items-center gap-1 font-headline-sm text-body-sm text-indigo-600 dark:text-tertiary hover:text-indigo-800 dark:hover:text-on-surface font-semibold dark:font-normal transition-colors" href="#">
              <span>Read Case Study</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </article>

        {/* Project 4: Prism Design Tokens Studio (7 Columns) */}
        <article className="lg:col-span-12 xl:col-span-7 rounded-2xl bg-white dark:bg-surface-container-low/80 border border-slate-200/80 dark:border-none dark:backdrop-blur-xl p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-xl hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] dark:hover:shadow-2xl transition-all duration-300 group">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
              <div className="flex items-center gap-2">
                <span className="px-space-sm py-1 rounded-full bg-indigo-50 dark:bg-primary-container/20 border border-indigo-100 dark:border-none text-indigo-700 dark:text-primary font-label-caps text-label-caps uppercase font-semibold dark:font-normal">Design Tooling</span>
                <span className="px-space-sm py-1 rounded-full bg-cyan-50 dark:bg-surface-container-highest border border-cyan-100 dark:border-none text-cyan-700 dark:text-secondary font-label-caps text-label-caps uppercase font-semibold dark:font-normal">CLI &amp; Tokens</span>
                <span className="px-space-sm py-1 rounded-full bg-slate-100 dark:bg-surface-container-highest text-slate-600 dark:text-on-surface-variant font-label-caps text-label-caps uppercase font-semibold dark:font-normal">Open Source</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-600 dark:text-secondary font-label-code text-label-code font-semibold dark:font-normal">
                <span className="material-symbols-outlined text-sm">star</span>
                <span>8.2k GitHub Stars</span>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-slate-900 dark:text-on-surface group-hover:text-indigo-600 dark:group-hover:text-primary transition-colors font-bold dark:font-normal">
              Prism Design Tokens Studio
            </h3>
            <p className="font-body-md text-body-md text-slate-600 dark:text-on-surface-variant mt-2 max-w-xl leading-relaxed">
              Open source CLI and compiler standardizing tokens across iOS, Android, and Web with automated GitHub Actions sync and semantic type inference.
            </p>

            {/* Code & Token Swatches Preview */}
            <div className="mt-space-md grid grid-cols-1 md:grid-cols-2 gap-space-sm">
              <div className="p-3.5 dark:p-3 rounded-lg bg-slate-900 dark:bg-surface-container-lowest border border-slate-800 dark:border-none font-label-code text-label-code flex flex-col justify-between">
                <div className="text-slate-400 dark:text-on-surface-variant pb-1 flex items-center justify-between text-xs dark:text-sm">
                  <span>prism.config.json</span>
                  <span className="text-indigo-400 dark:text-primary font-semibold dark:font-normal dark:text-xs">v2.4.0</span>
                </div>
                <pre className="text-slate-200 dark:text-on-surface text-xs leading-relaxed overflow-x-auto mt-1 dark:mt-0"><code>{`{
  `}<span className="text-cyan-400 dark:text-secondary">"system"</span>{`: "AlexPrecision",
  `}<span className="text-cyan-400 dark:text-secondary">"scales"</span>{`: ["4pt", "8pt"],
  `}<span className="text-cyan-400 dark:text-secondary">"targets"</span>{`: ["tailwind", "css", "swift"],
  `}<span className="text-cyan-400 dark:text-secondary">"output"</span>{`: "dist/tokens"
}`}</code></pre>
              </div>
              <div className="p-3.5 dark:p-3 rounded-lg bg-slate-50 dark:bg-surface-container-lowest border border-slate-200/80 dark:border-none flex flex-col justify-between">
                <span className="font-label-caps text-label-caps uppercase text-slate-500 dark:text-on-surface-variant font-semibold dark:font-normal">Color Scale Preview</span>
                <div className="grid grid-cols-5 gap-1.5 my-2">
                  <div className="h-8 rounded bg-slate-900 dark:bg-background border border-slate-800 dark:border-none shadow-sm dark:shadow-none" title="Slate 900"></div>
                  <div className="h-8 rounded bg-slate-200 dark:bg-surface-container-low border border-slate-300 dark:border-none shadow-sm dark:shadow-none" title="Surface Low"></div>
                  <div className="h-8 rounded bg-indigo-600 dark:bg-primary-container shadow-sm dark:shadow-none" title="Indigo Primary"></div>
                  <div className="h-8 rounded bg-cyan-500 dark:bg-secondary shadow-sm dark:shadow-none" title="Cyan Secondary"></div>
                  <div className="h-8 rounded bg-sky-400 dark:bg-tertiary shadow-sm dark:shadow-none" title="Sky Accent"></div>
                </div>
                <span className="font-label-code text-label-code text-emerald-700 dark:text-on-surface-variant font-semibold dark:font-normal flex items-center gap-1 dark:gap-0">
                  <span className="material-symbols-outlined text-sm dark:hidden">verified</span> 
                  <span>Automated contrast audit: Passed</span>
                </span>
              </div>
            </div>
          </div>
          <div className="pt-space-lg flex items-center justify-between">
            <a className="inline-flex items-center gap-1 font-headline-sm text-body-sm text-indigo-600 dark:text-primary hover:text-indigo-800 dark:hover:text-secondary font-semibold dark:font-normal transition-colors" href="#">
              <span>Read Architecture Overview</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a className="inline-flex items-center gap-1 font-label-code text-label-code text-slate-600 dark:text-on-surface-variant hover:text-indigo-600 dark:hover:text-secondary transition-colors" href="#">
              <span>View Repository</span>
              <span className="material-symbols-outlined text-sm">code</span>
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}
