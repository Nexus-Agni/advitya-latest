import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import { Leadership } from "../components/Leadership";
import { AdvityaDescription } from "../components/AdVITyaDescription";
import { Navbar } from "../components/Navbar";
import Highlights from "../components/Highlights";
import Preloader from "../components/ui/apple-preloader";
import Footer from "../components/Footer";
import ScrollBasedVelocityDemo from "../components/Demo-of-scroll-based-velocity";
import ContactUsSection from "../components/ContactUsSection";
import Prize from "../components/prize";
import { Video } from "../components/Video";
import { AppleCardsCarouselDemo } from "../components/AppleCardsCarousel";
import { GradualSpacingDemo } from "../components/GradualSpacingDemo";

function Home() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check if the navigation is coming from ClubEvents
    if (location.state?.from === "ClubEvents") {
      setLoading(false);
    } else {
      // Simulate a loading delay
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }
  }, [location]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="bg-black w-full">
        <Navbar />
        <Hero />
        <AdvityaDescription classname="bg-black" />
        <Prize />
        <br />
        <Video />
        <br />
        <AppleCardsCarouselDemo />
        {/* <ScrollBasedVelocityDemo /> */}
        <Leadership />
        <GradualSpacingDemo />
        <Highlights />
        {/* <ClubEvents /> */}
        <ContactUsSection id="contact" />
        <Footer />
      </div>
    </div>
  );
}

export default Home;  