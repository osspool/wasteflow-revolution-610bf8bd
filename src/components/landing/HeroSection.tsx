
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HeroSection = () => {
  const images = [
    {
      src: "/lovable-uploads/93f0eb85-5a31-4369-ae1c-85fba09e4169.png",
      alt: "WasteSync Dashboard"
    },
    {
      src: "/lovable-uploads/59170aa6-8250-4add-a0dd-87b951026e52.png",
      alt: "WasteSync Customers"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto text-center animate-fadeIn">
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

      <div className="mt-8 relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
};
