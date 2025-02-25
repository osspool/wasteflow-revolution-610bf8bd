
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DemoRequestForm } from "./DemoRequestForm";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const images = [
    {
      src: "/lovable-uploads/93f0eb85-5a31-4369-ae1c-85fba09e4169.png",
      alt: "WasteSync Dashboard"
    },
    {
      src: "/lovable-uploads/59170aa6-8250-4add-a0dd-87b951026e52.png",
      alt: "WasteSync Customers"
    },
    {
      src: "/lovable-uploads/681d77bf-e2c7-4e48-b9f2-d0fe25a261ce.png",
      alt: "WasteSync Invoices"
    },
    {
      src: "/lovable-uploads/6663b569-72e1-454b-ab7e-c75a91de778c.png",
      alt: "WasteSync Forms Generator"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="max-w-6xl mx-auto text-center animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        Streaming Waste Management with one Powerful Platform
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Automate compliance, simplify invoicing, and get paid fast- seamlessly
      </p>

      <div className="mb-12">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1"
            >
              Try a Free Demo
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-emerald-500/20 p-6 max-w-4xl">
            <DemoRequestForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-8 relative">
        <div className="flex justify-center gap-2 mb-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                current === index 
                  ? "bg-purple-600" 
                  : "bg-gray-400 hover:bg-purple-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <Carousel
          setApi={setApi}
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
        </Carousel>
      </div>
    </div>
  );
};
