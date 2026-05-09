import AboutUs from "../components/About";
import TeamSection from "../components/Team";
import TechnologyCTA from "../components/TechCTA";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden pt-20 ">
        <AboutUs />
        <TeamSection />
    </div>
  );
}