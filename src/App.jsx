// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import TopButton from './components/TopButton';
import Hero from './components/Hero';
import Features from './components/Products';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CookieConsentBanner from './components/CookieConsentBanner';
import CategoryProductsPage from './pages/CategoryProductsPage';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGBPage from './pages/GeneralTermsAndConditions';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import ProductsPage from "./pages/ProductsPage";
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <CartProvider>
        <ScrollToTop />
        <TopButton />
        <Header />
        <CookieConsentBanner />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Testimonials />
                  <CallToAction />
                </>
              }
            />


            <Route path="/features/:categoryId" element={<CategoryProductsPage />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/agb" element={<AGBPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </main>

        <Footer />
      </CartProvider >
    </>
  );
}


export default App;