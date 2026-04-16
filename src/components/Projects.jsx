import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
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
    title: 'Lootify',
    description: 'A gamified rewards platform where users earn tokens by engaging with streamers, then redeem them via crates and spin wheels for digital prizes.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Sequelize', 'Twitch API', 'Kick API'],
    demo: vid1,
    image: proj1,
  },
  {
    title: 'AlcoolPad',
    description: 'Professional product site for a healthcare brand specializing in 70% isopropyl alcohol wipes, with clear content hierarchy and responsive layout.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Sequelize'],
    demo: vid2,
    image: proj2,
  },
  {
    title: 'SR-TECH',
    description: 'Corporate website presenting services, expertise, and company values with a clean modern layout optimized across all devices.',
    technologies: ['WordPress', 'Elementor'],
    demo: vid4,
    image: proj4,
  },
  {
    title: 'PolyGame',
    description: 'Interactive event website with a digital prize wheel, smooth animations, and responsive design for live participant engagement.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Sequelize'],
    demo: vid5,
    image: proj3,
  },
  {
    title: 'Sigoro',
    description: 'Car rental platform with vehicle browsing, detail pages, and online booking — built for clarity and seamless cross-device experience.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Sequelize'],
    demo: vid6,
    image: proj5,
  },
  {
    title: 'SpiraNature',
    description: 'Tunisian e-commerce platform for spirulina-based health and cosmetic products with full product listings, detail pages, and checkout.',
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'Tailwind CSS'],
    demo: vid7,
    image: proj6,
  },
];

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  const featured = projects[0];
  const gridProjects = projects.slice(1, 3);
  const listProjects = projects.slice(3);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-14"
        >
          <span className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">Selected Work</span>
          <span className="text-[11px] text-zinc-800 font-mono">02</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
          <span className="text-zinc-700 text-sm hidden md:block font-mono">{projects.length} works</span>
        </motion.div>

        {/* ── Featured project ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="group relative mb-4 grid md:grid-cols-[1fr_1.2fr] rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0d0d0d] hover:border-white/[0.13] transition-colors duration-500"
        >
          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-between min-h-[340px]">
            <div>
              <span className="text-[3rem] font-bold text-zinc-800 leading-none font-mono select-none">01</span>
              <h3 className="text-3xl font-bold text-white mt-3 mb-4 tracking-tight">{featured.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">{featured.description}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-7 mt-6">
                {featured.technologies.map(tech => (
                  <span key={tech} className="text-[11px] text-zinc-500 border border-white/[0.07] px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActiveVideo(featured.demo)}
                className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-zinc-100 transition-colors"
              >
                <Play size={11} />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              style={{ objectPosition: 'top' }}
            />
            {/* Left fade on desktop */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0d0d0d] to-transparent hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:from-transparent" />
          </div>
        </motion.div>

        {/* ── 2-col grid ── */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {gridProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#0d0d0d] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.14] transition-colors duration-400"
            >
              {/* Image with overlay info */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  style={{ objectPosition: 'top' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Project label on image */}
                <div className="absolute bottom-4 left-5">
                  <span className="text-[11px] text-zinc-600 font-mono leading-none block mb-1">0{i + 2}</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                </div>

                {/* Demo hover button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setActiveVideo(project.demo)}
                    className="flex items-center gap-2 bg-white text-black text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-zinc-100 transition-colors shadow-lg"
                  >
                    <Play size={11} />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="text-[10px] text-zinc-600 border border-white/[0.06] px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] text-zinc-700 px-1 py-0.5">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Numbered list ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-white/[0.06] mt-10"
        >
          {listProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex items-center justify-between py-5 border-b border-white/[0.05] px-3 -mx-3 rounded-xl hover:bg-white/[0.025] transition-colors cursor-pointer"
              onClick={() => setActiveVideo(project.demo)}
            >
              {/* Left: number + info */}
              <div className="flex items-center gap-6 min-w-0">
                <span className="text-xs text-zinc-800 font-mono shrink-0">0{i + 4}</span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-white group-hover:text-zinc-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-0.5 hidden sm:block truncate max-w-xs">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Right: tags + play */}
              <div className="flex items-center gap-4 ml-4 shrink-0">
                <div className="hidden md:flex gap-1.5">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[10px] text-zinc-600 border border-white/[0.06] px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.2] group-hover:bg-white/[0.06] transition-all">
                  <Play size={10} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* ── Video modal ── */}
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
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setActiveVideo(null)}
            />
            <motion.div
              className="relative z-10 bg-[#0d0d0d] border border-white/[0.08] rounded-2xl overflow-hidden w-full max-w-4xl"
              style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.8)' }}
              initial={{ scale: 0.96, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="text-xs text-zinc-600 font-medium ml-1">Project Demo</span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-zinc-600 hover:text-white transition-colors p-1 rounded-md hover:bg-white/[0.05]"
                  aria-label="Close"
                >
                  <X size={15} />
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
