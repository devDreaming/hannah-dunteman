import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import StarryNight from './StarryNight';
import ThemeToggle from './ThemeToggle';

interface HeroProps {
  scrollProgress: number;
}

export default function Hero({ scrollProgress }: HeroProps) {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = theme === 'dark';
  const isCollapsed = scrollProgress >= 1;

  // Different gradients for dark and light modes
  const heroGradient = isDark
    ? 'bg-gradient-to-b from-indigo-950 via-indigo-900 to-purple-900'
    : 'bg-gradient-to-b from-[#ffce6f] via-[#f6b57e] to-[#f4a6aa]';

  const headerGradient = isDark
    ? 'bg-gradient-to-r from-indigo-900 to-purple-900'
    : 'bg-gradient-to-b from-[#ffce6f] via-[#f6b57e] to-[#f4a6aa]';

  const textColor = isDark ? 'text-white' : 'text-white';
  const subtitleColor = isDark ? 'text-indigo-200' : 'text-yellow-50';

  // Interpolate height from 100vh down to auto (using padding)
  // Content fades out starting at 30% scroll progress
  const contentOpacity = Math.max(0, 1 - scrollProgress * 2.5);
  const heroHeight = `${100 - scrollProgress * 100}vh`;
  const minHeight = isCollapsed ? 'auto' : heroHeight;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${isCollapsed ? headerGradient : heroGradient} ${
        isCollapsed ? 'shadow-lg' : ''
      }`}
      style={{
        minHeight: isCollapsed ? undefined : minHeight,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {!isCollapsed && isDark && <StarryNight />}

      <div className="container mx-auto p-6 relative z-10 w-full">
        <div
          className={`transition-all duration-100 ${
            isCollapsed ? 'flex items-center justify-between' : 'text-center'
          }`}
        >
          <div>
            <h1
              className={`font-bold ${textColor} ${isCollapsed ? 'text-2xl' : ''}`}
              style={{
                fontSize: isCollapsed ? undefined : `${3.75 - scrollProgress * 2.25}rem`,
                textAlign: isCollapsed ? undefined : (scrollProgress > 0 ? 'left' : 'center'),
              }}
            >
              Hannah Dunteman {!isCollapsed && <span className={subtitleColor} style={{ opacity: contentOpacity }}>| Frontend Engineer</span>}
            </h1>
            {!isCollapsed && contentOpacity > 0 && (
              <p
                className={`text-lg ${subtitleColor} mb-8 opacity-80`}
                style={{ opacity: contentOpacity * 0.8 }}
              >
                Lets build something beautiful and functional
              </p>
            )}
          </div>

          {isCollapsed && (
            <>
              {/* Desktop nav */}
              <nav className="hidden md:flex gap-6 items-center">
                <a
                  href="#about"
                  className={`${textColor} hover:opacity-80 transition-opacity`}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className={`${textColor} hover:opacity-80 transition-opacity`}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className={`${textColor} hover:opacity-80 transition-opacity`}
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className={`${textColor} hover:opacity-80 transition-opacity`}
                >
                  Contact
                </a>
                <ThemeToggle />
              </nav>

              {/* Mobile hamburger */}
              <button
                className="md:hidden flex flex-col justify-center gap-1.5 p-2"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-white'} transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-white'} transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-white'} transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </>
          )}
        </div>

        {isCollapsed && menuOpen && (
          <nav className="md:hidden flex flex-col gap-4 pt-4 pb-2">
            <a
              href="#about"
              className={`${textColor} hover:opacity-80 transition-opacity`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className={`${textColor} hover:opacity-80 transition-opacity`}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className={`${textColor} hover:opacity-80 transition-opacity`}
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className={`${textColor} hover:opacity-80 transition-opacity`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <ThemeToggle />
          </nav>
        )}

        {!isCollapsed && (
          <div style={{ opacity: contentOpacity, pointerEvents: contentOpacity < 0.1 ? 'none' : undefined }}>
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="#about"
                className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                  isDark
                    ? 'bg-white text-indigo-900 hover:bg-indigo-100'
                    : 'bg-white text-orange-600 hover:bg-orange-50'
                }`}
              >
                About Me
              </a>
              <a
                href="#projects"
                className={`border-2 border-white ${textColor} px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark
                    ? 'hover:bg-white hover:text-indigo-900'
                    : 'hover:bg-white hover:text-orange-600'
                }`}
              >
                View Projects
              </a>
            </div>

            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
