import React, { useState } from "react";
import { Copy, Check, Sparkles, BookOpen, PenTool } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Letter to Hieroglyph Unicode mapping (uniliteral signs)
const HIEROGLYPH_MAP: { [key: string]: { char: string; name: string; symbol: string } } = {
  a: { char: "𓄿", name: "Alef", symbol: "Egyptian Vulture" },
  b: { char: "𓃀", name: "Bet", symbol: "Foot / Leg" },
  c: { char: "𓎡", name: "Kaf", symbol: "Basket with Handle" },
  d: { char: "𓂋", name: "Dalet", symbol: "Hand" },
  e: { char: "𓇋", name: "Yod", symbol: "Flowering Reed" },
  f: { char: "𓆑", name: "Fit", symbol: "Horned Viper" },
  g: { char: "𓎼", name: "Gaf", symbol: "Jar Stand" },
  h: { char: "𓉔", name: "He", symbol: "Reed Shelter / House" },
  i: { char: "𓇋", name: "Yod", symbol: "Flowering Reed" },
  j: { char: "𓆓", name: "Gimel", symbol: "Cobra" },
  k: { char: "𓎡", name: "Kaf", symbol: "Basket with Handle" },
  l: { char: "𓃭", name: "Lamed", symbol: "Recumbent Lion" },
  m: { char: "𓅓", name: "Mem", symbol: "Owl" },
  n: { char: "𓈖", name: "Nun", symbol: "Water Ripple" },
  o: { char: "𓅱", name: "Waw", symbol: "Quail Chick" },
  p: { char: "𓊪", name: "Pe", symbol: "Reed Mat" },
  q: { char: "𓏘", name: "Qof", symbol: "Sandy Slope" },
  r: { char: "𓂋", name: "Resh", symbol: "Mouth" },
  s: { char: "𓋴", name: "Samekh", symbol: "Folded Cloth" },
  t: { char: "𓏏", name: "Taw", symbol: "Loaf of Bread" },
  u: { char: "𓅱", name: "Waw", symbol: "Quail Chick" },
  v: { char: "𓆑", name: "Fit", symbol: "Horned Viper" },
  w: { char: "𓅱", name: "Waw", symbol: "Quail Chick" },
  x: { char: "𓎡𓋴", name: "Ks", symbol: "Basket + Cloth" },
  y: { char: "𓇌", name: "Two Reeds", symbol: "Double Flowering Reeds" },
  z: { char: "𓊃", name: "Zayin", symbol: "Door Bolt" },
  " ": { char: "  ", name: "Space", symbol: "Space" }
};

// Major symbolic glyphs
const SACRED_GLYPHS = [
  { char: "𓋹", name: "Ankh", symbol: "Key of Life", meaning: "Symbolizes eternal life, physical health, and breath. Often held by gods in temple reliefs." },
  { char: "𓂀", name: "Wedjat", symbol: "Eye of Horus", meaning: "Protective amulet of spiritual vision, healing, completion, and royal power." },
  { char: "𓆣", name: "Khepri", symbol: "Scarab Beetle", meaning: "Represents self-creation, sunrise, renewal of life, and spiritual transformation." },
  { char: "𓊽", name: "Djed", symbol: "Spine of Osiris", meaning: "Symbol of stability, endurance, strength, and resurrection." },
  { char: "𓋾", name: "Was", symbol: "Scepter of Power", meaning: "The divine staff representing dominion, sovereignty, power, and wealth." }
];

