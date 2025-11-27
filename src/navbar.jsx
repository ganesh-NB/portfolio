 function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">

      {/* Left - Logo + Name */}
      <div className="flex items-center gap-3">
        <h3 className="text-4xl font-semibold text-gray-800">Ganesh NB</h3>
      </div>

      {/* Middle - Navigation Buttons */}
      <div className="hidden md:flex gap-6">
        <button className="text-xl px-6 py-3 text-gray-700 hover:text-blue-600 transition font-bold ">
          Home
        </button>
        <button className="text-xl px-6 py-3 text-gray-700 hover:text-blue-600 transition font-bold">
          Skills
        </button>
        <button className="text-xl px-6 py-3 text-gray-700 hover:text-blue-600 transition font-bold">
          Projects
        </button>
        <button className="text-xl px-6 py-3  text-gray-700 hover:text-blue-600 transition font-bold">
          Resume
        </button>
        <button className="text-xl px-6 py-3 text-gray-700 hover:text-blue-600 transition font-bold">
          Blog
        </button>
        <button className="text-xl px-6 py-3 text-gray-700 hover:text-blue-600 transition font-bold">
          Contact
        </button>
      </div>

      {/* Right - CTA button */}
      <div>
        <button className="text-xl px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-medium rounded-lg">
          Hire Me
        </button>
      </div>

    </nav>
  );
}

export default Navbar;