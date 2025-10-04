// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Products';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CategoryProductsPage from './pages/CategoryProductsPage'; 

function App() {
  return (
    <>
      <Header /> 

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features /> 
                <Testimonials />
                <CallToAction />
              </>
            }
          />

          
          <Route path="/features/:categoryId" element={<CategoryProductsPage />} />


        </Routes>
      </main>

      <Footer /> 
    </>
  );
}


export default App;