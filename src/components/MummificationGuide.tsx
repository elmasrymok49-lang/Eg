import React, { useState } from "react";
import { Sparkles, Eye, ShieldAlert, Heart, Star, Layers, Activity } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MummifyStep {
  step: number;
  title: string;
  ritual: string;
  duration: string;
  explanation: string;
  sacredTools: string[];
  chant: string;
}

const MUMMIFICATION_STEPS: MummifyStep[] = [
  {
    step: 1,
    title: "The Washing of Purification",
    ritual: "The Ibu Ceremony",
    duration: "Day 1 – 2",
    explanation: "The body is transported to the West Bank of the Nile and washed in an 'Ibu' (tent of purification) using fresh river water and sweet-smelling natron solutions, restoring a state of physical and spiritual cleanliness.",
    sacredTools: ["Nile Water", "Pure Natron Salts", "Lotus Leaf Perfumes"],
    chant: "May your flesh be as pure as the lotus unfolding at the dawn of the first sunrise."
  },
  {
    step: 2,
    title: "The Sacred Extraction",
    ritual: "Evisceration & Canopic Placement",
    duration: "Day 3 – 5",
    explanation: "An embalmer makes a small incision in the left side. The stomach, liver, lungs, and intestines are carefully extracted, purified, and placed into four distinct Canopic Jars representing the protective Sons of Horus. The heart, believed to house the soul, intellect, and memory, is left untouched inside the chest.",
    sacredTools: ["Obsidian Embalming Knife", "Canopic Jars of Horus", "Palm Wine"],
    chant: "Imsety, Hapy, Duamutef, Qebehsenuef; stand guard over the sacred vessel of eternal organs."
  },
  {
    step: 3,
    title: "The Silt of Dehydration",
    ritual: "The Natron Salt Treatment",
    duration: "Day 6 – 45",
    explanation: "The body is completely covered in raw, powdery Natron salt—a natural compound mined from dry desert lakebeds. It absorbs all internal moisture, fat, and liquids over a period of 40 days, halting any decomposition or cellular decay.",
    sacredTools: ["Natron Powder", "Linen Cushions", "Frankincense Dust"],
    chant: "Sands of the great desert, draw away the temporary water; seal this physical vessel for eternity."
  },
  {
    step: 4,
    title: "The Treatment of Fragrance",
    ritual: "Anointing & Cosmetic Restoration",
    duration: "Day 46 – 50",
    explanation: "The shrunken, dehydrated body is gently washed. Embalmers stuff the abdominal cavities with linen rags, sawdust, and sand to restore a plump, lifelike form. The skin is then massage and sealed with protective tree resins, beeswax, and sacred aromatic oils.",
    sacredTools: ["Myrrh Oil", "Cedar Resin", "Henna & Sawdust"],
    chant: "May the oils of cedar restore elasticity, and the fragrance of myrrh declare you divine."
  },
  {
    step: 5,
    title: "The Armor of Eternity",
    ritual: "Linen Wrapping & Amulet Placement",
    duration: "Day 51 – 65",
    explanation: "Priests carefully wrap the fingers, toes, limbs, and torso in hundreds of yards of fine linen bandages. Between each layer, they insert magical golden amulets, including the Scarab over the heart and the Wedjat Eye, while chanting spells to protect the physical form.",
    sacredTools: ["Linen Bandages", "Heart Scarab", "Gum Adhesive resin"],
    chant: "We wrap you in the protective embrace of Isis; no harm shall touch your physical limbs."
  },
  {
    step: 6,
    title: "The Opening of the Mouth",
    ritual: "Sarcophagus & Eternal Breath",
    duration: "Day 70",
    explanation: "The wrapped mummy is placed inside nested wooden and stone sarcophagi. At the tomb entrance, a high priest performs the 'Opening of the Mouth' ceremony using a sacred adze tool, magically restoring the mummy's ability to see, breathe, speak, and eat in the afterlife.",
    sacredTools: ["Sacred Adze", "Nested Sarcophagi", "Holy Water Sprinklers"],
    chant: "Your mouth is opened! You speak again; you walk again; you breathe the stars of Osiris."
  }
];

