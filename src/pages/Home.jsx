import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import { Leadership } from "../components/Leadership";
import { AdvityaDescription } from "../components/AdVITyaDescription";
import { Navbar } from "../components/Navbar";
import Preloader from "../components/ui/apple-preloader";
import Footer from "../components/Footer";
import ContactUsSection from "../components/ContactUsSection";
import { Video } from "../components/Video";
import { KeyHighlights } from "../components/KeyHighLights";
import { Sponsors } from "../components/Sponsors";
import Popup from "../components/Popup";

function Home() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(true); // Add state for popup visibility
  const location = useLocation();

  useEffect(() => {
    // Check if the navigation is coming from specific pages
    if (
      location.state?.from === "ClubEvents" ||
      location.state?.from === "TechEvents" ||
      location.state?.from === "NonTechEvents" ||
      location.state?.from === "Team"
    ) {
      setLoading(false);
    } else {
      // Simulate a loading delay
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }
  }, [location]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-black w-full">
      <Navbar />
      <Hero />
      <AdvityaDescription classname="bg-black" />
      <Sponsors />
      <br />
      <Video className="hidden md:block" />
      <br />
      <KeyHighlights />
      <Leadership />
      <ContactUsSection />
      <Footer />
      <Popup show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}

export default Home;