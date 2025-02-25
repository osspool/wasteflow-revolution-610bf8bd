
import { useState } from "react";
import { FloatingParticles } from "@/components/landing/FloatingParticles";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSolutionSection } from "@/components/landing/ProblemSolutionSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { DemoCtaSection } from "@/components/landing/DemoCtaSection";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <FloatingParticles />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <DemoCtaSection />
      </div>
    </div>
  );
};

export default Index;
