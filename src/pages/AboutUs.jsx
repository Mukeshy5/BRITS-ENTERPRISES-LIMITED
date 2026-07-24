import React, { useEffect } from 'react'

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <header className="bg-white text-[#235347] py-16 md:py-24 relative overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 opacity-10 grayscale pointer-events-none"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-[#8EB69B] text-xs font-bold uppercase tracking-[0.2em] block mb-4">Corporate Overview</span>
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tight">Our Business Identity</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            A global enterprise focused on reliable freight solutions and high-quality product manufacturing.
          </p>
        </div>
      </header>

      {/* The Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-[#8EB69B]/10 absolute -top-4 -left-4 w-full h-full rounded-2xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
                className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[500px] object-cover"
                alt="Corporate Office"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-[#235347] p-4 sm:p-8 rounded-xl shadow-2xl border-l-4 border-[#8EB69B]">
                <p className="text-[#DAF1DE] text-xl sm:text-3xl font-bold italic">Est. 2023</p>
                <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold mt-1">Innovation Journey</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="uppercase text-[#235347] font-bold tracking-[0.3em] text-xs block mb-2">Our Identity</span>
                <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                  Built on Trust. <br />Driven by Excellence.
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Brits Enterprises Limited is a diversified company operating across four core sectors: specialized road freight transport, premium bag manufacturing (Tote, Shopping, and Hand Bags), luxury jewellery and gift packaging, and professional interior wall finishes and painting.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Our business model is built on the principles of reliability and quality. Whether we are managing international air cargo or providing decorative wall finishes, we ensure that every service meets the realistic needs of our clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-[#235347] uppercase tracking-wider text-xs mb-2">Global Operations</h4>
                  <p className="text-gray-500 text-xs">Seamless cross-border logistics management.</p>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-[#235347] uppercase tracking-wider text-xs mb-2">Quality Control</h4>
                  <p className="text-gray-500 text-xs">Rigorous standards in every product line.</p>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-[#235347] uppercase tracking-wider text-xs mb-2">Client Focus</h4>
                  <p className="text-gray-500 text-xs">Dedicated support for your unique needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#DAF1DE] py-20 text-[#235347] border-y border-[#235347]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <h3 className="text-black text-4xl font-bold mb-2">10+</h3>
            <p className="text-[#235347] text-xs font-bold uppercase tracking-widest">Countries Served</p>
          </div>
          <div>
            <h3 className="text-black text-4xl font-bold mb-2">500+</h3>
            <p className="text-[#235347] text-xs font-bold uppercase tracking-widest">Shipments Annually</p>
          </div>
          <div>
            <h3 className="text-black text-4xl font-bold mb-2">100%</h3>
            <p className="text-[#235347] text-xs font-bold uppercase tracking-widest">Quality Guarantee</p>
          </div>
          <div>
            <h3 className="text-black text-4xl font-bold mb-2">24/7</h3>
            <p className="text-[#235347] text-xs font-bold uppercase tracking-widest">Dedicated Support</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute top-[-20px] right-[-20px] text-9xl text-gray-50 font-serif group-hover:scale-110 transition-transform duration-700">M</div>
              <h3 className="text-[#235347] text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To bridge global markets through innovative freight solutions while enriching lifestyles with premium products that define elegance and durability. We aim to be the most trusted partner for businesses and individuals seeking excellence.
              </p>
            </div>

            <div className="bg-[#235347] p-12 rounded-3xl text-[#DAF1DE] border border-black/10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-[-20px] right-[-20px] text-9xl text-white/5 font-serif group-hover:scale-110 transition-transform duration-700">V</div>
              <h3 className="text-white text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-[#DAF1DE]/80 text-lg leading-relaxed">
                To become a global benchmark for multi-sector business excellence, where every product delivered and every service rendered contributes to a more connected and sophisticated world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-[#8EB69B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: "🛡️", title: "Unwavering Integrity", desc: "We operate with full transparency, ensuring that our professional status translates into global trust." },
              { icon: "✨", title: "Premium Quality", desc: "From wall finishes to luxury gift boxes, we don't settle for anything less than perfection." },
              { icon: "🌍", title: "Global Sustainability", desc: "Optimizing logistics routes and selecting eco-friendly materials for our lifestyle range." }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-white border border-gray-100 rounded-2xl text-center hover:border-[#235347] transition-colors group">
                <div className="text-4xl sm:text-5xl mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h4 className="text-black font-bold text-xl mb-4 tracking-tight">{value.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
