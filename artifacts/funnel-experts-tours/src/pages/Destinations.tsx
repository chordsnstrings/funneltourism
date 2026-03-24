import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Destinations() {
  const destinations = [
    {
      id: "dubai",
      name: "Dubai",
      tagline: "The City of Gold",
      description: "Experience the perfect blend of ultra-modern skyscrapers, luxury shopping, and traditional souks. From the heights of Burj Khalifa to the depths of the desert, Dubai is a city of superlatives.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80"
    },
    {
      id: "fujairah",
      name: "Fujairah",
      tagline: "The East Coast Jewel",
      description: "Escape to the tranquil eastern coast where the rugged Hajar Mountains meet the pristine waters of the Gulf of Oman. Perfect for diving, historic forts, and serene beach resorts.",
      image: "https://images.unsplash.com/photo-1579899182390-e69623e100f7?w=1600&q=80"
    },
    {
      id: "rak",
      name: "Ras Al Khaimah",
      tagline: "The Nature Emirate",
      description: "Discover authentic Arabian heritage and dramatic landscapes. Home to the UAE's highest peak, Jebel Jais, offering world-class hiking, ziplining, and mountain adventures.",
      image: "https://images.unsplash.com/photo-1628185012586-7a1362eeb62f?w=1600&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-40 pb-16 bg-[#050505] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionHeading 
            subtitle="Discover The Emirates" 
            title="Our Destinations" 
            centered
            className="mb-0"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32 w-full flex-grow">
        {destinations.map((dest, index) => (
          <div key={dest.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] group overflow-hidden border border-white/10 p-2">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase">
                {dest.tagline}
              </span>
              <h2 className="text-5xl lg:text-7xl font-serif text-white">{dest.name}</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                {dest.description}
              </p>
              <div className="pt-6">
                <Link 
                  href={`/packages?destination=${dest.id}`}
                  className="inline-block border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-background px-8 py-3 uppercase tracking-widest text-sm font-semibold transition-all"
                >
                  Explore {dest.name} Tours
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
