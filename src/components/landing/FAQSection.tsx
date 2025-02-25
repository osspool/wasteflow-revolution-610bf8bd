
import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What makes WasteSync different?",
      answer: "WasteSync is built specifically for New Jersey waste management companies. We combine deep industry expertise with cutting-edge technology to automate NJDEP compliance, streamline operations, and boost efficiency. Our platform is designed by waste management experts who understand your unique challenges."
    },
    {
      question: "What does onboarding look like?",
      answer: "Our onboarding process is straightforward and personalized. We provide comprehensive training, dedicated support, and step-by-step guidance to ensure your team is up and running quickly. We'll help you import your existing data, set up your workflows, and make sure you're getting the most out of WasteSync."
    },
    {
      question: "What integrations do you provide?",
      answer: "WasteSync integrates seamlessly with popular accounting software like QuickBooks, Xero, and NetSuite. We also support integration with GPS tracking systems, scale house software, and other waste industry tools to create a unified operational platform."
    },
    {
      question: "What types of operators do you serve?",
      answer: "We serve all types of waste management operators in New Jersey, including commercial haulers, residential services, roll-off providers, portable toilet rentals, and more. Our platform is flexible enough to handle various operational models while ensuring compliance with NJ-specific regulations."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        Frequently Asked Questions
      </h2>

      <div className="relative">
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="group border-b border-emerald-500/20 last:border-0 px-2"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-medium hover:text-emerald-400 transition-colors py-4 [&[data-state=open]]:text-emerald-400">
                  <span className="mr-8">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-6 pr-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Background effects */}
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-[3rem] -z-10 blur-2xl opacity-20 animate-pulse"></div>
        
        {/* Floating orbs */}
        <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};
