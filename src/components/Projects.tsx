import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const projects = [
    {
      title: 'Modern Dentist',
      tagline: 'Personal Project',
      description:
        'Multi-page marketing site for a dental practice, built based on a Figma design with responsive layouts and modern UI components',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://modern-dentist.vercel.app/',
      github: 'https://github.com/devDreaming/modern-dentist',
    },
    {
      title: 'What\'s For Dinner',
      tagline: 'Personal Project',
      description:
        'Full stack application that utilizes Anthropic AI to help pick dinner options',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express', 'Node.js', 'Anthropic AI'],
      link: 'https://whats-for-dinner.up.railway.app/',
      github: 'https://github.com/devDreaming/whats-for-dinner',
    },
    {
      title: 'Accessible Component Library',
      tagline: 'Personal Project',
      description:
        'A showcase of accessible UI components',
      technologies: ['HTML', 'ARIA', 'CSS Tokens', 'React', 'Vite'],
      link: 'https://devdreaming.github.io/accessible-components/',
      github: 'https://github.com/devDreaming/accessible-components',
    },
    {
      title: 'Daily Audio Bible',
      tagline: 'Client Project',
      description:
        'Implemented a full site redesign, rebuilt menu, and added functionality to account pages which included a wallet, donation management, and using graphQL and websockets to update information between apps',
      technologies: ['HTML', 'SCSS', 'Javascript', 'PHP', 'WordPress', 'GraphQL', 'Websockets'],
      link: 'https://dailyaudiobible.com/',
      github: '',
    },
    {
      title: 'Plant Favorites',
      tagline: 'Personal Project',
      description:
        'Frontend single page application for searching and favoriting plants',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      link: 'https://devdreaming.github.io/plant-favorites/',
      github: 'https://github.com/devDreaming/plant-favorites',
    },
    // {
    //   title: 'Rock Paper Scissors Game',
    //   tagline: 'Personal Project',
    //   description:
    //     'A small game application that implements simple, straightforward gaming mechanics while utilizing clean and semantic coding techniques',
    //   technologies: ['HTML', 'CSS', 'Javascript'],
    //   link: 'https://devdreaming.github.io/rock-paper-scissors/',
    //   github: 'https://github.com/devDreaming/rock-paper-scissors',
    // },
    {
      title: 'Landing Page',
      tagline: 'Personal Project',
      description:
        'A static landing page that demonstrates the expansive abilities of plain HTML and SCSS',
      technologies: ['HTML', 'SCSS'],
      link: 'https://devdreaming.github.io/natourslandingpage/',
      github: 'https://github.com/devDreaming/natourslandingpage',
    },
  ];

  return (
    <section id="projects" className={`py-20 scroll-mt-20 ${isDark ? 'bg-gray-900' : 'bg-stone-50'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" style={{ gridAutoRows: '1fr' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 hover:shadow-lg transition-shadow border flex flex-col ${
                isDark
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-blue-50 border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-3 ${isDark ? 'text-indigo-400' : 'text-blue-600'}`}>
                {project.tagline}
              </p>
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

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  className={`font-medium ${
                    isDark
                      ? 'text-indigo-400 hover:text-indigo-300'
                      : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  Live Demo →
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className={`font-medium ${
                      isDark
                        ? 'text-gray-400 hover:text-gray-300'
                        : 'text-gray-600 hover:text-gray-700'
                    }`}
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}