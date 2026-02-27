import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import CaseStudies from "@/components/sections/CaseStudies";
import TechStack from "@/components/sections/TechStack";
import AIAdvantage from "@/components/sections/AIAdvantage";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <Process />
      <CaseStudies />
      <TechStack />
      <AIAdvantage />
      <Pricing />
      <Testimonials />
      <CTASection />
    </main>
  );
}
