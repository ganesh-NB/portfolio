 function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">

      {/* Left - Logo + Name */}
      <div className="flex items-center gap-3">
        <h3 className="text-4xl font-semibold text-gray-800">Ganesh NB</h3>
      </div>

      {/* Middle - Navigation Buttons */}
      <div className="hidden md:flex gap-6">
        <button  onclick="window.location.href='#home'" className="text-xl px-6 py-3 text-gray-700 hover:text-blue-600 transition font-bold ">
          Home
        </button>
        <button onclick="window.location.href='#skills'" className="text-xl px-6 py-3 text-gray-700 hover:text-blue-600 transition font-bold">
          Skills
        </button>
        <button onclick="window.location.href='#projects'" className="text-xl px-6 py-3 text-gray-700 hover:text-blue-600 transition font-bold">
          Projects
        </button>
        <button onclick="window.location.href='#resume'" className="text-xl px-6 py-3  text-gray-700 hover:text-blue-600 transition font-bold">
          Resume
        </button>
        <button onclick="window.location.href='#blog'"  className="text-xl px-6 py-3 text-gray-700 hover:text-blue-600 transition font-bold">
          Blog
        </button>
        <button className="text-xl px-6 py-3 text-gray-700 hover:text-blue-600 transition font-bold">
          Contact
        </button>
      </div>

      {/* Right - CTA button */}
      <div>
        
      </div>

    </nav>
  );
}

export default Navbar;