import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'CONTACT US', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white/95 backdrop-blur-md text-[#235347] sticky top-0 z-50 shadow-sm border-b border-[#235347]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="flex flex-col justify-center">
              <h2 className="text-black text-sm md:text-xl font-bold leading-none tracking-tighter uppercase group-hover:text-[#235347] transition-colors duration-300">
                BRITS
              </h2>
              <span className="text-[#235347] text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1">
                Enterprises <span className="text-[#8EB69B]">Ltd</span>
              </span>
             
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-10">
            {navLinks.map((link) => (
              <li key={link.path} className="group">
                <Link 
                  to={link.path}
                  className={`relative inline-block text-[13px] font-bold tracking-widest transition-all duration-300 pb-1 hover:scale-105
                    ${isActive(link.path) ? 'text-black' : 'text-[#235347] hover:text-black'}`}
                >
                  {link.name}
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#8EB69B] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link to="/request-quote" className="hidden sm:block">
              <button className="bg-[#235347] hover:bg-black text-white px-8 py-2.5 rounded-lg font-bold text-[11px] tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#235347]/20 hover:-translate-y-0.5 uppercase">
                ENQUIRE NOW
              </button>
            </Link>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-2xl text-[#235347] focus:outline-none transition-transform hover:scale-110"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.path} className="border-b border-white/5 last:border-0">
                <Link 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-sm font-semibold tracking-wide ${isActive(link.path) ? 'text-[#235347]' : 'text-gray-600'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link to="/request-quote" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#235347] text-white py-3.5 rounded-lg font-bold text-sm mt-2 shadow-inner">
                ENQUIRE NOW
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
