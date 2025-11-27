function Resume() {
  return (
    <section
      id="resume"
      className="w-full min-h-screen bg-gray-50 py-20 px-6 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        Resume
      </h2>

      <p className="text-gray-600 max-w-2xl text-center mb-12">
        Here is my professional resume. You can view or download it below.
      </p>

      {/* Resume Card */}
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-3xl text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Ganesh NB
        </h3>

        <p className="text-gray-600 mb-6">
          Frontend Developer • React Enthusiast • Web Designer
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <a
            href="/your-resume.pdf"
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition"
          >
            View Resume
          </a>

          <a
            href="/your-resume.pdf"
            download
            className="px-6 py-3 bg-gray-800 text-white rounded-xl text-lg hover:bg-gray-900 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;