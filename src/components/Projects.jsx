import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import proj1 from '../assets/proj1-1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';
import vid1 from '../assets/vid1.mp4';
import vid2 from '../assets/vid2.mp4';
import vid4 from '../assets/vid4.mp4';
import vid5 from '../assets/vid5.mp4';
import vid6 from '../assets/vid6.mp4';
import vid7 from '../assets/vid7.mp4';

const projects = [
  {
    category: 'Gamified Rewards Platform',
    title: 'Lootify',
    description: 'A gamified rewards platform where users earn tokens by engaging with streamers, then redeem them via crates and spin wheels for digital prizes.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Sequelize', 'Twitch API', 'Kick API'],
    demo: vid1,
    image: proj1,
  },
  {
    category: 'Healthcare Product Site',
    title: 'AlcoolPad',
    description: 'Professional product site for a healthcare brand specializing in 70% isopropyl alcohol wipes.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Sequelize'],
    demo: vid2,
    image: proj2,
  },
  {
    category: 'Corporate Website',
    title: 'SR-TECH',
    description: 'Corporate website presenting services, expertise, and company values with a clean modern layout.',
    technologies: ['WordPress', 'Elementor'],
    demo: vid4,
    image: proj4,
  },
  {
    category: 'Event Platform',
    title: 'PolyGame',
    description: 'Interactive event website with a digital prize wheel, smooth animations, and responsive design.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Sequelize'],
    demo: vid5,
    image: proj3,
  },
  {
    category: 'Car Rental Platform',
    title: 'Sigoro',
    description: 'Car rental platform with vehicle browsing, detail pages, and online booking.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Sequelize'],
    demo: vid6,
    image: proj5,
  },
  {
    category: 'E-Commerce Platform',
    title: 'SpiraNature',
    description: 'Tunisian e-commerce platform for spirulina-based health and cosmetic products.',
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'Tailwind CSS'],
    demo: vid7,
    image: proj6,
  },
];

const textVariants = {
  enter: (dir) => ({ y: dir > 0 ? 70 : -70, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (dir) => ({ y: dir > 0 ? -70 : 70, opacity: 0 }),
};

const imageVariants = {
  enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
};

const transition = { duration: 0.55, ease: [0.16, 1, 0.3, 1] };

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeVideo, setActiveVideo] = useState(null);
  const sectionRef = useRef(null);
  const isAnimating = useRef(false);

  const goTo = useCallback((index) => {
    if (isAnimating.current || index === currentIndex) return;
    isAnimating.current = true;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setTimeout(() => { isAnimating.current = false; }, 650);
  }, [currentIndex]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }
      if (e.deltaY > 0 && currentIndex < projects.length - 1) {
        e.preventDefault();
        isAnimating.current = true;
        setDirection(1);
        setCurrentIndex((prev) => prev + 1);
        setTimeout(() => { isAnimating.current = false; }, 650);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        e.preventDefault();
        isAnimating.current = true;
        setDirection(-1);
        setCurrentIndex((prev) => prev - 1);
        setTimeout(() => { isAnimating.current = false; }, 650);
      }
    };

    section.addEventListener('wheel', handleWheel, { passive: false });
    return () => section.removeEventListener('wheel', handleWheel);
  }, [currentIndex]);

  const project = projects[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="snap-section flex items-center relative overflow-hidden px-8 lg:px-16"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '20%',
          left: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(234,179,8,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#07070a] to-transparent z-10 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left — text */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex + '-text'}
            custom={direction}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="flex-1 flex flex-col items-start"
          >
            {/* Section label */}
            <p className="text-yellow-400 font-mono text-sm mb-2">02. Selected Work</p>

            {/* Category */}
            <p className="text-zinc-600 text-xs font-medium tracking-[0.2em] uppercase mb-4">
              {project.category}
            </p>

            {/* Title */}
            <h2
              className="font-bold text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-md">
              {project.description}
            </p>

            {/* Tech stack */}
            <p className="text-zinc-400 text-sm mb-8">
              <span className="text-white font-semibold">Built with: </span>
              {project.technologies.join(', ')}.
            </p>

            {/* CTA */}
            <button
              onClick={() => setActiveVideo(project.demo)}
              className="group inline-flex items-center gap-2 text-base font-semibold text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
            >
              Watch demo
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Right — image */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex + '-image'}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(234,179,8,0.15) 0%, transparent 70%)',
                  transform: 'scale(1.1)',
                }}
              />
              <img
                src={project.image}
                alt={project.title}
                className="relative rounded-2xl object-cover object-top"
                style={{
                  width: 'clamp(300px, 44vw, 620px)',
                  aspectRatio: '16/10',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(234,179,8,0.08)',
                }}
              />
              {/* Project number badge */}
              <div className="absolute top-4 right-4 glass text-xs font-mono text-zinc-500 px-2.5 py-1 rounded-lg">
                0{currentIndex + 1} / 0{projects.length}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom dot navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className="group relative flex items-center justify-center w-5 h-5"
          >
            <span
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-3 h-3 bg-yellow-400'
                  : 'w-2 h-2 bg-zinc-700 group-hover:bg-zinc-500'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setActiveVideo(null)}
            />
            <motion.div
              className="relative z-10 glass-strong rounded-2xl overflow-hidden w-full max-w-4xl"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-zinc-500 font-medium">Project Demo</span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-zinc-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.05]"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
              <video
                key={activeVideo}
                src={activeVideo}
                autoPlay
                muted
                controls
                className="w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
