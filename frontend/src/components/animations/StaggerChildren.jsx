import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const StaggerChildren = ({ 
  children, 
  staggerDelay = 100,
  initialDelay = 0,
  className = '',
  threshold = 0.1
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: `opacity 600ms ease-out, transform 600ms ease-out`,
            transitionDelay: `${initialDelay + index * staggerDelay}ms`
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggerChildren;
