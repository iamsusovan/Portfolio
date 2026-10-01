import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Metrics } from './components/Metrics';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <div className="bg-slate-50 dark:bg-background font-body-md text-slate-900 dark:text-on-surface antialiased min-h-screen relative selection:bg-indigo-100 dark:selection:bg-primary-container selection:text-indigo-600 dark:selection:text-on-primary-container">

        {/* Background decorations */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[52rem] dark:w-[48rem] h-[30rem] dark:h-[28rem] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.14),transparent_70%)] blur-3xl"></div>
          <div className="absolute top-1/3 -right-32 w-[36rem] dark:w-[32rem] h-[36rem] dark:h-[32rem] bg-[radial-gradient(circle,rgba(6,182,212,0.08),transparent_65%)] blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-32 w-[32rem] h-[32rem] bg-[radial-gradient(circle,rgba(99,102,241,0.06),transparent_60%)] blur-3xl dark:hidden"></div>
        </div>

        <Header />

        <main className="w-full pt-16 bg-transparent relative z-10">
          <div className="flex flex-col w-full">
            <Hero />

            <div className="w-full max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <CaseStudies />
              <Expertise />
              <Experience />
              <Metrics />
              <Contact />
            </div>
          </div>
        </main>

      </div>
    </>
  );
}

export default App;
