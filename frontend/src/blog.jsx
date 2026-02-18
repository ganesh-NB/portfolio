function Blog() {
  const blogPosts = [
    {
      title: "How I Started My Web Development Journey",
      date: "January 2025",
      description:
        "A short story about how I began learning HTML, CSS, JavaScript, and eventually React.",
    },
    {
      title: "Understanding React Hooks",
      date: "February 2025",
      description:
        "A beginner-friendly explanation of useState, useEffect, and custom hooks.",
    },
    {
      title: "TailwindCSS Tips for Beginners",
      date: "March 2025",
      description:
        "Useful tricks to write clean and fast UI using TailwindCSS utility classes.",
    },
  ];

  return (
    <section
      id="blog"
      className="w-full min-h-screen bg-white py-20 px-6 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Blog Section</h2>

      <p className="text-gray-600 max-w-2xl text-center mb-12">
        Here are some articles I’ve written about my learning and development journey.
      </p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h3>

            <p className="text-sm text-gray-500 mb-4">{post.date}</p>

            <p className="text-gray-700 mb-4">{post.description}</p>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;