import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import GradientText from "../components/ui/GradientText";
import { FocusCards } from "../components/ui/focus-cards";
import { MapPin, Calendar, IndianRupee } from "lucide-react";
import { CustomScrollbar } from "../components/ui/custom-scrollbar";
import { dbService } from "../appwrite/db";
import Preloader from "../components/Preloader"; // Ensure correct import

export function NonTechEvents() {
  const [isLoading, setIsLoading] = useState(true);
  const [nonTechnicalEvents, setNonTechnicalEvents] = useState([]);
  const [active, setActive] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const id = useId();
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNonTechEvents() {
      try {
        const events = await dbService.getNonTechEvents();
        const transformedEvents = events.map((event) => ({
          title: event.EventName,
          clubName: event.ClubName,
          src: event.EventImage,
          ctaText: "Register",
          ctaLinkInternal: event.InternalRegistration,
          ctaLinkExternal: event.ExternalRegistration,
          venue: event.Venue,
          date: new Date(event.EventDate).toLocaleDateString(),
          time: new Date(
            `1970-01-01T${event.EventTime.slice(0, 2)}:${event.EventTime.slice(2, 4)}:00`
          ).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          entryFees: event.EntryFee,
          rank: event.Rank,
          eventDescription: () => <p>{event.EventDescription}</p>,
        }));
        setNonTechnicalEvents(transformedEvents);
      } catch (error) {
        console.error("Error fetching non-technical events:", error);
      }
    }

    async function fetchAllData() {
      await fetchNonTechEvents();
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Ensures Preloader is shown for at least 3 seconds
    }

    fetchAllData();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-start p-4">
        <button
          onClick={() => navigate("/events", { state: { from: "NonTechEvents" } })}
          className="text-white bg-purple-600 py-2 px-4 rounded-lg hover:scale-105 ease-in-out duration-300 flex items-center"
        >
          Back
        </button>
      </div>
      <GradientText className="text-4xl md:text-6xl py-10">NON TECHNICAL EVENTS</GradientText>
      <FocusCards cards={nonTechnicalEvents} setActive={setActive} />
    </div>
  );
}
