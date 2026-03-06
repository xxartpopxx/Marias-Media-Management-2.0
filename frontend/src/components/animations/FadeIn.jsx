import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const FadeIn = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 700,
  className = '',
  threshold = 0.1
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(40px)';
      case 'down': return 'translateY(-40px)';
      case 'left': return 'translateX(40px)';
      case 'right': return 'translateX(-40px)';
      case 'none': return 'none';
      default: return 'translateY(40px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
