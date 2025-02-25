
import React from "react";
import { Button } from "@/components/ui/button";

export const ProblemSolutionSection = () => {
  return (
    <div className="mt-32 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        Waste Management Made Simple
      </h2>
      
      <div className="space-y-16">
        {/* Problems Section */}
        <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-6 text-white">The Problems</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex-shrink-0 flex items-center justify-center mr-3 mt-1">✕</span>
              <p className="text-lg text-gray-300">Struggling with NJDEP compliance?</p>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex-shrink-0 flex items-center justify-center mr-3 mt-1">✕</span>
              <p className="text-lg text-gray-300">Invoicing and payments taking too long?</p>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex-shrink-0 flex items-center justify-center mr-3 mt-1">✕</span>
              <p className="text-lg text-gray-300">Juggling multiple platforms to manage your business?</p>
            </li>
          </ul>
        </div>

        {/* Solution Section */}
        <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">WasteSync is here to change the traditional way</h3>
            <h4 className="text-xl font-semibold text-emerald-400">The Solution!</h4>
          </div>
          
          <div className="mb-8">
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex-shrink-0 flex items-center justify-center mr-3 mt-1">✓</span>
              <p className="text-lg text-gray-300">
                WasteSync automates compliance, integrates invoicing, and speeds up payments - all in one place.
              </p>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-5 rounded-lg shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1"
          >
            See how it works - Try a free demo!
          </Button>
        </div>
      </div>
    </div>
  );
};
