import React, { useState } from "react";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Card = React.memo(
  ({ card, index, hovered, setHovered, setActive }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => setActive(card)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-96 md:h-[23rem] w-full transition-all duration-300 ease-out cursor-pointer",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        hovered === index && "border-4 border-purple-500"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-fit absolute inset-0 w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex flex-col">
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
          <div className="text-lg  font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.clubName}
          </div>
          <div>
            <div className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-purple-200">
              View more
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards, setActive }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 max-w-5xl mx-auto px-4 md:px-8 w-full">
      {cards.map((card, index) => (
        <Link to={card.link} key={card.title} className="block">
          <Card
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            setActive={setActive}
          />
        </Link>
      ))}
    </div>
  );
}
