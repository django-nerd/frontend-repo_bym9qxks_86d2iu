import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const Card = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-3 hover:border-fuchsia-400/40"
    >
      <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-black/40">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white/90">{item.title}</h3>
          <p className="text-xs text-white/60">{item.genre}</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-1">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="text-xs text-white/90">{item.rating.toFixed(1)}</span>
        </div>
      </div>
    </motion.div>
  );
};

const RecommendationGrid = ({ items, title }) => {
  return (
    <section id="discover" className="relative">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white md:text-2xl">{title}</h2>
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default RecommendationGrid;
