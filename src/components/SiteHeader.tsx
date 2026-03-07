import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How AI Helps", href: "#ai" },
  { label: "Use Cases", href: "#usecases" },
  { label: "Impact", href: "#impact" },
  { label: "Feedback", href: "#feedback" },
];

export const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur-sm"
    >
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-soft">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <span className="font-display text-xl font-semibold text-foreground">ArthaAI</span>
            <p className="text-[10px] text-muted-foreground leading-none">AI for Bharat</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => navigate("/chat")}
            className="gradient-gold text-accent-foreground font-body font-semibold rounded-lg shadow-gold hover:opacity-90 transition-opacity"
          >
            Try ArthaAI
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t bg-card p-4 space-y-3"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-sm font-body text-muted-foreground hover:text-foreground py-2"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => { setMobileOpen(false); navigate("/chat"); }}
            className="w-full gradient-gold text-accent-foreground font-body font-semibold rounded-lg"
          >
            Try ArthaAI
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
};
