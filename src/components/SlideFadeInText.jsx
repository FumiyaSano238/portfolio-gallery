import React, { useEffect, useRef, useState } from 'react';

function SlideFadeInText({ children, className = '', direction = 'left' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className={`slide-fade-in ${direction} ${isVisible ? 'active' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default SlideFadeInText;
