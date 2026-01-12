import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);

  const email = 'hannah.dunteman@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <section id="contact" className={`py-20 scroll-mt-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className={`rounded-lg shadow-md p-8 ${isDark ? 'bg-gray-900' : 'bg-blue-50'}`}>
            <p className={`mb-4 text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              The next step in our journey awaits
            </p>
            <div className="relative flex justify-center">
              <p
                onClick={copyEmail}
                className={`text-center cursor-pointer ${isDark ? 'text-indigo-300' : 'text-blue-600'}`}
              >
                {email}
              </p>
              {copied && (
                <span className={`absolute -top-8 px-2 py-1 text-sm rounded ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'}`}>
                  Copied!
                </span>
              )}
            </div>


            <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/devDreaming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    isDark
                      ? 'text-gray-400 hover:text-indigo-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/hannah-dunteman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    isDark
                      ? 'text-gray-400 hover:text-indigo-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:hannah.dunteman@gmail.com"
                  className={`transition-colors ${
                    isDark
                      ? 'text-gray-400 hover:text-indigo-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}