export default function HieroglyphTranslator() {
  const [inputText, setInputText] = useState("ANCIENT EGYPT");
  const [copied, setCopied] = useState(false);

  const getTranslation = () => {
    return inputText
      .toLowerCase()
      .split("")
      .map((char) => {
        if (HIEROGLYPH_MAP[char]) {
          return HIEROGLYPH_MAP[char];
        }
        return { char: "", name: "", symbol: "" };
      })
      .filter((item) => item.char !== "");
  };

  const translatedString = getTranslation()
    .map((item) => item.char)
    .join("");

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="translator-section" className="relative min-h-screen py-24 px-6 md:px-12 bg-egypt-black/95">
      
      {/* Decorative vertical golden banners on sides */}
      <div className="absolute left-4 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-gold-400/20 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute right-4 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-gold-400/20 to-transparent pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">Sacred Scribes Studio</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold-200 mt-2 tracking-tight gold-glow">
            Hieroglyphic Cartouche
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="text-egypt-sand/70 max-w-xl mx-auto mt-4 font-serif-elegant italic text-sm md:text-base">
            "Type your name or thoughts to render them in Medu Netjer—the cosmic alphabet carved into stone temples."
          </p>
        </div>

        {/* Translator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Live Input & Cartouche Representation */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-egypt-dark border border-gold-400/15 p-6 md:p-8 rounded-3xl box-gold-glow">
              <div className="flex items-center gap-2 mb-4">
                <PenTool className="w-4 h-4 text-gold-400" />
                <h3 className="font-heading text-sm text-gold-300 uppercase tracking-wider">Engrave Your Scribe</h3>
              </div>
              
              <input
                type="text"
                maxLength={20}
                value={inputText}
                onChange={(e) => setInputText(e.target.value.toUpperCase())}
                className="w-full bg-egypt-black/80 border border-gold-400/20 rounded-xl px-4 py-3 text-gold-100 font-heading text-sm uppercase tracking-widest focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/50"
                placeholder="Type name here (A-Z)"
              />
              <p className="text-[10px] text-egypt-sand/50 mt-1 font-mono">Max 20 English characters. Non-alphabetic symbols are skipped.</p>
            </div>

            {/* Simulated Royal Cartouche */}
            <div className="relative border-4 border-gold-400/30 rounded-[40px] px-8 py-10 bg-gradient-to-b from-egypt-dark/95 to-egypt-black flex flex-col items-center justify-center min-h-[220px] text-center overflow-hidden">
              {/* Cartouche End ties (traditional tying node at bottom) */}
              <div className="absolute bottom-3 w-10 h-2 bg-gold-400/40 rounded-full" />
              <div className="absolute bottom-1 w-6 h-2 bg-gold-400/30 rounded-full" />
              
              {/* Background ambient light */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)]" />

              <span className="font-mono text-[9px] uppercase tracking-widest text-gold-500/80 mb-4">Royal Cartouche</span>
              
              <div className="flex flex-wrap gap-4 items-center justify-center px-4 py-2 select-all font-body text-4xl md:text-5xl lg:text-6xl text-gold-300 tracking-[0.2em] select-none">
                {translatedString || "𓄿𓈖𓎡𓇋"}
              </div>

              {/* Action bar */}
              <div className="mt-8 flex gap-3">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/30 text-gold-300 text-xs font-heading uppercase tracking-wider transition-all duration-300 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400 animate-scale" /> Copied Glyphs
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Unicode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Symbolic Dictionary and Sign Meanings */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-egypt-dark border border-gold-400/15 p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-gold-400" />
                <h3 className="font-heading text-sm text-gold-300 uppercase tracking-wider">Sacred Symbolic Keys</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                {SACRED_GLYPHS.map((glyph) => (
                  <div key={glyph.char} className="bg-egypt-black/50 border border-gold-500/5 p-4 rounded-xl flex gap-4 items-center transition-transform hover:-translate-y-1 duration-300">
                    <span className="text-4xl text-gold-400 font-medium select-none">{glyph.char}</span>
                    <div>
                      <h4 className="font-heading text-xs text-gold-200 tracking-wider uppercase font-semibold">
                        {glyph.name} <span className="text-[10px] font-mono text-gold-500 font-normal ml-1">({glyph.symbol})</span>
                      </h4>
                      <p className="text-[11px] text-egypt-sand/70 mt-1 leading-relaxed">{glyph.meaning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Translation index display */}
        <div className="mt-12 bg-egypt-dark/40 border border-gold-500/10 p-6 rounded-2xl">
          <h4 className="font-heading text-xs text-gold-300 uppercase tracking-widest mb-4 flex items-center gap-1.5 justify-center">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Scribe Decryption Ledger
          </h4>
          <div className="flex flex-wrap gap-4 justify-center">
            {getTranslation().map((item, idx) => (
              <div key={idx} className="bg-egypt-black/80 border border-gold-500/10 p-3 rounded-lg text-center w-20 flex flex-col items-center">
                <span className="text-2xl text-gold-300 select-none">{item.char}</span>
                <span className="text-[10px] font-heading font-bold text-gold-400 mt-1 uppercase">{inputText[idx]}</span>
                <span className="text-[8px] font-mono text-egypt-sand/40 truncate max-w-full">{item.symbol}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
