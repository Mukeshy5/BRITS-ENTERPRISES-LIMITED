import React from 'react'

const Terms = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-gray-600 mb-6">Last updated: 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on BRITS ENTERPRISES LIMITED's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose</li>
              <li>Attempting to decompile or reverse engineer any software</li>
              <li>Removing any copyright or other proprietary notations</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">3. Disclaimer</h2>
            <p>
              The materials on BRITS ENTERPRISES LIMITED's website are provided on an 'as is' basis. BRITS ENTERPRISES LIMITED makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">4. Limitations</h2>
            <p>
              In no event shall BRITS ENTERPRISES LIMITED or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BRITS ENTERPRISES LIMITED's website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="mt-3 space-y-1">
              <p>Email: info@britsenterprises.co.uk</p>
              <p>Phone: 
                <a href="tel:7349049886" className="hover:text-[#235347] transition-colors ml-1">
                  07349 049886
                </a>
              </p>
              <p>Address: Stanley House, Kelvin Way, Crawley, England RH10 9SE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terms
