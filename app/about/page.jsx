import AboutUs from "../components/About";
import AboutHero from "../components/HeroAbout";
import MissionVisionMotto from "../components/Mission";
import ProcessSection from "../components/Process";
import TeamSection from "../components/Team";
import Testimonials from "../components/Testimonials";
import CompanyStory from "../components/Timeline";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden mt-0 pt-10 md:pt-16 ">
        <AboutHero />
        <CompanyStory />
        <MissionVisionMotto />
        <Testimonials />
        <ProcessSection />
        <TeamSection />
    </div>
  );
}