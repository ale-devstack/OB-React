import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const Home           = lazy(() => import('./components/pages/Home'));
const ServicesPage   = lazy(() => import('./components/pages/ServicesPage'));
const AboutSection   = lazy(() => import('./components/pages/AboutSection'));
const ContactSection = lazy(() => import('./components/pages/ContactSection'));
const PageNotFound   = lazy(() => import('./components/lib/PageNotFound'));

function App() {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [isLoaderFading, setIsLoaderFading] = useState(false);

  useEffect(() => {
    const isHomePath = /^\/OB-React\/?$/.test(window.location.pathname) || /^\/$/.test(window.location.pathname);

    const closeLoader = () => {
      setIsLoaderFading(true);
      setTimeout(() => setIsLoaderVisible(false), 220);
    };

    let homeReadyTimeout;

    if (isHomePath) {
      const onHomeReady = () => {
        clearTimeout(homeReadyTimeout);
        closeLoader();
      };

      window.addEventListener('orangebee:home-ready', onHomeReady, { once: true });
      homeReadyTimeout = setTimeout(closeLoader, 2000);

      return () => {
        window.removeEventListener('orangebee:home-ready', onHomeReady);
        clearTimeout(homeReadyTimeout);
      };
    }

    const loaderTimer = setTimeout(closeLoader, 250);
    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    // Prefetch other routes after the page is idle
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const shouldPrefetch = !(connection?.saveData || /2g/.test(connection?.effectiveType || ''));

    if (!shouldPrefetch) {
      return undefined;
    }

    const prefetch = () => {
      import('./components/pages/ServicesPage');
      import('./components/pages/AboutSection');
      import('./components/pages/ContactSection');
    };

    let idleId;
    let prefetchTimer;

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(prefetch, { timeout: 3000 });
    } else {
      prefetchTimer = setTimeout(prefetch, 2000);
    }

    return () => {
      if (prefetchTimer) clearTimeout(prefetchTimer);
      if (idleId && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId);
    };
  }, []);

  return (
    <>
      {isLoaderVisible && (
        <div id="app-loader" className={isLoaderFading ? 'fade-out' : ''}>
          <div className="spinner" />
        </div>
      )}

      <BrowserRouter basename="/OB-React">
        <Suspense fallback={null}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/nosotros" element={<AboutSection />} />
              <Route path="/contacto" element={<ContactSection />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
