
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
      <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-indigo-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-indigo-600 fill-current" />
              ))}
            </div>
            <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
            <div>
              <p className="font-semibold text-slate-900">{testimonial.name}</p>
              <p className="text-sm text-slate-600">{testimonial.role}</p>
              <p className="text-sm text-indigo-600">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
