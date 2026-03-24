import { useTheme } from '../context/ThemeContext';

const skillGroups = [
  {
    label: 'Languages',
    skills: ['Javascript', 'TypeScript', 'HTML', 'CSS', 'PHP'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Laravel', 'jQuery', 'Node.js', 'Express',],
  },
  {
    label: 'Styling & UI',
    skills: ['Tailwind', 'Bootstrap', 'ARIA', 'Figma'],
  },
  {
    label: 'Tools & Workflow',
    skills: ['Claude Code','Vite', 'Lighthouse', 'Agile'],
  },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-20 scroll-mt-20 min-h-[calc(100vh-4rem)] ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          About
        </h2>
        <div className={`rounded-lg shadow-md p-8 border border-gray-700 mb-12 max-w-2xl mx-auto ${isDark ? 'bg-gray-900' : ''}`}> 
          <p className={`text-lg leading-relaxed text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Software development is my art and development is my canvas. I believe good code performs well, is easy to understand, and creates a UI that is both visually pleasing and accessible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className={`text-md font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-md border ${
                      isDark
                        ? 'border-gray-600 text-gray-300'
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    {skill}
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
