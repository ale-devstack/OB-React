import React, { lazy, Suspense } from 'react';
import Header from './components/common/Header';

const Footer = lazy(() => import('./components/common/Footer'));

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
