import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './Layout';

// Landing / Home
import Home from './components/pages/Home';

// Pages
import ServicesPage from './components/pages/ServicesPage';
import AboutSection from './components/pages/AboutSection';
import ContactSection from './components/pages/ContactSection';
import PageNotFound from './components/lib/PageNotFound';

// Imágenes a precargar
import heroDesktop from '/hero-desktop.webp';
import heroMobile from '/hero-mobile.webp';
import logoAbeja from '/logo-abeja.png';

const imagesToPreload = [heroDesktop, heroMobile, logoAbeja];

function App() {
  const [loaded, setLoaded] = useState(false);

useEffect(() => {
  // 1. Esperar a que las imágenes se precarguen
  const imagePromises = imagesToPreload.map((src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = resolve;
    });
  });

  // 2. Esperar a que todas las fuentes estén listas
  const fontsReady = document.fonts.ready;

  // 3. Esperar ambas cosas
  Promise.all([...imagePromises, fontsReady]).then(() => {
    // Pequeño delay para que React termine de pintar todo
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
        <Layout>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Pages */}
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/nosotros" element={<AboutSection />} />
            <Route path="/contacto" element={<ContactSection />} />

            {/* 404 */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;