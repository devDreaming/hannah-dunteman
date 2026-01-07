import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured online store with cart functionality, payment integration, and admin dashboard.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task manager with real-time updates, drag-and-drop interface, and team features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      github: '#',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Beautiful weather application with location-based forecasts, interactive maps, and historical data.',
      technologies: ['React', 'TypeScript', 'OpenWeather API'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className={`py-20 scroll-mt-20 ${isDark ? 'bg-gray-900' : 'bg-stone-50'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 hover:shadow-lg transition-shadow border ${
                isDark 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-blue-50 border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDark
                        ? 'bg-indigo-900 text-indigo-200'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  className={`font-medium ${
                    isDark
                      ? 'text-indigo-400 hover:text-indigo-300'
                      : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  Live Demo →
                </a>
                <a
                  href={project.github}
                  className={`font-medium ${
                    isDark
                      ? 'text-gray-400 hover:text-gray-300'
                      : 'text-gray-600 hover:text-gray-700'
                  }`}
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}