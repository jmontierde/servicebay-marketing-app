import Image from "next/image";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import FeaturesSection from "./components/FeaturesSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
