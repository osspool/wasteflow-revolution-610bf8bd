
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ClipboardCheck, FileText, BarChart3, Banknote } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

export const HeroSection = () => {
  const features = [
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      text: "Automated Compliance Management",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      text: "Smart Document Processing",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      text: "Real-time Analytics Dashboard",
    },
    {
      icon: <Banknote className="h-6 w-6" />,
      text: "Streamlined Invoicing & Payments",
    },
  ];

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

      <div className="mt-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full max-w-xl mx-auto"
        >
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="flex items-center justify-center gap-3 p-4">
                  <div className="p-2 rounded-full bg-purple-600/10">
                    {React.cloneElement(feature.icon, {
                      className: "h-6 w-6 text-purple-600",
                    })}
                  </div>
                  <p className="text-gray-300 text-sm md:text-base font-medium">
                    {feature.text}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
