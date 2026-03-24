import { Link } from "wouter";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Funnel Experts Tours & Travel" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl leading-none font-medium tracking-wide text-white">FUNNEL EXPERTS</span>
                <span className="text-[10px] tracking-[0.3em] text-gold-500 uppercase">Tours & Travel</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the pinnacle of luxury travel in the UAE. From sweeping desert dunes to the glittering skyline of Dubai, we curate unforgettable moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold-500 hover:text-background transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold-500 hover:text-background transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold-500 hover:text-background transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/packages" className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500"/> All Packages</Link></li>
              <li><Link href="/destinations" className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500"/> Destinations</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500"/> Our Story</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500"/> Contact Us</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Destinations</h4>
            <ul className="space-y-4">
              <li><Link href="/packages?destination=dubai" className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500"/> Dubai Tours</Link></li>
              <li><Link href="/packages?destination=fujairah" className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500"/> Fujairah Tours</Link></li>
              <li><Link href="/packages?destination=rak" className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500"/> Ras Al Khaimah</Link></li>
              <li><Link href="/packages?category=desert" className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500"/> Desert Safaris</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">Galadari Building B-16 IMPZ, Office 403<br/>4th Floor, Production City, Dubai, UAE<br/>P.O Box: 111743</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="tel:+971521234567" className="text-gray-400 hover:text-white transition-colors text-sm">+971 52 123 4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="mailto:info@funnelexpertstours.ae" className="text-gray-400 hover:text-white transition-colors text-sm">info@funnelexpertstours.ae</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Funnel Experts Tours & Travel LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
            <Link href="/admin/leads" className="hover:text-white transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
