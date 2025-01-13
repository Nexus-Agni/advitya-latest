import React from 'react';
import GradientText from './GradientText';

function RevealingSoon() {
  return (
    <GradientText
      animationSpeed={5}
      showBorder={false}
      className="flex items-center justify-center h-full text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center"
    >
      REVEALING SOON
    </GradientText>
  );
}

export default RevealingSoon;
