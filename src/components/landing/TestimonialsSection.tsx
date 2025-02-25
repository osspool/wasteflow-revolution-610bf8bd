import React from "react";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "Operations Manager",
      company: "NJ Waste Solutions",
      content: "This platform has transformed how we manage our operations. The regulatory compliance features alone have saved us countless hours."
    },
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "EcoWaste Management",
      content: "The best investment we've made for our business. The ROI was evident within the first month of implementation."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-emerald-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
              <p className="text-sm text-emerald-400">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};