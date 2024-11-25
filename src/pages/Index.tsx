import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ClipboardList, FileCheck, BarChart3, Workflow } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date("2024-05-01").getTime();
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div className="h-2 w-2 bg-emerald-500 rounded-full opacity-20" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
            The Change We've All Been Waiting For
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Redefining how waste management companies handle regulatory documents,
            operations, invoicing, and contracts—all under one platform.
          </p>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400">{value}</div>
                <div className="text-sm text-gray-400 capitalize">{unit}</div>
              </div>
            ))}
          </div>

          {/* Email signup */}
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

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
              <ClipboardList className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-gray-400">
                Streamline document management and ensure compliance with automated
                tracking and updates.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
              <FileCheck className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
              <p className="text-gray-400">
                Digitize and automate contract management with intelligent
                workflows and approvals.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
              <BarChart3 className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Financial Insights</h3>
              <p className="text-gray-400">
                Gain real-time visibility into operations and financial
                performance with advanced analytics.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
              <Workflow className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
              <p className="text-gray-400">
                Optimize operations with automated workflows that reduce manual
                tasks and improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;