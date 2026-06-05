import React from 'react'

const ContactUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-[#DAF1DE] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale pointer-events-none"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#235347] text-xs font-bold uppercase tracking-[0.4em] block mb-4 relative z-10">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#235347] mb-6 relative z-10">Connect With Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed relative z-10">
            Have a question or looking for a partnership? Our team is here to help you with global logistics and premium solutions.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="text-center lg:text-left mb-12">
                <span className="text-[#235347] text-xs font-bold uppercase tracking-[0.3em] block mb-4">Reach Out</span>
                <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                  We're Here to Help
                </h2>
                <div className="w-20 h-1 bg-[#8EB69B] mx-auto lg:mx-0 mt-6"></div>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#DAF1DE] p-4 rounded-xl text-[#235347] flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">Our Address</h4>
                    <p className="text-gray-600">Stanley House, Kelvin Way, Crawley, England RH10 9SE</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#DAF1DE] p-4 rounded-xl text-[#235347] flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">Email Address</h4>
                    <p className="text-gray-600">info@britsenterprises.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-[#DAF1DE] p-4 rounded-xl text-[#235347] flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">Phone Number</h4>
                    <a href="tel:7349049886" className="text-gray-600 hover:text-[#235347] transition-colors">
                      07349 049886
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Google Map */}
            <div className="w-full h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.353386050186!2d-0.1770425!3d51.1148815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875f10a8d39f60f%3A0xc64e1c27c1a843e!2sKelvin%20Way%2C%20Crawley%20RH10%209SE%2C%20UK!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BRITS Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs