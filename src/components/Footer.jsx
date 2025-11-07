import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm">
          Built with <Heart className="inline h-4 w-4 text-fuchsia-500" /> for movie and anime lovers.
        </p>
        <a
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-4 w-4" />
          Star the project
        </a>
      </div>
    </footer>
  );
};

export default Footer;
