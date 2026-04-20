import { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Introduction';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SideNav from './components/SideNav';

const sectionIds = ['home', 'about', 'technologies', 'projects', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const viewportHeight = window.innerHeight;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollTop + viewportHeight * 0.4) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="snap-container">
      <Navbar scrollContainer={containerRef} />
      <SideNav activeSection={activeSection} onNavigate={handleNavigate} />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
