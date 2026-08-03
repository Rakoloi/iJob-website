import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TechnologySection from "@/components/TechnologySection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import DeveloperSection from "@/components/DeveloperSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6fbf7] text-slate-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TechnologySection />
      <DownloadSection />
      <DeveloperSection />
      <Footer />
    </main>
  );
}
