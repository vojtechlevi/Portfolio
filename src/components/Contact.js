export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contact Me
      </h2>
      <form className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 p-3 rounded-lg text-white font-bold hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}