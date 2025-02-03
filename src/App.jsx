import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ClubEvents } from "./components/ClubEvents";
import { TechEvents } from "./pages/TechEvents";
import { NonTechEvents } from "./pages/NonTechEvents";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TeamMembersPage from "./pages/team-members-page";
import ProNight from "./pages/ProNight";
import MpPride from "./pages/mppride";
import ApplePreloader from "./components/ui/apple-preloader";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll("img");
      const totalImages = images.length;
      let loadedImages = 0;

      images.forEach((img) => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener("load", () => {
            loadedImages++;
            if (loadedImages === totalImages) {
              setImagesLoaded(true);
            }
          });
        }
      });

      if (loadedImages === totalImages) {
        setImagesLoaded(true);
      }
    };

    checkImagesLoaded();
  }, []);

  if (!imagesLoaded) {
    return <ApplePreloader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<ClubEvents />} />
        <Route path="/technical-events" element={<TechEvents />} />
        <Route path="/non-technical-events" element={<NonTechEvents />} />
        <Route path="/team" element={<TeamMembersPage />} />
        <Route path="/pro-night" element={<ProNight />} />
        <Route path="/mp-pride" element={<MpPride />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;