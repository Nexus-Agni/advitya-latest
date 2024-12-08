"use client";
import React, { useEffect, useState } from "react";

export const Menu = ({ setActive, children }) => {
  const [navbarWidth, setNavbarWidth] = useState("w-full");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newWidth = Math.max(768, 1280 - scrollY * 2); // Adjust the values as needed
      setNavbarWidth(`max-w-${newWidth}px`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onMouseLeave={() => setActive(null)}
      className={`relative rounded-full border bg-black bg-opacity-40 backdrop-blur-md border-white/[0.2] shadow-input flex justify-between space-x-4 px-8 py-6 transition-all ease-in-out ${navbarWidth}`}
    >
      {children}
    </div>
  );
};