export default function MummificationGuide() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentData = MUMMIFICATION_STEPS.find((s) => s.step === activeStep) || MUMMIFICATION_STEPS[0];

  return (
    <section id="mummification-section" className="relative min-h-screen py-24 px-6 md:px-12 bg-egypt-black border-t border-gold-400/25">
      
      {/* Background visual layering */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(44,30,18,0.2)_0%,rgba(6,6,6,1)_80%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-950/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">Sacred Science of Preservation</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold-200 mt-2 tracking-tight gold-glow">
            Mummification Interactive Guide
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="text-egypt-sand/70 max-w-xl mx-auto mt-4 font-serif-elegant italic text-sm md:text-base">
            "Step into the high embalming temple. Learn how the ancients achieved biochemical immortality through chemistry and ritual."
          </p>
        </div>

        {/* Steps navigation dots */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
          {MUMMIFICATION_STEPS.map((s) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className={`px-4 py-2 rounded-xl font-heading text-xs uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                activeStep === s.step
                  ? "bg-gold-400 text-egypt-black border-gold-300 font-bold box-gold-glow"
                  : "bg-egypt-dark/60 border-gold-500/10 text-gold-400/80 hover:border-gold-500/30 hover:text-gold-200"
              }`}
            >
              Step {s.step}: {s.ritual.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Interactive Step Display */}
        <div className="bg-egypt-dark/95 border border-gold-400/20 rounded-3xl p-6 md:p-10 box-gold-glow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              
              {/* Left Column: Big Step Number and Ritual Name */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-gold-400 border border-gold-400/30 px-3 py-1 rounded-full bg-gold-950/20">
                      RITUAL TIMELINE: {currentData.duration}
                    </span>
                  </div>
                  <h3 className="font-heading text-4xl lg:text-5xl text-gold-200 mt-4 tracking-tight">
                    <span className="block font-mono text-2xl lg:text-3xl text-gold-400 mb-1 font-bold">0{currentData.step}</span>
                    {currentData.title}
                  </h3>
                  <p className="font-serif-elegant italic text-gold-300/80 text-sm mt-2">
                    "{currentData.ritual}"
                  </p>
                </div>

                {/* Liturgical Chant */}
                <div className="border-l-2 border-gold-400/50 pl-4 py-2 mt-8 bg-gold-950/10 italic text-gold-300/90 text-xs md:text-sm font-serif-elegant">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-gold-500/70 not-italic mb-1">PRIESTLY CHANT</span>
                  "{currentData.chant}"
                </div>
              </div>

              {/* Right Column: Explanations and Sacred Tools */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Explanation text */}
                <div className="bg-egypt-black/40 border border-gold-500/10 p-6 rounded-2xl">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400 block mb-2">ARCHAEOLOGICAL EXPLANATION</span>
                  <p className="text-egypt-sand/85 text-xs md:text-sm leading-relaxed">
                    {currentData.explanation}
                  </p>
                </div>

                {/* Sacred Tools List */}
                <div>
                  <h4 className="font-heading text-xs text-gold-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-gold-400" /> Sacred Materia & Tools
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentData.sacredTools.map((tool, idx) => (
                      <div key={idx} className="bg-egypt-black/60 border border-gold-500/5 p-3 rounded-xl flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                        <span className="text-[11px] text-egypt-sand/80 font-heading tracking-wide uppercase">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic progress bar */}
                <div className="mt-4 pt-4 border-t border-gold-500/10">
                  <div className="flex justify-between items-center text-[10px] font-mono text-gold-500/80 mb-2">
                    <span>TEMPLE EMBALMING SEQUENCE</span>
                    <span>{Math.round((activeStep / 6) * 100)}% COMPLETE</span>
                  </div>
                  <div className="w-full bg-egypt-black rounded-full h-1.5 overflow-hidden border border-gold-500/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(activeStep / 6) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r from-gold-600 to-gold-400 h-full"
                    />
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
