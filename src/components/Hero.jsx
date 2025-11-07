import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = ({ onExplore }) => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-20 top-0 h-40 bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 md:pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-purple-300" />
          <span className="text-sm text-purple-200">Futuristic picks for Movies & Anime</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          Discover What To Watch Next
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base text-white/80 md:text-lg"
        >
          An immersive, cyberpunk-styled hub that curates the best movies and anime for your mood. Dive into dynamic lists with silky transitions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20 transition hover:shadow-fuchsia-500/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            Explore Recommendations
          </button>
          <a
            href="#discover"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur-md transition hover:bg-white/10"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
