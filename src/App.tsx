import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  MapPin, 
  BookOpen, 
  Sparkles, 
  Calendar, 
  Award, 
  Layers, 
  PenTool, 
  ArrowUp, 
  Volume2, 
  VolumeX, 
  Music, 
  ChevronDown, 
  ExternalLink,
  Github,
  Mail,
  Send,
  Sliders,
  HelpCircle,
  Clock
} from "lucide-react";

// Import custom modules
import AudioController from "./components/AudioController";
import MonumentShowcase from "./components/MonumentShowcase";
import InteractiveMap from "./components/InteractiveMap";
import TimelineSection from "./components/TimelineSection";
import DeityCodex from "./components/DeityCodex";
import GuidedTours from "./components/GuidedTours";
import MummificationGuide from "./components/MummificationGuide";
import HieroglyphTranslator from "./components/HieroglyphTranslator";
import MasonryGallery from "./components/MasonryGallery";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [visitorCount, setVisitorCount] = useState(128459);
  const [utcTime, setUtcTime] = useState("");

  // Manage clock and real-time visitor simulator
  useEffect(() => {
    // Scroll event to display 'back to top'
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);

    // Live clock update
    const intervalClock = setInterval(() => {
      const now = new Date();
      setUtcTime(now.toUTCString());
    }, 1000);

    // Live visitor counter increments to make museum feel alive!
    const intervalVisitors = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalClock);
      clearInterval(intervalVisitors);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() !== "") {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="relative min-h-screen bg-egypt-black text-egypt-sand font-sans overflow-x-hidden select-text border-[10px] border-egypt-brown">
      
      {/* Sophisticated Dark Background Pattern Overlay */}
      <div 
        className="fixed inset-0 opacity-[0.05] pointer-events-none z-[2]" 
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><path d='M10 20h20v2m-20 10h10v2M50 10l5 10h-10zM70 50h10v20h-10z' fill='%23D4AF37'/></svg>")`
        }}
      />

      {/* Top Gold Gradient Border Accent */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-60 z-50 pointer-events-none" />

      {/* Light ray effects overlaying background */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[30%] h-[120%] light-beam rotate-[15deg] opacity-[0.03]" />
        <div className="absolute top-[-20%] right-[10%] w-[40%] h-[140%] light-beam rotate-[-20deg] opacity-[0.02]" />
      </div>

      {/* FIXED AUDIO CONTROLLER */}
      <AudioController />

      {/* FLOATING TELEMETRY INDICATORS (Clean, realistic metadata, no clutter) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex flex-col gap-1 font-mono text-[9px] text-gold-500/60 uppercase bg-egypt-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-gold-500/10 pointer-events-none">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>Exhibition Online</span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <Clock className="w-3 h-3 text-gold-400" />
          <span>{utcTime || "LOADING CLOCK..."}</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="relative h-screen w-full flex flex-col justify-between items-center bg-egypt-black overflow-hidden select-none">
        
        {/* Parallax Sunrise backdrop simulation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,30,18,0.45)_0%,rgba(6,6,6,1)_85%)]" />
          {/* Animated decorative dust cloud */}
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-gold-950/20 to-transparent filter blur-[100px] rounded-full pointer-events-none animate-pulse" />
        </div>

        {/* Floating golden particles */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="sand-particle"
              style={{
                "--d": `${12 + Math.random() * 15}s`,
                "--o": `${0.1 + Math.random() * 0.35}`,
                "--x": `${-80 + Math.random() * 160}px`,
                left: `${Math.random() * 100}%`,
                width: `${1.5 + Math.random() * 3.5}px`,
                height: `${1.5 + Math.random() * 3.5}px`,
                animationDelay: `${-Math.random() * 15}s`
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Global Navigation bar */}
        <nav className="w-full max-w-7xl mx-auto px-6 py-6 z-20 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-8 h-8 border border-gold-400 flex items-center justify-center transform rotate-45 shrink-0">
              <span className="transform -rotate-45 text-[9px] text-gold-400 font-bold leading-none">GEM</span>
            </div>
            <span className="font-dec text-lg md:text-xl text-gold-400 font-extrabold tracking-[0.2em] leading-none">
              𓋹 EGYPT
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-heading text-[11px] uppercase tracking-widest text-gold-400/80">
            <button onClick={() => handleScrollToSection("monuments-showcase")} className="hover:text-gold-200 transition-colors cursor-pointer">Monuments</button>
            <button onClick={() => handleScrollToSection("interactive-map-section")} className="hover:text-gold-200 transition-colors cursor-pointer">Nile Map</button>
            <button onClick={() => handleScrollToSection("timeline-section")} className="hover:text-gold-200 transition-colors cursor-pointer">Timeline</button>
            <button onClick={() => handleScrollToSection("pantheon-section")} className="hover:text-gold-200 transition-colors cursor-pointer">Pantheon</button>
            <button onClick={() => handleScrollToSection("mummification-section")} className="hover:text-gold-200 transition-colors cursor-pointer">Sacred Science</button>
            <button onClick={() => handleScrollToSection("translator-section")} className="hover:text-gold-200 transition-colors cursor-pointer">Cartouche</button>
            <button onClick={() => handleScrollToSection("gallery-section")} className="hover:text-gold-200 transition-colors cursor-pointer">Gallery</button>
          </div>

          <button
            onClick={() => handleScrollToSection("monuments-showcase")}
            className="px-5 py-2 rounded-full border border-gold-400/30 hover:border-gold-400/70 text-gold-400 hover:text-gold-200 text-[10px] font-heading uppercase tracking-widest transition-all duration-300 bg-egypt-black/60 backdrop-blur-sm cursor-pointer"
          >
            Enter Exhibition
          </button>
        </nav>

        {/* Centered Hero Heading */}
        <div className="text-center z-20 max-w-4xl px-6 flex-1 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-gold-400 font-semibold mb-3 block">
              THE ULTIMATE CHRONICLE OF ANCIENT CIVILIZATION
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="font-dec text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-200 tracking-tight leading-[0.95] font-black shimmer-text gold-glow"
          >
            Ancient Egypt
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-egypt-sand/80 max-w-xl mx-auto mt-6 text-sm md:text-base lg:text-lg font-serif-elegant italic leading-relaxed"
          >
            "Discover one of the greatest civilizations in human history. A cinematic interactive odyssey into the stone monuments, divine pantheon, and cosmic knowledge of the Nile."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex gap-4 items-center justify-center"
          >
            <button
              onClick={() => handleScrollToSection("monuments-showcase")}
              className="px-8 py-3.5 rounded-full bg-gold-400 hover:bg-gold-500 text-egypt-black font-heading text-xs uppercase tracking-widest transition-all duration-300 font-bold box-gold-glow cursor-pointer"
            >
              Examine Monuments
            </button>
            <button
              onClick={() => handleScrollToSection("interactive-map-section")}
              className="px-8 py-3.5 rounded-full border border-gold-400/30 hover:border-gold-400/70 text-gold-300 hover:text-gold-200 bg-egypt-black/60 font-heading text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
            >
              Explore Nile Map
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="z-20 pb-8 flex flex-col items-center gap-1.5 cursor-pointer text-[10px] font-mono tracking-widest text-gold-500" onClick={() => handleScrollToSection("monuments-showcase")}>
          <span className="uppercase">SCROLL DOWN TO INITIATE TOUR</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-gold-400" />
          </motion.div>
        </div>

      </header>

      {/* STATS COUNTING STRIP */}
      <section className="bg-egypt-dark/95 border-t border-b border-gold-400/20 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="flex flex-col items-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-egypt-sand/40">CIVILIZATION SPAN</span>
            <span className="font-heading text-3xl md:text-4xl text-gold-300 font-bold mt-1.5 gold-glow">3,000+</span>
            <span className="text-[10px] font-serif-elegant italic text-gold-500/70 mt-0.5">Consecutive Years</span>
          </div>

          <div className="flex flex-col items-center border-l border-gold-500/10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-egypt-sand/40">SACRED TEMPLES</span>
            <span className="font-heading text-3xl md:text-4xl text-gold-300 font-bold mt-1.5 gold-glow">180+</span>
            <span className="text-[10px] font-serif-elegant italic text-gold-500/70 mt-0.5">Discovered complex structures</span>
          </div>

          <div className="flex flex-col items-center border-l border-gold-500/10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-egypt-sand/40">PYRAMID MONUMENTS</span>
            <span className="font-heading text-3xl md:text-4xl text-gold-300 font-bold mt-1.5 gold-glow">118+</span>
            <span className="text-[10px] font-serif-elegant italic text-gold-500/70 mt-0.5">Geometric stone tombs</span>
          </div>

          <div className="flex flex-col items-center border-l border-gold-500/10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-egypt-sand/40">ACTIVE LOGGED VISITORS</span>
            <span className="font-heading text-3xl md:text-4xl text-gold-300 font-bold mt-1.5 gold-glow">
              {visitorCount.toLocaleString()}
            </span>
            <span className="text-[10px] font-serif-elegant italic text-gold-500/70 mt-0.5">Interactive session registry</span>
          </div>

        </div>
      </section>

      {/* CORE SECTIONS */}
      <main className="z-10 relative">
        {/* 1. Monuments Showcase (Horizontal full screen slider) */}
        <MonumentShowcase />

        {/* 2. Map of Nile */}
        <InteractiveMap />

        {/* 3. Historical Chronological timeline */}
        <TimelineSection />

        {/* 4. Guided Room Narratives */}
        <GuidedTours />

        {/* 5. Deity Codex */}
        <DeityCodex />

        {/* 6. Mummification preservations */}
        <MummificationGuide />

        {/* 7. Cartouche Scribes / Hieroglyphs translation */}
        <HieroglyphTranslator />

        {/* 8. Categorised Archival Gallery */}
        <MasonryGallery />
      </main>

      {/* LUXURY CINEMATIC FOOTER */}
      <footer className="relative bg-egypt-dark border-t border-gold-400/25 py-20 px-6 md:px-12 select-none overflow-hidden">
        
        {/* Background visual details */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(44,30,18,0.1)_0%,rgba(6,6,6,1)_80%)] pointer-events-none" />
        <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full z-10 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gold-500/10 items-start">
            
            {/* Brand column */}
            <div className="lg:col-span-5 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-2">
                <span className="font-dec text-2xl text-gold-300 font-extrabold tracking-widest leading-none">
                  𓋹 EGYPT
                </span>
              </div>
              <p className="text-xs text-egypt-sand/60 max-w-sm leading-relaxed mt-1">
                An ultra-premium, cinematic, museum-quality interactive chronicle dedicated to restoring public appreciation of Ancient Egyptian history, science, and sacred geometry.
              </p>
              
              <div className="flex gap-4 items-center mt-3 text-gold-500/70 text-xs font-mono">
                <span>PROJECT REGISTRY: CD6169A3</span>
                <span>•</span>
                <span>GLOBAL CURATION</span>
              </div>
            </div>

            {/* Quick map links */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-4 text-left">
              <div className="flex flex-col gap-2.5">
                <h5 className="font-heading text-[11px] text-gold-400 uppercase tracking-widest font-bold">EXHIBITS</h5>
                <button onClick={() => handleScrollToSection("monuments-showcase")} className="text-xs text-egypt-sand/60 hover:text-gold-200 transition-colors text-left cursor-pointer">Monuments</button>
                <button onClick={() => handleScrollToSection("interactive-map-section")} className="text-xs text-egypt-sand/60 hover:text-gold-200 transition-colors text-left cursor-pointer">Nile Map</button>
                <button onClick={() => handleScrollToSection("timeline-section")} className="text-xs text-egypt-sand/60 hover:text-gold-200 transition-colors text-left cursor-pointer">Timeline</button>
                <button onClick={() => handleScrollToSection("pantheon-section")} className="text-xs text-egypt-sand/60 hover:text-gold-200 transition-colors text-left cursor-pointer">Pantheon</button>
              </div>

              <div className="flex flex-col gap-2.5">
                <h5 className="font-heading text-[11px] text-gold-400 uppercase tracking-widest font-bold">STUDIOS</h5>
                <button onClick={() => handleScrollToSection("mummification-section")} className="text-xs text-egypt-sand/60 hover:text-gold-200 transition-colors text-left cursor-pointer">Science Lab</button>
                <button onClick={() => handleScrollToSection("translator-section")} className="text-xs text-egypt-sand/60 hover:text-gold-200 transition-colors text-left cursor-pointer">Scribes Cartouche</button>
                <button onClick={() => handleScrollToSection("gallery-section")} className="text-xs text-egypt-sand/60 hover:text-gold-200 transition-colors text-left cursor-pointer">Archival Index</button>
              </div>
            </div>

            {/* Newsletter subscriber */}
            <div className="lg:col-span-4 flex flex-col gap-4 text-left bg-egypt-black/50 border border-gold-500/10 p-6 rounded-2xl">
              <div>
                <h5 className="font-heading text-[11px] text-gold-300 uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-gold-400" /> Scribes Newsletter
                </h5>
                <p className="text-[11px] text-egypt-sand/50 mt-1 leading-relaxed">
                  Join our list of researchers and scholars to receive bulletins about newly excavated Giza tombs and museum openings.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter email for scrolls"
                  className="bg-egypt-dark border border-gold-400/20 rounded-xl px-3 py-2 text-gold-100 text-xs focus:outline-none focus:border-gold-400 flex-1 min-w-0"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-gold-400 hover:bg-gold-500 text-egypt-black font-heading text-xs font-bold uppercase transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  <Send className="w-3 h-3" /> Join
                </button>
              </form>

              <AnimatePresence>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[10px] text-green-400 font-mono"
                  >
                    Your parchment is sealed! Welcome to the Royal Scribes list.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Golden animated framing line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent my-8" />

          {/* Under footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-egypt-sand/40 uppercase">
            <span>© 2026 Ancient Egypt Exhibition. ALL SOVEREIGN RIGHTS PRESERVED.</span>
            <div className="flex items-center gap-4">
              <span className="text-gold-500/60 font-bold">Museum Curation Room</span>
              <span>•</span>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-1 text-gold-400/80 hover:text-gold-200 transition-colors uppercase font-bold cursor-pointer"
              >
                BACK TO ZENITH <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Floating Quick Back to Top action button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-6 right-6 z-40 bg-gold-400 hover:bg-gold-500 text-egypt-black p-3 rounded-full shadow-lg shadow-gold-500/20 hover:scale-105 transition-all duration-300 border border-gold-300 cursor-pointer"
              title="Return to Hero"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

      </footer>

    </div>
  );
}
