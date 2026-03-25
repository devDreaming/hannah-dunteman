import { useTheme } from '../context/ThemeContext';

// Light tints along the hero gradient: gold → peach → rose
const lightSkillColors = [
  '#fff4d6', '#fff0cc', '#ffecc2', '#ffe8ba', '#ffe3b5',
  '#ffdeb0', '#ffd9ad', '#ffd4ab', '#ffcfaa', '#ffcaab',
  '#ffc5ad', '#ffc0b0', '#ffbbb4', '#ffb6b7', '#ffb2ba',
  '#ffadbd', '#ffa9bf', '#ffa5c0', '#ffa1c2',
];

// Dark tints along the hero gradient: indigo → purple
const darkSkillColors = [
  '#1e1b4b', '#211d52', '#242059', '#272360', '#2a2667',
  '#2d296e', '#312c74', '#35307a', '#393480', '#3d3886',
  '#413c8c', '#454092', '#494498', '#4c479e', '#4f4aa4',
  '#524da9', '#5550ae', '#5853b3', '#5b56b8',
];

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
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>
        <div className="grid md:grid-cols-[2.5fr_2fr] gap-10 items-start">
          <div className="text-md text-left leading-relaxed">
            <div className={`rounded-lg shadow-md p-6 border border-gray-700 mb-4 ${isDark ? 'bg-gray-900 text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                Software development is my art and I always strive for the highest quality work.
              </p>
              <p>
                I believe that good code performs well, is easy to understand, and creates a UI that is both visually pleasing and accessible.
              </p>
            </div>
            <div className={`rounded-lg shadow-md p-6 border border-gray-700 ${isDark ? 'bg-gray-900 text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                Some things I have accomplished in my seven years as a developer:
              </p>
              <ul className={`list-disc list-outside space-y-2 ps-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Implemented a complete redesign of a browser extension using React, TypeScript, and Vite, reducing load times and improving user satisfaction</li>
                <li>Assisted in the end-to-end rebuilding of the company's software infrastructure with Laravel, PHP, jQuery, and CSS, resulting in improved system reliability, and faster page loads</li>
                <li>Led a team of two interns through the full development lifecycle of a website, successfully launching the project on schedule while building team capacity and technical skills</li>
              </ul>
            </div>
          </div>


          <div className="grid sm:grid-cols-1 gap-6">
            {(() => {
              let colorIndex = 0;
              return skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className={`text-md font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const colors = isDark ? darkSkillColors : lightSkillColors;
                      const bg = colors[colorIndex % colors.length];
                      colorIndex++;
                      return (
                        <span
                          key={skill}
                          className={`px-3 py-2 rounded-full text-md border flex items-center leading-none ${
                            isDark
                              ? 'border-gray-600 text-gray-200'
                              : 'border-transparent text-gray-800'
                          }`}
                          style={{ backgroundColor: bg }}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
