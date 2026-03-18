import Navbar from "./components/Navbar";
import ExecutiveSummary from "./components/ExecutiveSummary";
import VisibilityGap from "./components/VisibilityGap";
import MarketOpportunity from "./components/MarketOpportunity";
import FunnelCalculator from "./components/FunnelCalculator";
import BrandStrategy from "./components/BrandStrategy";
import WhyJurisDigital from "./components/WhyJurisDigital";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ExecutiveSummary />
      <VisibilityGap />
      <MarketOpportunity />
      <FunnelCalculator />
      <BrandStrategy />
      <WhyJurisDigital />
      <CTASection />
    </main>
  );
}
