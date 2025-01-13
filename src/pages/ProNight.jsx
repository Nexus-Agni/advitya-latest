import { useNavigate } from "react-router-dom";
import GradientText from "../components/ui/GradientText";
import RevealingSoon from "../components/ui/RevealingSoon";
function ProNight() {
  const navigate = useNavigate()
  return (
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

export default ProNight;
