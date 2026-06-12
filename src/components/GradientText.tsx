import { useTheme } from '../context/ThemeContext';

interface GradientTextProps {
  children: React.ReactNode;
}

export default function GradientText({ children }: GradientTextProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: isDark
          ? 'linear-gradient(135deg, #6366f1, #a78bfa)'
          : 'linear-gradient(135deg, #ffce6f, #f4a6aa)',
      }}
    >
      {children}
    </span>
  );
}
