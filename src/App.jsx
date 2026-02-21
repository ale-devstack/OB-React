import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import ErrorBoundary from './components/common/ErrorBoundary';

// Carga perezosa (Code Splitting) de rutas
const Home           = lazy(() => import('./components/pages/Home'));
const ServicesPage   = lazy(() => import('./components/pages/ServicesPage'));
const AboutSection   = lazy(() => import('./components/pages/AboutSection'));
const ContactSection = lazy(() => import('./components/pages/ContactSection'));
const PageNotFound   = lazy(() => import('./components/lib/PageNotFound'));
const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy"));

// Corrección: Componente para hacer scroll al inicio al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  // Cambiado de useLayoutEffect a useEffect para evitar bloqueo del hilo principal
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

// NUEVO: Fallback visual suave para las transiciones de rutas en lazy load
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-orange-500/20 border-t-orange-500 rounded-full" />
  </div>
);

function App() {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  // 1. Manejo del Loader Inicial (Sincronizado con Home.jsx)
  useEffect(() => {
    const isHomePath = /^\/OB-React\/?$/.test(window.location.pathname) || /^\/$/.test(window.location.pathname);

    const closeLoader = () => {
      setIsLoaderVisible(false);
    };

    let homeReadyTimeout;

    if (isHomePath) {
      const onHomeReady = () => {
        clearTimeout(homeReadyTimeout);
        closeLoader();
      };

      // Escucha el evento que ahora dispara la imagen del Hero al terminar su LCP
      window.addEventListener('orangebee:home-ready', onHomeReady, { once: true });
      homeReadyTimeout = setTimeout(closeLoader, 600); // Contingencia

      return () => {
        window.removeEventListener('orangebee:home-ready', onHomeReady);
        clearTimeout(homeReadyTimeout);
      };
    }

    const loaderTimer = setTimeout(closeLoader, 250);
    return () => clearTimeout(loaderTimer);
  }, []);

  // 2. Prefetching inteligente de rutas en segundo plano
  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    // No precargar si el usuario tiene habilitado el ahorro de datos o una red 2G
    const shouldPrefetch = !(connection?.saveData || /2g/.test(connection?.effectiveType || ''));

    if (!shouldPrefetch) return undefined;

    const prefetch = () => {
      import('./components/pages/ServicesPage');
      import('./components/pages/AboutSection');
      import('./components/pages/ContactSection');
    };

    let idleId;
    let prefetchTimer;

    // Usar requestIdleCallback para no interrumpir el renderizado principal de React
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
        <div id="app-loader">
          <div className="spinner" />
        </div>
      )}

      <ErrorBoundary>
        <BrowserRouter>
          <ScrollToTop />
          {/* Corrección: Se agregó el fallback visual para evitar pantallas en blanco */}
          <Suspense fallback={<PageLoader />}>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<ServicesPage />} />
                <Route path="/nosotros" element={<AboutSection />} />
                <Route path="/contacto" element={<ContactSection />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/aviso-de-privacidad" element={<PrivacyPolicy />} />
              </Routes>
            </Layout>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;