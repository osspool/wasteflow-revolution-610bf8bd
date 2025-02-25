
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface HeroSectionProps {
  timeLeft: TimeLeft;
  email: string;
  setEmail: (email: string) => void;
}

export const HeroSection = ({ timeLeft, email, setEmail }: HeroSectionProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thank you for your interest!",
      description: "We'll keep you updated on our launch.",
    });
    setEmail("");
  };

  return (
    <div className="max-w-4xl mx-auto text-center animate-fadeIn">
      <h1 className="font-inter text-5xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
        The Change We've All Been Waiting For
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
        Redefining how waste management companies handle regulatory documents,
        operations, invoicing, and contracts—all under one platform.
      </p>

      <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto mb-12">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center p-4 bg-indigo-50 rounded-lg">
            <div className="text-3xl md:text-4xl font-bold text-indigo-600">{value}</div>
            <div className="text-sm text-slate-600 capitalize">{unit}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-20">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-slate-200"
          />
          <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Get Early Access
          </Button>
        </div>
      </form>
    </div>
  );
};
