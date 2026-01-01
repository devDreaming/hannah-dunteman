function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">
          Contact
        </h2>

        <p className="mt-4 text-gray-600">
          If you would like to discuss opportunities or collaboration, reach out below.
        </p>

        <div className="mt-8">
          <a
            href="mailto:youremail@example.com"
            className="inline-block px-6 py-3 bg-black text-white rounded-md"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
