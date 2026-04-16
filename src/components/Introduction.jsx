import { motion } from 'framer-motion';
import heroImage from '../assets/desktop.png';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.028) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 100% 65% at 50% 0%, black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 65% at 50% 0%, black 10%, transparent 80%)',
        }}
      />
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          left: '40%',
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.09) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-6xl w-full mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 text-[11px] text-zinc-400 font-medium tracking-widest uppercase mb-14 border border-white/[0.07] px-4 py-1.5 rounded-full bg-white/[0.015]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 6px rgba(52,211,153,0.8)' }} />
          Available for work
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-14">
          {/* Left: Text content */}
          <motion.div
            className="flex-1"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(3.2rem, 8vw, 6.5rem)' }}
            >
              <span className="text-white">Salim</span>
              <br />
              <span className="text-zinc-600">Hanchaoui</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-zinc-700" />
              <p className="text-zinc-500 text-sm font-medium tracking-wide">
                Full-Stack Developer · React · Node.js
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-zinc-400 text-base md:text-[1.1rem] max-w-[400px] mt-5 leading-relaxed"
            >
              Building modern web applications with clean architecture, thoughtful UX, and performant code.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center bg-white text-black text-sm font-semibold px-6 py-3 rounded-lg hover:bg-zinc-100 transition-colors"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 border border-white/[0.09] px-6 py-3 rounded-lg hover:bg-white/[0.04] hover:text-zinc-200 hover:border-white/[0.16] transition-all"
              >
                View work
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Image + stats */}
          <motion.div
            className="flex flex-col gap-8 lg:items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Gradient border */}
              <div
                className="absolute -inset-[1px] rounded-2xl pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))' }}
              />
              {/* Glow */}
              <div className="absolute -inset-8 rounded-3xl blur-3xl transition-all duration-700 group-hover:opacity-80"
                style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)' }}
              />
              <img
                src={heroImage}
                alt="Salim Hanchaoui"
                className="relative w-56 md:w-[17rem] rounded-2xl border border-white/[0.07] shadow-2xl object-cover"
                style={{ boxShadow: '0 32px 64px rgba(0,0,0,0.7)' }}
              />
            </div>

            {/* Stats */}
            <div className="flex gap-8 lg:gap-10">
              {[
                { n: '6+', label: 'Projects' },
                { n: '2+', label: 'Years' },
                { n: '10+', label: 'Technologies' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white tabular-nums leading-none">{n}</p>
                  <p className="text-xs text-zinc-600 mt-1.5 tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
