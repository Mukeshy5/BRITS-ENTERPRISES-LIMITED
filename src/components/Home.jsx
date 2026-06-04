import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpeg";
import heroBgMobile from "../assets/mobile.jpeg";

const Home = () => {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <picture className="block w-full h-full">
            <source media="(max-width:768px)" srcSet={heroBgMobile} />
            <img
              src={heroBg}
              alt="Air Cargo Background"
              className="w-full h-full object-cover"
            />
          </picture>

          <div className="absolute inset-0 bg-gradient-to-r from-[#235347] via-[#235347]/90 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20">
            <div className="max-w-3xl">
              <p className="text-[#DAF1DE] text-xs sm:text-sm mb-4 font-bold uppercase tracking-[0.3em]">
                Company No.: 14985907
              </p>

              <h1
                className="
            text-[#DAF1DE]
            font-bold
            leading-tight
            break-words
            text-4xl
            sm:text-6xl
            lg:text-7xl
          "
              >
                BRITS
                <br />
                ENTERPRISES
                <br />
                LIMITED
              </h1>

              <div className="w-20 h-[3px] bg-[#8EB69B] my-6 sm:my-8"></div>

              <p
                className="
            text-[#DAF1DE]/80
            leading-relaxed
            max-w-xl
            mb-8
          "
                style={{
                  fontSize: "clamp(1rem,2vw,1.25rem)",
                }}
              >
                A global business delivering excellence across air freight and
                premium lifestyle products with quality you can trust.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <a
                  href="#business"
                  className="
              bg-[#8EB69B]
              text-black
              font-bold
              px-8
              py-4
              rounded-xl
              hover:bg-[#DAF1DE] hover:text-[#235347]
              transition-all duration-300
              text-center
              w-full
              sm:w-auto
              shadow-lg hover:shadow-[#DAF1DE]/30
              uppercase text-xs tracking-widest
            "
                >
                  OUR BUSINESS →
                </a>

                <Link
                  to="/contact"
                  className="
              border-2
              border-[#8EB69B]
              text-[#DAF1DE]
              px-8
              py-4
              rounded-xl
              hover:bg-[#8EB69B]
              hover:text-black
              transition-all duration-300
              text-center
              w-full
              sm:w-auto
              font-bold
              uppercase text-xs tracking-widest
            "
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-20 bg-[#235347]/95 border-t border-[#8EB69B]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 text-center">
            <p className="text-[#DAF1DE] text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
              BRITS ENTERPRISES LIMITED is a UK-registered global business specializing in multi-sector solutions including Aviation, Logistics, Premium Lifestyle Products, and Interior Finishes.
              We are committed to delivering excellence and building lasting value for our clients worldwide.
            </p>
            <div className="flex justify-center mt-4">
              <Link to="/about" className="text-[#8EB69B] hover:text-white transition-colors duration-300 text-sm font-semibold uppercase tracking-wider">
                Learn More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Business Section */}
      <section className="py-24 bg-[#DAF1DE]" id="business">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 mb-8 lg:mb-0">
              <span className="text-[#235347] text-xs font-bold uppercase tracking-[0.3em] block mb-4">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
                Delivering Value Across The World
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                A diversified UK-registered enterprise bridging global logistics with premium lifestyle craftsmanship. We represent excellence in every shipment and every product.
              </p>
              <Link
                to="/products"
                className="inline-block bg-[#235347] text-[#DAF1DE] px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#8EB69B] hover:text-black transition-all duration-300 shadow-xl"
              >
                View Catalog
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-500 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Freight Air Transport"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black">
                    Freight Air Transport
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Reliable and efficient global air freight solutions tailored for your business needs.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-500 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Tote Bags / Shopping Bags"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black">
                    Tote Bags / Shopping Bags
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Premium, durable bags designed with a focus on modern aesthetics and sustainability.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-500 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Jewellery Box / Gift Boxes"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black">
                    Jewellery Box / Gift Boxes
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Luxury packaging solutions that elevate the gifting experience for every occasion.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-500 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1562184552-997c461abbe6?q=80&w=800"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Interior Decorative Painting"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black">
                    Interior Decorative Painting
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Bespoke wall finishes and high-end decorative solutions for luxury spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aviation & Airport Services Section */}
      <section className="py-16 md:py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#235347] text-xs font-bold uppercase tracking-widest block mb-3">
              Logistics Excellence
            </span>
            <h2 className="text-[#235347] text-3xl md:text-5xl font-bold leading-tight">
              Aviation & Airport Solutions
            </h2>
            <div className="w-20 h-1 bg-[#8EB69B] mt-6"></div>
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
                <h3 className="text-2xl font-semibold mb-3 text-black">
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
                <h3 className="text-2xl font-semibold mb-3 text-black">
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
                <h3 className="text-2xl font-semibold mb-3 text-black">
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
                <h3 className="text-2xl font-semibold mb-3 text-black">
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
      <section className="py-16 md:py-24 bg-[#235347] text-[#DAF1DE] relative overflow-hidden font-sans">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#235347]/90 via-[#235347] to-[#235347]/95"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#235347] text-xs font-bold uppercase tracking-[0.4em] block mb-4">
              Why Choose Brits?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Quality. Reliability.{" "}
              <span className="text-[#DAF1DE]">Global Reach.</span>
            </h2>
            <div className="w-20 h-1 bg-[#235347] mx-auto"></div>
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
                className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[#8EB69B]/50 transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#8EB69B]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#8EB69B]/20 transition-all duration-500 shadow-xl">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-[#DAF1DE] text-[13px] font-bold uppercase tracking-widest mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">
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
              <span className="text-[#235347] text-xs font-bold uppercase tracking-widest block mb-3">
                About Us
              </span>
              <h2 className="text-black text-3xl md:text-4xl font-bold leading-tight mb-6">
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
                  <span className="text-black font-bold text-[10px] uppercase tracking-wider">
                    Global Operations
                  </span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3 border-y sm:border-y-0 sm:border-x border-gray-100 py-4 sm:py-0 px-2 justify-center md:justify-start">
                  <span className="text-2xl">✅</span>
                  <span className="text-black font-bold text-[10px] uppercase tracking-wider">
                    Quality Products
                  </span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                  <span className="text-2xl">😊</span>
                  <span className="text-black font-bold text-[10px] uppercase tracking-wider">
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
