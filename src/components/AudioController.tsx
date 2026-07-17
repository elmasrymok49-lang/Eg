import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isNarrating, setIsNarrating] = useState(false);
  const [tourText, setTourText] = useState("");
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  
  // Natural atmospheric synthesiser using Web Audio API
  // Generates a deep, warm, mysterious desert ambient drone and gentle flute-like swells
  const startSynth = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      
      // Main drone
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gainNode = ctx.createGain();
      
      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(55, ctx.currentTime); // A1 note
      
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(110, ctx.currentTime); // A2 note
      
      // Low pass filter to make it a warm, mysterious rumble
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(180, ctx.currentTime);
      filter.Q.setValueAtTime(1, ctx.currentTime);
      
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume * 0.4, ctx.currentTime + 3);
      
      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc1.start();
      osc2.start();
      
      oscRef.current = osc1; // store one to stop later
      filterRef.current = filter;
      gainNodeRef.current = gainNode;
      
      // Create periodic flute swells (procedural music)
      const interval = setInterval(() => {
        if (!isPlaying || !audioContextRef.current) {
          clearInterval(interval);
          return;
        }
        playFluteSwell();
      }, 7000);
      
    } catch (e) {
      console.warn("Web Audio API not supported or blocked: ", e);
    }
  };
  
  const playFluteSwell = () => {
    const ctx = audioContextRef.current;
    if (!ctx || ctx.state === "suspended") return;
    
    const fluteOsc = ctx.createOscillator();
    const fluteGain = ctx.createGain();
    const fluteFilter = ctx.createBiquadFilter();
    
    fluteOsc.type = "sine";
    // Egyptian-sounding scale notes (double harmonic major/phrygian dominant)
    const notes = [146.83, 155.56, 185.00, 196.00, 220.00, 233.08, 277.18, 293.66]; // D3 scale
    const randomNote = notes[Math.floor(Math.random() * notes.length)] * 2; // transpose to D4 range
    
    fluteOsc.frequency.setValueAtTime(randomNote, ctx.currentTime);
    
    // Add subtle vibrato
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.setValueAtTime(4.5, ctx.currentTime); // 4.5Hz vibrato
    lfoGain.gain.setValueAtTime(5, ctx.currentTime); // frequency dev
    lfo.connect(lfoGain);
    lfoGain.connect(fluteOsc.frequency);
    lfo.start();
    
    fluteFilter.type = "lowpass";
    fluteFilter.frequency.setValueAtTime(1000, ctx.currentTime);
    
    fluteGain.gain.setValueAtTime(0, ctx.currentTime);
    fluteGain.gain.linearRampToValueAtTime(volume * 0.15, ctx.currentTime + 1.5);
    fluteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 5.5);
    
    fluteOsc.connect(fluteFilter);
    fluteFilter.connect(fluteGain);
    fluteGain.connect(ctx.destination);
    
    fluteOsc.start();
    fluteOsc.stop(ctx.currentTime + 6);
    lfo.stop(ctx.currentTime + 6);
  };
  
  const stopSynth = () => {
    if (gainNodeRef.current && audioContextRef.current) {
      const ctx = audioContextRef.current;
      gainNodeRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
      setTimeout(() => {
        if (oscRef.current) {
          try {
            oscRef.current.stop();
          } catch(e){}
        }
        oscRef.current = null;
      }, 1100);
    }
  };
  
  const togglePlay = () => {
    if (isPlaying) {
      stopSynth();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setTimeout(() => startSynth(), 50);
    }
  };
  
  useEffect(() => {
    if (isPlaying && gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume * 0.4, audioContextRef.current.currentTime);
    }
  }, [volume]);
  
  useEffect(() => {
    return () => {
      stopSynth();
    };
  }, []);
  
  return (
    <div id="audio-panel" className="fixed top-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            exit={{ opacity: 0, width: 0 }}
            className="flex items-center gap-2 overflow-hidden bg-egypt-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold-500/20"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full accent-gold-400 cursor-pointer h-1 rounded-lg"
              title="Ambient Volume"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={togglePlay}
        className={`flex items-center justify-center w-11 h-11 rounded-full border border-gold-400/30 transition-all duration-300 backdrop-blur-md ${
          isPlaying 
            ? "bg-gold-500/20 text-gold-300 box-gold-glow" 
            : "bg-egypt-black/60 text-gold-400/80 hover:text-gold-300 hover:border-gold-400/60"
        }`}
        title={isPlaying ? "Mute Atmospheric Audio" : "Activate Cinematic Ambient Audio"}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ scale: 0.8, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 20 }}
              className="relative flex items-center justify-center"
            >
              <Volume2 className="w-5 h-5" />
              {/* Animated audio bars */}
              <div className="absolute -bottom-1 flex items-end gap-[2px] h-3">
                <span className="w-[1.5px] bg-gold-400 rounded-full animate-pulse h-2" style={{ animationDelay: '0.1s' }}></span>
                <span className="w-[1.5px] bg-gold-400 rounded-full animate-pulse h-3" style={{ animationDelay: '0.3s' }}></span>
                <span className="w-[1.5px] bg-gold-400 rounded-full animate-pulse h-1" style={{ animationDelay: '0.5s' }}></span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="flex items-center justify-center"
            >
              <VolumeX className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
