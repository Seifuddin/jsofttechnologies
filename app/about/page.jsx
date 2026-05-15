import AboutUs from "../components/About";
import AboutHero from "../components/HeroAbout";
import MissionVisionMotto from "../components/Mission";
import ProcessSection from "../components/Process";
import TeamSection from "../components/Team";
import CompanyStory from "../components/Timeline";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden mt-0 pt-10 md:pt-16 ">
        <AboutHero />
        <CompanyStory />
        <MissionVisionMotto />
        <ProcessSection />
        <TeamSection />
    </div>
  );
}