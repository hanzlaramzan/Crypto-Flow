import React, { useState, useEffect } from "react";
import './Home.css'
import Features from "./Features";
import Works from "./Works";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import AskQuestions from "./AskQuestions";
import Ready from "./Ready";

import nextArrow from "./assets/next.png";
import upRightArrow from "./assets/up-right-arrow.png";
import logo from "./assets/logo.avif";
import chartUp from "./assets/chart-up.png";
import verified from "./assets/verified.png";

function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  };

  return (
    <>
    <section className=" bg-[#29374e] min-h-screen" style={{paddingTop:"130px"}}>
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 animated-fade-in-left">
                    <div className="inline-flex items-center backdrop-blur-sm rounded-full px-3 py-1 mb-6" style={{border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                        <span className="text-xs font-medium text-purple-500 mr-2">New Feature</span>
                        <span className="text-xs text-gray-300">AI-Powered Trading Signals </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor"  className="size-6 text-white" style={{width:"18px", height:"16px", marginLeft:"10px"}}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                        <span className="bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-transparent bg-clip-text font-bold mr-4">Trade Crypto</span>
                        with Confidence & Clarity
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 max-w-lg">Experience seamless cryptocurrency trading with real-time analytics, AI-powered insights, and zero commission fees.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                        <button className="flex items-center justify-center gap-2 bg-[#9b87f5] hover:bg-[#6e59a5] text-white   px-8 py-3 rounded-xl shadow-lg transition duration-300 w-full sm:w-auto">
                            Start Trading
                            <img
                            src={nextArrow}
                            alt="arrow"
                            className="w-5 h-5 ml-2"
                            />
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-[#09090b] hover:bg-[#1e2a3f] text-white px-8 py-3 rounded-xl shadow-lg transition duration-300 w-full sm:w-auto">
                            view Demo   
                            <img
                            src={upRightArrow}
                            alt="arrow"
                            className="w-5 h-5 ml-2"
                            />
                        </button>
                     </div>

                     <div className="mt-8 flex  items-center sm:items-start sm:justify-start justify-center space-x-6">
                        <div>
                            <p className="text-2xl text-white font-bold">$2.5B+</p>
                            <p className="text-gray-400 text-sm">Trading Volume</p>
                        </div>
                        <div className="h-12 w-px bg-gray-700"></div>
                        <div>
                            <p className="text-2xl text-white font-bold">120K+</p>
                            <p className="text-gray-400 text-sm">Active Traders</p>
                        </div>
                        <div className="h-12 w-px bg-gray-700"></div>
                        <div>
                            <p className="text-2xl text-white font-bold">50+</p>
                            <p className="text-gray-400 text-sm">Global Markets</p>
                        </div>
                     </div>

                </div>


                <div className="w-full lg:w-1/2 mt-12 lg:mt-0 animated-right-right pt-10 pb-[20px] lg:pt-0 lg:pb-0">
                  <div className="relative max-w-md mx-auto float-bob-y">
                      <img 
                          src={logo}
                          alt="logo" 
                          className="w-full h-auto rounded-xl shadow-2xl"
                          style={{border:"1px solid rgba(255, 255, 255, 0.1)"}}
                      />
                      
                      {/* Bottom Right Card */}
                      <div className="absolute -right-2 sm:-right-4 lg:-right-6 -bottom-2 sm:-bottom-4 lg:-bottom-6 bg-[#2b3c58] backdrop-blur-md rounded-lg p-2 sm:p-3" 
                          style={{border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                          <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-green-500/20 rounded-full flex items-center justify-center">
                                  <img src={chartUp} alt="" className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8"/>
                              </div>
                              <div>
                                  <p className="text-xs sm:text-xs text-gray-400">24th Change</p>
                                  <p className="text-sm sm:text-lg font-bold text-green-500">+12.34%</p>
                              </div>
                          </div>
                      </div>

                      {/* Top Left Card */}
                      <div className="absolute -top-2 sm:-top-4 lg:-top-6 -left-2 sm:-left-4 lg:-left-6 bg-purple-500/20 backdrop-blur-md rounded-lg p-2 sm:p-3 shadow-lg" 
                          style={{border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                          <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-purple-500/50 rounded-full flex items-center justify-center">
                                  <img src={verified} alt="" className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8"/>
                              </div>
                              <div>
                                  <p className="text-xs sm:text-xs text-gray-400">Security Level</p>
                                  <p className="text-sm sm:text-lg font-bold text-white">Enterprise</p>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>

            </div>
        </div>

        {/* Button Back to top */}
        <button 
        type="button" 
        className={`back-to-top ${showButton ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="bi bi-chevron-up"></i>
      </button>
      
    </section>

    <div id="features">
      <Features/>
    </div>
    <div id="works">
      <Works/>
    </div>
    <div id="testimonials">
      <Testimonials/>
    </div>
    <div id="pricing">
      <Pricing/>
    </div>
    <div id="faq">
      <AskQuestions/>
    </div>
      <Ready/>
    </>
  );
}

export default Home;