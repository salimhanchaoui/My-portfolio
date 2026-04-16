import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/92 backdrop-blur-md border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
      style={scrolled ? { boxShadow: '0 1px 0 rgba(255,255,255,0.04)' } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <a
          href="#"
          className="text-white font-semibold text-[0.95rem] tracking-tight hover:opacity-60 transition-opacity"
        >
          Salim<span className="text-indigo-400">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="text-sm bg-white text-black font-medium px-4 py-1.5 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-500 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0a0a0a] border-b border-white/[0.05]"
          >
            <div className="px-6 py-5 flex flex-col gap-5">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="text-sm text-center bg-white text-black font-medium px-4 py-2.5 rounded-lg hover:bg-zinc-100 transition-colors"
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
