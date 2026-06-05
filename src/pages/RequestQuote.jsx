import React from 'react'

const RequestQuote = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header consistent with Contact Page */}
      <header className="bg-[#DAF1DE] text-[#235347] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-[#235347] mb-6">Enquire Now</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg font-medium">
            Interested in our premium products or global logistics services? Reach out to us directly for a customized quote and expert assistance.
          </p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Call Card */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-[#235347] group-hover:rotate-12 transition-all duration-500">
                <span className="text-4xl group-hover:scale-110 transition-transform">📞</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 uppercase tracking-wider">Call Us</h3>
              <p className="text-gray-500 text-sm mb-6">Available for immediate logistics support.</p>
              <a 
                href="tel:7349049886" 
                className="block py-3 px-6 bg-[#235347] text-[#DAF1DE] rounded-xl font-bold text-sm hover:bg-black transition-colors"
              >
                07349 049886
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-[#235347] group-hover:-rotate-12 transition-all duration-500">
                <span className="text-4xl group-hover:scale-110 transition-transform">📧</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 uppercase tracking-wider">Email Us</h3>
              <p className="text-gray-500 text-sm mb-6">Send us your project requirements.</p>
              <a 
                href="mailto:info@britsenterprises.co.uk" 
                className="block py-3 px-6 bg-[#235347] text-[#DAF1DE] rounded-xl font-bold text-sm hover:bg-black transition-colors"
              >
                info@britsenterprises.co.uk
              </a>
            </div>

            {/* Office Card */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-[#235347] transition-all duration-500">
                <span className="text-4xl group-hover:scale-110 transition-transform">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 uppercase tracking-wider">Visit Us</h3>
              <p className="text-gray-500 text-sm mb-6">Stanley House, Kelvin Way, Crawley.</p>
              <p className="text-[#235347] font-bold text-sm">RH10 9SE, England</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-black font-bold text-2xl mb-4">Trusted by Businesses Globally</h4>
          <p className="text-gray-500 max-w-xl mx-auto">
            Brits Enterprises Limited provides seamless solutions tailored to your professional needs. Join our network of satisfied clients today.
          </p>
        </div>
      </section>
    </div>
  )
}

export default RequestQuote
