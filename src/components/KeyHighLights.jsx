import { useState, useEffect } from "react";
import "../components/highlights.css";
import Marquee from "react-fast-marquee";
import GradientText from "./ui/GradientText";
import { Card } from "./ui/apple-cards-carousal";
import { dbService } from "../appwrite/db";

export function KeyHighlights() {
  const [isPaused, setIsPaused] = useState(false);
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const data = await dbService.getKeyHighlights();
        const formattedData = data.map((item) => ({
          category: item.Information,
          title: item.Title,
          src: item.Image,
        }));
        setHighlights(formattedData);
      } catch (error) {
        console.error("Error fetching key highlights:", error);
      }
    };

    fetchHighlights();
  }, []);

  const handleTogglePause = () => {
    setIsPaused((prevState) => !prevState);
  };

  return (
    <div className="w-full h-full md:py-30">
      <GradientText>
        <h1 className="text-4xl md:text-6xl md:mt-8 mt-0">KEY HIGHLIGHTS</h1>
      </GradientText>
      <div
        className="event-cards flex"
        //onMouseEnter={handleTogglePause}
        //onMouseLeave={handleTogglePause}
      >
        <Marquee
          className={`flex gap-6 event-cards marquee ${
            isPaused ? "paused" : ""
          }`}
          pauseOnHover={false}
        >
          {highlights.map((card, index) => (
            <div key={card.src} className="flex-shrink-0 p-8">
              <Card card={card} index={index} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
