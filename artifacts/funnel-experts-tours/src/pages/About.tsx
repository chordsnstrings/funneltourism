import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SEO } from "@/components/SEO";
import { Award, Heart, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO title="About Us" description="Funnel Experts Tours & Travel LLC — a premier luxury travel boutique in the UAE. Discover our story, values, and commitment to Arabian hospitality." />
      <Navbar />
      
      <div className="pt-40 pb-24 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionHeading 
            subtitle="Our Story" 
            title="Elevating the Art of Arabian Hospitality" 
            centered
          />
          <p className="text-xl text-gray-300 leading-relaxed font-light mt-8">
            Founded with a passion for sharing the authentic beauty of the United Arab Emirates, Funnel Experts Tours has grown into a premier luxury travel boutique. We believe that true luxury lies in the details, the exclusivity of the experience, and the memories forged along the way.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-card p-10 border border-white/5 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-gold-500" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Excellence</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every vehicle, guide, and camp partner is rigorously vetted to ensure they meet our uncompromising standards of luxury and safety.
            </p>
          </div>
          <div className="bg-card p-10 border border-white/5 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-gold-500" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Passion</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are locals who deeply love our home. Our tours aren't just itineraries; they are invitations to experience the soul of the Emirates.
            </p>
          </div>
          <div className="bg-card p-10 border border-white/5 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-gold-500" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Sustainability</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We operate with profound respect for the delicate desert ecosystems and cultural heritage sites we visit, ensuring they remain pristine.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative p-2 border border-gold-500/30">
            {/* abstract luxury placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80" 
              alt="Luxury Details" 
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div>
            <SectionHeading subtitle="The Experience" title="Beyond the Ordinary" />
            <div className="prose prose-invert prose-gold text-gray-300">
              <p className="text-lg">
                While others offer tours, we orchestrate experiences. When you book with Funnel Experts, you gain access to a dedicated concierge team committed to anticipating your needs.
              </p>
              <p>
                Whether it's arranging a private romantic dinner deep in the Dubai desert under a canopy of stars, securing exclusive access to cultural landmarks in Fujairah, or organizing an adrenaline-pumping private adventure in the mountains of Ras Al Khaimah, we make the impossible, possible.
              </p>
              <ul className="mt-8 space-y-2 list-none p-0">
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-gold-500 rounded-full" /> 24/7 Dedicated Concierge Support</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-gold-500 rounded-full" /> Premium Fleet of Luxury Vehicles</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-gold-500 rounded-full" /> Multilingual Expert Guides</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-gold-500 rounded-full" /> Fully Customizable Itineraries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
