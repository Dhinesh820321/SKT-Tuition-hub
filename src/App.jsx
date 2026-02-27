import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollProgress from './components/ScrollProgress';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import StaffDetail from './pages/StaffDetail';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="page-wrapper">
      <ScrollProgress />
      <ScrollToTop />

      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/staff/:id" element={<StaffDetail />} />

        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
