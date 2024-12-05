import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      videoRef.current?.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    };
    playVideo();
  }, []);

  const handlePlayButtonClick = () => {
    videoRef.current?.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  };

  const handlePauseButtonClick = () => {
    videoRef.current?.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  };

  const handleShareButtonClick = () => {
    navigator.clipboard.writeText(
      "https://www.youtube.com/embed/DZ_22bwEw0U?start=3"
    );
    alert("Video link copied to clipboard!");
  };

  return (
    <>
      <br />
      <h2
        style={{
          background: "linear-gradient(135deg, rgb(209 141 95), #B48CDE)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans"
      >
        Advitya&apos;24 Highlights.
      </h2>
      <br />
      <br />
      <div
        className="text-3xl sm:text-6xl lg:text-8xl  flex-col justify-center items-center min-h-screen space-y-6 relative hidden md:flex"
        style={{
          background: "linear-gradient(135deg, #DDE6E8, #B48CDE)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {/* Background image */}
        <img
          src="https://res.cloudinary.com/dkjhkep0m/image/upload/v1733298101/MC-Center.jpg"
          className="w-[90%] h-full object-cover opacity-80 rounded-3xl"
          alt="Advitya 2024 Background"
        />

        {/* Overlay images */}
        <img
          src="https://res.cloudinary.com/dkjhkep0m/image/upload/v1733298186/Raj%20Thakur.jpg"
          alt="Advitya 2024 Highlight"
          className="absolute top-10 right-4 py-2 px-5 rounded-3xl md:z-10"
          style={{ width: "500px", height: "auto", borderRadius: "30px" }}
        />
        <img
          src="https://res.cloudinary.com/dkjhkep0m/image/upload/v1733298255/KabirCafe.jpg"
          alt="Advitya 2024 Highlight"
          className="absolute top-10 left-10 py-2 px-5 rounded-3xl md:z-10"
          style={{ width: "500px", height: "auto", borderRadius: "30px" }}
        />
        <img
          src="https://res.cloudinary.com/dkjhkep0m/image/upload/v1733296921/Advitya3.jpg"
          alt="Advitya 2024 Highlight"
          className="absolute top-50 left-10 py-2 px-5 rounded-3xl md:z-10"
          style={{ width: "500px", height: "auto", borderRadius: "30px" }}
        />
        <img
          src="https://res.cloudinary.com/dkjhkep0m/image/upload/v1733298329/MC-BottomRight.jpg"
          alt="Advitya 2024 Highlight"
          className="absolute top-70 right-4 py-7 rounded-2xl px-5 z-10"
          style={{ width: "500px", height: "auto", borderRadius: "30px" }}
        />

        {/* Dock Navbar */}
        <div className="bottom-10 w-[70%] bg-[white] bg-opacity-10 backdrop-blur-md border border-white/20 shadow-2xl rounded-full h-16 flex justify-around items-center p-3 ">
          <button onClick={handlePlayButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ scale: "1.2" }}
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#D9D9D9"
            >
              <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </button>
          <button onClick={handlePauseButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#D9D9D9"
            >
              <path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </button>
          <button onClick={handleShareButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#D9D9D9"
            >
              <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
            </svg>
          </button>
        </div>

        <div className="relative bg-white p-4 rounded-lg mt-5 md:mt-auto">
          <iframe
            ref={videoRef}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DZ_22bwEw0U?enablejsapi=1&amp;start=3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
