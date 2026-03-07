import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AISection } from "@/components/AISection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { USPSection } from "@/components/USPSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { ImpactSection } from "@/components/ImpactSection";
import { TechSection } from "@/components/TechSection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <div id="ai">
        <AISection />
      </div>
      <ComparisonSection />
      <USPSection />
      <div id="usecases">
        <UseCasesSection />
      </div>
      <div id="impact">
        <ImpactSection />
      </div>
      <TechSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Index;
