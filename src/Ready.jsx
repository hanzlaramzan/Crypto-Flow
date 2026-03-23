import React from 'react'
<<<<<<< HEAD

// ✅ Image imports - same pattern as Testimonials component
import nextArrow from "./assets/next.png";
=======
import { useState, useEffect } from 'react';

// ✅ fixed imports (Vite correct path)
import nextImg from "../src/assets/next.png";
>>>>>>> dfd698938a6dff0f9d30ef8f294c7be27d7a8fc4

function Ready() {
  return (
    <section className='py-5 bg-[#202c3f] min-h-screen'>
        <div className="container mx-auto px-4 pt-10 mb-16">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-xl p-8 md:p-12 text-center" style={{border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 animate-fade-in text-white'>Ready to revolutionize your <span className='bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-transparent bg-clip-text font-bold mr-4'>crypto trading</span>?</h2>
                <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto animate-fade-in' style={{animationDelay:"0.2s"}}>Join thousands of traders who have already upgraded their crypto experience with CryptoFlow. Start today with zero risk.</p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                        <button className="flex items-center justify-center gap-2 bg-[#9b87f5] hover:bg-[#6e59a5] text-white px-8 py-3 rounded-xl shadow-lg transition duration-300 w-full sm:w-auto">
                            Get Started for Free
                            <img
                            src={nextArrow}
                            alt="arrow"
                            className="w-5 h-5 ml-2"
                            />
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-[#09090b] hover:bg-[#1e2a3f] text-white px-8 py-3 rounded-xl shadow-lg transition duration-300 w-full sm:w-auto">
                            Schedule Demo  
                        </button>
                     </div>
                     <p className='mt-6 text-sm text-gray-400 animate-fade-in' style={{animationDelay:"0.6s"}}>No credit card required. Cancel anytime.</p>
            </div>
        </div>

        {/* footer */}
       <div className="container" style={{paddingTop:"70px"}}>
            <div className="row g-7 mb-8 text-center text-md-start">
                {/* Column 1 - Brand Info */}
                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Crypto<span className="text-purple-400">Flow</span>
                    </h2>
                    <p className='text-gray-400 mb-4'>The most trusted cryptocurrency platform, empowering traders with innovative tools and unparalleled security.</p>
                    <div className="d-flex justify-content-center justify-content-md-start gap-3">
                        <a href="#" className='text-gray-400 hover:text-purple-500 transition-colors mb-4 mb-lg-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className='text-gray-400 hover:text-purple-500 transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                        <a href="#" className='text-gray-400 hover:text-purple-500 transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className='text-gray-400 hover:text-purple-500 transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="#" className='text-gray-400 hover:text-purple-500 transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                    </div>
                </div>

                {/* Column 2 - Products */}
                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <h3 className="text-lg font-semibold text-white mb-3">Products</h3>
                    <ul className='list-unstyled mb-0'>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Exchange</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Wallet</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>API</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Institutional</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>DeFi Platform</a></li>
                    </ul>
                </div>

                {/* Column 3 - Resources */}
                <div className="col-12 col-md-6 col-lg-3 sm:mb-0 mb-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
                    <ul className='list-unstyled mb-0'>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Blog</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Tutorials</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Market Data</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Documentation</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Help Center</a></li>
                    </ul>
                </div>

                {/* Column 4 - Company */}
                <div className="col-12 col-md-6 col-lg-3 sm:mb-0 mb-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
                    <ul className='list-unstyled mb-0'>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>About Us</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Careers</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Press</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Legal & Privacy</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Contact Us</a></li>
                    </ul>
                </div>
                
            </div>
            <div style={{borderTop:"1px solid rgba(255, 255, 255, 0.1)"}} className="pt-4">
                 <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
                    <div>
                    <p className='text-white'>© 2025 CryptoFlow. All rights reserved. ~ Distributed By <a href="#" target='_blank' className='text-purple-500 hover:underline'>ThemeWagon</a></p>
                    </div>
                    <div className="space-x-6">
                        <a href="#!" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">Terms of Service</a>
                        <a href="#!" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">Privacy Policy</a>
                        <a href="#!" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">Cookie Policy</a>
                    </div>
                 </div>
            </div>
        </div>
      
    </section>
  )
}

export default Ready