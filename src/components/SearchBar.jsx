import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ query, setQuery, onSubmit, filters, setFilters }) => {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="flex flex-col gap-3 md:flex-row md:items-center"
      >
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles, genres, studios..."
            className="w-full rounded-xl bg-black/40 pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/50 outline-none ring-1 ring-white/10 focus:ring-fuchsia-500/50"
          />
        </div>
        <div className="flex flex-1 flex-wrap gap-2 md:flex-none">
          <select
            value={filters.type}
            onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value }))}
            className="flex-1 rounded-xl bg-black/40 px-3 py-3 text-sm ring-1 ring-white/10 focus:ring-fuchsia-500/50"
          >
            <option value="all">All</option>
            <option value="movie">Movies</option>
            <option value="anime">Anime</option>
          </select>
          <select
            value={filters.sort}
            onChange={(e) => setFilters((f) => ({ ...f, sort: e.target.value }))}
            className="flex-1 rounded-xl bg-black/40 px-3 py-3 text-sm ring-1 ring-white/10 focus:ring-fuchsia-500/50"
          >
            <option value="trending">Trending</option>
            <option value="rating">Top Rated</option>
            <option value="new">New Releases</option>
          </select>
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-600 px-4 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20 transition hover:shadow-fuchsia-500/40"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
