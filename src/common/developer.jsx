import React from 'react';

const Developer = () => {
  return (
    <div className="bg-[#0c1624] min-h-screen text-white pt-24 pb-20 overflow-hidden selection:bg-yellow-400 selection:text-black font-sans relative z-0">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[150px] animate-pulse -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4 pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Available 24x7 & Trusted Client
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">Developer</span> Profile
          </h1>
          <div className="text-xl sm:text-2xl font-bold tracking-[0.3em] text-white uppercase">
            <span className="text-yellow-400">Mr. Mukesh Kumar</span>
          </div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Crafting high-performance digital experiences. Building scalable, secure, and visually stunning web applications for trusted clients worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 lg:mb-24">
          {[
            { value: '2+', label: 'Years Experience', icon: '⚡' },
            { value: '10+', label: 'Projects Delivered', icon: '🚀' },
            { value: '8+', label: 'Happy Clients', icon: '😊' },
            { value: '24/7', label: 'Availability', icon: '⏳' }
          ].map((stat, i) => (
             <div key={i} className="group relative">
               <div className="absolute -inset-0.5 bg-gradient-to-b from-yellow-400/50 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
               <div className="relative h-full bg-[#111e31] border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:border-yellow-400/30 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                 <span className="text-4xl mb-3 opacity-80 group-hover:scale-125 group-hover:opacity-100 transition-all duration-300">{stat.icon}</span>
                 <h3 className="text-4xl sm:text-5xl font-black text-white mb-2">{stat.value}</h3>
                 <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</p>
               </div>
             </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#111E31]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Build Something <span className="text-yellow-400">Amazing</span></h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Whether you have a groundbreaking idea or need technical expertise for an ongoing project, I am here to help turn your vision into reality. Reach out through any of the platforms below.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              {/* WhatsApp */}
              <a href="https://wa.me/918052344204" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center border border-green-500/20 group-hover:scale-110 group-hover:bg-green-500/20 transition-all shadow-lg">
                  <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-1">WhatsApp Chat</p>
                  <p className="text-xl font-bold group-hover:text-green-400 transition-colors">+91 8052344204</p>
                </div>
              </a>

              {/* Gmail */}
              <a href="mailto:aicoregenr@gmail.com" className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20 group-hover:scale-110 group-hover:bg-red-500/20 transition-all shadow-lg">
                  <svg className="w-7 h-7 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-1">Email directly</p>
                  <p className="text-xl font-bold group-hover:text-red-400 transition-colors">aicoregenr@gmail.com</p>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/aicore_gen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center border border-pink-500/20 group-hover:scale-110 group-hover:bg-pink-500/20 transition-all shadow-lg">
                  <svg className="w-7 h-7 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-1">Follow Work</p>
                  <p className="text-xl font-bold group-hover:text-pink-400 transition-colors">@aicore_gen</p>
                </div>
              </a>
            </div>
          </div>

          {/* Abstract Graphic / Right Side */}
          <div className="relative h-full min-h-[400px] flex items-center justify-center rounded-[2rem] overflow-hidden border border-white/5 bg-[#0c1624]">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-blue-600/10 mix-blend-overlay"></div>
            
            {/* 3D-like glowing elements */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-yellow-400/40 rounded-3xl transform rotate-12 blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute inset-0 bg-blue-500/40 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-[#111e31] to-[#0c1624] rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center transform hover:rotate-6 hover:scale-105 transition-all duration-700 cursor-pointer group z-10 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)]">
                <div className="text-center group-hover:scale-110 transition-transform duration-500">
                  <div className="text-6xl mb-4 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">🚀</div>
                  <div className="font-mono text-xs text-yellow-400 uppercase tracking-widest font-bold">Deploying</div>
                  <div className="font-bold text-white text-2xl mt-1">Greatness</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Developer;