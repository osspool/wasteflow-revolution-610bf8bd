
import React from "react";
import { Rocket, Award, Globe, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const DemoRequestForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const features = [
    {
      icon: Award,
      title: "Industry Leader in NJ",
      description: "Purpose-built software for New Jersey waste management companies"
    },
    {
      icon: Globe,
      title: "All-in-One Platform",
      description: "Complete solution for operations, compliance, and growth"
    },
    {
      icon: Headphones,
      title: "White Glove Support",
      description: "Dedicated onboarding and ongoing expert assistance"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left side: Features */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
            Meet Your WasteSync Partner
          </h3>
          <p className="text-gray-400">
            Experience the future of waste management operations
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-4 p-4 rounded-xl bg-slate-800/50 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg p-2 h-fit shadow-lg shadow-emerald-500/20">
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-200 mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Form */}
      <div className="relative">
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-emerald-500/20">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Get in touch!</h3>
            <p className="text-gray-400 text-sm">
              Do you still have questions? We will be happy to answer them!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              type="text"
              placeholder="Full Name"
              className="bg-slate-900/50 border-emerald-500/20 focus:border-emerald-500/50"
            />
            
            <Input 
              type="email"
              placeholder="Work Email"
              className="bg-slate-900/50 border-emerald-500/20 focus:border-emerald-500/50"
            />
            
            <Input 
              type="text"
              placeholder="Company Name"
              className="bg-slate-900/50 border-emerald-500/20 focus:border-emerald-500/50"
            />
            
            <Input 
              type="tel"
              placeholder="Phone Number"
              className="bg-slate-900/50 border-emerald-500/20 focus:border-emerald-500/50"
            />
            
            <Textarea 
              placeholder="How many drivers do you have? What business lines do you operate?"
              className="bg-slate-900/50 border-emerald-500/20 focus:border-emerald-500/50 min-h-[100px]"
            />
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white h-12 rounded-lg font-medium transition-all duration-300"
            >
              Book Your Free Demo
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-400">
            Or alternatively call us at:{" "}
            <a href="tel:+17202622079" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              (720) 262-2079
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};
