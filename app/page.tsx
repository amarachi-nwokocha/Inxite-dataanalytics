
import HeroWithFloatingVisuals from "./components/HeroSection";
import AboutSection from "./components/AboutUs";
import WhatWeDoSection from "./components/WhatWeDo";
import MeetTheTeam from "./components/Team";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactSection from "./components/Contact";
import MissionVisionSection from "./components/Mission";
import HowWeWorkSection from "./components/HowWeWork";
import ServicesShowcase from "./components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroWithFloatingVisuals />
      < AboutSection />
      <MissionVisionSection />
      <WhatWeDoSection />
      {/* <HowWeWorkSection /> */}
      <ServicesShowcase />
      <MeetTheTeam />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}
