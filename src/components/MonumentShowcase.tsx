import React, { useState } from "react";
import { monuments } from "../data/monuments";
import { Monument } from "../types";
import { ArrowLeft, ArrowRight, BookOpen, Quote, Shield, Sparkles, MapPin, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function MonumentShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const activeMonument = monuments[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? monuments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === monuments.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="monuments-showcase" className="relative h-screen bg-egypt-black overflow-hidden flex flex-col justify-between select-none">
      
      {/* Cinematic Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMonument.id}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 0.35 }}
            exit={{ scale: 1.0, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img
              src={activeMonument.imageUrl}
              alt={activeMonument.title}
              className="w-full h-full object-cover filter brightness-75 contrast-125"
            />
          </motion.div>
        </AnimatePresence>
        {/* Mysterious Vignette Shadow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-egypt-black via-transparent to-egypt-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(6,6,6,0.95)_100%)]" />
      </div>

      {/* Floating Sand Particles Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="sand-particle"
            style={{
              "--d": `${10 + Math.random() * 20}s`,
              "--o": `${0.1 + Math.random() * 0.4}`,
              "--x": `${-100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${-Math.random() * 20}s`
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Header bar / Slide indicator */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-24 md:pt-28 z-20 flex justify-between items-center text-xs tracking-widest font-mono text-gold-400">
        <span className="uppercase flex items-center gap-1.5 font-bold">
          <Shield className="w-4 h-4 animate-pulse" /> SACRED INDEX
        </span>
        <div className="flex items-center gap-2 font-bold">
          <span className="text-gold-200">{(activeIndex + 1).toString().padStart(2, "0")}</span>
          <span className="opacity-30">/</span>
          <span className="opacity-60">{monuments.length.toString().padStart(2, "0")}</span>
        </div>
      </div>

      {/* Main Slide Deck Presentation */}
      <div className="w-full max-w-7xl mx-auto px-6 flex-1 flex items-center z-20 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMonument.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full"
          >
            
            {/* Monument main title and info (Left Column) */}
            <div className="lg:col-span-7 flex flex-col gap-4 text-left">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-500" /> {activeMonument.location}
              </span>
              
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-gold-200 mt-1 leading-[1.05] tracking-tight gold-glow-strong">
                {activeMonument.title}
              </h2>
              
              <p className="font-serif-elegant italic text-gold-100/90 text-base md:text-lg lg:text-xl font-medium">
                "{activeMonument.subtitle}"
              </p>

              <div className="w-20 h-[2px] bg-gradient-to-r from-gold-400 to-transparent my-2" />

              <p className="text-egypt-sand/85 text-xs md:text-sm lg:text-base leading-relaxed max-w-2xl">
                {activeMonument.description}
              </p>

              {/* Quick statistics */}
              <div className="flex gap-6 mt-4">
                {activeMonument.statistics.map((stat, i) => (
                  <div key={i} className="border-l border-gold-500/30 pl-4 py-1">
                    <p className="text-[9px] text-egypt-sand/40 font-mono uppercase tracking-widest">{stat.label}</p>
                    <p className="text-xl md:text-2xl font-heading text-gold-300 font-bold mt-1">
                      {stat.value}
                      <span className="text-xs font-mono font-normal text-gold-400/80 ml-0.5">{stat.suffix}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Slide actions */}
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => setIsDetailOpen(true)}
                  className="px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-500 text-egypt-black font-heading text-xs uppercase tracking-wider transition-all duration-300 font-bold flex items-center gap-2 box-gold-glow cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" /> Open Archaeological Log
                </button>
              </div>

            </div>

            {/* Quote of the monument (Right Column - Desktop only) */}
            <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 pl-8 border-l border-gold-500/15 justify-center">
              <Quote className="w-10 h-10 text-gold-400/30 self-start" />
              <p className="font-serif-elegant italic text-gold-200/95 text-lg md:text-xl leading-relaxed">
                "{activeMonument.quote}"
              </p>
              <span className="font-mono text-[10px] text-gold-500 uppercase tracking-widest mt-1">
                — {activeMonument.quoteAuthor}
              </span>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation and quick index bar */}
      <div className="w-full bg-gradient-to-t from-egypt-black to-transparent py-8 px-6 z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Quick jump menu */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none">
            {monuments.map((m, index) => (
              <button
                key={m.id}
                onClick={() => setActiveIndex(index)}
                className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gold-400 border-gold-300 scale-125 box-gold-glow"
                    : "bg-egypt-black border-gold-500/30 hover:border-gold-500/80"
                }`}
                title={m.title}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-gold-400/30 hover:border-gold-400/80 bg-egypt-black/60 text-gold-400 hover:text-gold-200 transition-all duration-300 cursor-pointer"
              title="Previous Monument"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-[11px] text-gold-500 font-bold uppercase tracking-widest">NAVIGATE MONUMENTS</span>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-gold-400/30 hover:border-gold-400/80 bg-egypt-black/60 text-gold-400 hover:text-gold-200 transition-all duration-300 cursor-pointer"
              title="Next Monument"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* FULL ARCHAEOLOGICAL LOG SIDE PANEL OVERLAY */}
      <AnimatePresence>
        {isDetailOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-egypt-black/90 backdrop-blur-md z-50 flex justify-end"
            onClick={() => setIsDetailOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 150 }}
              className="w-full max-w-2xl bg-egypt-dark border-l border-gold-400/25 h-full p-8 md:p-12 overflow-y-auto flex flex-col justify-between box-gold-glow"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                
                {/* Header info */}
                <div className="flex justify-between items-center mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold-400 font-bold flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-gold-400" /> Scribe Excavation File
                  </span>
                  <button
                    onClick={() => setIsDetailOpen(false)}
                    className="px-4 py-1.5 rounded-full border border-gold-400/20 text-gold-400 hover:text-gold-200 hover:border-gold-400 text-xs font-heading tracking-wider transition-all duration-300 uppercase cursor-pointer"
                  >
                    Close Log
                  </button>
                </div>

                {/* Cover Image in drawer */}
                <div className="rounded-xl overflow-hidden aspect-video border border-gold-500/15 mb-6">
                  <img
                    src={activeMonument.imageUrl}
                    alt={activeMonument.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="font-mono text-xs text-gold-400 uppercase tracking-widest">{activeMonument.timeline}</span>
                <h3 className="font-heading text-3xl md:text-4xl text-gold-200 mt-2 tracking-tight">
                  {activeMonument.title}
                </h3>
                <p className="font-serif-elegant italic text-gold-300 mt-1">
                  "{activeMonument.subtitle}"
                </p>

                <div className="w-20 h-[1px] bg-gold-400/40 my-5" />

                {/* Long description */}
                <p className="text-egypt-sand/85 text-sm leading-relaxed mb-6">
                  {activeMonument.detailedDescription}
                </p>

                {/* Sub-facts bullet points */}
                <div className="mt-6">
                  <h4 className="font-heading text-xs text-gold-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Divine Engineering Mysteries
                  </h4>
                  <div className="flex flex-col gap-3">
                    {activeMonument.interestingFacts.map((fact, i) => (
                      <div key={i} className="bg-egypt-black/50 border border-gold-500/5 p-4 rounded-xl flex gap-3 items-start">
                        <span className="text-xs text-gold-400 font-bold font-mono">0{i + 1}</span>
                        <p className="text-xs text-egypt-sand/70 leading-relaxed">{fact}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom footer of drawer */}
              <div className="mt-12 pt-6 border-t border-gold-500/10 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-egypt-sand/40">CURRENT LOCATION</span>
                  <span className="text-xs font-heading font-semibold text-gold-300 mt-0.5 uppercase">{activeMonument.location}</span>
                </div>
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="px-6 py-2 rounded-xl bg-gold-400 hover:bg-gold-500 text-egypt-black font-heading text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
                >
                  Confirm Reading
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
