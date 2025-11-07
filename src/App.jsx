import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import RecommendationGrid from './components/RecommendationGrid';
import Footer from './components/Footer';

// Static demo data (could be wired to backend later)
const SEED = [
  { id: 'm1', type: 'movie', title: 'Blade Runner 2049', genre: 'Sci‑Fi', rating: 8.7, image: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg' },
  { id: 'm2', type: 'movie', title: 'Dune', genre: 'Adventure', rating: 8.4, image: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
  { id: 'a1', type: 'anime', title: 'Your Name', genre: 'Romance', rating: 8.9, image: 'https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg' },
  { id: 'a2', type: 'anime', title: 'Attack on Titan', genre: 'Action', rating: 9.2, image: 'https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg' },
  { id: 'm3', type: 'movie', title: 'Interstellar', genre: 'Sci‑Fi', rating: 8.6, image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' },
  { id: 'a3', type: 'anime', title: 'Spirited Away', genre: 'Fantasy', rating: 9.0, image: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg' },
  { id: 'm4', type: 'movie', title: 'Inception', genre: 'Sci‑Fi', rating: 8.8, image: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg' },
  { id: 'a4', type: 'anime', title: 'Jujutsu Kaisen 0', genre: 'Action', rating: 8.1, image: 'https://image.tmdb.org/t/p/w500/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg' },
  { id: 'm5', type: 'movie', title: 'The Batman', genre: 'Crime', rating: 8.1, image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg' },
  { id: 'a5', type: 'anime', title: 'Cowboy Bebop: The Movie', genre: 'Sci‑Fi', rating: 7.9, image: 'https://images.unsplash.com/photo-1732633553684-b18a43a48d3d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcnN0ZWxsYXJ8ZW58MHwwfHx8MTc2MjUxMDM2MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'm6', type: 'movie', title: 'Mad Max: Fury Road', genre: 'Action', rating: 8.1, image: 'https://images.unsplash.com/photo-1728835804487-db019450bb07?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcGlyaXRlZCUyMEF3YXl8ZW58MHwwfHx8MTc2MjUxMDM2Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'a6', type: 'anime', title: 'Akira', genre: 'Cyberpunk', rating: 8.0, image: 'https://image.tmdb.org/t/p/w500/neZ0ykEsPqxamsX6o5QNUFILQrz.jpg' },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ type: 'all', sort: 'trending' });

  const filtered = useMemo(() => {
    let list = [...SEED];

    if (filters.type !== 'all') {
      list = list.filter((i) => i.type === filters.type);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((i) =>
        [i.title, i.genre].some((f) => f.toLowerCase().includes(q))
      );
    }

    if (filters.sort === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (filters.sort === 'new') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [query, filters]);

  const handleExplore = () => {
    const el = document.getElementById('discover');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const topPicks = filtered.slice(0, 10);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero with Spline animation */}
      <Hero onExplore={handleExplore} />

      {/* Content */}
      <main className="relative z-10 mx-auto -mt-12 max-w-6xl space-y-10 px-6">
        <SearchBar
          query={query}
          setQuery={setQuery}
          filters={filters}
          setFilters={setFilters}
          onSubmit={() => {}}
        />

        <RecommendationGrid title="Trending Now" items={topPicks} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Ambient gradients */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />
      </div>
    </div>
  );
}
