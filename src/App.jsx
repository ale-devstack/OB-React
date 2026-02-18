import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const Home           = lazy(() => import('./components/pages/Home'));
const ServicesPage   = lazy(() => import('./components/pages/ServicesPage'));
const AboutSection   = lazy(() => import('./components/pages/AboutSection'));
const ContactSection = lazy(() => import('./components/pages/ContactSection'));
const PageNotFound   = lazy(() => import('./components/lib/PageNotFound'));

function App() {
  useEffect(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 200);
    }
  }, []);

  return (
    <BrowserRouter basename="/OB-React">
      <Suspense fallback={null}>
        <Layout>
          <Routes>
            <Route path="/"          element={<Home />}           />
            <Route path="/servicios" element={<ServicesPage />}   />
            <Route path="/nosotros"  element={<AboutSection />}   />
            <Route path="/contacto"  element={<ContactSection />} />
            <Route path="*"          element={<PageNotFound />}   />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;