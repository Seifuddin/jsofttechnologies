import AboutUs from "../components/About";
import TeamSection from "../components/Team";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden mt-0 pt-10 md:pt-20 ">
        <AboutUs />
        <TeamSection />
    </div>
  );
}