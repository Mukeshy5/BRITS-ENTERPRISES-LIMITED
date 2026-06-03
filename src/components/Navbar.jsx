import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

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
    <nav className="bg-[#061A2F] text-white sticky top-0 z-50 shadow-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <img 
              src={logo} 
              alt="BRITS ENTERPRISES LIMITED" 
              className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center border-l border-white/10 pl-2 md:pl-3">
              <h2 className="text-[#d7b17c] text-sm md:text-xl font-bold leading-none tracking-tighter uppercase font-serif group-hover:text-white transition-colors duration-300">
                BRITS
              </h2>
              <span className="text-gray-400 text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1">
                Enterprises <span className="text-[#d7b17c]">Ltd</span>
              </span>
             
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`text-[13px] font-bold tracking-widest transition duration-300 hover:text-[#d7b17c]
                    ${isActive(link.path) ? 'text-[#d7b17c]' : 'text-gray-300'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link to="/request-quote" className="hidden sm:block">
              <button className="bg-[#d7b17c] hover:bg-white text-black px-6 py-2 rounded-md font-bold text-[11px] tracking-widest transition duration-300 shadow-md uppercase">
                ENQUIRE NOW
              </button>
            </Link>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-2xl text-[#d7b17c] focus:outline-none transition-transform hover:scale-110"
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
                  className={`block py-3 text-sm font-semibold tracking-wide ${isActive(link.path) ? 'text-[#d7b17c]' : 'text-gray-300'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link to="/request-quote" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#d7b17c] text-black py-3.5 rounded-lg font-bold text-sm mt-2 shadow-inner">
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
