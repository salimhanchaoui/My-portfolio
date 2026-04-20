import { motion } from 'framer-motion';
import {
  SiJavascript, SiReact, SiTypescript, SiNodedotjs,
  SiExpress, SiTailwindcss, SiMysql, SiSequelize,
  SiGit, SiFigma, SiWordpress, SiHtml5, SiCss3,
} from 'react-icons/si';

const techs = [
  { icon: SiHtml5,       label: 'HTML5' },
  { icon: SiCss3,        label: 'CSS3' },
  { icon: SiJavascript,  label: 'JavaScript' },
  { icon: SiTypescript,  label: 'TypeScript' },
  { icon: SiReact,       label: 'React' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
  { icon: SiNodedotjs,   label: 'Node.js' },
  { icon: SiExpress,     label: 'Express.js' },
  { icon: SiMysql,       label: 'MySQL' },
  { icon: SiSequelize,   label: 'Sequelize' },
  { icon: SiGit,         label: 'Git' },
  { icon: SiFigma,       label: 'Figma' },
  { icon: SiWordpress,   label: 'WordPress' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Technologies() {
  return (
    <section id="technologies" className="snap-section flex items-center relative overflow-hidden px-8 lg:px-16 py-20">

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
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(234,179,8,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#07070a] to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-zinc-600 text-xs font-medium tracking-[0.25em] uppercase mb-4"
        >
          A problem is an opportunity to do your best.
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold text-white mb-6"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
        >
          Skills &amp; Experience
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl space-y-3 mb-16"
        >
          <p className="text-zinc-400 text-base leading-relaxed">
            I build full-stack web applications from the ground up — clean interfaces on the front, solid APIs on the back.
          </p>
          <p className="text-zinc-500 text-base leading-relaxed">
            On the frontend I work primarily with React, TypeScript, and Tailwind CSS to craft responsive,
            polished UIs. On the backend I build REST APIs with Node.js and Express, backed by MySQL and Sequelize.
            I also deliver WordPress sites for content-driven projects and use Figma to bridge design and development.
          </p>
        </motion.div>

        {/* Icons grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-x-10 gap-y-10 w-full justify-items-center"
        >
          {techs.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center gap-3"
            >
              <Icon
                className="text-zinc-500 group-hover:text-white transition-colors duration-300"
                size={48}
              />
              <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 whitespace-nowrap">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
