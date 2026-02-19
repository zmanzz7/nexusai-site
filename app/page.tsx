import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { AudienceSection } from './components/AudienceSection';
import { PainPointsSection } from './components/PainPointsSection';
import { SolutionSection } from './components/SolutionSection';
import { FounderSection } from './components/FounderSection';
import { ResultsSection } from './components/ResultsSection';
import { ProcessSection } from './components/ProcessSection';
import { ROICalculator } from './components/ROICalculator';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustStrip />
      <AudienceSection />
      <PainPointsSection />
      <SolutionSection />
      <FounderSection />
      <ResultsSection />
      <ProcessSection />
      <ROICalculator />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
