import Image from "next/image";
import ServicesSection from "./components/Services";
import Hero from "./components/Hero";
import CTASection from "./components/CTA";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/Why";
import FAQ from "./components/Faq";
import EmergencyCall from "./components/Emergency";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main className="">
        <Hero />
        <ServicesSection />
        <CTASection />
        <WhyChooseUs />
        <EmergencyCall />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
