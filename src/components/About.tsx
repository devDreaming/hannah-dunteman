import { useTheme } from '../context/ThemeContext';
import GradientText from './GradientText';

const accomplishments = [
  {
    number: '01',
    text: <>Rebuilt the frontend of a production browser extension using <em>React</em>, <em>TypeScript</em>, and <em>Vite</em>, reducing load times and improving user experience</>,
  },
  {
    number: '02',
    text: <>Implemented account management and donation workflows for a production platform using <em>GraphQL</em> and <em>WebSockets</em> to enable real-time data synchronization</>,
  },
  {
    number: '03',
    text: <>Modernized a <em>React</em> application by migrating from Redux to <em>Apollo Client</em>, reducing code complexity and improving state management and API performance</>,
  },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="about"
      className={`relative py-20 scroll-mt-20 min-h-[calc(100vh-4rem)] overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      {/* Subtle background accent */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, #6366f1, transparent 70%)'
            : 'radial-gradient(circle, #ffce6f, transparent 70%)',
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, #8b5cf6, transparent 70%)'
            : 'radial-gradient(circle, #f4a6aa, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>

        {/* Layout: guitar on left, content on right */}
        <div className="flex flex-col md:flex-row items-end gap-8 md:gap-12">
          {/* Guitar image — lower left, slightly shorter than section */}
          <div className="hidden md:flex flex-col flex-shrink-0 items-center self-end" style={{ width: '160px' }}>
            <img
              src={`${import.meta.env.BASE_URL}guitar-outline.svg`}
              alt=""
              className="opacity-15"
              style={{
                width: '160px',
                height: 'auto',
                maxHeight: '490px',
                filter: isDark
                  ? 'brightness(2) invert(0.3) sepia(1) saturate(3) hue-rotate(220deg)'
                  : 'sepia(1) saturate(2) hue-rotate(340deg) brightness(0.85)',
              }}
            />
            <p className={`text-xs text-center mt-2 italic ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              When I'm not coding,<br />I'm probably playing guitar or listening to heavy metal.
            </p>
          </div>

          {/* Content — offset to the right */}
          <div className="flex-1">
            {/* Intro text */}
            <div className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                For <GradientText>seven years</GradientText> software development has been my art
              </p>
              <p className="mb-4">
                I have always strived for the <GradientText>highest quality work</GradientText>
              </p>
              <p>
                I believe in crafting software that is not only <GradientText>performant</GradientText> and <GradientText>accessible</GradientText>, but also <GradientText>consistent</GradientText> and <GradientText>maintainable</GradientText>.
                Whether working on UI design, component architecture, or application structure, I focus on building systems that can grow without accumulating unnecessary complexity.
              </p>
            </div>

            {/* Accomplishments */}
            <h3 className={`text-sm font-semibold uppercase tracking-widest mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Professional accomplishments:
            </h3>
            <div className="flex flex-col gap-5">
              {accomplishments.map((item) => (
                <div
                  key={item.number}
                  className={`rounded-xl p-5 border transition-transform hover:-translate-y-1 flex items-start gap-4 ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700 hover:border-indigo-500/50'
                      : 'bg-gray-50 border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <span className="text-2xl font-bold flex-shrink-0">
                    <GradientText>{item.number}</GradientText>
                  </span>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
