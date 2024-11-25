import React from "react";
import { ArrowRight } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <div className="max-w-4xl mx-auto mt-32 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="relative">
          <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
            <p className="text-gray-400">Create your account and configure your company profile</p>
          </div>
          <ArrowRight className="hidden md:block absolute top-1/2 -right-4 text-emerald-400 transform -translate-y-1/2" />
        </div>
        <div className="relative">
          <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Import Data</h3>
            <p className="text-gray-400">Seamlessly migrate your existing records and documents</p>
          </div>
          <ArrowRight className="hidden md:block absolute top-1/2 -right-4 text-emerald-400 transform -translate-y-1/2" />
        </div>
        <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
          <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Go Live</h3>
          <p className="text-gray-400">Start managing your operations more efficiently</p>
        </div>
      </div>
    </div>
  );
};