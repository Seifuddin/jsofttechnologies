import ServicesSection from "../components/Services";
import TechnologyCTA from "../components/TechCTA";
import PhotographyLuxurySwiper from "../components/Gallery";

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden mt-0 pt-10 md:pt-20">
        <TechnologyCTA />
        <ServicesSection />
        <PhotographyLuxurySwiper />
    </div>
  );
}