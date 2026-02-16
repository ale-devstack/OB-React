import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
