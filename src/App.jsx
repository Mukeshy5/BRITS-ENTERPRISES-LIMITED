import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './common/ScrollToTop'

// Lazy load routes to improve initial load time
const Home = lazy(() => import('./components/Home'))
const Product = lazy(() => import('./common/Product'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const RequestQuote = lazy(() => import('./pages/RequestQuote'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))

const LoadingSpinner = () => <div className="flex justify-center items-center h-screen bg-white">Loading...</div>

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Product />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              
              <Route path="*" element={<h1 className="text-center py-24 text-4xl">404 Not Found</h1>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
