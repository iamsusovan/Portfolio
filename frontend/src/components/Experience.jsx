import React, { useState, useEffect } from 'react';

export function Experience() {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      attributes: {
        role: "UI/UX Developer",
        company: "SentientGeeks",
        period: "2023 — Present",
        location: "Kolkata, India",
        description: "Developed responsive UIs and cross-platform applications using React, Next.js, Angular, .NET Blazor, MAUI, and WPF.",
        badge: "Current",
        order: 1
      }
    },
    {
      id: 2,
      attributes: {
        role: "HTML Developer",
        company: "Futuristic Bug Pvt Ltd",
        period: "2022 — 2023",
        location: "Kolkata, India",
        description: "Converted Figma, XD, and Photoshop designs into responsive HTML/CSS with backend support for .NET, WordPress, PHP, and Shopify.",
        badge: "",
        order: 2
      }
    },
    {
      id: 3,
      attributes: {
        role: "Creative Designer / UX Developer",
        company: "Tangent Tech Solutions",
        period: "2021 — 2022",
        location: "Kolkata, India",
        description: "Designed and built MVC layouts for major clients including Tata Sustainability Group, Tata AIG, IITBAA, and Desun Hospital.",
        badge: "",
        order: 3
      }
    }
  ]);

  useEffect(() => {
    const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
    fetch(`${strapiUrl}/api/experiences?sort=order:asc`)
      .then(res => res.json())
      .then(response => {
        const data = response?.data;
        if (data && data.length > 0) {
          setExperiences(data);
        }
      })
      .catch(err => console.error("Error fetching experiences from Strapi:", err));
  }, []);

  return (
    <section className="py-space-3xl flex flex-col gap-space-2xl" id="experience">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div>
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-indigo-600 dark:text-primary font-semibold dark:font-normal">
            Track Record
          </span>
          <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-on-surface mt-1 font-bold dark:font-normal">
            Work Experience &amp; Leadership
          </h2>
        </div>
        <a className="inline-flex items-center gap-1 font-label-code text-label-code text-indigo-600 dark:text-secondary hover:text-indigo-800 font-semibold dark:font-normal hover:underline" href="#">
          <span>Download Comprehensive Resume (PDF)</span>
          <span className="material-symbols-outlined text-sm">download</span>
        </a>
      </div>
      <div className="flex flex-col gap-space-md">
        
        {experiences.map((exp, index) => {
          const { role, company, period, location, description, badge } = exp.attributes || exp;
          
          // Generate a color variant based on index
          const colors = [
            { bg: "bg-indigo-50 dark:bg-surface-container-highest border-indigo-100", text: "text-indigo-600 dark:text-primary", letterBg: "bg-indigo-50 dark:bg-surface-container-highest", compText: "text-indigo-600 dark:text-primary-fixed-dim" },
            { bg: "bg-cyan-50 dark:bg-surface-container-highest border-cyan-100", text: "text-cyan-700 dark:text-secondary", letterBg: "bg-cyan-50 dark:bg-surface-container-highest", compText: "text-cyan-700 dark:text-primary-fixed-dim" },
            { bg: "bg-violet-50 dark:bg-surface-container-highest border-violet-100", text: "text-violet-700 dark:text-tertiary", letterBg: "bg-violet-50 dark:bg-surface-container-highest", compText: "text-violet-700 dark:text-primary-fixed-dim" }
          ];
          const color = colors[index % colors.length];

          return (
            <div key={exp.id} className="p-space-lg rounded-2xl bg-white dark:bg-surface-container-low/80 border border-slate-200/80 dark:border-none shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-md hover:shadow-md dark:hover:bg-surface-container-high/60 transition-all duration-200 flex flex-col lg:flex-row lg:items-start justify-between gap-space-md dark:backdrop-blur-xl">
              <div className="flex items-start gap-space-md">
                <div className={`w-12 h-12 rounded-xl ${color.letterBg} border ${color.bg.split(' ')[2] || 'border-transparent'} dark:border-none flex items-center justify-center ${color.text} font-headline-sm text-headline-sm shrink-0 font-bold dark:font-normal`}>
                  {company.charAt(0)}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-on-surface font-bold dark:font-normal">{role}</h3>
                    {badge && (
                      <span className="px-2.5 dark:px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-secondary/10 border border-emerald-200 dark:border-none text-emerald-700 dark:text-secondary font-label-caps text-label-caps font-semibold dark:font-normal">
                        {badge}
                      </span>
                    )}
                  </div>
                  <p className={`font-body-md text-body-md ${color.compText} font-medium dark:font-normal mt-0.5`}>{company}</p>
                  <ul className="mt-space-sm space-y-1.5 font-body-sm text-body-sm text-slate-600 dark:text-on-surface-variant max-w-2xl leading-relaxed dark:leading-normal">
                    <li className="flex items-start gap-2">
                      <span className={`${color.text} mt-1 text-xs`}>◆</span>
                      <span>{description}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="font-label-code text-label-code text-slate-500 dark:text-on-surface-variant shrink-0 lg:text-right">
                {period}<br/>
                <span className={`text-xs ${badge ? 'text-indigo-600 dark:text-secondary font-semibold dark:font-normal' : 'text-slate-500 dark:text-on-surface-variant'}`}>{location}</span>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
