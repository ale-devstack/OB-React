import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}