function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gray-100 py-20 px-6 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>

      <p className="text-gray-600 max-w-2xl text-center mb-12">
        Feel free to reach out for collaborations, projects, or any inquiries.
      </p>

      {/* Contact Form */}
      <form
        className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-3xl"
      >
        {/* Name */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Your Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex gap-6 mt-10">
        <a href="#" className="text-blue-600 text-xl hover:underline">
          LinkedIn
        </a>
        <a href="#" className="text-blue-600 text-xl hover:underline">
          GitHub
        </a>
        <a href="#" className="text-blue-600 text-xl hover:underline">
          Instagram
        </a>
      </div>
    </section>
  );
}

export default Contact;