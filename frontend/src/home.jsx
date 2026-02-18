export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Top Badge */}
        <div className="inline-block px-4 py-1 mb-6 bg-blue-600/20 text-blue-400 rounded-full text-sm">
          👋 Hello, I'm Ganesh
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I Build <span className="text-blue-500">Modern Web Experiences</span>
        </h1>

        {/* Sub heading */}
        <p className="mt-4 text-gray-300 md:text-lg">
          A passionate Fullstack Developer focused on building clean, user-friendly interfaces using React, TailwindCSS & JavaScript with creative problem-solving skills.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 hover:bg-gray-800 rounded-xl text-lg transition"
          >
            Contact Me
          </a>
        </div>

        {/* Hero Image */}
        <div className="mt-12 flex justify-center">
          <img
            src=" i.jpg"
            alt="Ganesh"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-500 object-cover"
          />
        </div>
      </div>
    </section>
  );
}