import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpeg";
import heroBgMobile from "../assets/mobile.jpeg";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [showDesc, setShowDesc] = useState(false);
  const fullText = "BRITS ENTERPRISES LIMITED";
  const heroRef = useRef(null);

  const [businessDisplayText, setBusinessDisplayText] = useState("");
  const businessFullText = "Quality Solutions for Global Markets";
  const businessRef = useRef(null);

  const [trustDisplayText, setTrustDisplayText] = useState("");
  const trustFullText = "Built on Trust. Driven by Excellence.";
  const trustRef = useRef(null);

  const [valueDisplayText, setValueDisplayText] = useState("");
  const valueFullText = "Quality. Reliability. Global Reach.";
  const valueRef = useRef(null);

  const [aviationDisplayText, setAviationDisplayText] = useState("");
  const aviationFullText = "Aviation & Airport Solutions";
  const aviationRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId;

    const animate = () => {
      setDisplayText(fullText.slice(0, index));

      let speed = isDeleting ? 50 : 100; // Deleting is faster than typing

      if (!isDeleting && index === fullText.length) {
        speed = 3000; // Stay at full text for 3 seconds before deleting
        isDeleting = true;
        setShowDesc(true);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        speed = 500; // Pause briefly before starting next loop
      }

      index = isDeleting ? index - 1 : index + 1;
      timeoutId = setTimeout(animate, speed);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let i = 0;
          const timer = setInterval(() => {
            i++;
            setBusinessDisplayText(businessFullText.slice(0, i));
            if (i >= businessFullText.length) clearInterval(timer);
          }, 50); // Typing speed
          observer.disconnect(); // Animation runs only once when scrolled into view
        }
      },
      { threshold: 0.1 }
    );
    if (businessRef.current) observer.observe(businessRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let i = 0;
          const timer = setInterval(() => {
            i++;
            setValueDisplayText(valueFullText.slice(0, i));
            if (i >= valueFullText.length) clearInterval(timer);
          }, 50);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (valueRef.current) observer.observe(valueRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let i = 0;
          const timer = setInterval(() => {
            i++;
            setTrustDisplayText(trustFullText.slice(0, i));
            if (i >= trustFullText.length) clearInterval(timer);
          }, 50);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (trustRef.current) observer.observe(trustRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let i = 0;
          const timer = setInterval(() => {
            i++;
            setAviationDisplayText(aviationFullText.slice(0, i));
            if (i >= aviationFullText.length) clearInterval(timer);
          }, 50);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (aviationRef.current) observer.observe(aviationRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className="relative min-h-screen flex flex-col overflow-hidden" ref={heroRef}>
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

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#235347]/60 via-transparent to-[#235347]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <span className="text-[#8EB69B] text-xs md:text-sm font-bold uppercase tracking-[0.5em] block mb-6 drop-shadow-md">
                Global Solutions • Premium Excellence
              </span>
              <h1 className="text-white font-black leading-tight text-3xl sm:text-5xl lg:text-6xl tracking-tighter mb-8 drop-shadow-2xl min-h-[1.2em]">
                {displayText.slice(0, 18)}
                <span className="text-[#8EB69B]">
                  {displayText.slice(18)}
                </span>
              </h1>

              <div className="w-24 h-[4px] bg-[#8EB69B] mx-auto mb-10 rounded-full"></div>

              <p
                className={`text-[#DAF1DE] leading-relaxed max-w-3xl mx-auto mb-10 text-base md:text-xl font-medium drop-shadow-lg transition-all duration-1000 ease-out transform ${
                  showDesc ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                A premier global leader in Freight Air Transport, luxury manufacturing, and professional 
                architectural finishes. We combine logistics expertise with manufacturing precision 
                to deliver world-class excellence across international borders.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-20 bg-[#235347]/95 border-t border-[#8EB69B]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 text-center">
            <p className="text-[#DAF1DE]/80 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
              Specializing in Freight Air Transport, premium Bag manufacturing (Tote, Shopping, and Hand Bags), 
              Jewellery and Decorative Gift Boxes, and professional Interior painting and Wall Finishes.
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
      <section className="py-24 bg-white" id="business">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 mb-8 lg:mb-0">
              <span className="text-[#8EB69B] text-sm font-bold uppercase tracking-[0.2em] block mb-4">Our Expertise</span>
              <h2 
                ref={businessRef}
                className="text-3xl md:text-4xl font-bold mb-6 text-black tracking-tight min-h-[1.5em]"
              >
                {businessDisplayText}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our diverse portfolio bridges efficient global logistics with precise manufacturing craftsmanship, ensuring high standards across all operations.
              </p>
              <Link
                to="/products"
                className="inline-block bg-[#235347] text-[#DAF1DE] px-10 py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-[#8EB69B] hover:text-black transition-all duration-300 shadow-xl"
              >
                View Catalog
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 group">
                <div className="h-52 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    alt="Freight Air Transport"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">
                    Freight Air Transport
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Reliable air cargo solutions providing efficient transportation for goods across global supply chains and major international hubs.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 group">
                <div className="h-52 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    alt="Tote Bags / Shopping Bags"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">
                    Tote, Shopping & Hand Bags
                  </h3>
                  <p className="text-gray-600 text-sm italic">
                    Premium collection of bags crafted with durable materials for professional and daily use.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 group">
                <div className="h-52 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    alt="Jewellery Box / Gift Boxes"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">
                    Jewellery & Decorative Gift Boxes
                  </h3>
                  <p className="text-gray-600 text-sm italic">
                    Elegant decorative packaging designed for high-quality presentation and secure storage.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 group">
                <div className="h-52 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1562184552-997c461abbe6?q=80&w=800"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    alt="Interior Decorative Painting"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">
                    Interior Painting & Wall Finishes
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Professional interior use painting and decorative wall finishes that enhance the aesthetic and value of modern spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aviation & Airport Services Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#8EB69B] text-xs font-bold uppercase tracking-widest block mb-3">
              Logistics Excellence
            </span>
            <h2 
              ref={aviationRef}
              className="text-[#235347] text-3xl md:text-5xl font-extrabold leading-tight tracking-tight min-h-[1.5em]"
            >
              {aviationDisplayText}
            </h2>
            <div className="w-16 h-1 bg-[#8EB69B] mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ground Handling */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800"
                  alt="Ground Handling"
                  title="Ground Handling"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
      <section className="py-32 bg-[#f4f7f5] relative overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#8EB69B] text-xs font-bold uppercase tracking-[0.4em] block mb-4">
              Value Proposition
            </span>
            <h2 
              ref={valueRef}
              className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#235347] min-h-[1.5em]"
            >
              {valueDisplayText.slice(0, 22)}
              <span className="text-[#8EB69B]">{valueDisplayText.slice(22)}</span>
            </h2>
            <div className="w-16 h-1 bg-[#235347] mx-auto"></div>
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
                className="group bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-[#DAF1DE] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#235347] transition-all duration-500 shadow-sm">
                  <span className="text-2xl group-hover:filter group-hover:brightness-200">{item.icon}</span>
                </div>
                <h4 className="text-[#235347] text-[13px] font-bold uppercase tracking-widest mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">
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
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-6">
              <span className="text-[#235347] text-xs font-bold uppercase tracking-widest block mb-3">
                About Us
              </span>
              <h2 className="text-black text-3xl md:text-4xl font-bold leading-tight mb-6 min-h-[2.5em]" ref={trustRef}>
                {trustDisplayText.slice(0, 16)}
                {trustDisplayText.length > 16 && <br />}
                {trustDisplayText.slice(16).trimStart()}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Brits Enterprises Limited is committed
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
