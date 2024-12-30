import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { Countdown } from "../Countdown";

export default function BackgroundBeamsWithCollisionDemo() {

  const targetDate = new Date('2025-02-20T08:00:00');
  return (
    (<BackgroundBeamsWithCollision className={"h-screen"}>
      <h2
        className="text-2xl relative z-20 flex flex-col md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
        The wait is Over, it's now time to... 
        <div
          className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div
            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">#FeelTheEnigma</span>
          </div>
          <Countdown targetDate={targetDate} />
        </div>
      </h2>
    </BackgroundBeamsWithCollision>)
  );
}
