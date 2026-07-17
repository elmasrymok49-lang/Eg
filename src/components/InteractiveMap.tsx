import React, { useState } from "react";
import { monuments } from "../data/monuments";
import { Monument } from "../types";
import { MapPin, X, Info, Award, Calendar, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function InteractiveMap() {
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(null);
  const [hoveredMonument, setHoveredMonument] = useState<Monument | null>(null);

  // We map the monuments coordinate x and y onto our beautiful custom SVG map representation
  return (
    <section id="interactive-map-section" className="relative min-h-screen py-24 px-6 md:px-12 bg-egypt-black border-t border-b border-gold-400/20 flex flex-col justify-center">
      
      {/* Background glowing decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,30,18,0.25)_0%,rgba(6,6,6,1)_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto w-full z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">Cartography of the Nile</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold-200 mt-2 tracking-tight gold-glow">
            Interactive Realm Map
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="text-egypt-sand/70 max-w-xl mx-auto mt-4 font-serif-elegant italic text-sm md:text-base">
            "Click on the sacred coordinates along the golden artery of the Nile to explore the structures that conquered time."
          </p>
        </div>

        {/* Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Legend list on the left */}
          <div className="lg:col-span-4 flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar order-2 lg:order-1">
            <div className="bg-egypt-dark/80 border border-gold-400/15 p-4 rounded-xl mb-2">
              <h3 className="font-heading text-sm text-gold-300 uppercase tracking-widest flex items-center gap-2">
                <Compass className="w-4 h-4 text-gold-400" /> Map Registry
              </h3>
              <p className="text-xs text-egypt-sand/50 mt-1">Select a site to inspect its archaeological log.</p>
            </div>
            
            {monuments.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMonument(m)}
                onMouseEnter={() => setHoveredMonument(m)}
                onMouseLeave={() => setHoveredMonument(null)}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 text-left ${
                  selectedMonument?.id === m.id
                    ? "bg-gold-500/10 border-gold-400 text-gold-200 box-gold-glow"
                    : hoveredMonument?.id === m.id
                    ? "bg-egypt-dark border-gold-500/40 text-egypt-sand"
                    : "bg-egypt-dark/40 border-gold-500/10 text-egypt-sand/70"
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${selectedMonument?.id === m.id ? "bg-gold-400 animate-ping" : "bg-gold-500/40"}`} />
                <div>
                  <h4 className="font-heading text-xs tracking-wider uppercase font-semibold">{m.title}</h4>
                  <p className="text-[10px] text-gold-400/70 font-mono mt-0.5">{m.location}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Golden Vector Map in the Middle/Right */}
          <div className="lg:col-span-8 relative flex justify-center items-center bg-egypt-dark/40 border border-gold-400/10 p-6 md:p-10 rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px] order-1 lg:order-2">
            
            {/* Parchment Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            {/* SVG Interactive Map Art */}
            <div className="relative w-full max-w-[500px] h-[550px]">
              
              <svg viewBox="0 0 400 500" className="w-full h-full text-gold-400/10 fill-none pointer-events-none">
                {/* Nile Delta & River outline */}
                <path
                  d="M 180 500 L 182 460 L 175 420 L 165 380 L 160 340 L 165 300 L 162 260 L 152 220 L 142 180 L 150 140 L 155 110 L 165 90 C 145 60, 110 50, 100 40 M 165 90 C 185 60, 220 50, 230 40 M 165 90 L 170 40"
                  stroke="#D4AF37"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-20 filter blur-[1px]"
                />
                <path
                  d="M 180 500 L 182 460 L 175 420 L 165 380 L 160 340 L 165 300 L 162 260 L 152 220 L 142 180 L 150 140 L 155 110 L 165 90 C 145 60, 110 50, 100 40 M 165 90 C 185 60, 220 50, 230 40 M 165 90 L 170 40"
                  stroke="#5588ff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                />

                {/* Red Sea Outline (Right Side) */}
                <path
                  d="M 380 500 L 375 440 L 360 380 L 340 320 L 310 260 L 290 220 L 315 160 L 340 100"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="opacity-20"
                />
                <text x="320" y="240" fill="#D4AF37" fontSize="10" fontFamily="monospace" className="opacity-40 uppercase tracking-widest rotate-[-60deg]">Red Sea</text>
                <text x="70" y="80" fill="#D4AF37" fontSize="10" fontFamily="monospace" className="opacity-40 uppercase tracking-widest">Western Desert</text>
                <text x="110" y="480" fill="#D4AF37" fontSize="10" fontFamily="monospace" className="opacity-40 uppercase tracking-widest rotate-[45deg]">Nile River Valley</text>
                
                {/* Compass Rose decoration */}
                <g transform="translate(60, 420)" className="opacity-25">
                  <circle cx="0" cy="0" r="24" stroke="#D4AF37" strokeWidth="0.5" />
                  <path d="M 0 -30 L 5 -5 L 30 0 L 5 5 L 0 30 L -5 5 L -30 0 L -5 -5 Z" fill="#D4AF37" />
                  <text x="-4" y="-35" fill="#D4AF37" fontSize="10" fontWeight="bold">N</text>
                </g>
              </svg>

              {/* Map Coordinates Pins */}
              {monuments.map((m) => {
                const isActive = selectedMonument?.id === m.id;
                const isHovered = hoveredMonument?.id === m.id;
                
                // Coordinates converted to maps
                // Simple formula for placing pins across Nile River flow
                let leftPercent = "50%";
                let topPercent = "50%";
                
                if (m.id === "giza-pyramid" || m.id === "great-sphinx") { leftPercent = "43%"; topPercent = "25%"; }
                else if (m.id === "saqqara-pyramid" || m.id === "red-pyramid" || m.id === "bent-pyramid") { leftPercent = "42%"; topPercent = "29%"; }
                else if (m.id === "dendera-temple") { leftPercent = "45%"; topPercent = "52%"; }
                else if (m.id === "karnak-temple" || m.id === "luxor-temple" || m.id === "valley-kings" || m.id === "hatshepsut-temple" || m.id === "tutankhamun-tomb") { leftPercent = "47%"; topPercent = "57%"; }
                else if (m.id === "edfu-temple") { leftPercent = "45%"; topPercent = "67%"; }
                else if (m.id === "kom-ombo") { leftPercent = "48%"; topPercent = "74%"; }
                else if (m.id === "philae-temple") { leftPercent = "49%"; topPercent = "80%"; }
                else if (m.id === "abu-simbel") { leftPercent = "42%"; topPercent = "92%"; }
                else if (m.id === "nile-river") { leftPercent = "53%"; topPercent = "45%"; }
                else if (m.id === "hieroglyphics") { leftPercent = "52%"; topPercent = "15%"; }
                else if (m.id === "egyptian-museum") { leftPercent = "46%"; topPercent = "22%"; }
                else if (m.id === "egyptian-astronomy") { leftPercent = "56%"; topPercent = "33%"; }
                else if (m.id === "egyptian-jewelry") { leftPercent = "58%"; topPercent = "48%"; }

                return (
                  <div
                    key={m.id}
                    style={{ left: leftPercent, top: topPercent }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                    onClick={() => setSelectedMonument(m)}
                    onMouseEnter={() => setHoveredMonument(m)}
                    onMouseLeave={() => setHoveredMonument(null)}
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.3 : isHovered ? 1.15 : 1,
                        y: isHovered || isActive ? -4 : 0
                      }}
                      className="relative"
                    >
                      {/* Glow rings */}
                      {(isActive || isHovered) && (
                        <span className="absolute inset-0 rounded-full bg-gold-400/30 animate-ping" />
                      )}
                      
                      <div className={`p-2 rounded-full border transition-all duration-300 ${
                        isActive 
                          ? "bg-gold-400 text-egypt-black border-gold-300 shadow-lg shadow-gold-500/50" 
                          : isHovered 
                          ? "bg-egypt-dark text-gold-300 border-gold-400" 
                          : "bg-egypt-black/80 text-gold-500/80 border-gold-500/30"
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>

                      {/* Tooltip on Hover */}
                      <AnimatePresence>
                        {isHovered && !isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: -45, x: "-50%" }}
                            exit={{ opacity: 0, y: 10, x: "-50%" }}
                            className="absolute left-1/2 bg-egypt-black/95 border border-gold-400/30 text-gold-200 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap z-30 font-heading tracking-wider flex items-center gap-1.5 box-gold-glow"
                          >
                            {m.title}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Modal of selected monument */}
        <AnimatePresence>
          {selectedMonument && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-egypt-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedMonument(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="bg-egypt-dark border border-gold-400/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6 md:p-10 flex flex-col md:flex-row gap-8 box-gold-glow"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMonument(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-gold-400/70 hover:text-gold-200 transition-colors p-2 bg-egypt-black/60 rounded-full border border-gold-500/10 hover:border-gold-500/30"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left: Image & Quick Stats */}
                <div className="w-full md:w-5/12 flex flex-col gap-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-gold-500/20">
                    <img
                      src={selectedMonument.imageUrl}
                      alt={selectedMonument.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-egypt-dark via-transparent to-transparent" />
                    
                    {/* Location Badge */}
                    <div className="absolute bottom-4 left-4 bg-egypt-black/80 px-3 py-1.5 rounded-lg border border-gold-400/20 text-[11px] tracking-wider text-gold-300 font-heading">
                      {selectedMonument.location}
                    </div>
                  </div>

                  {/* Fact Block */}
                  <div className="bg-egypt-black/60 border border-gold-500/15 p-4 rounded-xl">
                    <h5 className="font-heading text-xs text-gold-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-gold-500" /> Key Statistic
                    </h5>
                    <div className="flex gap-4">
                      {selectedMonument.statistics.slice(0, 2).map((stat, i) => (
                        <div key={i} className="flex-1">
                          <p className="text-[10px] text-egypt-sand/50 font-mono uppercase">{stat.label}</p>
                          <p className="text-xl font-heading text-gold-300 font-bold mt-0.5">
                            {stat.value}
                            <span className="text-xs font-mono font-normal text-gold-400/70">{stat.suffix}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: History, Explanations, Quote */}
                <div className="w-full md:w-7/12 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-gold-400 uppercase flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {selectedMonument.timeline}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-gold-200 mt-2 tracking-tight">
                      {selectedMonument.title}
                    </h3>
                    <p className="font-serif-elegant italic text-gold-100/80 text-sm mt-2">
                      "{selectedMonument.subtitle}"
                    </p>
                    
                    <div className="w-16 h-[1px] bg-gold-400/30 my-4" />

                    <p className="text-egypt-sand/85 text-xs md:text-sm leading-relaxed mb-4">
                      {selectedMonument.detailedDescription}
                    </p>

                    {/* Historical Quote */}
                    <div className="border-l-2 border-gold-400/50 pl-4 py-1.5 my-5 bg-gold-950/20 italic text-gold-300/90 text-xs md:text-sm font-serif-elegant">
                      "{selectedMonument.quote}"
                      <span className="block not-italic text-[10px] font-mono text-gold-400/60 mt-1 uppercase tracking-widest">— {selectedMonument.quoteAuthor}</span>
                    </div>

                    {/* Fascinating Facts */}
                    <div>
                      <h4 className="font-heading text-xs text-gold-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5" /> Structural Mysteries
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {selectedMonument.interestingFacts.map((fact, idx) => (
                          <li key={idx} className="text-[11px] text-egypt-sand/70 leading-relaxed flex items-start gap-2">
                            <span className="text-gold-400 mt-1">•</span>
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom dismiss button */}
                  <div className="mt-6 pt-4 border-t border-gold-500/10 flex justify-end">
                    <button
                      onClick={() => setSelectedMonument(null)}
                      className="px-6 py-2 rounded-xl bg-gold-400 hover:bg-gold-500 text-egypt-black font-heading text-xs uppercase tracking-wider transition-all duration-300 font-semibold"
                    >
                      Close Journal
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
