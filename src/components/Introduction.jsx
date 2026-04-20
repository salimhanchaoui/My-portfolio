import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import desktopImg from '../assets/desktop.png';

const roles = ['Full-Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'];

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="snap-section flex items-center relative overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient glow — top right behind image */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '-10%',
          right: '-5%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(ellipse at center, rgba(234,179,8,0.1) 0%, transparent 65%)',
        }}
      />

      {/* Floating accent shape */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute z-10 pointer-events-none"
        style={{ bottom: '22%', left: '40%' }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            background: 'linear-gradient(135deg, #eab308, #fde047)',
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
            opacity: 0.6,
          }}
        />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#07070a] to-transparent z-10 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

        {/* Left — text */}
        <motion.div
          className="flex-1 flex flex-col items-start"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Main heading */}
          <motion.h1
            variants={fadeLeft}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-[0.95] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Salim</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={fadeLeft}
            transition={{ duration: 0.6 }}
            className="h-9 flex items-center mb-6"
          >
            <span className="text-xl md:text-2xl text-zinc-400 font-light">
              {displayed}
            </span>
            <span className="text-yellow-400 animate-pulse ml-0.5 text-2xl">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeLeft}
            transition={{ duration: 0.6 }}
            className="text-zinc-500 text-base md:text-lg max-w-md leading-relaxed mb-8"
          >
            Building modern web applications with clean architecture,
            thoughtful UX, and performant code.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeLeft}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-white">Get in touch</span>
              <svg className="relative w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 font-medium glass px-7 py-3.5 rounded-xl hover:bg-white/[0.06] hover:text-white transition-all duration-300"
            >
              View work
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeLeft}
            transition={{ duration: 0.5 }}
            className="flex gap-10"
          >
            {[
              { n: '6+', label: 'Projects' },
              { n: '2+', label: 'Years' },
              { n: '10+', label: 'Technologies' },
            ].map(({ n, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-white tabular-nums">{n}</p>
                <p className="text-xs text-zinc-600 mt-1 tracking-wide uppercase">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial="hidden"
          animate="show"
          variants={fadeRight}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(234,179,8,0.18) 0%, transparent 70%)',
                transform: 'scale(1.15)',
              }}
            />
            <motion.img
              src={desktopImg}
              alt="Developer workspace"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-2xl object-cover"
              style={{
                width: 'clamp(300px, 42vw, 580px)',
                aspectRatio: '4/3',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(234,179,8,0.1)',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 right-12 z-20 flex flex-col items-center gap-3"
      >
        <span
          className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
