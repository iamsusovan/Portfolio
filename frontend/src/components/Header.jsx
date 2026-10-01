import React, { useState, useEffect } from 'react';

export function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [navbarItems, setNavbarItems] = useState([
    { id: 'hero', text: 'Work', href: '#hero' },
    { id: 'expertise', text: 'Expertise', href: '#expertise' },
    { id: 'selected-work', text: 'Case Studies', href: '#selected-work' },
    { id: 'experience', text: 'Experience', href: '#experience' },
    { id: 'contact', text: 'Contact', href: '#contact' }
  ]);

  const [headerData, setHeaderData] = useState({
    name: "Susovan Sarkar",
    title: "UI/UX Developer",
    logoUrl: "https://ui-avatars.com/api/?name=S+S&background=4f46e5&color=fff&rounded=true&bold=true",
    profileImageUrl: "https://ui-avatars.com/api/?name=Susovan+Sarkar&background=0284c7&color=fff"
  });

  useEffect(() => {
    const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
    fetch(`${strapiUrl}/api/header?populate=*`)
      .then(res => res.json())
      .then(response => {
        // Strapi v4 typically returns { data: { attributes: { ... } } }
        const data = response?.data?.attributes || response?.data || response;
        if (data) {
          if (data.navbarItems) setNavbarItems(data.navbarItems);
          setHeaderData(prev => ({
            name: data.name || prev.name,
            title: data.title || prev.title,
            logoUrl: data.logoUrl || prev.logoUrl,
            profileImageUrl: data.profileImageUrl || prev.profileImageUrl
          }));
        }
      })
      .catch(err => console.error("Error fetching header data from Strapi:", err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id], div[id="hero"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const activeClass = "transition-all bg-white dark:bg-primary-container text-slate-900 dark:text-on-primary-container font-headline-sm rounded-full px-space-sm py-space-2xs shadow-sm dark:shadow-[0_0_16px_rgba(99,102,241,0.35)] text-xs font-semibold dark:font-normal";
  const inactiveClass = "font-body-sm text-body-sm text-slate-600 dark:text-on-surface-variant hover:text-slate-900 dark:hover:text-on-surface px-space-sm py-space-2xs rounded-full transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-space-sm px-gutter-mobile md:px-gutter-desktop">
      <div className="h-16 w-full max-w-container-max bg-white/85 dark:bg-surface-container-low/75 backdrop-blur-2xl border border-slate-200/80 dark:border-none rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] px-space-md flex items-center justify-between transition-all">

        <div className="flex items-center gap-space-sm pl-space-2xs">
          <img
            alt={`${headerData.name} Logo`}
            className="h-8 w-auto object-contain rounded-md dark:rounded-none"
            src={headerData.logoUrl}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-slate-900 dark:text-on-surface leading-tight">{headerData.name}</span>
            <span className="font-label-caps text-label-caps text-indigo-600 dark:text-secondary uppercase tracking-widest font-semibold dark:font-normal">{headerData.title}</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-space-xs bg-slate-100/80 dark:bg-surface-container-lowest/60 p-space-2xs rounded-full border border-slate-200/60 dark:border-none">
          {navbarItems.map((item) => {
            const sectionId = item.id_name || (typeof item.id === 'string' ? item.id : null) || item.href?.replace('#', '') || 'hero';
            return (
              <a
                key={sectionId}
                aria-current={activeSection === sectionId ? "page" : undefined}
                className={activeSection === sectionId ? activeClass : inactiveClass}
                href={item.href}
              >
                {item.text || item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm">
          <a className="hidden sm:inline-flex items-center justify-center font-headline-sm text-body-sm bg-primary dark:bg-primary-container text-white dark:text-on-primary-container px-space-md py-space-xs rounded-full hover:bg-indigo-700 dark:hover:bg-primary dark:hover:text-on-primary transition-all duration-200 shadow-md shadow-indigo-500/20 dark:shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:translate-y-[-1px] font-semibold dark:font-normal" href="#contact">
            Book a Call
          </a>
          <div className="p-0.5 dark:p-space-2xs rounded-full ring-2 ring-indigo-500/20 dark:ring-0 dark:bg-surface-container-high/60">
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src={headerData.profileImageUrl}
            />
          </div>
        </div>

      </div>
    </header>
  );
}
