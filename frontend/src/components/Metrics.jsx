import React, { useState, useEffect } from 'react';

export function Metrics() {
  const [metricsData, setMetricsData] = useState({
    stat1Value: "5+", stat1Label: "Years of Craft", stat1Desc: "Bridging UI design & code",
    stat2Value: "30+", stat2Label: "Projects", stat2Desc: "Successfully delivered",
    stat3Value: "13+", stat3Label: "Core Skills", stat3Desc: "Mastered in production",
    stat4Value: "99%", stat4Label: "Satisfaction", stat4Desc: "Client & employer rating"
  });

  useEffect(() => {
    const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
    fetch(`${strapiUrl}/api/metrics?populate=*`)
      .then(res => res.json())
      .then(response => {
        const data = response?.data?.attributes || response?.data || response;
        if (data) {
          setMetricsData(prev => ({
            stat1Value: data.stat1Value || prev.stat1Value, stat1Label: data.stat1Label || prev.stat1Label, stat1Desc: data.stat1Desc || prev.stat1Desc,
            stat2Value: data.stat2Value || prev.stat2Value, stat2Label: data.stat2Label || prev.stat2Label, stat2Desc: data.stat2Desc || prev.stat2Desc,
            stat3Value: data.stat3Value || prev.stat3Value, stat3Label: data.stat3Label || prev.stat3Label, stat3Desc: data.stat3Desc || prev.stat3Desc,
            stat4Value: data.stat4Value || prev.stat4Value, stat4Label: data.stat4Label || prev.stat4Label, stat4Desc: data.stat4Desc || prev.stat4Desc
          }));
        }
      })
      .catch(err => console.error("Error fetching metrics data from Strapi:", err));
  }, []);

  return (
    <section className="py-space-2xl">
      <div className="rounded-2xl bg-white dark:bg-surface-container-low/60 border border-slate-200/80 dark:border-none p-space-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-xl dark:backdrop-blur-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-lg">
          <div className="flex flex-col gap-1">
            <span className="font-display-hero text-headline-lg lg:text-display-hero text-indigo-600 dark:text-secondary font-extrabold dark:font-bold">{metricsData.stat1Value}</span>
            <span className="font-headline-sm text-headline-sm text-slate-900 dark:text-on-surface font-bold dark:font-normal">{metricsData.stat1Label}</span>
            <span className="font-body-sm text-body-sm text-slate-500 dark:text-on-surface-variant">{metricsData.stat1Desc}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display-hero text-headline-lg lg:text-display-hero text-cyan-600 dark:text-primary font-extrabold dark:font-bold">{metricsData.stat2Value}</span>
            <span className="font-headline-sm text-headline-sm text-slate-900 dark:text-on-surface font-bold dark:font-normal">{metricsData.stat2Label}</span>
            <span className="font-body-sm text-body-sm text-slate-500 dark:text-on-surface-variant">{metricsData.stat2Desc}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display-hero text-headline-lg lg:text-display-hero text-violet-600 dark:text-tertiary font-extrabold dark:font-bold">{metricsData.stat3Value}</span>
            <span className="font-headline-sm text-headline-sm text-slate-900 dark:text-on-surface font-bold dark:font-normal">{metricsData.stat3Label}</span>
            <span className="font-body-sm text-body-sm text-slate-500 dark:text-on-surface-variant">{metricsData.stat3Desc}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display-hero text-headline-lg lg:text-display-hero text-emerald-600 dark:text-secondary-fixed-dim font-extrabold dark:font-bold">{metricsData.stat4Value}</span>
            <span className="font-headline-sm text-headline-sm text-slate-900 dark:text-on-surface font-bold dark:font-normal">{metricsData.stat4Label}</span>
            <span className="font-body-sm text-body-sm text-slate-500 dark:text-on-surface-variant">{metricsData.stat4Desc}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
