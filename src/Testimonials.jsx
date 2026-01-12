import { useState, useEffect } from 'react';

function Testimonials() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Full-time Trader",
      text: "CryptoFlow has completely transformed my crypto trading experience. The real-time analytics and AI recommendations have significantly improved my returns.",
      image: "src/assets/photo-1488590528505-98d2b5aba04b.jpeg"
    },
    {
      name: "Sarah Johnson",
      role: "Tech Entrepreneur",
      text: "As a beginner, I was intimidated by crypto trading until I found CryptoFlow. Their intuitive interface and educational resources made it easy to start investing confidently.",
      image: "src/assets/photo-1581091226825-a6a2a5aee158.jpeg"
    },
    {
      name: "David Rodriguez",
      role: "Cybersecurity Specialist",
      text: "The security features on CryptoFlow are unmatched. I feel confident keeping my assets on their platform, and the trading fees are the most competitive I've found.",
      image: "src/assets/photo-1649972904349-6e44c42644a7.jpeg"
    },
    {
      name: "Emma Thompson",
      role: "Investment Advisor",
      text: "Their customer support is phenomenal. Any time I've had a question or issue, the team has resolved it quickly. The platform itself is lightning fast and reliable.",
      image: "src/assets/photo-1488590528505-98d2b5aba04b.jpeg"
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
            Join thousands of satisfied traders who have transformed their
            trading experience with CryptoFlow.
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
                        <div
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10"
                          style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
                        >
                          <div className="flex mb-6">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5 text-yellow-500 fill-yellow-500"
                              >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            ))}
                          </div>
                          
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

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'w-8 bg-purple-600' : 'w-2 bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
       
      </div>
    </section>
  );
}

export default Testimonials;
