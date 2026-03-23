import React from 'react'
import { useState, useEffect } from 'react';

// ✅ fixed imports (Vite correct path)
import nextImg from "../src/assets/next.png";


// ✅ Image imports - same pattern as Testimonials component
import nextArrow from "./assets/next.png";

function Ready() {
  return (
<<<<<<< HEAD
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
=======
    <section className='py-5 bg-[#202c3f]'>

        <div className="container mx-auto px-4 pt-10 mb-16">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-xl p-8 md:p-12 text-center" style={{border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                
                <h2 className='text-3xl md:text-4xl font-bold mb-6 animate-fade-in text-white'>
                    Ready to revolutionize your 
                    <span className='bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-transparent bg-clip-text font-bold mr-4'>
                        crypto trading
                    </span>?
                </h2>

                <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto animate-fade-in' style={{animationDelay:"0.2s"}}>
                    Join thousands of traders who have already upgraded their crypto experience with CryptoFlow. Start today with zero risk.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                    <button className="flex items-center justify-center gap-2 bg-[#9b87f5] hover:bg-[#6e59a5] text-white px-8 py-3 rounded-xl shadow-lg transition duration-300 w-full sm:w-auto">
                        Get Started for Free
                        <img src={nextImg} alt="arrow" className="w-5 h-5 ml-2"/>
                    </button>

                    <button className="flex items-center justify-center gap-2 bg-[#09090b] hover:bg-[#1e2a3f] text-white px-8 py-3 rounded-xl shadow-lg transition duration-300 w-full sm:w-auto">
                        Schedule Demo  
                    </button>
                </div>

                <p className='mt-6 text-sm text-gray-400 animate-fade-in' style={{animationDelay:"0.6s"}}>
                    No credit card required. Cancel anytime.
                </p>

>>>>>>> 684aef7 (Add favicon and update title for website)
            </div>
        </div>

        {/* ✅ ORIGINAL FOOTER (RESTORED - NO CHANGES) */}
        <div className="container" style={{paddingTop:"70px"}}>
            <div className="row g-7 mb-8 text-center text-md-start">

                {/* Column 1 */}
                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Crypto<span className="text-purple-400">Flow</span>
                    </h2>

                    <p className='text-gray-400 mb-4'>
                        The most trusted cryptocurrency platform, empowering traders with innovative tools and unparalleled security.
                    </p>

                    <div className="d-flex justify-content-center justify-content-md-start gap-3">
<<<<<<< HEAD
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
=======

                    {/* Facebook */}
                    <a href="#" className='text-gray-400 hover:text-purple-500 transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.3 0-1.7.8-1.7 1.6V12H17l-.6 3h-3.1v7A10 10 0 0 0 22 12z"/>
                        </svg>
                    </a>

                    {/* Twitter */}
                    <a href="#" className='text-gray-400 hover:text-purple-500 transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 5.8c-.8.4-1.6.6-2.5.8.9-.6 1.5-1.4 1.8-2.4-.8.5-1.8.9-2.8 1.1A4.3 4.3 0 0 0 11 8.1c0 .3 0 .6.1.9-3.6-.2-6.8-1.9-8.9-4.6-.4.7-.6 1.4-.6 2.2 0 1.5.8 2.9 2 3.7-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.9 3.4 4.3-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.8 2.4 3.1 4.5 3.2A8.7 8.7 0 0 1 2 19.5a12.2 12.2 0 0 0 6.6 1.9c7.9 0 12.2-6.6 12.2-12.2v-.6c.8-.5 1.5-1.3 2-2.1z"/>
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a href="#" className='text-gray-400 hover:text-purple-500 transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="#" className='text-gray-400 hover:text-purple-500 transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5C4.98 4.9 3.87 6 2.49 6S0 4.9 0 3.5 1.11 1 2.49 1s2.49 1.1 2.49 2.5zM.22 8h4.54v14H.22V8zm7.91 0h4.35v1.9h.06c.61-1.15 2.1-2.35 4.32-2.35 4.62 0 5.48 3.04 5.48 7v8.45h-4.54v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 4v7.6H8.13V8z"/>
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a href="#" className='text-gray-400 hover:text-purple-500 transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2.1-.7 2.6-1 .1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.4 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3 .9a10.4 10.4 0 0 1 5.4 0c2.1-1.2 3-.9 3-.9.6 1.7.2 2.9.1 3.2.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.1-5.1 5.4.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/>
                        </svg>
                    </a>

>>>>>>> 684aef7 (Add favicon and update title for website)
                    </div>
                </div>

                {/* Column 2 */}
                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <h3 className="text-lg font-semibold text-white mb-3">Products</h3>
                    <ul className='list-unstyled mb-0'>
<<<<<<< HEAD
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Exchange</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Wallet</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>API</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Institutional</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>DeFi Platform</a></li>
=======
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Exchange</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Wallet</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>API</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Institutional</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>DeFi Platform</a></li>
                        
>>>>>>> 684aef7 (Add favicon and update title for website)
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="col-12 col-md-6 col-lg-3">
                    <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
                    <ul className='list-unstyled mb-0'>
<<<<<<< HEAD
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Blog</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Tutorials</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Market Data</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Documentation</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Help Center</a></li>
=======
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Blog</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Tutorials</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Market Data</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Documentation</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Help Center</a></li>
>>>>>>> 684aef7 (Add favicon and update title for website)
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="col-12 col-md-6 col-lg-3">
                    <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
                    <ul className='list-unstyled mb-0'>
<<<<<<< HEAD
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>About Us</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Careers</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Press</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Legal & Privacy</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500 transition-colors text-decoration-none d-inline-block py-1'>Contact Us</a></li>
=======
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>About Us</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Careers</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Press</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Legal & Privacy</a></li>
                        <li className='mb-2'><a href="#" className='text-gray-400 hover:text-purple-500'>Contact Us</a></li>
>>>>>>> 684aef7 (Add favicon and update title for website)
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div style={{borderTop:"1px solid rgba(255, 255, 255, 0.1)"}} className="pt-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <p className='text-white'>© 2025 CryptoFlow. All rights reserved.</p>

                    <div className="space-x-6">
<<<<<<< HEAD
                        <a href="#!" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">Terms of Service</a>
                        <a href="#!" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">Privacy Policy</a>
                        <a href="#!" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">Cookie Policy</a>
=======
                        <a href="#" className="text-gray-400 hover:text-purple-500 text-sm">Terms</a>
                        <a href="#" className="text-gray-400 hover:text-purple-500 text-sm">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-purple-500 text-sm">Cookie Policy</a>
>>>>>>> 684aef7 (Add favicon and update title for website)
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

<<<<<<< HEAD
export default Ready
=======
export default Ready;
>>>>>>> 684aef7 (Add favicon and update title for website)
