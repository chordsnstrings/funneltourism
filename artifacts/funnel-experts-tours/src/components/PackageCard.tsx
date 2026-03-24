import { Link } from "wouter";
import { Clock, Users, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Package } from "@workspace/api-client-react";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  pkg: Package;
  index?: number;
  featured?: boolean;
}

export function PackageCard({ pkg, index = 0, featured = false }: PackageCardProps) {
  // Fallback images matching aesthetic
  const fallbackImages: Record<string, string> = {
    dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    fujairah: "https://images.unsplash.com/photo-1579899182390-e69623e100f7?w=800&q=80",
    rak: "https://images.unsplash.com/photo-1628185012586-7a1362eeb62f?w=800&q=80",
    desert: "https://images.unsplash.com/photo-1542382103-68f7491d9d93?w=800&q=80"
  };

  const getImageUrl = () => {
    if (pkg.imageUrl) return pkg.imageUrl;
    if (pkg.category === 'desert') return fallbackImages.desert;
    return fallbackImages[pkg.destination] || fallbackImages.dubai;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "group relative bg-card border border-white/5 hover:border-gold-500/30 overflow-hidden transition-all duration-500 flex flex-col",
        featured ? "md:flex-row col-span-full" : ""
      )}
    >
      <div className={cn(
        "relative overflow-hidden",
        featured ? "md:w-1/2 lg:w-3/5" : "aspect-[4/3]"
      )}>
        {/* Package Badge */}
        {pkg.badge && (
          <div className="absolute top-4 left-4 z-10 bg-gold-500 text-background text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-lg">
            {pkg.badge}
          </div>
        )}
        
        {/* Category tag */}
        <div className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-3 py-1 border border-white/10">
          {pkg.category}
        </div>

        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0 opacity-80" />
        
        {/* Image */}
        <img 
          src={getImageUrl()} 
          alt={pkg.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      <div className={cn(
        "p-6 flex flex-col flex-grow relative z-10 bg-card",
        featured ? "md:w-1/2 lg:w-2/5 justify-center md:p-10" : ""
      )}>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-gold-500" /> {pkg.destination.toUpperCase()}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-500" /> {pkg.duration}</span>
        </div>

        <Link href={`/packages/${pkg.slug}`} className="group-hover:text-gold-500 transition-colors">
          <h3 className={cn("font-serif text-white mb-2 leading-tight", featured ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl")}>
            {pkg.name}
          </h3>
        </Link>
        
        <p className="text-gray-400 text-sm line-clamp-2 mb-6">
          {pkg.tagline}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-0.5">Starting from</span>
            <div className="flex items-baseline gap-1 text-gold-500">
              <span className="text-sm font-semibold">{pkg.currency}</span>
              <span className="text-2xl font-serif font-bold">{pkg.price}</span>
            </div>
          </div>
          
          <Link 
            href={`/packages/${pkg.slug}`}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-background group-hover:border-gold-500 transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
