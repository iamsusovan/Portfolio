import React, { useState, useEffect } from 'react';

export function Contact() {
  const [contactData, setContactData] = useState({
    email: "susovan412@gmail.com",
    linkedinUrl: "#"
  });

  const [footerData, setFooterData] = useState({
    name: "Susovan Sarkar",
    tagline: "Designed & Engineered with precision.",
    twitterUrl: "#",
    githubUrl: "#",
    dribbbleUrl: "#"
  });

  useEffect(() => {
    const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
    fetch(`${strapiUrl}/api/contact?populate=*`)
      .then(res => res.json())
      .then(response => {
        const data = response?.data?.attributes || response?.data || response;
        if (data) {
          setContactData(prev => ({
            email: data.email || prev.email,
            linkedinUrl: data.linkedinUrl || prev.linkedinUrl
          }));
        }
      })
      .catch(err => console.error("Error fetching contact data from Strapi:", err));

    fetch(`${strapiUrl}/api/footer?populate=*`)
      .then(res => res.json())
      .then(response => {
        const data = response?.data?.attributes || response?.data || response;
        if (data) {
          setFooterData(prev => ({
            name: data.name || prev.name,
            tagline: data.tagline || prev.tagline,
            twitterUrl: data.twitterUrl || prev.twitterUrl,
            githubUrl: data.githubUrl || prev.githubUrl,
            dribbbleUrl: data.dribbbleUrl || prev.dribbbleUrl
          }));
        }
      })
      .catch(err => console.error("Error fetching footer data from Strapi:", err));
  }, []);

  return (
    <>
      <section className="py-space-3xl" id="contact">
        <div className="relative rounded-3xl bg-slate-900 dark:bg-surface-container-low/90 p-space-xl lg:p-space-3xl overflow-hidden shadow-2xl dark:backdrop-blur-2xl">
          {/* Radial backlights inside card */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/20 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/20 dark:bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-space-md">
            <div className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-slate-800/80 dark:bg-surface-container-highest font-label-caps text-label-caps text-cyan-400 dark:text-secondary">
              <span className="w-2 h-2 rounded-full bg-cyan-400 dark:bg-secondary animate-pulse"></span>
              <span>Let's collaborate</span>
            </div>
            <h2 className="font-display-hero text-headline-lg lg:text-display-hero text-white dark:text-on-surface">
              Let's build something exceptional together.
            </h2>
            <p className="font-body-lg text-body-md lg:text-body-lg text-slate-300 dark:text-on-surface-variant max-w-xl">
              Have an ambitious product, design system initiative, or complex frontend challenge in mind? My inbox is always open for advisory, contracts, and leadership roles.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-lg">
              <a className="inline-flex items-center justify-center gap-space-xs font-headline-sm text-body-md bg-white dark:bg-primary text-slate-900 dark:text-on-primary px-space-xl py-space-md rounded-full hover:bg-slate-50 dark:hover:bg-primary-fixed-dim hover:-translate-y-0.5 transition-all duration-200 group shadow-lg font-semibold dark:font-normal" href={`mailto:${contactData.email}`}>
                <span>Start a Conversation</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">arrow_forward</span>
              </a>
              <a className="inline-flex items-center justify-center gap-space-xs font-headline-sm text-body-md bg-transparent text-white dark:text-on-surface border border-slate-700 dark:border-outline hover:border-slate-500 dark:hover:bg-surface-container-high/60 px-space-xl py-space-md rounded-full hover:-translate-y-0.5 transition-all duration-200 font-semibold dark:font-normal" href={contactData.linkedinUrl}>
                <span>View LinkedIn</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="w-full py-space-xl border-t border-slate-200/80 dark:border-surface-container-highest flex flex-col md:flex-row items-center justify-between gap-space-md mt-space-3xl mb-space-xl">
        <div className="flex items-center gap-2 text-slate-900 dark:text-on-surface">
          <span className="font-headline-sm text-body-md font-bold dark:font-normal">{footerData.name}</span>
          <span className="text-slate-300 dark:text-on-surface-variant">/</span>
          <span className="font-label-code text-label-code text-slate-500 dark:text-on-surface-variant">{footerData.tagline}</span>
        </div>
        <div className="flex items-center gap-space-md">
          {footerData.twitterUrl && footerData.twitterUrl !== '#' && <a className="font-label-code text-label-code text-slate-500 dark:text-on-surface-variant hover:text-indigo-600 dark:hover:text-primary transition-colors" href={footerData.twitterUrl}>Twitter</a>}
          {footerData.githubUrl && footerData.githubUrl !== '#' && <a className="font-label-code text-label-code text-slate-500 dark:text-on-surface-variant hover:text-indigo-600 dark:hover:text-primary transition-colors" href={footerData.githubUrl}>GitHub</a>}
          {footerData.dribbbleUrl && footerData.dribbbleUrl !== '#' && <a className="font-label-code text-label-code text-slate-500 dark:text-on-surface-variant hover:text-indigo-600 dark:hover:text-primary transition-colors" href={footerData.dribbbleUrl}>Dribbble</a>}
        </div>
      </footer>
    </>
  );
}
