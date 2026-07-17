import React, { useState } from "react";
import { galleryItems } from "../data/gallery";
import { GalleryItem } from "../types";
import { X, ZoomIn, Image, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = ["All", "Pyramids", "Temples", "Sculpture", "Artifacts", "Landscape"];

export default function MasonryGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery-section" className="relative min-h-screen py-24 px-6 md:px-12 bg-egypt-black">
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(44,30,18,0.15)_0%,rgba(6,6,6,1)_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">Sacred Eye of Horus</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold-200 mt-2 tracking-tight gold-glow">
            Archival Masonry Gallery
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="text-egypt-sand/70 max-w-xl mx-auto mt-4 font-serif-elegant italic text-sm md:text-base">
            "A comprehensive curated index of photographs, structures, artifacts, and landscapes illustrating pharaonic craftsmanship."
          </p>
        </div>

        {/* Categories Filtering tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null); // Reset lightbox references just in case
              }}
              className={`px-4 py-2 rounded-xl font-heading text-xs uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gold-400 text-egypt-black border-gold-300 font-bold box-gold-glow"
                  : "bg-egypt-dark/45 border-gold-500/10 text-gold-400/80 hover:border-gold-500/30 hover:text-gold-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightboxIndex(index)}
                className="break-inside-avoid relative rounded-2xl overflow-hidden border border-gold-500/10 bg-egypt-dark/40 cursor-pointer group box-gold-glow-hover transition-all duration-500"
              >
                {/* Photo */}
                <div className="overflow-hidden aspect-auto">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Dark gradient slide-up card */}
                <div className="absolute inset-0 bg-gradient-to-t from-egypt-black/95 via-egypt-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400">{item.category}</span>
                  <h4 className="font-heading text-sm text-gold-200 font-bold mt-1 tracking-wider uppercase flex items-center justify-between">
                    {item.title}
                    <ZoomIn className="w-4 h-4 text-gold-400 shrink-0" />
                  </h4>
                  <p className="text-[10px] text-egypt-sand/70 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {currentLightboxItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-egypt-black/95 z-50 flex flex-col items-center justify-center p-4"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 text-gold-400/80 hover:text-gold-200 transition-colors p-2 bg-egypt-black/60 rounded-full border border-gold-500/10 hover:border-gold-500/30 z-55 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={handlePrev}
                className="absolute left-6 text-gold-400/80 hover:text-gold-200 transition-colors p-3 bg-egypt-black/60 rounded-full border border-gold-500/10 hover:border-gold-500/30 z-55 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-6 text-gold-400/80 hover:text-gold-200 transition-colors p-3 bg-egypt-black/60 rounded-full border border-gold-500/10 hover:border-gold-500/30 z-55 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Central Box */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="max-w-4xl w-full flex flex-col items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-2xl overflow-hidden border border-gold-500/20 max-h-[70vh]">
                  <img
                    src={currentLightboxItem.imageUrl}
                    alt={currentLightboxItem.title}
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                  />
                </div>

                <div className="text-center max-w-xl">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-gold-400 uppercase">{currentLightboxItem.category}</span>
                  <h3 className="font-heading text-xl md:text-2xl text-gold-200 mt-1 tracking-wider uppercase">{currentLightboxItem.title}</h3>
                  <p className="text-xs text-egypt-sand/80 leading-relaxed mt-2 italic">
                    {currentLightboxItem.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
