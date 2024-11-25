import React from "react";
import { CheckCircle2 } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      title: "Streamlined Compliance",
      description: "Automatically track and manage regulatory requirements, reducing compliance risks by up to 75%"
    },
    {
      title: "Increased Efficiency",
      description: "Reduce manual data entry by 90% with automated document processing and workflow management"
    },
    {
      title: "Cost Savings",
      description: "Cut operational costs by up to 30% through optimized route planning and resource allocation"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        Key Benefits
      </h2>
      <div className="space-y-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4 bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
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