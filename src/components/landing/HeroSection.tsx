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
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        The Change We've All Been Waiting For
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-12">
        Redefining how waste management companies handle regulatory documents,
        operations, invoicing, and contracts—all under one platform.
      </p>

      <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto mb-12">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400">{value}</div>
            <div className="text-sm text-gray-400 capitalize">{unit}</div>
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
            className="bg-slate-800/50 border-slate-700"
          />
          <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
            Get Early Access
          </Button>
        </div>
      </form>
    </div>
  );
};