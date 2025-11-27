function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built using React and TailwindCSS.",
      tech: ["React", "TailwindCSS"],
    },
    {
      title: "Weather App",
      description: "A weather forecast app using an API to display real-time data.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
    },
    {
      title: "Expense Tracker",
      description: "A simple and clean expense tracking application.",
      tech: ["React", "LocalStorage"],
    },
    {
      title: "Todo App",
      description: "A fully functional todo app with CRUD operations.",
      tech: ["React"],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-white py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>

      <p className="text-gray-600 max-w-2xl text-center mb-12">
        Here are some of my recent works showcasing my development skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;