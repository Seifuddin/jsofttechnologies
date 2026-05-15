import ServicesSection from "../components/Services";
import TechnologyCTA from "../components/TechCTA";
import PhotographyLuxurySwiper from "../components/Gallery";
import AboutUs from "../components/About";

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden mt-0 pt-10 md:pt-16">
        <AboutUs />
        <ServicesSection />
        <PhotographyLuxurySwiper />
    </div>
  );
}