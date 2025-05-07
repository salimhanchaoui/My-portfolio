import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-80 backdrop-blur-md text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo or Name */}
        <div className="text-2xl font-bold">
          Salim Hanchaoui
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center text-sm">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a
  href="/resume.pdf"
  download
  className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 font-semibold"
>
Resume
</a>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 text-sm bg-black bg-opacity-95">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a href="/resume.pdf" target="_blank" className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 font-semibold">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
