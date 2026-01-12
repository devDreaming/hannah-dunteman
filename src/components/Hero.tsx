import { useTheme } from '../context/ThemeContext';
import StarryNight from './StarryNight';
import ThemeToggle from './ThemeToggle';

interface HeroProps {
  isScrolled: boolean;
}

export default function Hero({ isScrolled }: HeroProps) {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  
  // Different gradients for dark and light modes
  const heroGradient = isDark
    ? 'bg-gradient-to-b from-indigo-950 via-indigo-900 to-purple-900'
    : 'bg-gradient-to-b from-[#ffce6f] via-[#f6b57e] to-[#f4a6aa]';

  const headerGradient = isDark
    ? 'bg-gradient-to-r from-indigo-900 to-purple-900'
    : 'bg-gradient-to-b from-[#ffce6f] via-[#f6b57e] to-[#f4a6aa]';

  const textColor = isDark ? 'text-white' : 'text-white';
  const subtitleColor = isDark ? 'text-indigo-200' : 'text-yellow-50';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${headerGradient} shadow-lg py-4`
          : `${heroGradient} py-32`
      }`}
    >
      {!isScrolled && isDark && <StarryNight />}
      
      <div className={`container mx-auto px-6 relative z-10`}>
        <div
          className={`transition-all duration-300 ${
            isScrolled ? 'flex items-center justify-between' : 'text-center'
          }`}
        >
          <div>
            <h1
              className={`font-bold transition-all duration-300 ${
                isScrolled
                  ? `text-2xl ${textColor}`
                  : `text-5xl md:text-6xl ${textColor} mb-4`
              }`}
            >
              Hannah Dunteman {!isScrolled && <span className={subtitleColor}>| Frontend Developer</span>}
            </h1>
            {!isScrolled && (
              <>
                <p className={`text-lg ${subtitleColor} mb-8 animate-fade-in opacity-80`}>
                  Lets build something beautiful and functional
                </p>
              </>
            )}
          </div>

          {isScrolled && (
            <nav className="flex gap-6 items-center">
              <a
                href="#projects"
                className={`${textColor} hover:opacity-80 transition-opacity`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`${textColor} hover:opacity-80 transition-opacity`}
              >
                Contact
              </a>
              <ThemeToggle />
            </nav>
          )}
        </div>

        {!isScrolled && (
          <>
            <div className="flex justify-center gap-4 animate-fade-in mb-8">
              <a
                href="#projects"
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark
                    ? 'bg-white text-indigo-900 hover:bg-indigo-100'
                    : 'bg-white text-orange-600 hover:bg-orange-50'
                }`}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className={`border-2 border-white ${textColor} px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark
                    ? 'hover:bg-white hover:text-indigo-900'
                    : 'hover:bg-white hover:text-orange-600'
                }`}
              >
                Get in Touch
              </a>
            </div>
            
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </>
        )}
      </div>
    </header>
  );
}