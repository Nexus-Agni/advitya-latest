import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ClubEvents } from "./components/ClubEvents";
import { TechEvents } from "./pages/TechEvents";
import { NonTechEvents } from "./pages/NonTechEvents";
import { VirtualEvents } from "./pages/VirtualEvents";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TeamMembersPage from "./pages/team-members-page";
import ProNight from "./pages/ProNight";
import MpPride from "./pages/mppride";
import ApplePreloader from "./components/ui/apple-preloader";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
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
        <Route path="/virtual-events" element={<VirtualEvents />} />
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
