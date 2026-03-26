import { useState } from "react";
import { getPackages } from "@/lib/packages-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/PackageCard";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Packages() {
  const searchParams = new URLSearchParams(window.location.search);
  
  const [destination, setDestination] = useState(searchParams.get("destination") || "all");
  const [category, setCategory] = useState(searchParams.get("category") || "all");

  const packages = getPackages({
    destination: destination !== 'all' ? destination : undefined,
    category: category !== 'all' ? category : undefined
  });

  const destinations = [
    { value: "all", label: "All Emirates" },
    { value: "dubai", label: "Dubai" },
    { value: "fujairah", label: "Fujairah" },
    { value: "rak", label: "Ras Al Khaimah" },
  ];

  const categories = [
    { value: "all", label: "All Types" },
    { value: "desert", label: "Desert Safari" },
    { value: "city", label: "City Tours" },
    { value: "adventure", label: "Adventure" },
    { value: "cultural", label: "Cultural" },
    { value: "nightlife", label: "Nightlife" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO title="Tour Packages" description="Browse our curated collection of luxury UAE tour packages. Desert safaris, city tours, adventure experiences across Dubai, Fujairah & Ras Al Khaimah." keywords="UAE tour packages, Dubai tours, desert safari, Fujairah tours, RAK tours" />
      <Navbar />
      
      {/* HEADER */}
      <div className="pt-40 pb-16 bg-[#050505] border-b border-white/5 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1600&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionHeading 
            subtitle="Explore our collection" 
            title="Curated Tour Packages" 
            centered
            className="mb-0"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        
        {/* FILTERS */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 p-6 bg-card border border-white/5">
          <div className="flex-1 space-y-2">
            <label className="text-xs uppercase tracking-wider text-gray-500 font-medium">Destination</label>
            <div className="flex flex-wrap gap-2">
              {destinations.map(d => (
                <button
                  key={d.value}
                  onClick={() => setDestination(d.value)}
                  className={`px-4 py-2 text-sm border transition-all ${
                    destination === d.value 
                      ? "border-gold-500 text-gold-500 bg-gold-500/10" 
                      : "border-white/10 text-gray-400 hover:border-white/30"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-1 space-y-2">
            <label className="text-xs uppercase tracking-wider text-gray-500 font-medium">Experience Type</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button
                  key={c.value}
                  onClick={() => setCategory(c.value)}
                  className={`px-4 py-2 text-sm border transition-all ${
                    category === c.value 
                      ? "border-gold-500 text-gold-500 bg-gold-500/10" 
                      : "border-white/10 text-gray-400 hover:border-white/30"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RESULTS */}
        {packages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-card border border-white/5">
            <h3 className="text-2xl font-serif text-white mb-2">No packages found</h3>
            <p className="text-gray-400">Try adjusting your filters to see more results.</p>
            <button 
              onClick={() => { setDestination('all'); setCategory('all'); }}
              className="mt-6 text-gold-500 border-b border-gold-500 pb-1 uppercase tracking-widest text-xs font-semibold hover:text-gold-400 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
