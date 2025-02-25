
import React from "react";
import { UserPlus, Cog, DollarSign } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <div className="max-w-4xl mx-auto mt-32 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        Start Streamlining Your Business Today
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="relative group">
          <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-emerald-500/10 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-800/70">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <UserPlus className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast, Hassle-Free Setup</h3>
            <p className="text-gray-400 leading-relaxed">
              Sign up and connect your business in minutes. Need help? Our team is here to guide you through every step.
            </p>
          </div>
          <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-emerald-500/10 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-800/70">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Cog className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automate & Simplify</h3>
            <p className="text-gray-400 leading-relaxed">
              Manage compliance, invoicing, and payments all in one place. Streamline your entire operation effortlessly.
            </p>
          </div>
          <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-emerald-500/10 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-800/70">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <DollarSign className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Get Paid Faster</h3>
            <p className="text-gray-400 leading-relaxed">
              No more chasing payments or paperwork delays. Automated invoicing means faster payments and better cash flow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
