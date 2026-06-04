import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpeg";
import heroBgMobile from "../assets/mobile.jpeg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      {/* <!-- Hero Section --> */}
      <section className="relative min-h-screen md:min-h-screen overflow-hidden flex flex-col">
        {/* <!-- Background Image --> */}
        <div className="absolute inset-0">
          <picture className="w-full h-full">
            {/* 768px se kam screen par mobile.jpeg dikhayega */}
            <source media="(max-width: 768px)" srcSet={heroBgMobile} />
            {/* Desktop ke liye default hero-bg.jpeg load karega */}
            <img
              src={heroBg}
              alt="Air Cargo Background"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#02172B] via-[#02172B]/80 to-transparent"></div>
        </div>

        {/* <!-- Content --> */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-4 flex-grow flex items-center">
          <div className="max-w-xl pt-10">
            <p className="text-gray-300 text-sm mb-4">Company No.: 14985907</p>

            <h1 className="text-[#E8C48A] text-3xl sm:text-6xl md:text-7xl font-serif font-bold leading-tight md:leading-none">
              BRITS
              <br />
              ENTERPRISES
              <br />
              LIMITED
            </h1>

            <div className="w-14 h-[2px] bg-[#E8C48A] my-8"></div>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
              A global business delivering excellence across air freight and
              premium lifestyle products with quality you can trust.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-5">
              <a
                href="#business"
                className="bg-[#E8C48A] text-black font-semibold px-8 py-4 rounded-lg hover:bg-[#dcb06d] transition text-center"
              >
                OUR BUSINESS →
              </a>

              <Link
                to="/contact"
                className="border border-[#E8C48A] text-white px-8 py-4 rounded-lg hover:bg-[#E8C48A] hover:text-black transition text-center"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- Bottom Info Bar --> */}
        <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 bg-[#011B33]/95 border-t border-[#163453] z-20">
          <div className="max-w-7xl mx-auto px-8 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-white">
              {/* <!-- Company --> */}
              <div className="flex items-start gap-4">
                <div className="text-3xl md:text-4xl text-[#E8C48A]">🏢</div>
                <div>
                  <p className="text-[#E8C48A] text-sm">Company No.</p>
                  <h3 className="text-lg md:text-2xl font-semibold">
                    14985907
                  </h3>
                </div>
              </div>

              {/* <!-- Address --> */}
              <div className="flex items-start gap-4">
                <div className="text-3xl md:text-4xl text-[#E8C48A]">📍</div>
                <div>
                  <p className="text-[#E8C48A] text-[10px] uppercase tracking-widest">Address</p>
                  <p className="text-sm md:text-base leading-snug">
                    Stanley House, kelvin way, Crawley, England, RH10 9SE
                  </p>
                </div>
              </div>

              {/* <!-- Business --> */}
              <div className="flex items-start gap-4">
                <div className="text-3xl md:text-4xl text-[#E8C48A]">⚙️</div>
                <div>
                  <p className="text-[#E8C48A] text-[10px] uppercase tracking-widest">Nature of Business</p>
                  <p className="text-sm md:text-base leading-snug">
                    Freight Air Transport, Premium Lifestyle Products & Interior
                    Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-16 md:py-24" id="business">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="sm:col-span-2 lg:col-span-1 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Delivering Value Across The World
              </h2>
              <p className="text-gray-600 mb-6">
                Brits Enterprises Limited is a diversified company engaged in
                global air freight solutions, premium products and interior
                decorative services.
              </p>
              <Link
                to="/products"
                className="inline-block bg-[#061A2F] text-white px-8 py-4 rounded-lg hover:bg-black transition-colors text-center"
              >
                Explore More
              </Link>
            </div>

            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
                className="h-56 w-full object-cover"
                alt="Freight Air Transport"
                title="Freight Air Transport"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  Freight Air Transport
                </h3>
                <p className="text-gray-600">
                  Reliable and efficient global air freight solutions.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800"
                className="h-56 w-full object-cover"
                alt="Tote Bags / Shopping Bags"
                title="Tote Bags / Shopping Bags"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  Tote Bags / Shopping Bags
                </h3>
                <p className="text-gray-600">
                  Premium bags designed for modern lifestyles.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800"
                className="h-56 w-full object-cover"
                alt="Jewellery Box / Gift Boxes"
                title="Jewellery Box / Gift Boxes"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  Jewellery Box / Gift Boxes
                </h3>
                <p className="text-gray-600">
                  Luxury packaging solutions for gifts and jewellery.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1562184552-997c461abbe6?q=80&w=800"
                className="h-56 w-full object-cover"
                alt="Interior Decorative Painting"
                title="Interior Decorative Painting"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  Interior Decorative Painting
                </h3>
                <p className="text-gray-600">
                  Elegant wall finishes and decorative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aviation & Airport Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#d7b17c] text-xs font-bold uppercase tracking-widest block mb-3">
              Logistics Excellence
            </span>
            <h2 className="text-[#061A2F] font-serif text-3xl md:text-5xl font-bold leading-tight">
              Aviation & Airport Solutions
            </h2>
            <div className="w-20 h-1 bg-[#d7b17c] mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ground Handling */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800"
                  alt="Ground Handling"
                  title="Ground Handling"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-[#061A2F]">
                  Ground Handling
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional ramp and terminal support services for
                  international aircraft operations.
                </p>
              </div>
            </div>

            {/* Cargo Charters */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800"
                  alt="Cargo Charters"
                  title="Cargo Charters"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-[#061A2F]">
                  Cargo Charters
                </h3>
                <p className="text-gray-600 text-sm">
                  Bespoke charter solutions for time-sensitive, oversized, and
                  specialized cargo shipments.
                </p>
              </div>
            </div>

            {/* Secure Warehousing */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800"
                  alt="Secure Warehousing"
                  title="Secure Warehousing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-[#061A2F]">
                  Secure Warehousing
                </h3>
                <p className="text-gray-600 text-sm">
                  High-security on-airport storage facilities with advanced
                  inventory management.
                </p>
              </div>
            </div>

            {/* Global Logistics */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800"
                  alt="Global Logistics"
                  title="Global Logistics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-[#061A2F]">
                  Global Logistics
                </h3>
                <p className="text-gray-600 text-sm">
                  Integrated supply chain management connecting major global
                  airport hubs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#061A2F] text-white relative overflow-hidden font-sans">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 opacity-10 grayscale pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#061A2F]/90 via-[#061A2F] to-[#061A2F]/95"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#d7b17c] text-xs font-bold uppercase tracking-[0.4em] block mb-4">
              Why Choose Brits?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Quality. Reliability.{" "}
              <span className="text-[#d7b17c]">Global Reach.</span>
            </h2>
            <div className="w-20 h-1 bg-[#d7b17c] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Global Network",
                desc: "Strong global connections ensuring seamless operations.",
                icon: "🌐",
              },
              {
                title: "Quality First",
                desc: "We maintain the highest standards in every service.",
                icon: "🛡️",
              },
              {
                title: "Customer Focus",
                desc: "Your success is at the heart of everything we do.",
                icon: "🤝",
              },
              {
                title: "Diverse Range",
                desc: "Expertise in freight, lifestyle, and interiors.",
                icon: "📦",
              },
              {
                title: "Trusted Name",
                desc: "Years of industry experience you can truly rely on.",
                icon: "🏆",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[#d7b17c]/50 transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#d7b17c]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#d7b17c]/20 transition-all duration-500 shadow-xl">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-[#d7b17c] text-[13px] font-bold uppercase tracking-widest mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="bg-gray-100 p-2 border border-gray-200 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                  alt="Office Building"
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-6">
              <span className="text-[#d7b17c] text-xs font-bold uppercase tracking-widest block mb-3">
                About Us
              </span>
              <h2 className="text-[#061A2F] font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
                Built on Trust.
                <br />
                Driven by Excellence.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Brits Enterprises Limited is a UK registered company committed
                to delivering world-class solutions in air freight, premium
                products and interior services.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Our mission is to combine quality, innovation and reliability to
                create lasting value for our global clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                  <span className="text-2xl">🌐</span>
                  <span className="text-[#061A2F] font-bold text-[10px] uppercase tracking-wider">
                    Global Operations
                  </span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3 border-y sm:border-y-0 sm:border-x border-gray-100 py-4 sm:py-0 px-2 justify-center md:justify-start">
                  <span className="text-2xl">✅</span>
                  <span className="text-[#061A2F] font-bold text-[10px] uppercase tracking-wider">
                    Quality Products
                  </span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                  <span className="text-2xl">😊</span>
                  <span className="text-[#061A2F] font-bold text-[10px] uppercase tracking-wider">
                    Customer Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
