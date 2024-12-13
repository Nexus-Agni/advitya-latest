import { Carousel, Card } from "./ui/apple-cards-carousal";
import GradientText from "./ui/GradientText";


export function KeyHighlights() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full md:py-20">
      <GradientText>
        <h1 className="text-4xl md:text-6xl md:mt-8 mt-0">KEY HIGHLIGHTS</h1>
      </GradientText>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Celebrations with Music",
    title: "Experience the best musical performances.",
    src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Pro-show_gyfl2g.jpg",
  },
  {
    category: "SportsFest",
    title: "Join the excitement of our sports events.",
    src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Sports_dhaqdh.jpg",
  },
  {
    category: "Technology and Innovation",
    title: "Discover the latest in technology and innovation.",
    src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Technical_ceuyuy.jpg",
  },
  {
    category: "Culture & Arts",
    title: "Celebrate the richness of culture and arts.",
    src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Dance_cukv8g.jpg",
  },
  // {
  //   category: "Workshops",
  //   title: "Participate in engaging and informative workshops.",
  //   src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Workshop_example.jpg",
  // },
  // {
  //   category: "Guest Lectures",
  //   title: "Learn from industry experts in our guest lectures.",
  //   src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Guest_Lecture_example.jpg",
  // },
  // {
  //   category: "Competitions",
  //   title: "Showcase your skills in various competitions.",
  //   src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Competition_example.jpg",
  // },
  // {
  //   category: "Networking",
  //   title: "Connect with peers and professionals.",
  //   src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1734025186/Networking_example.jpg",
  // },
];
