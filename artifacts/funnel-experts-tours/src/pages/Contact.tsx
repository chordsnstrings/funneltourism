import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-40 pb-16 relative bg-[#050505] border-b border-white/5">
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
                  <p className="text-gray-400 font-light">+971 52 123 4567</p>
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
