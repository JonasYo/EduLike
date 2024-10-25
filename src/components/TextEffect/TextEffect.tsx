'use client';

import { Typewriter } from 'react-simple-typewriter';

export interface TextEffectProps {
  texts?: string[];
}

const TextEffect = ({ texts = [] }: TextEffectProps) => {
  return (
    <>
      <Typewriter
        words={texts}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={5000}
      />
    </>
  );
};

export default TextEffect;
