'use client';

import { useEffect, useState } from 'react';

import { Typewriter } from 'react-simple-typewriter';

export interface TextEffectProps {
  texts?: string[];
}

const TextEffect = ({ texts = [] }: TextEffectProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loading && (
        <Typewriter
          words={texts}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={5000}
        />
      )}
    </>
  );
};

export default TextEffect;
