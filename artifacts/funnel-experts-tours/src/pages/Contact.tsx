import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { SEO } from "@/components/SEO";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO title="Contact Us" description="Get in touch with Funnel Experts Tours. Plan your luxury UAE experience today. Office in Production City, Dubai. Available 24/7 for VIP clients." />
      <Navbar />
      
      <div className="pt-40 pb-16 relative bg-[#050505] border-b border-white/5 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80" 
          alt="Dubai skyline" 
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            subtitle="Get In Touch" 
            title="Contact Our Concierge" 
            centered
            className="mb-0"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h3 className="text-3xl font-serif text-white mb-6">We are here to assist you</h3>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Whether you have a question about our bespoke packages, need a custom itinerary, or wish to make a special request, our luxury travel advisors are at your service.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-card border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 uppercase tracking-wider text-sm">Direct Line</h4>
                  <p className="text-gray-400 font-light">+971 55 671 0308</p>
                  <p className="text-xs text-gray-500 mt-1">Available 24/7 for VIP clients</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-card border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 uppercase tracking-wider text-sm">Email Address</h4>
                  <p className="text-gray-400 font-light">info@funnelexpertstours.ae</p>
                  <p className="text-xs text-gray-500 mt-1">We typically reply within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-card border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 uppercase tracking-wider text-sm">Corporate Office</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Galadari Building B-16 IMPZ<br />
                    Office 403, 4th Floor<br />
                    Production City, Dubai, UAE<br />
                    P.O Box: 111743
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-card border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 uppercase tracking-wider text-sm">Business Hours</h4>
                  <p className="text-gray-400 font-light">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400 font-light">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-12 relative aspect-[16/9] overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80" 
                alt="Dubai Production City area" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                Production City, Dubai
              </div>
            </div>
          </div>

          <div>
            <LeadForm className="h-full" />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
