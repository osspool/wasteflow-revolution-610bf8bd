
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PricingSection = () => {
  const features = [
    "$249 per month",
    "2% fee on invoices processed",
    "No hidden fees - Ever!",
    "Cancel at any time"
  ];

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        Simple and Transparent Pricing
      </h2>
      
      <div className="relative">
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
          {/* Features list */}
          <div className="space-y-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-emerald-500/20 rounded-full p-1">
                  <Check className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="text-lg text-gray-200">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-6 text-lg h-auto transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
            >
              Try a free demo today!
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-2 -bottom-2 -left-2 -right-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl -z-10 blur-xl opacity-20"></div>
        </div>
      </div>
    </div>
  );
};
