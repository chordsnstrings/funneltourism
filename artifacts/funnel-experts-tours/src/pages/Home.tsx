import { Link } from "wouter";
import { motion } from "framer-motion";
import { getFeaturedPackages } from "@/lib/packages-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/PackageCard";
import { SEO } from "@/components/SEO";
import { ArrowRight, Star, Shield, Map, Handshake } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const featuredPackages = getFeaturedPackages(3);

  const partners = [
    {
      name: "Skydive Dubai",
      description: "Official partner for tandem skydiving over the Palm Jumeirah and desert drop zones.",
      image: "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=600&q=80",
    },
    {
      name: "Bounce X Dubai",
      description: "Exclusive access to the Middle East's premier indoor adventure and trampoline park.",
      image: "https://images.unsplash.com/photo-1570691079236-4bca6c45d440?w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80" 
            alt="Dubai skyline at sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="py-24 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeading 
              subtitle="Official Partners" 
              title="Trusted by the Best in Adventure" 
              centered
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              We've partnered with the UAE's leading adventure brands to bring you exclusive access and VIP packages you won't find anywhere else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {partners.map((partner, i) => (
              <motion.div 
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Handshake className="w-5 h-5 text-gold-500" />
                    <span className="text-gold-500 text-xs font-semibold tracking-[0.15em] uppercase">Official Partner</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3">{partner.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{partner.description}</p>
                  <Link 
                    href="/packages"
                    className="text-gold-500 hover:text-white uppercase tracking-widest text-xs font-semibold flex items-center gap-2 transition-colors"
                  >
                    View Packages <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 border-b border-white/5">
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
              <img 
                src="https://images.unsplash.com/photo-1549944850-84e00be4203b?w=800&q=80" 
                alt="Luxury Desert Safari" 
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
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
        <img 
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80" 
          alt="Dubai Night Skyline" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
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
