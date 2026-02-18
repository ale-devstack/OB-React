import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout (este sí se importa normal porque es el contenedor)
import Layout from './Layout';

// Lazy imports
// ✅ Correcto
const Home           = lazy(() => import('./components/pages/Home'));
const ServicesPage   = lazy(() => import('./components/pages/ServicesPage'));
const AboutSection   = lazy(() => import('./components/pages/AboutSection'));
const ContactSection = lazy(() => import('./components/pages/ContactSection'));
const PageNotFound   = lazy(() => import('./components/lib/PageNotFound'));

// Imágenes a precargar
import heroDesktop from '/hero-desktop.webp';
import heroMobile from '/hero-mobile.webp';
import logoAbeja from '/logo-abeja.png';

const imagesToPreload = [heroDesktop, heroMobile, logoAbeja];

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 1. Precargar imágenes
    const imagePromises = imagesToPreload.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    // 2. Precargar componentes
    const componentPromises = [
      import('./components/pages/Home'),
      import('./components/pages/ServicesPage'),
      import('./components/pages/AboutSection'),
      import('./components/pages/ContactSection'),
      import('./components/lib/PageNotFound'),
    ];

    // 3. Esperar fuentes
    const fontsReady = document.fonts.ready;

    // 4. Esperar todo
    Promise.all([...imagePromises, ...componentPromises, fontsReady]).then(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const loader = document.getElementById('loader');
          if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => loader.remove(), 500);
          }
          setLoaded(true);
        }, 500);
      });
    });
  }, []);

  return (
    <BrowserRouter basename="/OB-React">
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
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
      </div>
    </BrowserRouter>
  );
}

export default App;