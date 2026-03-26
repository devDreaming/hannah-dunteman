import { useTheme } from '../context/ThemeContext';

const accomplishments = [
  {
    number: '01',
    text: <>I implemented a complete redesign of a browser extension using <em>React</em>, <em>TypeScript</em>, and <em>Vite</em>, reducing load times and improving user satisfaction</>,
  },
  {
    number: '02',
    text: <>I assisted in the end-to-end rebuilding of the company's software infrastructure with <em>Laravel</em>, <em>PHP</em>, <em>jQuery</em>, and <em>CSS</em>, resulting in improved system reliability, and faster page loads</>,
  },
  {
    number: '03',
    text: <>I led a team of two interns through the full development lifecycle of a website, successfully launching the project on schedule while building team capacity and technical skills</>,
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
          <div className="hidden md:flex flex-shrink-0 items-end self-end" style={{ width: '160px' }}>
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
          </div>

          {/* Content — offset to the right */}
          <div className="flex-1">
            {/* Intro text */}
            <div className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                For <span className="bg-clip-text text-transparent" style={{
                    backgroundImage: isDark
                        ? 'linear-gradient(135deg, #6366f1, #a78bfa)'
                        : 'linear-gradient(135deg, #ffce6f, #f4a6aa)',
                  }}>
                     seven years 
                  </span> software development has been my art
              </p>
              <p className="mb-4">
                I have always strived for the <span className="bg-clip-text text-transparent" style={{
                    backgroundImage: isDark
                        ? 'linear-gradient(135deg, #6366f1, #a78bfa)'
                        : 'linear-gradient(135deg, #ffce6f, #f4a6aa)',
                  }}>highest quality work</span>
              </p>
              <p>
                I believe in crafting good code that performs well, is easy to understand and creates a UI that is both <span className="bg-clip-text text-transparent" style={{
                    backgroundImage: isDark
                        ? 'linear-gradient(135deg, #6366f1, #a78bfa)'
                        : 'linear-gradient(135deg, #ffce6f, #f4a6aa)',
                  }}>visually pleasing</span> and <span className="bg-clip-text text-transparent" style={{
                    backgroundImage: isDark
                        ? 'linear-gradient(135deg, #6366f1, #a78bfa)'
                        : 'linear-gradient(135deg, #ffce6f, #f4a6aa)',
                  }}>accessible</span>
              </p>
            </div>

            {/* Accomplishments */}
            {/* <h3 className={`text-sm font-semibold uppercase tracking-widest mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Some accomplishments:
            </h3> */}
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
                  <span
                    className="text-2xl font-bold flex-shrink-0 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: isDark
                        ? 'linear-gradient(135deg, #6366f1, #a78bfa)'
                        : 'linear-gradient(135deg, #ffce6f, #f4a6aa)',
                    }}
                  >
                    {item.number}
                  </span>
                  <p className={`text-[0.9375rem] leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
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
