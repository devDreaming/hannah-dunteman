import { useTheme } from '../context/ThemeContext';
import GradientText from './GradientText';

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="about"
      className={`relative py-20 scroll-mt-20 min-h-[calc(100vh-4rem)] overflow-hidden flex flex-col justify-center ${isDark ? 'bg-gray-900' : 'bg-white'}`}
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

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>

        {/* Layout: guitar on left, content on right */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="hidden md:flex flex-col flex-shrink-0 items-center self-end" style={{ width: '160px' }}>
            <img
              src={`${import.meta.env.BASE_URL}guitar-outline.svg`}
              alt=""
              className="opacity-15"
              style={{
                width: '160px',
                height: 'auto',
                maxHeight: '300px',
                filter: isDark
                  ? 'brightness(2) invert(0.3) sepia(1) saturate(3) hue-rotate(220deg)'
                  : 'sepia(1) saturate(2) hue-rotate(340deg) brightness(0.85)',
              }}
            />
          </div>
          <div className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <p className="mb-4">
              For <GradientText>seven years</GradientText> software development has been my art
            </p>
            <p className="mb-4">
              I believe in crafting software that is not only <GradientText>performant</GradientText> and <GradientText>accessible</GradientText>, but also <GradientText>consistent</GradientText> and <GradientText>maintainable</GradientText>.
              Whether working on frontend experiences, component architecture, or application structure, I focus on building systems that can grow without accumulating unnecessary complexity.
            </p>
            <p className="opacity-80">When I'm not working, I'm probably playing guitar or listening to heavy metal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
