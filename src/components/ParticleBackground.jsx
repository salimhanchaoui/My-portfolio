import { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useState } from 'react';

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: {
        value: 60,
        density: { enable: true, area: 1000 },
      },
      color: { value: '#eab308' },
      opacity: {
        value: { min: 0.1, max: 0.3 },
        animation: { enable: true, speed: 0.5, minimumValue: 0.05 },
      },
      size: {
        value: { min: 1, max: 2.5 },
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'none',
        outModes: { default: 'out' },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#eab308',
        opacity: 0.08,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
      },
      modes: {
        grab: {
          distance: 180,
          links: { opacity: 0.2 },
        },
      },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <Particles
      className="absolute inset-0 pointer-events-auto"
      options={options}
    />
  );
}
