export default function Contact() {
  return (
    <div
      id="contact"
      className="h-screen flex flex-col px-5 items-center justify-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contact Me
      </h2>
      <form className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 rounded-lg"
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
