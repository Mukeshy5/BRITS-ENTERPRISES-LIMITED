import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  // Step 8: Use Hooks (useState) for search functionality
  const [searchQuery, setSearchQuery] = useState('');

  // Step 2: Create Product Data dynamically from assets folder
  // Dynamically import all images so no asset is left unused
  const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });

  // Auto-analysis logic to generate meaningful titles based on image content (keywords)
  const analyzeImageContent = (fileName) => {
    const fn = fileName.toLowerCase();
    
    // Keywords-based content analysis
    if (fn.includes('paper') && fn.includes('bag')) return "Eco Paper Bag";
    if (fn.includes('shopping') && fn.includes('bag')) return "Reusable Shopping Bag";
    if (fn.includes('cardboard') && fn.includes('box')) return "Packaging Box";
    if (fn.includes('tote')) return "Premium Tote Bag";
    if (fn.includes('freight') || fn.includes('cargo') || fn.includes('transport')) return "Global Freight Transport";
    if (fn.includes('jewellery')) return "Luxury Jewellery Box";
    if (fn.includes('gift') && fn.includes('box')) return "Elegance Gift Box";
    if (fn.includes('interior') || fn.includes('wall') || fn.includes('painting')) return "Architectural Interior Finish";
    if (fn.includes('warehouse')) return "Secure Warehousing";
    if (fn.includes('handling')) return "Aviation Ground Support";

    // Fallback: Human-readable title from filename
    return fileName.split(/[-_ ]/).filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Logic to determine industry category and description based on analysis
  const getProductInsights = (title) => {
    const t = title.toUpperCase();
    let category = 'BRITS COLLECTION';
    let baseDesc = 'A curated selection representing our global standards of quality and business trust.';

    if (t.includes('FREIGHT') || t.includes('CARGO') || t.includes('WAREHOUSE') || t.includes('TRANSPORT')) {
      category = 'LOGISTICS';
      baseDesc = 'Expert global logistics and freight solutions engineered for reliability and supply chain efficiency.';
    } else if (t.includes('AVIATION') || t.includes('GROUND')) {
      category = 'AVIATION';
      baseDesc = 'Precision aviation support and airport services delivering world-class reliability for global operations.';
    } else if (t.includes('BAG')) {
      category = 'LIFESTYLE';
      baseDesc = 'Premium lifestyle essentials crafted with high-quality materials and modern functional design.';
    } else if (t.includes('BOX') || t.includes('PACKAGING')) {
      category = 'PACKAGING';
      baseDesc = 'Luxury packaging solutions designed to protect and present your items with professional sophistication.';
    } else if (t.includes('INTERIOR') || t.includes('WALL')) {
      category = 'INTERIOR';
      baseDesc = 'Bespoke architectural finishes and decorative solutions that create a lasting visual impact in any space.';
    }

    return { category, description: `${title}. ${baseDesc}` };
  };

  const products = Object.entries(imageModules)
    // Filter out branding assets like logo to ensure only products are shown
    .filter(([path]) => !path.toLowerCase().includes('logo') && !path.toLowerCase().includes('favicon') && !path.toLowerCase().includes('banner'))
    .map(([path, module], index) => {
      const fileName = path.split('/').pop().replace(/\.[^/.]+$/, "");
      const name = analyzeImageContent(fileName);
      const { category, description } = getProductInsights(name);

      return {
        id: index + 1,
        name: name,
        image: module.default || module,
        category: category,
        description: description
      };
    });

  // Step 3: Requirements - Case-insensitive real-time search by product title
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <header className="bg-[#061A2F] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d7b17c] mb-4">Our Products & Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering excellence across the world through our diverse range of premium products and specialized global services.
          </p>
        </div>
      </header>

      {/* Step 3: Search Bar Section */}
      <div className="max-w-3xl mx-auto px-6 mt-6 md:-mt-8 relative z-10">
        <div className="bg-white p-2 rounded-xl shadow-2xl flex items-center border border-[#d7b17c]/20">
          <div className="pl-4 pr-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search by product title..."
            className="w-full px-4 py-3 focus:outline-none text-[#061A2F] font-medium"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Step 4: Responsive Product Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full">
                {/* Product Image */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gray-50 flex items-center justify-center p-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    title={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Stylish Tooltip Bubble */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/5 pointer-events-none">
                    <div className="bg-[#061A2F] text-[#d7b17c] px-5 py-2.5 rounded-full text-[10px] font-black tracking-[0.2em] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#d7b17c]/20 transform scale-50 group-hover:scale-100 transition-all duration-300 uppercase whitespace-nowrap">
                      {product.name}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-[#061A2F] text-[#d7b17c] px-4 py-1 rounded-full text-[10px] font-bold tracking-widest shadow-lg">
                    {product.category}
                  </div>
                </div>
                {/* Product Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-[#061A2F] mb-3">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  {/* View Details Button */}
                  <div className="mt-auto">
                    <Link to="/request-quote" className="inline-block bg-[#061A2F] text-white px-7 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#d7b17c] hover:text-black transition-all duration-300">
                      ENQUIRE NOW
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
            <h2 className="text-2xl font-medium text-gray-400">No products found matching "{searchQuery}"</h2>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-[#d7b17c] hover:underline font-bold"
            >
              Clear search
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default Product
