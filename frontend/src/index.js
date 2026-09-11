import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_Page/home/HomePage';
import AboutPage from './landing_Page/about/AboutPage';
import PricingPage from './landing_Page/pricing/PricingPage';
import Productspage from './landing_Page/products/ProductsPage';
import SignupPage from './landing_Page/signup/SignupPage';
import SupportPage from './landing_Page/support/SupportPage';
import NavBar from './landing_Page/NavBar';
import Footer from './landing_Page/Footer'
import NotFound from './landing_Page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<Productspage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
);


