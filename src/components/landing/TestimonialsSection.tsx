
import React from "react";
import { Star, Quote, UserCircle2 } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Tyler Pam",
      role: "CEO",
      company: "MJ Trash Removal",
      content: "WasteSync has saved us hours of compliance work and helped us get paid on time!"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        What Our Customers Say
      </h2>
      <div className="relative">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
          >
            {/* Large quote mark in background */}
            <Quote className="absolute top-6 right-6 h-24 w-24 text-emerald-500/10" />
            
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className="h-6 w-6 text-emerald-400 fill-current animate-pulse" 
                  style={{ animationDelay: `${star * 0.2}s` }}
                />
              ))}
            </div>

            {/* Testimonial content */}
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8 relative z-10">
              "{testimonial.content}"
            </p>

            {/* Profile section */}
            <div className="flex items-center gap-4 mt-6">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-full p-1">
                <UserCircle2 className="h-12 w-12 text-white" />
              </div>
              <div>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-emerald-400">{testimonial.role}</p>
                <p className="text-gray-400">{testimonial.company}</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -bottom-2 -left-2 -right-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl -z-10 blur-xl opacity-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
