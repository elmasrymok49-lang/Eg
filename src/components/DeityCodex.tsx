import React, { useState } from "react";
import { deities } from "../data/deities";
import { Deity } from "../types";
import { Sparkles, Eye, ShieldAlert, Heart, Star, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function DeityCodex() {
  const [selectedDeity, setSelectedDeity] = useState<Deity | null>(deities[0]);

  return (
    <section id="pantheon-section" className="relative min-h-screen py-24 px-6 md:px-12 bg-egypt-black flex flex-col justify-center">
      
      {/* Background visuals */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,40,16,0.15)_0%,rgba(6,6,6,1)_80%)] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-gold-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">Celestial Pantheon</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold-200 mt-2 tracking-tight gold-glow">
            The Deity Codex
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="text-egypt-sand/70 max-w-xl mx-auto mt-4 font-serif-elegant italic text-sm md:text-base">
            "They governed the floods, judged the dead, and sailed across the heavens. Step into the ancient cosmic court."
          </p>
        </div>

        {/* Pantheon Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Deity Buttons */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto pb-4 lg:pb-0 pr-0 lg:pr-4 custom-scrollbar">
            {deities.map((deity) => {
              const isSelected = selectedDeity?.id === deity.id;
              return (
                <button
                  key={deity.id}
                  onClick={() => setSelectedDeity(deity)}
                  className={`flex-shrink-0 lg:flex-shrink flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer min-w-[180px] lg:min-w-0 ${
                    isSelected
                      ? "bg-gradient-to-r from-gold-950/40 to-egypt-dark border-gold-400 text-gold-200 box-gold-glow"
                      : "bg-egypt-dark/35 border-gold-500/10 text-egypt-sand/70 hover:border-gold-500/30 hover:text-gold-300"
                  }`}
                >
                  {/* Decorative Deity Thumbnail Placeholders with custom text icon */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-heading text-xs font-bold transition-colors ${
                    isSelected ? "bg-gold-400 text-egypt-black" : "bg-gold-950/50 text-gold-400"
                  }`}>
                    {deity.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading text-xs tracking-wider uppercase font-semibold">{deity.name}</h4>
                    <p className="text-[10px] text-gold-500/80 font-mono mt-0.5 truncate max-w-[140px]">{deity.title}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right panel: Active Deity Presentation */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {selectedDeity && (
                <motion.div
                  key={selectedDeity.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-egypt-dark/90 border border-gold-400/20 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start min-h-[480px] box-gold-glow"
                >
                  
                  {/* Avatar / Portrait Panel */}
                  <div className="w-full md:w-5/12 flex flex-col gap-4 self-center md:self-stretch">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold-500/15 bg-egypt-black flex flex-col justify-center items-center p-6 text-center group">
                      
                      {/* Stylized geometric background illustration */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,rgba(6,6,6,1)_85%)]" />
                      <div className="absolute w-44 h-44 rounded-full border border-gold-400/10 animate-[spin_20s_linear_infinite]" />
                      <div className="absolute w-36 h-36 rounded-full border-dashed border-gold-500/10 animate-[spin_10s_linear_infinite]" />
                      
                      {/* Big artistic monogram */}
                      <span className="font-dec text-8xl md:text-9xl text-gold-400/15 group-hover:text-gold-400/25 transition-colors duration-500 pointer-events-none">
                        {selectedDeity.name.charAt(0)}
                      </span>
                      
                      {/* Overlay badge with sacred role */}
                      <div className="absolute bottom-6 left-6 right-6 bg-egypt-black/80 p-3 rounded-xl border border-gold-400/15">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400">SACRED ROLE</span>
                        <h5 className="font-heading text-xs text-gold-200 mt-0.5 truncate">{selectedDeity.role}</h5>
                      </div>
                    </div>

                    {/* Holy Symbol details */}
                    <div className="bg-egypt-black/50 border border-gold-500/10 p-4 rounded-xl text-center">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-gold-500/80">SAINT SYMBOL</span>
                      <p className="text-xs text-egypt-sand/80 font-serif-elegant italic mt-1">{selectedDeity.symbol}</p>
                    </div>
                  </div>

                  {/* Codex text / mythology panel */}
                  <div className="w-full md:w-7/12 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-gold-400 uppercase">OFFICIAL SACRED SCROLL</span>
                      <h3 className="font-heading text-3xl md:text-4xl text-gold-200 mt-1 tracking-tight">
                        {selectedDeity.name}
                      </h3>
                      <p className="text-xs text-gold-400/90 font-serif-elegant italic mt-1">
                        "{selectedDeity.title}"
                      </p>

                      <div className="w-16 h-[1px] bg-gold-400/30 my-4" />

                      <p className="text-egypt-sand/85 text-xs md:text-sm leading-relaxed">
                        {selectedDeity.description}
                      </p>

                      <div className="mt-6">
                        <h4 className="font-heading text-xs text-gold-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Mythological Insights
                        </h4>
                        <div className="flex flex-col gap-3">
                          {selectedDeity.interestingFacts.map((fact, idx) => (
                            <div key={idx} className="bg-egypt-black/40 border border-gold-500/5 p-3 rounded-lg flex items-start gap-3">
                              <span className="text-xs text-gold-400 font-bold font-mono">0{idx + 1}</span>
                              <p className="text-[11px] text-egypt-sand/70 leading-relaxed">{fact}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
