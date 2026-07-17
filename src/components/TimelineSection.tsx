import React, { useState } from "react";
import { timelineEvents } from "../data/timeline";
import { Calendar, ArrowRight, Bookmark, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TimelineSection() {
  const [selectedEraIndex, setSelectedEraIndex] = useState(2); // Start at Old Kingdom (index 2)

  const activeEra = timelineEvents[selectedEraIndex];

  return (
    <section id="timeline-section" className="relative min-h-screen py-24 px-6 md:px-12 bg-egypt-black border-t border-b border-gold-400/20">
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(44,30,18,0.18)_0%,rgba(6,6,6,1)_75%)] pointer-events-none" />
      <div className="absolute left-10 top-1/3 w-72 h-72 bg-gold-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">Chronology of Dynasties</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold-200 mt-2 tracking-tight gold-glow">
            Great Historical Timeline
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="text-egypt-sand/70 max-w-xl mx-auto mt-4 font-serif-elegant italic text-sm md:text-base">
            "Chronicles from prehistoric settlements, the rise of the god-kings, the grand conquests, and the modern discoveries."
          </p>
        </div>

        {/* Horizontal Timeline Era Selectors (Desktop Style) */}
        <div className="flex overflow-x-auto gap-4 pb-6 mb-12 scrollbar-none snap-x mask-fade-edges justify-start md:justify-center">
          {timelineEvents.map((era, index) => {
            const isSelected = selectedEraIndex === index;
            return (
              <button
                key={era.id}
                onClick={() => setSelectedEraIndex(index)}
                className={`flex-shrink-0 snap-center px-5 py-3 rounded-xl border transition-all duration-300 text-left min-w-[200px] md:min-w-[240px] cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-b from-gold-950/40 to-egypt-dark border-gold-400 text-gold-200 box-gold-glow"
                    : "bg-egypt-dark/30 border-gold-500/10 text-egypt-sand/60 hover:border-gold-500/35 hover:text-gold-300"
                }`}
              >
                <span className="font-mono text-[9px] uppercase tracking-wider text-gold-500/80">{era.dateRange}</span>
                <h4 className="font-heading text-xs tracking-wider uppercase font-bold mt-1 block truncate">{era.era}</h4>
                <span className="text-[10px] text-egypt-sand/40 font-serif-elegant italic truncate block mt-0.5">{era.period}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Era Details Block */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEra.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            
            {/* Era summary card */}
            <div className="lg:col-span-4 bg-egypt-dark border border-gold-400/25 p-6 md:p-8 rounded-3xl flex flex-col justify-between box-gold-glow">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-gold-400 uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> ERA PROFILE
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-gold-200 mt-2 tracking-tight">
                  {activeEra.era}
                </h3>
                <p className="text-xs text-gold-400/80 font-serif-elegant italic mt-1">
                  {activeEra.period} • {activeEra.dateRange}
                </p>
                <div className="w-12 h-[1px] bg-gold-400/40 my-4" />
                <p className="text-egypt-sand/80 text-xs md:text-sm leading-relaxed">
                  {activeEra.summary}
                </p>
              </div>

              <div className="mt-8 bg-egypt-black/60 border border-gold-500/10 p-4 rounded-xl flex items-center gap-3">
                <Bookmark className="w-4 h-4 text-gold-400 shrink-0" />
                <p className="text-[10px] text-egypt-sand/50 font-mono">
                  Scribes categorized this as a prime turning point in national sovereignty.
                </p>
              </div>
            </div>

            {/* Chronological details chain */}
            <div className="lg:col-span-8 bg-egypt-dark/40 border border-gold-400/15 rounded-3xl p-6 md:p-10 flex flex-col gap-6 justify-center">
              <h4 className="font-heading text-xs text-gold-300 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Historic Milestones
              </h4>
              
              <div className="flex flex-col gap-6 relative pl-6 border-l border-gold-400/20">
                {activeEra.details.map((detail, idx) => (
                  <div key={idx} className="relative">
                    
                    {/* Circle pin on the vertical line */}
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-egypt-black border-2 border-gold-400" />
                    
                    <div>
                      <span className="font-mono text-xs font-bold text-gold-400 border border-gold-400/30 px-2 py-0.5 rounded-md bg-gold-950/20">
                        {detail.year}
                      </span>
                      <h5 className="font-heading text-sm text-gold-200 mt-2 tracking-wide uppercase font-semibold">
                        {detail.title}
                      </h5>
                      <p className="text-xs text-egypt-sand/70 mt-1 leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
