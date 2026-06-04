import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#DAF1DE] text-gray-800 pt-12 pb-6 border-t border-[#235347]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          
          {/* Brand & Socials Section */}
          <div className="md:col-span-1 space-y-6">
            <Link to="/" className="inline-block group">
              <div className="flex flex-col justify-center">
                <h2 className="text-[#235347] text-xl font-bold leading-none tracking-tighter uppercase group-hover:text-black transition-colors duration-300">
                  BRITS
                </h2>
                <span className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1">
                  Enterprises <span className="text-[#235347]">Ltd</span>
                </span>
              </div>
            </Link>
            <div className="flex gap-4">
              {['facebook-f', 'instagram', 'linkedin-in'].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-[#235347]/5 border border-[#235347]/10 flex items-center justify-center text-[#235347] hover:bg-[#235347] hover:text-white hover:-translate-y-1 transition-all duration-300">
                  <i className={`fab fa-${icon} text-xs`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-[#235347] text-xs font-bold uppercase tracking-[0.3em] mb-6">Company</h4>
            <ul className="space-y-4 text-[13px] text-gray-600">
              <li className="group w-fit">
                <Link to="/" className="hover:text-black transition-colors relative pb-1">
                  Home Landing
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#235347] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group w-fit">
                <Link to="/about" className="hover:text-black transition-colors relative pb-1">
                  About Story
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#235347] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group w-fit">
                <Link to="/products" className="hover:text-black transition-colors relative pb-1">
                  Our Products
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#235347] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="md:col-span-1">
            <h4 className="text-[#235347] text-xs font-bold uppercase tracking-[0.3em] mb-6">Support</h4>
            <ul className="space-y-4 text-[13px] text-gray-600">
              <li className="group w-fit">
                <Link to="/contact" className="hover:text-black transition-colors relative pb-1">
                  Contact Us
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#235347] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group w-fit">
                <Link to="/request-quote" className="hover:text-black transition-colors relative pb-1">
                  Get A Quote
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#235347] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group w-fit">
                <Link to="/privacy" className="hover:text-black transition-colors relative pb-1">
                  Privacy Policy
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#235347] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-1">
            <h4 className="text-[#235347] text-xs font-bold uppercase tracking-[0.3em] mb-6">Connect</h4>
            <div className="space-y-4 text-[13px] text-gray-600">
              <div className="flex gap-3 items-start">
                <span className="text-[#235347] mt-0.5">📍</span>
                <p className="leading-relaxed">Stanley House, Kelvin Way, Crawley, England</p>
              </div>
              <div className="flex items-center gap-3 group">
                <span className="text-[#235347]">📩</span>
                <a href="mailto:info@britsenterprises.co.uk" className="group-hover:text-black transition-colors">info@britsenterprises.co.uk</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#235347]/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
            © {new Date().getFullYear()} BRITS ENTERPRISES LIMITED. Global Solutions.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Designed by</span>
            <Link 
              to="/developer" 
              className="text-[#235347] text-[10px] font-bold uppercase tracking-widest hover:underline decoration-[#235347]/50 underline-offset-4"
            >
              Creative Developer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
