import { useTheme } from '../context/ThemeContext';
import GrowingVine from './GrowingVine';

// Light tints along the hero gradient: gold → peach → rose
const lightSkillColors = [
  '#fff4d6', '#fff0cc', '#ffecc2', '#ffe8ba', '#ffe3b5',
  '#ffdeb0', '#ffd9ad', '#ffd4ab', '#ffcfaa', '#ffcaab',
  '#ffc5ad', '#ffc0b0', '#ffbbb4', '#ffb6b7', '#ffb2ba',
  '#ffadbd', '#ffa9bf', '#ffa5c0', '#ffa1c2', '#ff9dc4',
  '#ff99c6', '#ff95c8', '#ff91ca', '#ff8dcc', '#ff89ce',
];

// Dark tints along the hero gradient: indigo → purple
const darkSkillColors = [
  '#1e1b4b', '#241e52', '#2a2159', '#302460', '#362768',
  '#3c2a6f', '#422d76', '#48307d', '#4c3382', '#503687',
  '#2d2175', '#3a1c78', '#45187a', '#4a1c7e', '#441f7c',
  '#3d2478', '#574b8a', '#602f9f', '#581c87', '#4c1d95',
  '#3b0764', '#2e0654', '#270554', '#210453', '#1b0352',
];

const skillGroups = [
  {
    label: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Laravel', 'jQuery', 'Node.js', 'Express'],
  },
  {
    label: 'Styling & UI',
    skills: ['CSS Tokens', 'Tailwind', 'Bootstrap', 'ARIA', 'Figma'],
  },
  {
    label: 'Data & APIs',
    skills: ['REST','GraphQL', 'Apollo Client', 'Prisma'],
  },
  {
    label: 'Tools & Workflow',
    skills: ['Claude Code', 'Git', 'Vite', 'React Testing Library', 'Lighthouse', 'Agile'],
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  let colorIndex = 0;

  return (
    <section id="skills" className={`relative py-20 scroll-mt-20 overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center ${isDark ? 'bg-gray-900' : 'bg-stone-50'}`}>
      <GrowingVine isDark={isDark} />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Skills
        </h2>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col md:flex-row items-start gap-6"
            >
              {/* Group label */}
              <div className="md:w-48 flex-shrink-0">
                <h3
                  className={`text-lg font-bold uppercase tracking-widest ${isDark ? 'text-[#818cf8]' : 'text-gray-900'}`}
                >
                  {group.label}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 flex-1">
                {group.skills.map((skill) => {
                  const colors = isDark ? darkSkillColors : lightSkillColors;
                  const bg = colors[colorIndex % colors.length];
                  colorIndex++;
                  return (
                    <span
                      key={skill}
                      className={`px-5 py-2.5 rounded-xl text-md font-medium transition-transform hover:scale-105 hover:shadow-md ${
                        isDark
                          ? 'text-gray-200'
                          : 'text-gray-800'
                      }`}
                      style={{ backgroundColor: bg }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
