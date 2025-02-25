
import React from "react";
import { Rocket, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DemoCtaSection = () => {
  return (
    <div className="max-w-5xl mx-auto mt-32 mb-20">
      <div className="relative">
        {/* Main content container */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-[3rem] p-12 md:p-16 overflow-hidden border border-emerald-500/20">
          {/* Content wrapper */}
          <div className="relative z-20">
            {/* Header with rocket animation */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <Rocket className="w-8 h-8 text-emerald-400 animate-float" />
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
                Book your free Demo Today!
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-center text-gray-300 mb-8 max-w-2xl mx-auto">
              See WasteSync in action and discover how it can transform your business!
            </p>

            {/* Features container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span>No commitment required</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span>No credit card required</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="px-8 py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 font-semibold relative">
                  Limited Spots Available!
                </div>
              </div>
              
              <Button 
                className="group relative bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-6 text-lg h-auto rounded-full shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300"
              >
                <span>Try a Free Demo Now!</span>
                <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Gradient circles */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-green-500/20 rounded-full blur-3xl"></div>
            
            {/* Animated particles */}
            <div className="absolute top-12 left-12 w-3 h-3 bg-emerald-400/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-12 right-12 w-3 h-3 bg-green-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-24 w-2 h-2 bg-emerald-400/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/3 right-24 w-2 h-2 bg-green-400/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Background glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-[3.5rem] -z-10 blur-2xl opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
};
