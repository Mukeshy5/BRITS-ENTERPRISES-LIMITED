import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header consistent with other pages */}
      <header className="bg-[#DAF1DE] text-[#235347] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#235347] mb-6">Privacy Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Your privacy is important to us. This policy outlines how we handle your personal information at BRITS ENTERPRISES LIMITED.
          </p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-gray-500 font-bold text-sm mb-12 uppercase tracking-widest border-b border-gray-200 pb-4">
            Last updated: June 2026
          </p>

          <div className="space-y-12 text-gray-700 leading-relaxed">
            <div className="relative pl-8 border-l-2 border-[#8EB69B]">
              <h2 className="text-2xl font-bold text-[#235347] mb-4">1. Introduction</h2>
              <p>
                BRITS ENTERPRISES LIMITED ("we", "us", "our") operates the BRITS website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-[#8EB69B]">
              <h2 className="text-2xl font-bold text-[#235347] mb-4">2. Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our service to you.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-3 pl-4">
                <li className="marker:text-[#8EB69B]"><span className="font-semibold text-[#235347]">Personal Data:</span> Name, email address, phone number, company information</li>
                <li className="marker:text-[#8EB69B]"><span className="font-semibold text-[#235347]">Usage Data:</span> Browser type, pages visited, time spent on pages</li>
                <li className="marker:text-[#8EB69B]"><span className="font-semibold text-[#235347]">Cookies:</span> Technologies used for website functionality and analysis</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-[#8EB69B]">
              <h2 className="text-2xl font-bold text-[#235347] mb-4">3. Use of Data</h2>
              <p>
                BRITS ENTERPRISES LIMITED uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-3 pl-4">
                <li className="marker:text-[#8EB69B]">To provide and maintain our service</li>
                <li className="marker:text-[#8EB69B]">To notify you about changes to our service</li>
                <li className="marker:text-[#8EB69B]">To allow you to participate in interactive features</li>
                <li className="marker:text-[#8EB69B]">To gather analysis or valuable information</li>
                <li className="marker:text-[#8EB69B]">To monitor the usage of our service</li>
              </ul>
            </div>

            <div className="bg-[#DAF1DE] text-[#235347] border border-[#235347]/10 p-10 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-[-20px] right-[-20px] text-9xl text-white/5 font-serif pointer-events-none">P</div>
              <h2 className="text-2xl font-bold text-[#235347] mb-6 relative z-10">4. Contact Us</h2>
              <p className="text-gray-600 mb-6 relative z-10 font-medium">
                If you have any questions about this Privacy Policy, please contact our data protection team:
              </p>
              <div className="space-y-4 font-medium relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-[#8EB69B]">✉️</span>
                  <a href="mailto:info@britsenterprises.co.uk" className="hover:text-[#8EB69B] transition-colors">info@britsenterprises.co.uk</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#8EB69B]">📞</span>
                  <a href="tel:7349049886" className="hover:text-[#8EB69B] transition-colors">07349 049886</a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#8EB69B]">📍</span>
                  <span>Stanley House, Kelvin Way, Crawley, England RH10 9SE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
