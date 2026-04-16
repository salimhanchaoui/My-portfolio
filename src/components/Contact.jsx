import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const contacts = [
  {
    Icon: FaEnvelope,
    label: 'Email',
    value: 's.hanchaoui032@gmail.com',
    href: 'mailto:s.hanchaoui032@gmail.com',
  },
  {
    Icon: FaPhoneAlt,
    label: 'Phone',
    value: '+216 53 176 437',
    href: 'tel:+21653176437',
  },
  {
    Icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/salimhanchaoui',
    href: 'https://github.com/salimhanchaoui',
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/salim-hanchaoui',
    href: 'https://www.linkedin.com/in/salim-hanchaoui-3196683b3/',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">

        {/* Section meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-16"
        >
          <span className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">Contact</span>
          <span className="text-[11px] text-zinc-800 font-mono">03</span>
        </motion.div>

        {/* Big editorial headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="py-16 md:py-20"
        >
          <h2
            className="font-bold leading-[0.92] tracking-tight mb-10"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            Let's build
            <br />
            <span className="text-zinc-600">something great.</span>
          </h2>
          <a
            href="mailto:s.hanchaoui032@gmail.com"
            className="text-base md:text-lg text-zinc-400 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-500"
          >
            s.hanchaoui032@gmail.com
          </a>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-10 border-t border-white/[0.05] flex flex-wrap gap-3"
        >
          {contacts.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-2.5 text-sm text-zinc-500 border border-white/[0.07] px-4 py-2.5 rounded-lg hover:border-white/[0.16] hover:text-zinc-200 hover:bg-white/[0.03] transition-all duration-200"
            >
              <Icon className="text-xs shrink-0 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              <span>{value}</span>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
