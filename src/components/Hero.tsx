function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Hannah Dunteman
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Frontend Engineer specializing in React, TypeScript, and modern UI development.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-md"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-black rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
