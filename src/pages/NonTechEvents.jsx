import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import GradientText from "../components/ui/GradientText";
import { nonTechnicalEvents } from "../components/Events";
import { FocusCards } from "../components/ui/focus-cards";
import { MapPin, Calendar, DollarSign } from "lucide-react";
import { CustomScrollbar } from "../components/ui/custom-scrollbar";
import RevealingSoon from "../components/ui/RevealingSoon";

export function NonTechEvents() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);
  const navigate = useNavigate();

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
      // <div className="h-full w-full">
      //   <div className="flex items-center justify-start p-4">
      //     <button
      //       onClick={() =>
      //         navigate("/events", { state: { from: "NonTechEvents" } })
      //       }
      //       className="text-white bg-purple-600 py-2 px-4 rounded-lg hover:scale-105 ease-in-out duration-300 flex items-center"
      //     >
      //       <svg
      //         xmlns="http://www.w3.org/2000/svg"
      //         fill="none"
      //         viewBox="0 0 24 24"
      //         stroke="currentColor"
      //         className="h-6 w-6 mr-2"
      //       >
      //         <path
      //           strokeLinecap="round"
      //           strokeLinejoin="round"
      //           strokeWidth="2"
      //           d="M15 19l-7-7 7-7"
      //         />
      //       </svg>
      //       Back
      //     </button>
      //   </div>
      //   <GradientText
      //     animationSpeed={10}
      //     showBorder={false}
      //     className="text-4xl md:text-6xl py-10"
      //   >
      //     NON TECHNICAL EVENTS
      //   </GradientText>
      //   <AnimatePresence>
      //     {active && typeof active === "object" && (
      //       <motion.div
      //         initial={{ opacity: 0 }}
      //         animate={{ opacity: 1 }}
      //         exit={{ opacity: 0 }}
      //         className="fixed inset-0 bg-black/20 h-full w-full z-10"
      //       />
      //     )}
      //   </AnimatePresence>
      //   <AnimatePresence>
      //     {active && typeof active === "object" ? (
      //       <div className="fixed inset-0 grid place-items-center z-[100] p-4 md:p-0">
      //         <motion.button
      //           key={`button-${active.title}-${id}`}
      //           layout
      //           initial={{
      //             opacity: 0,
      //           }}
      //           animate={{
      //             opacity: 1,
      //           }}
      //           exit={{
      //             opacity: 0,
      //             transition: {
      //               duration: 0.05,
      //             },
      //           }}
      //           className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
      //           onClick={() => setActive(null)}
      //         ></motion.button>
      //         <motion.div
      //           layoutId={`card-${active.title}-${id}`}
      //           ref={ref}
      //           className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl"
      //         >
      //           <CustomScrollbar className="overflow-scroll overflow-x-hidden">
      //             <motion.div layoutId={`image-${active.title}-${id}`}>
      //               <img
      //                 width={300}
      //                 height={300}
      //                 src={active.src}
      //                 alt={active.title}
      //                 className="w-full h-60 md:h-96 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
      //               />
      //             </motion.div>

      //             <div>
      //               <div className="flex flex-col md:flex-row justify-between items-start p-4">
      //                 <div className="">
      //                   <motion.h3
      //                     layoutId={`title-${active.title}-${id}`}
      //                     className="font-medium text-neutral-700 dark:text-neutral-200 text-lg"
      //                   >
      //                     {active.title}
      //                   </motion.h3>
      //                   <motion.p
      //                     layoutId={`clubName-${active.clubName}-${id}`}
      //                     className="text-neutral-600 dark:text-neutral-400 text-lg"
      //                   >
      //                     {active.clubName}
      //                   </motion.p>
      //                   <motion.p
      //                     layout
      //                     initial={{ opacity: 0 }}
      //                     animate={{ opacity: 1 }}
      //                     exit={{ opacity: 0 }}
      //                     className="text-neutral-600 dark:text-neutral-400 text-sm"
      //                   >
      //                     {/* <div className="flex flex-wrap">
      //                       <MapPin className="w-4 h-4 mr-1" /> {active.venue} |{" "}
      //                       <Calendar className="w-4 h-4 mr-1" /> {active.date} |{" "}
      //                       <DollarSign className="w-4 h-4 mr-1" /> {active.entryFees}
      //                     </div> */}
      //                   </motion.p>
      //                 </div>

      //                 <motion.a
      //                   layout
      //                   initial={{ opacity: 0 }}
      //                   animate={{ opacity: 1 }}
      //                   exit={{ opacity: 0 }}
      //                   href={active.ctaLink}
      //                   target="_blank"
      //                   className="px-4 py-3 text-sm rounded-full font-bold bg-purple-500 hover:bg-purple-800 ease-in-out duration-300 text-white mt-4 md:mt-0"
      //                 >
      //                   {active.ctaText}
      //                 </motion.a>
      //               </div>
      //               <div className="pt-4 relative px-4">
      //                 <CustomScrollbar className="text-neutral-600 text-sm md:text-base lg:text-lg h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400">
      //                   {typeof active.eventDescription === "function" ? (
      //                     <div>{active.eventDescription()}</div>
      //                   ) : (
      //                     active.eventDescription
      //                   )}
      //                 </CustomScrollbar>
      //               </div>
      //             </div>
      //           </CustomScrollbar>
      //         </motion.div>
      //       </div>
      //     ) : null}
      //   </AnimatePresence>
      //   <FocusCards cards={nonTechnicalEvents} setActive={setActive} />
      // </div>

      <div className="w-full h-screen grid items-start content-center justify-items-center">
        <RevealingSoon />
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
      
    </div>
  );
}