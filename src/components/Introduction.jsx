import heroImage from '../assets/desktop.png';
export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center text-white px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-10">
          
          {/* Left Side: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I’m Salim Hanchaoui</h1>
            <p className="text-xl text-gray-300 max-w-xl">
              I'm a Web Developer who builds modern, responsive web applications using React, Node.js, and Tailwind CSS.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-300 transition">
                Contact Me
              </a>
              <a
  href="/resume.pdf"
  download
  className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
>
  Download Resume
</a>

            </div>
          </div>
  
          {/* Right Side: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={heroImage} // Replace with your actual image path
              alt="Web Design Illustration"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
  
        </div>
      </section>
    );
  }
  