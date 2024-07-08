'use client';

import React from 'react';

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
        cursorStyle="_"
        typeSpeed={100}
        deleteSpeed={70}
        delaySpeed={3000}
      />
    </>
  );
};

export default TextEffect;
