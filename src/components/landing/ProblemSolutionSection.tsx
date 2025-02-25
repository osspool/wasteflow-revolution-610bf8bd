
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, XCircle, CheckCircle2, Zap } from "lucide-react";

export const ProblemSolutionSection = () => {
  return (
    <div className="mt-32 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="bg-purple-600/10 text-purple-400 text-sm font-medium px-4 py-2 rounded-full">
          Why WasteSync?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
          Transform Your Waste Management Operations
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Experience the evolution of waste management with our all-in-one platform designed for modern businesses.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        {/* Problems Card */}
        <div className="bg-gradient-to-br from-red-500/10 to-transparent p-1 rounded-2xl">
          <div className="bg-slate-800/90 p-8 rounded-2xl h-full backdrop-blur-sm border border-red-500/10">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="h-6 w-6 text-red-400" />
              <h3 className="text-2xl font-semibold text-white">Current Challenges</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-red-500/10 text-red-400">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg text-gray-200 font-medium">Complex NJDEP Compliance</p>
                  <p className="text-gray-400 mt-1">Drowning in paperwork and struggling to keep up with changing regulations?</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-red-500/10 text-red-400">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg text-gray-200 font-medium">Slow Payment Cycles</p>
                  <p className="text-gray-400 mt-1">Tired of delayed payments and manual invoicing processes?</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-red-500/10 text-red-400">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg text-gray-200 font-medium">Platform Overload</p>
                  <p className="text-gray-400 mt-1">Using multiple systems that don't talk to each other?</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Solution Card */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-transparent p-1 rounded-2xl">
          <div className="bg-slate-800/90 p-8 rounded-2xl h-full backdrop-blur-sm border border-emerald-500/10">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="h-6 w-6 text-emerald-400" />
              <h3 className="text-2xl font-semibold text-white">The WasteSync Solution</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg text-gray-200 font-medium">Automated Compliance</p>
                  <p className="text-gray-400 mt-1">Stay compliant effortlessly with automated NJDEP reporting and documentation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg text-gray-200 font-medium">Streamlined Payments</p>
                  <p className="text-gray-400 mt-1">Get paid faster with automated invoicing and integrated payment processing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg text-gray-200 font-medium">Unified Platform</p>
                  <p className="text-gray-400 mt-1">Manage your entire operation from a single, intuitive dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Demo Button */}
      <div className="flex justify-center">
        <Button 
          size="lg"
          className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1 group"
        >
          Start Your Free Demo
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};
