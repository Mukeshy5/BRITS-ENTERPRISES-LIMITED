import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Product from './common/Product'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import RequestQuote from './pages/RequestQuote'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Developer from './common/developer'
import ScrollToTop from './common/ScrollToTop'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/developer" element={<Developer />} />
            
            <Route path="*" element={<h1 className="text-center py-24 text-4xl">404 Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
