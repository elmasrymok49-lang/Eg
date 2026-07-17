import React, { useState } from "react";
import { guidedTours } from "../data/tours";
import { GuidedTour } from "../types";
import { Volume2, Play, Pause, ChevronRight, ChevronLeft, Headset, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GuidedTours() {
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeTour = guidedTours[activeTourIndex];
  const activeChapter = activeTour.chapters[activeChapterIndex];

  const handlePrevChapter = () => {
    setActiveChapterIndex((prev) => (prev === 0 ? activeTour.chapters.length - 1 : prev - 1));
  };

  const handleNextChapter = () => {
    setActiveChapterIndex((prev) => (prev === activeTour.chapters.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="guided-tours-section" className="relative min-h-screen py-24 px-6 md:px-12 bg-egypt-black border-b border-gold-400/25">
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(44,30,18,0.2)_0%,rgba(6,6,6,1)_80%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">AUDIO CURATION SERVICES</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold-200 mt-2 tracking-tight gold-glow">
            Guided Museum Rooms
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="text-egypt-sand/70 max-w-xl mx-auto mt-4 font-serif-elegant italic text-sm md:text-base">
            "Don your headset and step into our specialized chambers. Listen to professional archaeological commentaries explaining the divine legacies."
          </p>
        </div>

        {/* Curation Selectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left selectors */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-egypt-dark/60 border border-gold-500/10 p-4 rounded-xl mb-2">
              <h4 className="font-heading text-xs text-gold-300 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <Headset className="w-4 h-4 text-gold-400" /> SELECT CHAMBER TOUR
              </h4>
            </div>

            {guidedTours.map((tour, index) => {
              const isActive = activeTourIndex === index;
              return (
                <button
                  key={tour.id}
                  onClick={() => {
                    setActiveTourIndex(index);
                    setActiveChapterIndex(0);
                    setIsPlaying(false);
                  }}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-gold-950/40 to-egypt-dark border-gold-400 text-gold-200 box-gold-glow"
                      : "bg-egypt-dark/30 border-gold-500/10 text-egypt-sand/60 hover:border-gold-500/30 hover:text-gold-200"
                  }`}
                >
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold-500/80">{tour.duration}</span>
                  <h4 className="font-heading text-sm text-gold-200 uppercase font-semibold mt-1 tracking-wider">{tour.title}</h4>
                  <p className="text-[10px] text-egypt-sand/50 font-serif-elegant italic mt-1">{tour.narrator}</p>
                </button>
              );
            })}
          </div>

          {/* Right Presentation panel */}
          <div className="lg:col-span-8 bg-egypt-dark border border-gold-400/20 rounded-3xl p-6 md:p-10 box-gold-glow flex flex-col justify-between min-h-[460px]">
            
            {/* Narration chapter header */}
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-gold-500/10">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold-500">NARRATING CHAMBER</span>
                  <span className="font-heading text-base text-gold-200 mt-0.5 uppercase tracking-wide font-bold">{activeTour.title}</span>
                </div>
                
                {/* Waveform animation on active play */}
                {isPlaying && (
                  <div className="flex items-end gap-[2px] h-4">
                    <span className="w-[1.5px] bg-gold-400 h-2 animate-pulse rounded-full" style={{ animationDelay: '0.1s' }} />
                    <span className="w-[1.5px] bg-gold-400 h-4 animate-pulse rounded-full" style={{ animationDelay: '0.3s' }} />
                    <span className="w-[1.5px] bg-gold-400 h-1 animate-pulse rounded-full" style={{ animationDelay: '0.5s' }} />
                    <span className="w-[1.5px] bg-gold-400 h-3 animate-pulse rounded-full" style={{ animationDelay: '0.2s' }} />
                  </div>
                )}
              </div>

              {/* Sub-chapter slider details */}
              <div className="my-8 min-h-[160px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTour.id}-${activeChapterIndex}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400 bg-gold-950/20 border border-gold-400/25 px-2.5 py-0.5 rounded-full">
                      CHAPTER {activeChapterIndex + 1} OF {activeTour.chapters.length}: {activeChapter.title}
                    </span>
                    
                    <p className="text-egypt-sand/85 text-xs md:text-sm lg:text-base leading-relaxed font-serif-elegant italic mt-5">
                      "{activeChapter.text}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Narration controls bar */}
            <div className="pt-6 border-t border-gold-500/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              
              <div className="flex items-center gap-4">
                {/* Play/Pause simulation button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border border-gold-400/30 transition-all duration-300 cursor-pointer ${
                    isPlaying 
                      ? "bg-gold-500/20 text-gold-200 box-gold-glow" 
                      : "bg-gold-400 hover:bg-gold-500 text-egypt-black"
                  }`}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-egypt-sand/40">NARRATOR VOICE</span>
                  <span className="text-xs font-heading font-semibold text-gold-400 mt-0.5 uppercase">{activeTour.narrator}</span>
                </div>
              </div>

              {/* Step navigations */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevChapter}
                  className="p-2.5 rounded-full border border-gold-400/20 hover:border-gold-400/60 text-gold-400/80 hover:text-gold-200 bg-egypt-black/60 transition-colors cursor-pointer"
                  title="Previous Chapter"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-mono text-[10px] text-gold-500/80 font-bold uppercase tracking-wider">CHAPTER CONTROLS</span>
                <button
                  onClick={handleNextChapter}
                  className="p-2.5 rounded-full border border-gold-400/20 hover:border-gold-400/60 text-gold-400/80 hover:text-gold-200 bg-egypt-black/60 transition-colors cursor-pointer"
                  title="Next Chapter"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
