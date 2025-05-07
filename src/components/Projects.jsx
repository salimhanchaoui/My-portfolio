import React, { useState } from 'react';
import Proj1_1 from '../assets/proj1-1.png';
import demoVideo1 from '../assets/vid1.mp4';
import demoVideo2 from '../assets/vid2.mp4';
import demoVideo4 from '../assets/vid4.mp4'
import demoVideo5 from '../assets/vid5.mp4'
import demoVideo6 from '../assets/vid6.mp4'
import demoVideo7 from '../assets/vid7.mp4'
import Proj2 from '../assets/proj2.png';
import Proj3 from '../assets/proj3.png';
import Proj4 from '../assets/proj4.png';
import Proj5 from '../assets/proj5.png';
import Proj6 from '../assets/proj6.png';
const projects = [
  {
    title: 'Lootify',
    description: 'Lootify.io is a gamified rewards platform that allows users to earn tokens by engaging with partnered streamers and completing specific tasks. These tokens can then be used to open crates, spin wheels for a chance to win digital prizes.',
    technologies: 'React· Tailwind CSS· Node.js· Sequelize· Twitch API· Kick API',
    demoLink: demoVideo1,
    images: Proj1_1,
  },
  {
    title: 'AlcoolPad',
    description: "A clean, responsive website designed for Alcool Pad, a brand offering pre-injection alcohol wipes composed of 70% isopropyl alcohol. The site emphasizes the product's effectiveness in rapid and reliable disinfection, featuring a professional layout tailored to the healthcare industry. Clear visuals, concise content, and user-friendly navigation ensure an informative and trustworthy experience across all devices.",
    technologies: 'React· Tailwind CSS· Node.js· Sequelize',
    demoLink: demoVideo2,
    images: Proj2,
  },
  {
    title: 'SR-TECH',
    description: "The SRTech website is a sleek, responsive platform designed to present SRTech’s services, expertise, and values. It features a clean and modern layout with smooth navigation across sections such as About, Services, Projects, and Contact. The design emphasizes clarity and professionalism, with a strong visual hierarchy and optimized performance across devices. Interactive elements and a structured content flow ensure an engaging user experience while effectively communicating the company's mission and offerings.",
    technologies: 'Wordpress· Elementor',
    demoLink: demoVideo4,
    images: Proj4,
  },
  {
    title: 'PolyGame',
    description: "An interactive website developed for a special Polygame event, where participants could spin a digital wheel to win exclusive prizes. The site combines a playful, engaging interface with smooth animations and responsive design to enhance user experience. Focused on simplicity and excitement, it allowed users to easily participate in the event and claim their rewards in a visually dynamic environment.",
    technologies: 'React· Tailwind CSS· Node.js· Sequelize',
    demoLink: demoVideo5,
    images: Proj3,
  },  {
    title: 'Sigoro',
    description: "Sigoro is a professional car rental website that allows users to explore and book vehicles easily and efficiently. The platform features a sleek and responsive design with a user-friendly interface, showcasing a range of vehicles available for rent. Visitors can view car details, check availability, and make reservations directly through the site. The website emphasizes clarity, modern design, and seamless functionality, tailored for both individual and business clients.",
    technologies: 'React· Tailwind CSS· Node.js· Sequelize',
    demoLink: demoVideo6,
    images: Proj5,
  },
  {
    title: 'SpiraNature',
    description: "Spira Nature is a Tunisian e-commerce platform specializing in high-quality spirulina-based products, including dietary supplements and dermo-cosmetic items. The website offers a modern, responsive design that provides users with an intuitive browsing and shopping experience. Key sections include product listings with detailed descriptions, an informative 'About' page outlining the company's mission and values, and a contact section for customer inquiries. The platform emphasizes natural wellness and aims to enhance users' well-being through its specialized product offerings.",
    technologies: 'Node.js · JavaScript · HTML · React.js · responsive · Express.js · Tailwind CSS · Sequelize.js · MySQL',
    demoLink: demoVideo7,
    images: Proj6,
  }

];

const ProjectItem = ({ title, description, technologies, images, onView }) => (
  <div className="flex flex-col lg:flex-row gap-6 mb-16 items-center ">
    <div className="flex-1 flex flex-col sm:flex-row gap-4">
      <img
        src={images}
        alt={`${title} screenshot`}
        className="w-full object-cover rounded-lg shadow"
      />
    </div>

    <div className="flex-1">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-sm text-gray-200 mt-1 italic">Technologies: {technologies}</p>
      <button
        onClick={onView}
        className="text-blue-500 mt-4 hover:underline"
      >
        View Demo
      </button>
    </div>
  </div>
);

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewProject = (videoLink) => {
    setSelectedVideo(videoLink);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section id="projects" className="py-12 pt-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-18 border-b-2 border-gray-300 inline-block">
          My Projects
        </h2>

        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            {...project}
            onView={() => handleViewProject(project.demoLink)}
          />
        ))}

        {showModal && selectedVideo && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeModal}></div>
            <div className="relative z-50 flex items-center justify-center min-h-screen">
            <div className="bg-[#1f1f23] p-6 rounded-lg max-h-[90vh] w-full max-w-2xl overflow-y-auto relative">
              <button
                className="absolute top-2 right-4  text-xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>
              <h3 className="text-2xl font-semibold mb-4 ">Project Demo</h3>
              <video
                src={selectedVideo}
                autoPlay
                muted
                controls
                className="w-full rounded-lg shadow"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
