import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 400ms ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
