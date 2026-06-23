import { useTheme } from '../context/ThemeContext';

const caseStudies = [
  {
    title: 'Browser Extension Modernization',
    company: 'FMTC',
    description: 'Rebuilt the frontend architecture of a production browser extension using React, TypeScript, and Vite. Modernized the codebase, improved maintainability, and implemented new functionality while supporting an existing user base.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Figma'],
  },
  {
    title: 'Data Platform Enhancements',
    company: 'FMTC',
    description: 'Built data-intensive interfaces for a SaaS platform, handling large paginated datasets, integrating REST APIs, and diagnosing data integrity issues across frontend and backend systems while helping modernize the platform\'s frontend architecture and UI.',
    technologies: ['JavaScript', 'PHP', 'Laravel', 'REST APIs', 'MySQL'],
  },
  {
    title: 'Real-Time Systems',
    company: 'Daily Audio Bible',
    description: 'Developed real-time account management and donation workflows using GraphQL and WebSockets, enabling data synchronization across connected applications',
    technologies: ['JavaScript', 'GraphQL', 'WebSockets', 'PHP', 'Wordpress'],
  }
];

export default function ProfessionalWork() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="professional-work" className={`py-20 scroll-mt-20 min-h-[calc(100vh-4rem)] flex flex-col justify-center ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Professional Highlights
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" style={{ gridAutoRows: '1fr' }}>
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 hover:shadow-lg transition-shadow border flex flex-col ${
                isDark
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-stone-50 border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              <p className={`text-sm font-medium mb-3 ${isDark ? 'text-indigo-400' : 'text-blue-600'}`}>
                {item.company}
              </p>

              <p className={`mb-4 flex-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-sm border ${
                      isDark
                        ? 'border-indigo-900 text-indigo-200'
                        : 'border-blue-100 text-blue-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
