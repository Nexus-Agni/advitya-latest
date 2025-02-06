import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SkipBack, Play, Pause, SkipForward } from "lucide-react";

const dummyCarouselImages = [
  { src: "/images/dummy1.jpg", alt: "Dummy Image 1" },
  { src: "/images/dummy2.jpg", alt: "Dummy Image 2" },
  { src: "/images/dummy3.jpg", alt: "Dummy Image 3" },
];

const dummySongs = [
  {
    title: "Song 1",
    albumImage:
      "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1db88001255381c7a/view?project=6756a8dc000c0d24754b&mode=admin",
    audioSrc: "/audio/song1.mp3",
  },
  {
    title: "Song 2",
    albumImage:
      "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1db80000be49f3b53/view?project=6756a8dc000c0d24754b&mode=admin",
    audioSrc: "/audio/song2.mp3",
  },
  {
    title: "Song 3",
    albumImage:
      "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1dbab0027d654181a/view?project=6756a8dc000c0d24754b&mode=admin",
    audioSrc: "/audio/song3.mp3",
  },
];

export default function ProNight() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const timerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % dummyCarouselImages.length
        );
        setCurrentSongIndex(
          (prevIndex) => (prevIndex + 1) % dummySongs.length
        );
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSongIndex, isPlaying]);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % dummyCarouselImages.length
    );
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % dummySongs.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? dummyCarouselImages.length - 1 : prevIndex - 1
    );
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? dummySongs.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const selectSong = (index) => {
    setCurrentSongIndex(index);
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="bg-primary-foreground relative w-full overflow-hidden mb-2 xl:mb-[-250]"
      id="about"
    >
      {/* Band Section */}
      <section className="relative w-full min-h-screen bg-primary-foreground overflow-hidden py-16 md:py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <img
              src="https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a466f60007f4bcd223/view?project=6756a8dc000c0d24754b&mode=admin"
              alt="Raghu Dixit"
              className="w-full max-w-[500px]  rounded-xl mb-8"
            />
            <h1 className="text-white text-4xl font-bold mb-4">Raghu Dixit</h1>
            <p className="text-white text-lg max-w-2xl">
              About the band: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
              diam.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            {/* Rotating Vinyl with Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full lg:w-1/2 aspect-square max-w-[400px] lg:max-w-[600px] my-24 lg:mb-0"
            >
              <div
                className={`relative w-full h-full ${
                  isPlaying ? "animate-[spin_20s_linear_infinite]" : ""
                }`}
              >
                <img
                  src="https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a46621002b7b0fcd41/view?project=6756a8dc000c0d24754b&mode=admin"
                  alt="Vinyl record"
                  className="object-cover rounded-full"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 600px"
                />
                <div className="absolute left-1/2 top-1/2 h-[98%] w-[98%] -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-zinc-800">
                  <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-zinc-800 overflow-hidden">
                    <img
                      src={
                        dummySongs[currentSongIndex].albumImage ||
                        "/placeholder.svg"
                      }
                      alt={dummySongs[currentSongIndex].title}
                      className="rounded-full object-cover"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-primary-foreground px-6 py-3 rounded-full">
                <button
                  onClick={previousImage}
                  className="p-2 rounded-full hover:bg-primary transition-colors group"
                >
                  <SkipBack className="w-5 h-5 stroke-2 text-gray-200 group-hover:text-primary-foreground" />
                </button>
                <button
                  onClick={togglePlayPause}
                  className="p-3 rounded-full bg-primary-foreground text-background hover:bg-background hover:text-primary-foreground transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current text-gray-200" />
                  ) : (
                    <Play className="w-5 h-5 fill-current text-gray-200" />
                  )}
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full hover:bg-primary transition-colors group"
                >
                  <SkipForward className="w-5 h-5 stroke-2 text-gray-200 group-hover:text-primary-foreground" />
                </button>
              </div>
            </motion.div>

            {/* Song List */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <h2 className="text-white text-3xl font-bold mb-4">
                    Popular Songs
                  </h2>
                  <ul className="text-white text-lg space-y-2">
                    {dummySongs.map((song, index) => (
                      <li
                        key={index}
                        className={`flex items-center p-2 rounded-lg ${
                          index === currentSongIndex
                            ? "bg-primary shadow-lg"
                            : "hover:bg-primary hover:shadow-lg"
                        } transition-all cursor-pointer`}
                        onClick={() => selectSong(index)}
                      >
                        <img
                          src={song.albumImage}
                          alt={song.title}
                          className="w-16 h-16 rounded-xl mr-4"
                        />
                        <span className="flex-1">{song.title}</span>
                        <button className="p-2 rounded-full bg-primary-foreground text-background hover:bg-background hover:text-primary-foreground transition-colors">
                          {index === currentSongIndex && isPlaying ? (
                            <Pause className="w-5 h-5 fill-current text-gray-200" />
                          ) : (
                            <Play className="w-5 h-5 fill-current text-gray-200" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <audio ref={audioRef} src={dummySongs[currentSongIndex].audioSrc} />
    </div>
  );
}