import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'technologies', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function SideNav({ activeSection, onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className="group relative flex items-center"
          aria-label={`Go to ${label}`}
        >
          {/* Label tooltip */}
          <span className="absolute right-6 text-[11px] text-zinc-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {label}
          </span>
          {/* Dot */}
          <motion.div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === id
                ? 'bg-yellow-400 scale-125'
                : 'bg-zinc-700 group-hover:bg-zinc-500'
            }`}
            layout
          />
          {activeSection === id && (
            <motion.div
              layoutId="activeDot"
              className="absolute inset-0 w-2 h-2 rounded-full bg-yellow-400/30 scale-[2.5]"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </motion.div>
  );
}
