import { useState, useEffect } from 'react';

import img1 from "./assets/laptop.jpeg";
import img2 from "./assets/girlsCoding.jpeg";
import img3 from "./assets/coding2.jpeg";
import img4 from "./assets/coding3.jpeg";

function Testimonials() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Full-time Trader",
      text: "CryptoFlow has completely transformed my crypto trading experience. The real-time analytics and AI recommendations have significantly improved my returns.",
      image: img1
    },
    {
      name: "Sarah Johnson",
      role: "Tech Entrepreneur",
      text: "As a beginner, I was intimidated by crypto trading until I found CryptoFlow. Their intuitive interface and educational resources made it easy to start investing confidently.",
      image: img2
    },
    {
      name: "David Rodriguez",
      role: "Cybersecurity Specialist",
      text: "The security features on CryptoFlow are unmatched. I feel confident keeping my assets on their platform, and the trading fees are the most competitive I've found.",
      image: img3
    },
    {
      name: "Emma Thompson",
      role: "Investment Advisor",
      text: "Their customer support is phenomenal.",
      image: img4
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-5 bg-[#202c3f] min-h-screen testimonials">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-transparent bg-clip-text mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Join thousands of satisfied traders who have transformed their trading experience with CryptoFlow.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto w-full">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10"
                    style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
                  >
                    <p className="text-lg md:text-xl text-gray-200 mb-8">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-700"
                      />
                      <div className="ml-4">
                        <p className="font-medium text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ BULLETS (DOTS) NAVIGATION */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-purple-500 scale-125"
                    : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;