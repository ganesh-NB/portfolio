function Skills() {
  const skillList = [
    "HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS",
    , "Express JS", "Git & GitHub", "Java"
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gray-100 py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        Skills
      </h2>

      <p className="text-gray-600 max-w-2xl text-center mb-12">
        These are the technologies and tools I have worked with.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-4 bg-blue-100 shadow-md rounded-xl text-center 
                       text-xl font-medium text-gray-700 hover:scale-105 
                       hover:shadow-lg transition-transform cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;