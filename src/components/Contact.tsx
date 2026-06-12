import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="contact"
      className={`py-20 scroll-mt-20 h-[calc(100vh-4rem)] relative overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}
    >
      <img
        src={`${import.meta.env.BASE_URL}skyline-dark.svg`}
        alt=""
        className="absolute bottom-0 left-0 right-0 h-screen w-full pointer-events-none object-contain object-bottom"
        style={{ opacity: isDark ? 0.15 : 0.1, height: '60%' }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className={`rounded-lg shadow-md p-6 border backdrop-blur-sm ${
                isDark
                  ? 'bg-gray-900/80 border-gray-700'
                  : 'bg-white/80 border-gray-200'
              }`}>
            <p className={`mb-4 text-center text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              The next step in our journey awaits
            </p>

            <div className={`mt-6 pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col gap-4 items-start w-fit mx-auto">
                <a
                  href="https://github.com/devDreaming"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`flex items-center gap-3 transition-colors ${
                    isDark
                      ? 'text-white hover:text-indigo-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <FaGithub className="text-2xl shrink-0" />
                  <span className="text-base">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hannah-dunteman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`flex items-center gap-3 transition-colors ${
                    isDark
                      ? 'text-white hover:text-indigo-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <FaLinkedin className="text-2xl shrink-0" />
                  <span className="text-base">LinkedIn</span>
                </a>
                <a
                  href="mailto:hannah.dunteman@gmail.com"
                  aria-label="Email"
                  className={`flex items-center gap-3 transition-colors ${
                    isDark
                      ? 'text-white hover:text-indigo-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <HiOutlineMail className="text-2xl shrink-0" />
                  <span className="text-base">hannah.dunteman@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}