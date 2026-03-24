import { Link } from "wouter";
import { motion } from "framer-motion";
import { useListPackages } from "@workspace/api-client-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/PackageCard";
import { ArrowRight, Star, Shield, Map, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const { data: packagesRes, isLoading } = useListPackages();
  const packages = packagesRes?.data || [];
  
  // Get top 3 featured/popular packages
  const featuredPackages = packages.filter(p => p.isPopular).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Absolute Background Texture & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-texture.png`} 
            alt="Luxury background texture" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full"
          >
            <span className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Premium UAE Experiences
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1]"
          >
            Discover UAE Like <br/>
            <span className="text-gradient-gold italic pr-2">Never Before</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
          >
            Exclusive desert safaris, private city tours, and luxurious escapes curated for the discerning traveler.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/packages" 
              className="bg-gradient-gold text-background px-8 py-4 uppercase tracking-widest font-semibold text-sm hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all w-full sm:w-auto"
            >
              Explore Packages
            </Link>
            <Link 
              href="/destinations" 
              className="group flex items-center justify-center gap-3 text-white uppercase tracking-widest text-sm font-medium hover:text-gold-500 transition-colors w-full sm:w-auto"
            >
              View Destinations 
              <span className="w-10 h-[1px] bg-gold-500 group-hover:w-16 transition-all duration-300"></span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-[0.03] z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading 
              subtitle="Curated Experiences" 
              title="Featured Journeys" 
              className="mb-0"
            />
            <Link href="/packages" className="text-gold-500 hover:text-white uppercase tracking-widest text-xs font-semibold flex items-center gap-2 transition-colors">
              View All Tours <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-96 bg-card animate-pulse border border-white/5"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPackages.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                subtitle="The Funnel Experts Difference" 
                title="Redefining Luxury Travel in the Emirates" 
              />
              <p className="text-gray-400 mb-8 leading-relaxed">
                We don't just sell tours; we craft unforgettable memories. With deep local expertise and a commitment to unparalleled service, we provide exclusive access to the UAE's most spectacular destinations.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-1">VIP Treatment</h4>
                    <p className="text-gray-500 text-sm">Private transfers, expert guides, and priority access at all locations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Map className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-1">Local Expertise</h4>
                    <p className="text-gray-500 text-sm">Discover hidden gems known only to our experienced local concierges.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-1">Guaranteed Quality</h4>
                    <p className="text-gray-500 text-sm">Meticulously inspected vehicles, camps, and partner facilities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* landscape desert placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80" 
                alt="Luxury Desert Safari" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-card p-8 border border-white/10 shadow-2xl max-w-xs">
                <div className="text-gold-500 text-5xl font-serif mb-2">10k+</div>
                <div className="text-white text-sm uppercase tracking-wider font-semibold">Happy Travelers</div>
                <div className="text-gray-500 text-xs mt-2">Creating memories since 2015</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 relative flex items-center justify-center text-center overflow-hidden">
        {/* city night placeholder */}
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80" 
          alt="Dubai Skyline" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/80" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <SectionHeading 
            subtitle="Ready for an adventure?" 
            title="Let us craft your perfect UAE itinerary" 
            centered 
          />
          <Link 
            href="/contact" 
            className="inline-block bg-gradient-gold text-background px-10 py-4 uppercase tracking-widest font-semibold text-sm hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all"
          >
            Contact Our Concierge
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
