
import React from "react";
import { DollarSign, Infinity, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PricingSection = () => {
  const features = [
    {
      icon: DollarSign,
      text: "$249 per month",
      description: "Fixed monthly subscription"
    },
    {
      icon: ShieldCheck,
      text: "2% fee on invoices processed",
      description: "Simple, transparent pricing"
    },
    {
      icon: Infinity,
      text: "No hidden fees - Ever!",
      description: "What you see is what you get"
    },
    {
      icon: Clock,
      text: "Cancel at any time",
      description: "No long-term contracts"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        Simple and Transparent Pricing
      </h2>
      
      <div className="relative">
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500">
          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative p-6 rounded-xl bg-slate-800/50 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg p-2 shadow-lg shadow-emerald-500/20">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-gray-200">{feature.text}</span>
                  </div>
                  <p className="text-sm text-gray-400 pl-12">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              className="relative group bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-10 py-6 text-lg h-auto transition-all duration-300 rounded-full shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
            >
              <span className="relative z-10">Try a free demo today!</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-green-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>
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
