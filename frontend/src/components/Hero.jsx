import React, { useState, useEffect } from 'react';

export function Hero() {
  const [heroData, setHeroData] = useState({
    heading: "Design & High-Performance Development.",
    subheading: "I am passionate about coding as well as designing. I have 5+ years of experience in the IT industry as a UI/UX Developer, crafting responsive UIs and cross-platform applications.",
    experienceYears: 5,
    badgeText: "Available for Q3/Q4 contracts & advisory"
  });

  useEffect(() => {
    const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
    fetch(`${strapiUrl}/api/hero?populate=*`)
      .then(res => res.json())
      .then(response => {
        const data = response?.data?.attributes || response?.data || response;
        if (data) {
          setHeroData(prev => ({
            heading: data.heading || prev.heading,
            subheading: data.subheading || prev.subheading,
            experienceYears: data.experienceYears || prev.experienceYears,
            badgeText: data.badgeText || prev.badgeText
          }));
        }
      })
      .catch(err => console.error("Error fetching hero data from Strapi:", err));
  }, []);

  return (
    <div id="hero" className="relative w-full max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl lg:pt-space-3xl">
      <section className="relative flex flex-col items-start gap-space-lg lg:gap-space-xl pb-space-3xl">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 dark:px-space-sm dark:py-space-2xs rounded-full bg-emerald-50 dark:bg-surface-container-low/80 border border-emerald-200 dark:border-none dark:backdrop-blur-xl text-emerald-800 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-secondary"></span>
          </span>
          <span className="font-label-caps text-label-caps uppercase tracking-wider text-emerald-700 dark:text-secondary font-semibold dark:font-normal">
            {heroData.badgeText}
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl">
          <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-slate-900 dark:text-on-surface tracking-tight leading-tight">
            Bridging Intuitive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 dark:from-primary-container via-indigo-500 dark:via-primary-fixed-dim to-cyan-600 dark:to-secondary">
              {heroData.heading.split('&')[0]}
            </span>
            {" "}&amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 dark:from-secondary via-sky-600 dark:via-secondary-fixed to-indigo-600 dark:to-primary-fixed">
              {heroData.heading.split('&')[1] || "High-Performance Development."}
            </span>
          </h1>
          <p className="mt-space-md font-body-lg text-body-md lg:text-body-lg text-slate-600 dark:text-on-surface-variant max-w-2xl leading-relaxed">
            {heroData.subheading}
          </p>
        </div>

        {/* Hero Actions & CTAs */}
        <div className="flex flex-wrap items-center gap-space-md pt-space-2xs w-full sm:w-auto">
          <a className="inline-flex items-center justify-center gap-space-xs font-headline-sm text-body-md bg-indigo-600 dark:bg-primary-container text-white dark:text-on-primary-container px-space-lg py-space-sm rounded-full hover:bg-indigo-700 dark:hover:bg-primary dark:hover:text-on-primary shadow-lg dark:shadow-xl shadow-indigo-500/25 dark:shadow-none hover:-translate-y-0.5 transition-all duration-200 group font-semibold dark:font-normal" href="#selected-work">
            <span>View Selected Work</span>
            <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform text-lg">arrow_downward</span>
          </a>
          <a className="inline-flex items-center justify-center gap-space-xs font-headline-sm text-body-md bg-white dark:bg-surface-container-high/60 hover:bg-slate-50 dark:hover:bg-surface-bright text-slate-800 dark:text-on-surface border border-slate-300 dark:border-none px-space-lg py-space-sm rounded-full shadow-sm dark:backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200 font-semibold dark:font-normal" href="#experience">
            <span className="material-symbols-outlined text-indigo-600 dark:text-secondary text-lg">terminal</span>
            <span>View GitHub &amp; Resume</span>
            <span className="material-symbols-outlined text-slate-400 dark:text-on-surface-variant text-sm">open_in_new</span>
          </a>
        </div>

        {/* Quick Proof Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm w-full pt-space-xs">
          
          <div className="p-space-md rounded-xl bg-white dark:bg-surface-container-lowest/80 dark:backdrop-blur-md border border-slate-200/80 dark:border-none shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-sm flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-indigo-600 dark:text-secondary">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span className="font-label-caps text-label-caps uppercase font-semibold dark:font-normal">Experience</span>
            </div>
            <span className="font-headline-md text-headline-sm lg:text-headline-md text-slate-900 dark:text-on-surface font-bold dark:font-normal">{heroData.experienceYears}+ Years</span>
            <span className="font-body-sm text-body-sm text-slate-500 dark:text-on-surface-variant">IT Industry</span>
          </div>

          <div className="p-space-md rounded-xl bg-white dark:bg-surface-container-lowest/80 dark:backdrop-blur-md border border-slate-200/80 dark:border-none shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-sm flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-cyan-600 dark:text-primary">
              <span className="material-symbols-outlined text-sm">widgets</span>
              <span className="font-label-caps text-label-caps uppercase font-semibold dark:font-normal">Frontend</span>
            </div>
            <span className="font-headline-md text-headline-sm lg:text-headline-md text-slate-900 dark:text-on-surface font-bold dark:font-normal">React &amp; Angular</span>
            <span className="font-body-sm text-body-sm text-slate-500 dark:text-on-surface-variant">Cross-platform Apps</span>
          </div>

          <div className="p-space-md rounded-xl bg-white dark:bg-surface-container-lowest/80 dark:backdrop-blur-md border border-slate-200/80 dark:border-none shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-sm flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-secondary">
              <span className="material-symbols-outlined text-sm">design_services</span>
              <span className="font-label-caps text-label-caps uppercase font-semibold dark:font-normal">Design</span>
            </div>
            <span className="font-headline-md text-headline-sm lg:text-headline-md text-slate-900 dark:text-on-surface font-bold dark:font-normal">Figma &amp; XD</span>
            <span className="font-body-sm text-body-sm text-slate-500 dark:text-on-surface-variant">Pixel-perfect UIs</span>
          </div>

          <div className="p-space-md rounded-xl bg-white dark:bg-surface-container-lowest/80 dark:backdrop-blur-md border border-slate-200/80 dark:border-none shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-sm flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-sky-600 dark:text-tertiary">
              <span className="material-symbols-outlined text-sm">integration_instructions</span>
              <span className="font-label-caps text-label-caps uppercase font-semibold dark:font-normal">Full-Stack</span>
            </div>
            <span className="font-headline-md text-headline-sm lg:text-headline-md text-slate-900 dark:text-on-surface font-bold dark:font-normal">.NET &amp; MVC</span>
            <span className="font-body-sm text-body-sm text-slate-500 dark:text-on-surface-variant">Backend Support</span>
          </div>
          
        </div>

        {/* Tech Stack Ribbon */}
        <div className="w-full pt-space-md">
          <p className="font-label-caps text-label-caps uppercase tracking-widest text-slate-500 dark:text-on-surface-variant/80 font-semibold dark:font-normal mb-space-sm">
            Engineered With Modern Stack
          </p>
          <div className="flex flex-wrap items-center gap-space-xs">
            <div className="flex items-center gap-2 px-space-sm py-1.5 rounded-full bg-white dark:bg-surface-container-low/70 border border-slate-200 dark:border-none text-slate-700 dark:text-on-surface shadow-sm hover:border-indigo-300 dark:hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-base text-indigo-600 dark:text-primary">draw</span>
              <span className="font-label-code text-label-code">Figma &amp; XD</span>
            </div>
            <div className="flex items-center gap-2 px-space-sm py-1.5 rounded-full bg-white dark:bg-surface-container-low/70 border border-slate-200 dark:border-none text-slate-700 dark:text-on-surface shadow-sm hover:border-cyan-300 dark:hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-base text-cyan-600 dark:text-secondary">css</span>
              <span className="font-label-code text-label-code">Tailwind CSS &amp; Bootstrap</span>
            </div>
            <div className="flex items-center gap-2 px-space-sm py-1.5 rounded-full bg-white dark:bg-surface-container-low/70 border border-slate-200 dark:border-none text-slate-700 dark:text-on-surface shadow-sm hover:border-cyan-300 dark:hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-base text-cyan-600 dark:text-secondary">code_blocks</span>
              <span className="font-label-code text-label-code">React &amp; Angular</span>
            </div>
            <div className="flex items-center gap-2 px-space-sm py-1.5 rounded-full bg-white dark:bg-surface-container-low/70 border border-slate-200 dark:border-none text-slate-700 dark:text-on-surface shadow-sm hover:border-indigo-300 dark:hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-base text-indigo-500 dark:text-primary-fixed-dim">layers</span>
              <span className="font-label-code text-label-code">Next.js &amp; .NET Blazor</span>
            </div>
            <div className="flex items-center gap-2 px-space-sm py-1.5 rounded-full bg-white dark:bg-surface-container-low/70 border border-slate-200 dark:border-none text-slate-700 dark:text-on-surface shadow-sm hover:border-cyan-300 dark:hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-base text-cyan-600 dark:text-secondary">data_object</span>
              <span className="font-label-code text-label-code">JavaScript &amp; jQuery</span>
            </div>
            <div className="flex items-center gap-2 px-space-sm py-1.5 rounded-full bg-white dark:bg-surface-container-low/70 border border-slate-200 dark:border-none text-slate-700 dark:text-on-surface shadow-sm hover:border-indigo-300 dark:hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-base text-indigo-600 dark:text-primary">hub</span>
              <span className="font-label-code text-label-code">Git</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
