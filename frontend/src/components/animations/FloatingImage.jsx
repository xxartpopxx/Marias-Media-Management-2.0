import React, { useState, useEffect } from 'react';

export const FloatingImage = ({ 
  src, 
  alt, 
  className = '',
  floatRange = 15,
  duration = 4000,
  delay = 0,
  rotate = false,
  rotateRange = 3
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0, r: 0 });

  useEffect(() => {
    let animationFrame;
    let startTime = Date.now() - delay;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      const angle = progress * Math.PI * 2;
      
      setOffset({
        x: Math.sin(angle) * (floatRange * 0.3),
        y: Math.sin(angle * 1.2) * floatRange,
        r: rotate ? Math.sin(angle * 0.8) * rotateRange : 0
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [floatRange, duration, delay, rotate, rotateRange]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${offset.r}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    />
  );
};

export default FloatingImage;
