
import HeroWithFloatingVisuals from "./components/HeroSection";
import AboutSection from "./components/AboutUs";
import WhatWeDoSection from "./components/WhatWeDo";
import MeetTheTeam from "./components/Team";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
   <div>
    <Navbar />
    <HeroWithFloatingVisuals />
    < AboutSection />
    <WhatWeDoSection />
    <MeetTheTeam />
    <ContactSection />
    <Footer />
   </div>
  );
}
