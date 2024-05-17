import React from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface FocusTextProps {
  text: string;
}

const FocusText: React.FC<FocusTextProps> = ({ text }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.9,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${
        isIntersecting ? 'opacity-100 font-bold text-white' : 'opacity-30'
      }`}
    >
      {text}
    </div>
  );
};

export default FocusText;
