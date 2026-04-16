import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-5">
        <p className="text-sm text-zinc-700">
          &copy; {new Date().getFullYear()} Salim Hanchaoui
        </p>

        <div className="flex gap-6 text-sm text-zinc-700">
          <a href="#about" className="hover:text-zinc-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-zinc-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
        </div>

        <div className="flex gap-4 text-[15px] text-zinc-700">
          <a
            href="https://github.com/salimhanchaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/salim-hanchaoui-3082602aa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
