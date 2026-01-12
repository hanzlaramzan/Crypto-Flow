import React, { useState } from 'react';

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const monthlyPrices = {
    basic: 0,
    pro: 19,
    enterprise: 49
  };

  const annualPrices = {
    basic: 0,
    pro: 15,
    enterprise: 39
  };

  const getCurrentPrice = (plan) => {
    return isAnnual ? annualPrices[plan] : monthlyPrices[plan];
  };

  return (
    <section className="py-5 bg-[#202c3f] min-h-screen pricing">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-transparent bg-clip-text mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Choose the plan that best fits your trading needs. All plans include our core platform features.
          </p>
        </div>
        
        {/* Toggle Button - Only background changes */}
        <div className='text-center mb-5'>
          <div className="inline-flex p-1 bg-white/5 backdrop-blur-sm rounded-full" style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full transition-colors ${
                !isAnnual ? 'bg-[#9b87f5] text-white' : 'text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full transition-colors flex items-center ${
                isAnnual ? 'bg-[#9b87f5] text-white' : 'text-gray-400'
              }`}
            >
              Annual
              <span className='text-sm font-medium ml-1'>Save 20%</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {/* Basic Plan */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden animate-on-scroll show" style={{border: "1px solid rgba(255, 255, 255, 0.1)", animationDelay: "0s"}}>
            <div className="p-8">
              <h3 className='text-xl font-semibold mb-2 text-white'>Basic</h3>
              <div className="mb-4">
                <span className='text-3xl md:text-4xl font-bold text-white'>${getCurrentPrice('basic')}</span>
                {getCurrentPrice('basic') > 0 && (
                  <span className='text-sm font-medium text-gray-300'>/month</span>
                )}
              </div>
              <p className='text-gray-400 ml-1 mb-8'>Perfect for beginners getting started with crypto trading.</p>
               <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-xl w-full mb-6 bg-gray-500/20 hover:bg-gray-500/30 text-white backdrop-blur-sm">Get Started</button>
              <div>
                <p className='text-sm font-medium text-gray-300 mb-4'>What's included:</p>
                <ul>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Basic charting tools</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Market data with 15-min delay</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Email support</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Mobile app access</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pro Plan - Most Popular */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden animate-on-scroll shadow-xl relative shows  " style={{
            border: "1px solid #9b87f5",
            animationDelay: "0s",
            
          }}>
            <div className="bg-[#9b87f5] text-white text-center py-1 text-sm font-medium">Most Popular</div>
            <div className="p-8">
              <h3 className='text-xl font-semibold mb-2 text-white'>Pro</h3>
              <div className="mb-4">
                <span className='text-3xl md:text-4xl font-bold text-white'>${getCurrentPrice('pro')}</span>
                <span className='text-sm font-medium text-gray-300'>/month</span>
              </div>
              <p className='text-gray-400 ml-1 mb-6'>Designed for active traders seeking advanced tools.</p>

              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 px-4 py-2 rounded-xl w-full mb-6 bg-[#9b87f5] hover:bg-[#7b6ee2] text-white transition-all">
                Start 7-Day Free Trial
              </button>

              <div>
                <p className='text-sm font-medium text-gray-300 mb-4'>What's included:</p>
                <ul>
                  <li className='flex items-start mb-2'>
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#9b87f5", marginRight: "0.5rem" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className='text-gray-400 text-sm'>Access to 50+ cryptocurrencies</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#9b87f5", marginRight: "0.5rem" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className='text-gray-400 text-sm'>Advanced charting tools</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#9b87f5", marginRight: "0.5rem" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className='text-gray-400 text-sm'>Real-time market data</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#9b87f5", marginRight: "0.5rem" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className='text-gray-400 text-sm'>Priority email support</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#9b87f5", marginRight: "0.5rem" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className='text-gray-400 text-sm'>Reduced trading fees (0.1%)</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#9b87f5", marginRight: "0.5rem" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className='text-gray-400 text-sm'>API access</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#9b87f5", marginRight: "0.5rem" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className='text-gray-400 text-sm'>Portfolio analytics</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden animate-on-scroll show" style={{border: "1px solid rgba(255, 255, 255, 0.1)", animationDelay: "0s"}}>
            <div className="p-8">
              <h3 className='text-xl font-semibold mb-2 text-white'>Enterprise</h3>
              <div className="mb-4">
                <span className='text-3xl md:text-4xl font-bold text-white'>${getCurrentPrice('enterprise')}</span>
                <span className='text-sm font-medium text-gray-300'>/month</span>
              </div>
              <p className='text-gray-400 ml-1 mb-5'>Comprehensive solution for professional traders.</p>
             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-xl w-full mb-6 bg-gray-500/20 hover:bg-gray-500/30 text-white backdrop-blur-sm">Contact Sales</button>

              <div>
                <p className='text-sm font-medium text-gray-300 mb-4'>What's included:</p>
                <ul>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Access to all cryptocurrencies</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Professional-grade charts</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Real-time market data</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>24/7 dedicated support</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Zero trading fees</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Advanced API access</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Institutional-grade security</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Custom reporting</p>
                  </li>
                  <li className='flex items-start mb-2'>
                    <i className="fa fa-check" aria-hidden="true" style={{ color: "#9b87f5" , marginRight: "0.5rem"}}></i>
                    <p className='text-gray-400 text-sm'>Team management</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing;