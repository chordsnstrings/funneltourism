import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "Destinations", href: "/destinations" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="Funnel Experts Tours & Travel" 
              className="h-12 w-auto group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-xl leading-none font-medium tracking-wide">FUNNEL EXPERTS</span>
              <span className="text-[10px] tracking-[0.3em] text-gold-500 uppercase">Tours & Travel</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-wider font-medium transition-colors hover:text-gold-500",
                  location === link.href ? "text-gold-500" : "text-gray-300"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end gap-0.5">
              <a href="tel:+971556710308" className="text-sm font-medium hover:text-gold-500 transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500" />
                +971 55 671 0308
              </a>
              <a href="tel:+97145667208" className="text-xs text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2">
                <Phone className="w-3 h-3 text-gold-500/70" />
                04 566 7208
              </a>
            </div>
            <Link 
              href="/packages" 
              className="bg-gold-500 hover:bg-gold-400 text-background px-6 py-2.5 text-sm uppercase tracking-wider font-semibold transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-gold-500 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-sidebar border-l border-sidebar-border flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-gold-500"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col px-8 py-4 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-3xl font-serif tracking-wide block border-b border-white/5 pb-4",
                      location === link.href ? "text-gold-500" : "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <div className="mt-8 space-y-4">
                <a href="tel:+971556710308" className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-gold-500" />
                  +971 55 671 0308
                </a>
                <a href="tel:+97145667208" className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-gold-500" />
                  04 566 7208
                </a>
                <a href="mailto:info@funnelexpertstours.ae" className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-gold-500" />
                  info@funnelexpertstours.ae
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
