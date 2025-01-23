import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import GradientText from "../components/ui/GradientText";
import { FocusCards } from "../components/ui/focus-cards";
import { MapPin, Calendar, IndianRupee } from "lucide-react";
import { CustomScrollbar } from "../components/ui/custom-scrollbar";
import { dbService } from "../appwrite/db";

export function NonTechEvents() {
  const [active, setActive] = useState(null);
  const [nonTechnicalEvents, setNonTechnicalEvents] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const id = useId();
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNonTechEvents() {
      try {
        const events = await dbService.getNonTechEvents();
        const transformedEvents = events
          .map((event) => ({
            title: event.EventName,
            clubName: event.ClubName,
            src: event.EventImage,
            ctaText: "Register",
            ctaLinkInternal: event.InternalRegistration,
            ctaLinkExternal: event.ExternalRegistration,
            venue: event.Venue,
            date: new Date(event.EventDate).toLocaleDateString(),
            time: new Date(
              `1970-01-01T${event.EventTime.slice(
                0,
                2
              )}:${event.EventTime.slice(2, 4)}:00`
            ).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }),
            entryFees: event.EntryFee,
            rank: event.Rank,
            eventDescription: () => <p>{event.EventDescription}</p>,
          }))
        setNonTechnicalEvents(transformedEvents);
      } catch (error) {
        console.error("Error fetching non-technical events:", error);
      }
    }

    fetchNonTechEvents();
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-start p-4">
        <button
          onClick={() =>
            navigate("/events", { state: { from: "NonTechEvents" } })
          }
          className="text-white bg-purple-600 py-2 px-4 rounded-lg hover:scale-105 ease-in-out duration-300 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>
      <GradientText
        animationSpeed={10}
        showBorder={false}
        className="text-4xl md:text-6xl py-10"
      >
        NON TECHNICAL EVENTS
      </GradientText>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4 md:p-0">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            ></motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl"
            >
              <CustomScrollbar className="overflow-scroll overflow-x-hidden">
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    width={300}
                    height={300}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-60 md:h-96 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-medium text-neutral-700 dark:text-neutral-200 text-lg"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`clubName-${active.clubName}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-lg"
                      >
                        {active.clubName}
                      </motion.p>
                      <motion.p
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-600 dark:text-neutral-400 text-sm"
                      >
                        <div className="flex flex-wrap gap-4 my-2">
                          <div className="flex">
                            <MapPin className="w-4 h-4" /> {active.venue}
                          </div>
                          <div className="flex">
                            <Calendar className="w-4 h-4 " /> {active.date},{" "}
                            {active.time}
                          </div>
                          <div className="flex">
                            <IndianRupee className="w-4 h-4" />
                            {active.entryFees}
                          </div>
                        </div>
                      </motion.p>
                    </div>

                    <div className="relative">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="px-4 py-3 text-sm rounded-full font-bold bg-purple-500 hover:bg-purple-800 ease-in-out duration-300 text-white mt-4 md:mt-0"
                      >
                        {active.ctaText}
                      </button>
                      {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-purple-500   rounded-md shadow-lg z-20">
                          <a
                            href={active.ctaLinkInternal}
                            target="_blank"
                            className="block px-4 py-2 text-sm text-white
                            hover:bg-purple-800"
                          >
                            Internal Registration
                          </a>
                          <a
                            href={active.ctaLinkExternal}
                            target="_blank"
                            className="block px-4 py-2 text-sm 
                            text-white
                            hover:bg-purple-800"
                          >
                            External Registration
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="pt-4 relative px-4">
                    <CustomScrollbar className="text-neutral-600 text-sm md:text-base lg:text-lg h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400">
                      {typeof active.eventDescription === "function" ? (
                        <div className="pb-4">{active.eventDescription()}</div>
                      ) : (
                        active.eventDescription
                      )}
                      <div className="pb-4"></div>
                    </CustomScrollbar>
                  </div>
                </div>
              </CustomScrollbar>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <FocusCards cards={nonTechnicalEvents} setActive={setActive} />
    </div>
  );
}
