// import { useState, useEffect } from 'react';
// import '../components/highlights.css';
// import Marquee from 'react-fast-marquee';
// import GradientText from './ui/GradientText';
// import { Card } from './ui/apple-cards-carousal';
// import { dbService } from '../appwrite/db';

// export function KeyHighlights() {
//   const [isPaused, setIsPaused] = useState(false);
//   const [highlights, setHighlights] = useState([]);

//   useEffect(() => {
//     const fetchHighlights = async () => {
//       try {
//         const data = await dbService.getKeyHighlights();

//         setHighlights(data);
//       } catch (error) {
//         console.error("Error fetching key highlights:", error);
//       }
//     };

//     fetchHighlights();
//   }, []);

//   const handleTogglePause = () => {
//     setIsPaused((prevState) => !prevState);
//   };

//   return (
//     <div className="w-full h-full md:py-30">
//       <GradientText>
//         <h1 className="text-4xl md:text-6xl md:mt-8 mt-0">KEY HIGHLIGHTS</h1>
//       </GradientText>
//       <div
//         className="event-cards flex"
//         //onMouseEnter={handleTogglePause}
//         //onMouseLeave={handleTogglePause}
//       >
//           <Marquee
//     className={`flex gap-6 event-cards marquee ${isPaused ? 'paused' : ''}`}
//     pauseOnHover={false}
//   >
//    {data.map((card, index) => (
//       <div key={card.src} className="flex-shrink-0 p-8">
//         <Card card={card} index={index} />
//       </div>
//     ))}
//   </Marquee>
//       </div>
//     </div>
//   );
// }

// const data = [
//   {
//     category: "Celebrations with Music",
//     title: "Experience the best musical performances.",
//     src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Pro-show_gyfl2g.jpg",
//   },
//   {
//     category: "SportsFest",
//     title: "Join the excitement of our sports events.",
//     src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Sports_dhaqdh.jpg",
//   },
//   {
//     category: "Technology and Innovation",
//     title: "Discover the latest in technology and innovation.",
//     src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Technical_ceuyuy.jpg",
//   },
//   {
//     category: "Culture & Arts",
//     title: "Celebrate the richness of culture and arts.",
//     src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Dance_cukv8g.jpg",
//   },
//   // {
//   //   category: "Workshops",
//   //   title: "Participate in engaging and informative workshops.",
//   //   src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Workshop_example.jpg",
//   // },
//   // {
//   //   category: "Guest Lectures",
//   //   title: "Learn from industry experts in our guest lectures.",
//   //   src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Guest_Lecture_example.jpg",
//   // },
//   // {
//   //   category: "Competitions",
//   //   title: "Showcase your skills in various competitions.",
//   //   src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Competition_example.jpg",
//   // },
//   // {
//   //   category: "Networking",
//   //   title: "Connect with peers and professionals.",
//   //   src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Networking_example.jpg",
//   // },
// ];

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
