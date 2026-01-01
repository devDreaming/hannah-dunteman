type Project = {
  title: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, TypeScript, and Tailwind CSS.",
    link: "https://github.com/your-username/portfolio",
  },
  {
    title: "Dashboard UI",
    description: "Responsive admin dashboard with reusable components.",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">
          Projects
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-white rounded-lg border"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-sm font-medium underline"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
