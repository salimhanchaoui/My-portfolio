import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


export default function About() {
  return (
    <section id="about" className="snap-section flex items-center relative overflow-hidden px-8 lg:px-16 py-20">

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
          top: '10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(234,179,8,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Floating shape — top center */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute z-10 pointer-events-none"
        style={{ top: '12%', left: '50%' }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            background: 'linear-gradient(135deg, #eab308, #fde047)',
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
            opacity: 0.65,
          }}
        />
      </motion.div>

      {/* Floating shape — bottom left */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute z-10 pointer-events-none"
        style={{ bottom: '18%', left: '8%' }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '6px',
            transform: 'rotate(20deg)',
          }}
        />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#07070a] to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

        {/* Left — heading */}
        <motion.div
          className="lg:w-[40%] flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-yellow-400 font-mono text-sm mb-4"
          >
            01. About Me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-[1.05] tracking-tight text-white mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
          >
            Turning ideas into{' '}
            <span className="gradient-text">polished digital products</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-zinc-500 text-base"
          >
            Full-Stack Developer / Creative Problem Solver
          </motion.p>
        </motion.div>

        {/* Right — bio + skills */}
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Bio */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="space-y-5 mb-12"
          >
            <p className="text-zinc-300 text-base leading-[1.9]">
              Professionally connected to the web development world.
            </p>
            <p className="text-zinc-400 text-base leading-[1.9]">
              I'm an enthusiastic full-stack developer passionate about crafting user-friendly,
              visually appealing websites that provide seamless experiences. I combine creativity
              with technical expertise to bring innovative ideas to life.
            </p>
            <p className="text-zinc-500 text-base leading-[1.9]">
              Whether building intuitive interfaces or robust back-end systems, I'm committed
              to delivering solutions that meet both user needs and business goals.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex gap-8 mb-12"
          >
            {[
              { n: '6+', label: 'Projects' },
              { n: '2+', label: 'Years' },
              { n: '10+', label: 'Technologies' },
            ].map(({ n, label }) => (
              <div key={label} className="glass rounded-xl px-5 py-4 text-center min-w-[90px]">
                <p className="text-2xl font-bold gradient-text tabular-nums">{n}</p>
                <p className="text-[11px] text-zinc-600 mt-1 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
