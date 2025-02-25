
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
  const carouselItems = [
    {
      image: "photo-1488590528505-98d2b5aba04b",
      icon: <ClipboardCheck className="h-6 w-6" />,
      text: "Automated Compliance Management",
      description: "Streamline your compliance processes with intelligent automation"
    },
    {
      image: "photo-1487058792275-0ad4aaf24ca7",
      icon: <FileText className="h-6 w-6" />,
      text: "Smart Document Processing",
      description: "Process documents efficiently with AI-powered solutions"
    },
    {
      image: "photo-1501854140801-50d01698950b",
      icon: <BarChart3 className="h-6 w-6" />,
      text: "Real-time Analytics Dashboard",
      description: "Make data-driven decisions with comprehensive analytics"
    },
    {
      image: "photo-1523712999610-f77fbcfc3843",
      icon: <Banknote className="h-6 w-6" />,
      text: "Streamlined Invoicing & Payments",
      description: "Simplify your financial operations with automated billing"
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
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={`https://source.unsplash.com/${item.image}`}
                    alt={item.text}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 text-center">
                    <div className="p-2 rounded-full bg-purple-600/20 mb-2">
                      {React.cloneElement(item.icon, {
                        className: "h-6 w-6 text-purple-400",
                      })}
                    </div>
                    <h3 className="text-white font-semibold mb-1">{item.text}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
