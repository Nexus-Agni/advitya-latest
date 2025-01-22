import { Link, useNavigate } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import GradientText from "../components/ui/GradientText";

export default function Mppride() {
  const navigate = useNavigate();

  const cards = [
    {
      name: "Mr. Kapil Parmar",
      designation: "Paralympic Medallist",
      src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Tech.jpg",
    },
    {
      name: " Mrs. Bhuri Bai",
      designation: "Padma Shri (Art)",
      src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Non-Tech.jpg",
    },
    {
      name: "Mr. Purushottam Dadeech",
      designation: "Padma Shri (Dance)",
      src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
    },
    {
        name: "Mr. Satendra Lohiya",
        designation: "Padma Shri (Sports)",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },   
       {
        name: "Mr. Banwari Lal ",
        designation: "Padma Shri (Environment)",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },  
        {
        name: "Mrs. Durgabai Vyam",
        designation: "Padma Shri (Art)",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },
      {
        name: "Mr. Bhagwatilal Rajpurohit",
        designation: "Padma Shri (Literature)",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },
      {
        name: " Mr. Kaluram Bamaniya",
        designation: "Padma Shri (Art)",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },
      {
        name: " Shri Bhajju Shyam",
        designation: "Padma Shri (Literature)",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },
      {
        name: "Dr. Munishwar Dawar",
        designation: "Padma Shri (Medicine)",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },
      {
        name: "Master Avinish Tiwari",
        designation: "P.M Rashtriya Bal Puraskar",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },
      {
        name: "Ms. Rubina Francis",
        designation: "Paralympic Medallist",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },
      {
        name: "Mr. Aishwarya Singh",
        designation: "Arjuna Awardee (Shooting)",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },
      {
        name: "Dr. Kapil Tiwari",
        designation: "Padma Shri (Education)",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },
      {
        name: "Ms. Varsha Varman",
        designation: "Asian Games Medallist",
        src: "https://res.cloudinary.com/dkjhkep0m/image/upload/v1733300780/Pro-Show.jpg",
      },
  ];

  return (
    <>
      <div className="bg-zinc-950 h-full w-full">
        <div className="flex items-center justify-start p-4">
          <button
            onClick={() => navigate("/", { state: { from: "ClubEvents" } })}
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
        <div className="my-2">
          <GradientText
            animationSpeed={5}
            showBorder={false}
            className="md:text-8xl text-5xl"
          >
            MP's Pride
          </GradientText>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5 max-w-full mx-auto md:px-8 w-full">
          {cards.map((card, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border-4 hover:border-purple-600 transition-all ease-in-out duration-300 flex flex-col items-center">
                <div className="w-full">
                  <img
                    src={card.src}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={card.name}
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-neutral-700 dark:text-white">
                    {card.name}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-300">
                    {card.designation}
                  </p>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  );
}
