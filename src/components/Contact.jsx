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
    value: 'salimhanchaoui',
    href: 'https://github.com/salimhanchaoui',
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'salim-hanchaoui',
    href: 'https://www.linkedin.com/in/salim-hanchaoui-3196683b3/',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="snap-section flex items-center px-6 py-20 relative">
      {/* Background accents */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(234,179,8,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl w-full mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-yellow-400 font-mono text-sm">03.</span>
          <span className="text-sm text-zinc-400 font-medium tracking-wide uppercase">Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent" />
        </motion.div>

        {/* Big headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2
            className="font-bold leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Let's build{' '}
            <span className="gradient-text">something great.</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-md mx-auto">
            Have a project in mind? Let's create something exceptional together.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
        >
          {contacts.map(({ Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="group glass rounded-xl p-5 text-center hover:bg-white/[0.05] hover:border-yellow-500/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-500/20 transition-colors">
                <Icon className="text-yellow-400 text-sm" />
              </div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider mb-1">{label}</p>
              <p className="text-sm text-zinc-300 group-hover:text-white transition-colors truncate">{value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="mailto:s.hanchaoui032@gmail.com"
            className="group relative inline-flex items-center gap-2 text-sm font-semibold px-8 py-4 rounded-xl overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FaEnvelope className="relative text-white text-xs" />
            <span className="relative text-white">Send me an email</span>
          </a>
        </motion.div>

        {/* Footer integrated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-zinc-700">
            &copy; {new Date().getFullYear()} Salim Hanchaoui
          </p>
          <div className="flex gap-5 text-xs text-zinc-700">
            {['About', 'Projects', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-zinc-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-3 text-sm text-zinc-700">
            <a
              href="https://github.com/salimhanchaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/salim-hanchaoui-3196683b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
