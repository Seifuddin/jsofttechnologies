import Image from "next/image";
import ServicesSection from "./components/Services";
import Hero from "./components/Hero";
import CTASection from "./components/CTA";
import WhyChooseUs from "./components/Why";
import FAQ from "./components/Faq";
import Call from "./components/Emergency";
import SystemStatus from "./components/SystemStatus";
import CreativeShowcase from "./components/Media";
import PhotographyLuxuryGallery from "./components/Gallery";
import GraphicDesignServices from "./components/Graphics";
import NetworkingServices from "./components/Networking";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main className="">
        <Hero />
        <NetworkingServices />
        <SystemStatus />
        <ServicesSection />
        <CreativeShowcase />
        <GraphicDesignServices />
        <CTASection />
        <WhyChooseUs />
        <Call />
        <FAQ />
      </main>
    </div>
  );
}
