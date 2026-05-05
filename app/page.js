import Image from "next/image";
import ServicesSection from "./components/Services";
import Hero from "./components/Hero";
import CTASection from "./components/CTA";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/Why";

export default function Home() {
  return (
    <div className="overflow-">
      <main className="">
        <Hero />
        <ServicesSection />
        <CTASection />
        <WhyChooseUs />
        <Footer />
      </main>
    </div>
  );
}
