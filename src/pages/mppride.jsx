import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardBody, CardContainer } from "../components/ui/3d-card";
import GradientText from "../components/ui/GradientText";
import Preloader from "../components/Preloader"; // Ensure correct import

export default function Mppride() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const cards = [
    {
      name: "Mr. Kapil Parmar",
      designation: "Paralympic Medallist",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a05a7e003cddb5e532/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Mrs. Bhuri Bai",
      designation: "Padma Shri (Art)",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a05a53003cb926bbd2/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Dr. Purushottam Dadheech",
      designation: "Padma Shri (Dance)",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a05a2d000d4884385d/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Mr. Satendra Lohiya",
      designation: "Padma Shri (Sports)",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a05a0300054efd5136/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Mr. Banwari Lal ",
      designation: "Padma Shri (Environment)",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a059d4003e5f830720/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Mrs. Durgabai Vyam",
      designation: "Padma Shri (Art)",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a059a2002460ed72e9/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Mr. Bhagwatilal Rajpurohit",
      designation: "Padma Shri (Literature)",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a05973003a4b150ee1/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Mr. Kaluram Bamaniya",
      designation: "Padma Shri (Art)",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a059430005124726f0/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Shri Bhajju Shyam",
      designation: "Padma Shri (Literature)",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a05912001f62636e55/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Dr. Munishwar Dawar",
      designation: "Padma Shri (Medicine)",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a058e6002f9979eb8e/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Master Avnish Tiwari",
      designation: "P.M Rashtriya Bal Puraskar",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a058b8000a03f0faf3/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Dr. Kapil Tiwari",
      designation: "Padma Shri (Education)",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a05880002f4fe5a23b/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Ms. Varsha Varman",
      designation: "Asian Games Medallist",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a0583f00285ce2f950/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      name: "Mr. Maaheen Jaiswal",
      designation: "Google Delegate",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a0557c003c575360a3/files/67a05abf001ab7d662aa/view?project=6756a8dc000c0d24754b&mode=admin",
    },
  ];

  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(
          cards.map((card) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = card.src;
              img.onload = resolve;
              img.onerror = resolve; 
            });
          })
        );
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    async function fetchAllData() {
      await preloadImages();
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); 
    }

    fetchAllData();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="bg-zinc-950 h-full w-full">
      <div className="flex items-center justify-start p-4">
        <button
          onClick={() => navigate("/", { state: { from: "MpPride" } })}
          className="text-white bg-purple-600 py-2 px-4 rounded-lg hover:scale-105 ease-in-out duration-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>
      <div className="my-2">
        <GradientText animationSpeed={5} showBorder={false} className="md:text-8xl text-5xl">
          MP Gaurav
        </GradientText>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5 max-w-full mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border-4 hover:border-purple-600 transition-all ease-in-out duration-300 flex flex-col items-center">
              <div className="w-full flex justify-center">
                <img src={card.src} height="1000" width="1000" className="h-61 w-60 object-cover rounded-xl group-hover/card:shadow-xl" alt={card.name} />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-neutral-700 dark:text-white">{card.name}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">{card.designation}</p>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
