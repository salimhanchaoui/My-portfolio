import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ scrollContainer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = scrollContainer?.current;
    if (!container) return;
    const onScroll = () => setScrolled(container.scrollTop > 50);
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, [scrollContainer]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="text-white font-bold text-lg tracking-tight hover:opacity-70 transition-opacity"
        >
          Salim<span className="gradient-text">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className="text-sm text-zinc-500 hover:text-white px-4 py-2 rounded-lg hover:bg-white/[0.04] transition-all duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-3 text-sm font-medium px-5 py-2 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 hover:bg-yellow-500/20 hover:border-yellow-500/30 transition-all duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass-strong"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className="text-sm text-zinc-400 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/[0.04] transition-all"
                >
                  {label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 text-sm text-center font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-4 py-2.5 rounded-lg hover:bg-yellow-500/20 transition-all"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
