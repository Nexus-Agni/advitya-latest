import React from 'react'
import GradientText from './GradientText'

function RevealingSoon() {
  return (
    <GradientText
        animationSpeed={5}
        showBorder={false}
        className="flex items-center justify-center h-full text-8xl"
    >
        REVEALING SOON
    </GradientText>
  )
}

export default RevealingSoon