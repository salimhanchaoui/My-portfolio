import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 mt-24 bg-[#1f1f23] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Contact Me</h2>

        <div className="flex flex-col gap-10 items-center justify-center text-lg">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-3xl text-blue-400" />
            <a href="tel:+21653176437" className="hover:underline text-blue-300">
              +216 53 176 437
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-3xl text-purple-600" />
            <a href="mailto:yourname@example.com" className="hover:underline text-purple-400">
              s.hanchaoui@yahoo.fr
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <FaGithub className="text-3xl text-gray-300" />
            <a
              href="https://github.com/salimhanchaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-300"
            >
              github.com/salimhanchaoui
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-3xl text-blue-500" />
            <a
              href="https://www.linkedin.com/in/salim-hanchaoui-3082602aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400"
            >
              linkedin.com/in/salim-hanchaoui
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
