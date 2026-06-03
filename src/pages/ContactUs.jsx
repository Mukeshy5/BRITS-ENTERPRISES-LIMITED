import React from 'react'

const ContactUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-[#061A2F] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#d7b17c] mb-6">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question or looking for a partnership? Our team is here to help you with global logistics and premium solutions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-center">
              <div>
                <h2 className="text-3xl font-bold text-[#061A2F] mb-8">Get In Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-[#fcf8f1] p-4 rounded-xl text-[#d7b17c]">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#061A2F]">Our Address</h4>
                      <p className="text-gray-600">Stanley House, Kelvin Way, Crawley, England RH10 9SE</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-[#fcf8f1] p-4 rounded-xl text-[#d7b17c]">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#061A2F]">Email Address</h4>
                      <p className="text-gray-600">info@britsenterprises.co.uk</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-[#fcf8f1] p-4 rounded-xl text-[#d7b17c]">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#061A2F]">Phone Number</h4>
                      <p className="text-gray-600">+44 123 456 7890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Google Map */}
            <div className="w-full h-[300px] lg:min-h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.353386050186!2d-0.1770425!3d51.1148815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875f10a8d39f60f%3A0xc64e1c27c1a843e!2sKelvin%20Way%2C%20Crawley%20RH10%209SE%2C%20UK!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs