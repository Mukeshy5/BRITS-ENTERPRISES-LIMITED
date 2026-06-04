import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  // Step 8: Use Hooks (useState) for search functionality
  const [searchQuery, setSearchQuery] = useState('');

  // Specific product description mappings
  const descriptionsMap = {
    "Premium Grey Leather Tote Bag": "Spacious and stylish tote for daily use.",
    "Floral Canvas Tote Bag": "Lightweight canvas bag with elegant floral artwork.",
    "Printed Cotton Shopping Bag": "Eco-friendly reusable cotton shopping bag.",
    "Minimalist Cotton Tote Bag": "Simple, durable, and perfect for everyday carrying.",
    "Luxury Office Handbag": "Professional handbag designed for work and travel.",
    "Cream Leather Shoulder Tote": "Premium shoulder bag with modern styling.",
    "Mauve Designer Handbag": "Elegant handbag with a sophisticated finish.",
    "Blush Pink Leather Purse": "Stylish purse suitable for every occasion.",
    "Ethnic Pattern Shoulder Bag": "Traditional design with spacious storage.",
    "Black Canvas Handbag": "Durable canvas handbag with a minimalist look.",
    "Black Premium Handbag": "Fashionable handbag crafted for daily elegance.",
    "Sage Green Luxury Handbag": "Designer handbag featuring floral accents.",
    "Olive Green Executive Handbag": "Professional handbag with premium detailing.",
    "Printed Canvas Shoulder Bag": "Casual shoulder bag with artistic print.",
    "Embroidered Cotton Tote Bag": "Reusable tote with beautiful embroidery.",
    "Brown Leather Shopper Tote": "Spacious tote ideal for shopping and travel.",
    "Green Premium Tote Bag": "Stylish tote designed for modern lifestyles.",
    "Cat Print Canvas Tote Bag": "Cute and eco-friendly tote bag.",
    "Teal Designer Handbag": "Elegant handbag with luxury hardware.",
    "White Luxury Handbag": "Sophisticated handbag with timeless appeal.",
    "Grey Leather Purse": "Premium purse with practical storage compartments.",
    "Beige Classic Tote Bag": "Versatile tote bag for everyday use.",
    "Pink Jewelry Organizer Box": "Keeps jewelry neatly organized and protected.",
    "Wooden Jewelry Storage Box": "Elegant storage solution for valuable accessories.",
    "Luxury Wooden Jewelry Case": "Premium jewelry case with multiple compartments.",
    "Multi-Section Jewelry Organizer": "Organized storage for rings, earrings, and necklaces.",
    "Wooden Jewelry Display Tray": "Stylish tray for displaying jewelry collections.",
    "Portable Jewelry Box Set": "Compact organizer perfect for travel.",
    "Luxury Jewelry Storage Cabinet": "Large-capacity organizer with premium finish.",
    "Premium Jewelry Gift Box": "Elegant box for jewelry presentation and gifting.",
    "Luxury Gift Hamper Box": "Premium gift box for special occasions.",
    "Green Gift Presentation Box": "Elegant ribbon box for memorable gifts.",
    "Premium Gift Basket Collection": "Decorative packaging for luxury gifting.",
    "Red Celebration Gift Box": "Vibrant gift box ideal for festive events.",
    "Silver Ribbon Gift Box": "Stylish gift packaging with decorative ribbon.",
    "Luxury Wedding Gift Set": "Beautifully arranged gift set for celebrations.",
    "Luxury Gold Gift Hamper": "Premium hamper box with elegant presentation.",
    "Modern Wall Art Decor": "Contemporary artwork to enhance interiors.",
    "Luxury Abstract Wall Painting": "Artistic painting with a premium look.",
    "Premium Living Room Decor Frame": "Decorative frame for modern homes.",
    "White Swan Wall Art": "Elegant swan-themed wall decoration.",
    "Modern Landscape Wall Frame": "Scenic artwork for living spaces.",
    "Classic Living Room Wall Painting": "Timeless wall art for home décor.",
    "Modern Interior Wall Decor Set": "Coordinated wall décor collection.",
    "Vintage Garden Bench": "Decorative outdoor bench with classic design.",
    "Air Freight Logistics Service": "Fast and reliable international cargo transportation.",
    "Aircraft Logistics Banner": "Professional visual representing air cargo services.",
    "Air Cargo Mobile Banner": "Promotional banner for freight and logistics solutions.",
    "Gold Stud Bracelet": "Elegant bracelet designed for everyday wear."
  };

  // Step 2: Create Product Data dynamically from assets folder
  // Dynamically import all images so no asset is left unused
  const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });

  // Auto-analysis logic to generate meaningful titles based on image content (keywords)
  const analyzeImageContent = (fileName) => {
    const fn = fileName.toLowerCase();
    
    // Specific mappings for major services
    if (fn.includes('freight') || fn.includes('cargo')) return "Air Freight Transport";
    if (fn.includes('warehouse')) return "Secure Warehousing";
    if (fn.includes('handling')) return "Ground Handling Services";
    if (fn.includes('charter')) return "Cargo Charter Solutions";

    // For specific products, generate a clean title from the filename
    return fileName.split(/[-_ ]/).filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Logic to determine industry category and description based on analysis
  const getProductInsights = (title) => {
    const t = title.toUpperCase();
    let category = 'BRITS COLLECTION';
    const specificDesc = descriptionsMap[title];
    let baseDesc = specificDesc || 'A curated selection representing our global standards of quality and business trust.';

    if (t.includes('FREIGHT') || t.includes('CARGO') || t.includes('WAREHOUSE') || t.includes('TRANSPORT') || t.includes('LOGISTICS')) {
      category = 'LOGISTICS';
      if (!specificDesc) baseDesc = 'Expert global logistics and freight solutions engineered for reliability and supply chain efficiency.';
    } else if (t.includes('AVIATION') || t.includes('GROUND')) {
      category = 'AVIATION';
      if (!specificDesc) baseDesc = 'Precision aviation support and airport services delivering world-class reliability for global operations.';
    } else if (t.includes('BAG') || t.includes('HANDBAG') || t.includes('TOTE') || t.includes('PURSE') || t.includes('SHOPPER') || t.includes('JEWELRY')) {
      category = 'LIFESTYLE';
      if (!specificDesc) baseDesc = 'Premium lifestyle essentials crafted with high-quality materials and modern functional design.';
    } else if (t.includes('BOX') || t.includes('PACKAGING') || t.includes('GIFT')) {
      category = 'PACKAGING';
      if (!specificDesc) baseDesc = 'Luxury packaging solutions designed to protect and present your items with professional sophistication.';
    } else if (t.includes('INTERIOR') || t.includes('WALL') || t.includes('DECOR') || t.includes('PAINTING')) {
      category = 'INTERIOR';
      if (!specificDesc) baseDesc = 'Bespoke architectural finishes and decorative solutions that create a lasting visual impact in any space.';
    }

    return { category, description: baseDesc };
  };

  const products = Object.entries(imageModules)
    // Filter out branding assets like logo to ensure only products are shown
    .filter(([path]) => 
      !path.toLowerCase().includes('logo') && 
      !path.toLowerCase().includes('favicon') && 
      !path.toLowerCase().includes('banner') &&
      !path.toLowerCase().includes('hero-bg') &&
      !path.toLowerCase().includes('mobile')
    )
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
      <header className="bg-[#235347] text-[#DAF1DE] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products & Services</h1>
          <p className="text-[#DAF1DE]/80 max-w-2xl mx-auto font-medium">
            Delivering excellence across the world through our diverse range of premium products and specialized global services.
          </p>
        </div>
      </header>

      {/* Step 3: Search Bar Section */}
      <div className="max-w-3xl mx-auto px-6 mt-6 md:-mt-8 relative z-10">
        <div className="bg-white p-2 rounded-xl shadow-2xl flex items-center border border-[#8EB69B]/20">
          <div className="pl-4 pr-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search by product title..."
            className="w-full px-4 py-3 focus:outline-none text-black font-medium"
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
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 bg-[#235347] text-[#DAF1DE] px-4 py-1 rounded-full text-[10px] font-bold tracking-widest shadow-lg">
                    {product.category}
                  </div>
                </div>
                {/* Product Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-[#235347] mb-3">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  {/* View Details Button */}
                  <div className="mt-auto">
                    <Link to="/request-quote" className="inline-block bg-[#235347] text-[#DAF1DE] px-7 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#8EB69B] hover:text-black transition-all duration-300">
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
              className="mt-4 text-[#8EB69B] hover:underline font-bold"
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
