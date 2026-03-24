import { useParams } from "wouter";
import { useGetPackage } from "@workspace/api-client-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadForm } from "@/components/LeadForm";
import { SEO } from "@/components/SEO";
import { Clock, MapPin, Users, Check, X, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function PackageDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: pkg, isLoading, isError } = useGetPackage(slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gold-500/30 border-t-gold-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (isError || !pkg) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-serif text-white mb-4">Experience Not Found</h1>
          <p className="text-gray-400 mb-8">The package you are looking for does not exist.</p>
          <a href="/packages" className="text-gold-500 uppercase tracking-widest text-sm border-b border-gold-500 pb-1">View All Packages</a>
        </div>
      </div>
    );
  }

  // Fallback image logic
  const fallbackImages: Record<string, string> = {
    dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80",
    fujairah: "https://images.unsplash.com/photo-1579899182390-e69623e100f7?w=1600&q=80",
    rak: "https://images.unsplash.com/photo-1628185012586-7a1362eeb62f?w=1600&q=80",
    desert: "https://images.unsplash.com/photo-1542382103-68f7491d9d93?w=1600&q=80"
  };
  const heroImg = pkg.imageUrl || (pkg.category === 'desert' ? fallbackImages.desert : fallbackImages[pkg.destination] || fallbackImages.dubai);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title={pkg.name}
        description={pkg.seoDescription || pkg.tagline}
        keywords={pkg.seoKeywords || undefined}
        image={heroImg}
      />
      <Navbar />
      
      {/* HERO */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-end pb-16">
        <img src={heroImg} alt={pkg.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4">
            <span>{pkg.destination}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span>{pkg.category}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 max-w-4xl leading-tight">
            {pkg.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">{pkg.tagline}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* MAIN COLUMN */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/5">
              <div className="flex flex-col gap-2">
                <Clock className="w-6 h-6 text-gold-500" />
                <span className="text-gray-400 text-xs uppercase tracking-wider">Duration</span>
                <span className="text-white font-medium">{pkg.duration}</span>
              </div>
              <div className="flex flex-col gap-2">
                <Users className="w-6 h-6 text-gold-500" />
                <span className="text-gray-400 text-xs uppercase tracking-wider">Group Size</span>
                <span className="text-white font-medium">Up to {pkg.maxGroupSize}</span>
              </div>
              <div className="flex flex-col gap-2">
                <MapPin className="w-6 h-6 text-gold-500" />
                <span className="text-gray-400 text-xs uppercase tracking-wider">Location</span>
                <span className="text-white font-medium capitalize">{pkg.destination}</span>
              </div>
              <div className="flex flex-col gap-2">
                <Star className="w-6 h-6 text-gold-500" />
                <span className="text-gray-400 text-xs uppercase tracking-wider">Rating</span>
                <span className="text-white font-medium">{pkg.rating} / 5 ({pkg.reviewCount})</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <SectionHeading subtitle="Overview" title="The Experience" />
              <div className="prose prose-invert prose-gold max-w-none text-gray-300 leading-relaxed">
                {pkg.description.split('\n').map((p, i) => (
                  <p key={i} className="mb-4">{p}</p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {pkg.highlights.length > 0 && (
              <div>
                <SectionHeading subtitle="Key Moments" title="Highlights" />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-card p-4 border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Itinerary */}
            {pkg.itinerary.length > 0 && (
              <div>
                <SectionHeading subtitle="Journey Plan" title="Itinerary" />
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gold-500 before:to-transparent">
                  {pkg.itinerary.map((item, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-gold-500 text-background font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-card p-6 border border-white/5 shadow-xl ml-4 md:ml-0">
                        <p className="text-gray-300">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Includes / Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 border border-white/5">
                <h4 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" /> Included
                </h4>
                <ul className="space-y-4">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="text-white">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 border border-white/5">
                <h4 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                  <X className="w-6 h-6 text-red-500" /> Excluded
                </h4>
                <ul className="space-y-4">
                  {pkg.excludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="text-white opacity-30">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* SIDEBAR / FORM */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-card p-8 border border-white/10 shadow-2xl mb-8 flex flex-col items-center text-center">
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Price From</span>
                <div className="flex items-baseline gap-2 text-gold-500 mb-6">
                  <span className="text-lg font-semibold">{pkg.currency}</span>
                  <span className="text-5xl font-serif font-bold">{pkg.price}</span>
                </div>
                <p className="text-sm text-gray-400 border-t border-white/5 pt-4 w-full">
                  Per person. Rates may vary based on season and group size.
                </p>
              </div>

              <LeadForm selectedPackage={pkg} />
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
