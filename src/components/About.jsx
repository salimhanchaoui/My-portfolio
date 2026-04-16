import { motion } from 'framer-motion';

const skillGroups = [
  { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { label: 'Database', items: ['MySQL', 'Sequelize'] },
  { label: 'Tools', items: ['Git', 'WordPress'] },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-16"
        >
          <span className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">About</span>
          <span className="text-[11px] text-zinc-800 font-mono">01</span>
        </motion.div>

        {/* Statement heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-20"
        >
          Turning ideas into{' '}
          <span className="text-zinc-600">polished digital products</span>
        </motion.h2>

        {/* Bio + Skills layout */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-zinc-300 text-base md:text-[1.05rem] leading-[1.75]">
              I'm an enthusiastic full-stack developer passionate about crafting user-friendly, visually appealing websites that provide seamless experiences. I combine creativity with technical expertise to bring innovative ideas to life.
            </p>
            <p className="text-zinc-500 text-base leading-[1.75]">
              Whether building intuitive interfaces or robust back-end systems, I'm committed to delivering solutions that meet both user needs and business goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6 pt-1"
          >
            {[
              { n: '6+', label: 'Projects delivered' },
              { n: '2+', label: 'Years of experience' },
              { n: '10+', label: 'Technologies mastered' },
            ].map(({ n, label }) => (
              <div key={label} className="pl-5 border-l border-white/[0.07]">
                <p className="text-3xl font-bold text-white leading-none">{n}</p>
                <p className="text-sm text-zinc-600 mt-1.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-10 border-t border-white/[0.05]"
        >
          <p className="text-[11px] text-zinc-700 uppercase tracking-widest font-medium mb-8">Technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {skillGroups.map(({ label, items }) => (
              <div key={label}>
                <p className="text-xs text-zinc-600 font-medium mb-4 uppercase tracking-wide">{label}</p>
                <ul className="flex flex-col gap-2.5">
                  {items.map(item => (
                    <li key={item} className="text-sm text-zinc-300 leading-none">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
