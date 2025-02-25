
import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        Streaming Waste Management with one Powerful Platform
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Automate compliance, simplify invoicing, and get paid fast- seamlessly
      </p>

      <div className="mb-12">
        <Button 
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1"
        >
          Try a Free Demo
        </Button>
      </div>
    </div>
  );
};
