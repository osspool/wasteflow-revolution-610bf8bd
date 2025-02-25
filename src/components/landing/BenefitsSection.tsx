
import React from "react";
import { CheckCircle2 } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      title: "NJDEP Compliance Automation",
      description: "No more manual paperwork! We specialize in annual reports like CPCN and A901 - no tricks, no gimmicks!"
    },
    {
      title: "Seamless Invoicing & Payments",
      description: "Get paid directly from invoicing - fast! Streamline your entire payment process in one place."
    },
    {
      title: "One Integrated Platform",
      description: "Eliminate extra tools, inefficiencies, and unnecessary subscriptions. Everything you need in one solution."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        Why WasteSync?
      </h2>
      <div className="space-y-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4 bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
            <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
