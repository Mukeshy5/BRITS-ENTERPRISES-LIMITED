import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#235347] text-[#DAF1DE] pt-16 pb-6 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          
          {/* Brand & Socials Section */}
          <div className="md:col-span-1 space-y-6">
            <Link to="/" className="inline-block group">
              <div className="flex flex-col justify-center">
                <h2 className="text-white text-xl font-bold leading-none tracking-tighter uppercase group-hover:text-[#8EB69B] transition-colors duration-300">
                  BRITS
                </h2>
                <span className="text-[#DAF1DE]/70 text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1">
                  Enterprises <span className="text-[#8EB69B]">Ltd</span>
                </span>
              </div>
            </Link>
            <div className="flex gap-4">
              {['facebook-f', 'instagram', 'linkedin-in'].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#DAF1DE] hover:bg-[#8EB69B] hover:text-black hover:-translate-y-1 transition-all duration-300">
                  <i className={`fab fa-${icon} text-xs`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-[#8EB69B] text-xs font-bold uppercase tracking-[0.3em] mb-6">Company</h4>
            <ul className="space-y-4 text-[13px] text-[#DAF1DE]/80">
              <li className="group w-fit">
                <Link to="/" className="hover:text-white transition-colors relative pb-1">
                  Home Landing
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#8EB69B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group w-fit">
                <Link to="/about" className="hover:text-white transition-colors relative pb-1">
                  About Story
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#8EB69B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group w-fit">
                <Link to="/products" className="hover:text-white transition-colors relative pb-1">
                  Our Products
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#8EB69B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="md:col-span-1">
            <h4 className="text-[#8EB69B] text-xs font-bold uppercase tracking-[0.3em] mb-6">Support</h4>
            <ul className="space-y-4 text-[13px] text-[#DAF1DE]/80">
              <li className="group w-fit">
                <Link to="/contact" className="hover:text-white transition-colors relative pb-1">
                  Contact Us
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#8EB69B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group w-fit">
                <Link to="/request-quote" className="hover:text-white transition-colors relative pb-1">
                  Get A Quote
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#8EB69B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group w-fit">
                <Link to="/privacy" className="hover:text-white transition-colors relative pb-1">
                  Privacy Policy
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#8EB69B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-1">
            <h4 className="text-[#8EB69B] text-xs font-bold uppercase tracking-[0.3em] mb-6">Connect</h4>
            <div className="space-y-4 text-[13px] text-[#DAF1DE]/80">
              <div className="flex gap-3 items-start">
                <span className="text-[#8EB69B] mt-0.5">📍</span>
                <p className="leading-relaxed">Stanley House, Kelvin Way, Crawley, England</p>
              </div>
              <div className="flex items-center gap-3 group">
                <span className="text-[#8EB69B]">📩</span>
                <a href="mailto:info@britsenterprises.co.uk" className="group-hover:text-white transition-colors">info@britsenterprises.co.uk</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#DAF1DE]/40 uppercase">
            © {new Date().getFullYear()} BRITS ENTERPRISES LIMITED. Global Solutions.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#DAF1DE]/40 uppercase tracking-widest">Designed by</span>
            <Link 
              to="/developer" 
              className="text-[#8EB69B] text-[10px] font-bold uppercase tracking-widest hover:underline decoration-[#8EB69B]/50 underline-offset-4"
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
