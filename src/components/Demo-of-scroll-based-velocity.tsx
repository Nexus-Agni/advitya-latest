import React from 'react';
import { VelocityScroll } from "./ui/scroll-based-velocity";

export default function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="ADVITYA'25"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-[#d18d5f] to-[#b48cde] drop-shadow-sm md:text-4xl md:leading-[3rem]"
    />
  );
}
