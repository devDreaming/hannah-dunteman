import { useEffect, useState } from 'react';

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
}

export default function StarryNight() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars: Star[] = [];
    // Create 150 stars
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        animationDuration: Math.random() * 3 + 2,
        animationDelay: Math.random() * 3,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
        >
          <div
            className="bg-white rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        </div>
      ))}
      
      {/* Shooting stars */}
      <div className="absolute top-1/4 right-1/4 animate-shooting-star">
        <div className="w-1 h-1 bg-white rounded-full shadow-shooting-star" />
      </div>
      <div className="absolute top-1/3 left-1/3 animate-shooting-star-delayed">
        <div className="w-1 h-1 bg-white rounded-full shadow-shooting-star" />
      </div>
    </div>
  );
}