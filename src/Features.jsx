import React from 'react'

function Features() {
  return (
    <section className='py-5 bg-[#202c3f]'>

        <div className="container">
            <div className="text-center mb-5">
                <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-transparent bg-clip-text mb-4'>Powerful Features</h2>
                <p className='text-gray-400 max-w-2xl mx-auto'>CryptoFlow gives you the edge with advanced tools designed for both beginners and professional traders.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-[#172133] backdrop-blur-sm  rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl" style={{animationDelay:"0s", border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                     <div className="bg-[#4c4669] rounded-lg w-12  h-12 flex  items-center justify-center mb-3 text-[#9b87f5] group-hover:bg-purple/20 transition-colors duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity h-6 w-6"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                     </div>
                     <h3 className='text-xl font-semibold mb-3 text-white'>Real-time Analytics</h3>
                     <p className='text-gray-400'>Monitor market movements with advanced charts and indicators updated in real-time.</p>
                </div>
                
                <div className="bg-[#172133] backdrop-blur-sm  rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl" style={{animationDelay:"0s", border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                     <div className="bg-[#4c4669] rounded-lg w-12  h-12 flex  items-center justify-center mb-3 text-[#9b87f5] group-hover:bg-purple/20 transition-colors duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock h-6 w-6"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                     </div>
                     <h3 className='text-xl font-semibold mb-3 text-white'>Bank-level Security</h3>
                     <p className='text-gray-400'>Your assets are protected with military-grade encryption and multi-factor authentication.</p>
                </div>

                <div className="bg-[#172133] backdrop-blur-sm  rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl" style={{animationDelay:"0s", border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                     <div className="bg-[#4c4669] rounded-lg w-12  h-12 flex  items-center justify-center mb-3 text-[#9b87f5] group-hover:bg-purple/20 transition-colors duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap h-6 w-6"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                     </div>
                     <h3 className='text-xl font-semibold mb-3 text-white'>Instant Execution</h3>
                     <p className='text-gray-400'>Execute trades in milliseconds with our high-performance trading engine.</p>
                </div>

                <div className="bg-[#172133] backdrop-blur-sm  rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl" style={{animationDelay:"0s", border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                     <div className="bg-[#4c4669] rounded-lg w-12  h-12 flex  items-center justify-center mb-3 text-[#9b87f5] group-hover:bg-purple/20 transition-colors duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass h-6 w-6"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                     </div>
                     <h3 className='text-xl font-semibold mb-3 text-white'>Smart Portfolio</h3>
                     <p className='text-gray-400'>Optimize your crypto holdings with AI-powered portfolio suggestions.</p>
                </div>

                <div className="bg-[#172133] backdrop-blur-sm  rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl" style={{animationDelay:"0s", border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                     <div className="bg-[#4c4669] rounded-lg w-12  h-12 flex  items-center justify-center mb-3 text-[#9b87f5] group-hover:bg-purple/20 transition-colors duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-line h-6 w-6"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                     </div>
                     <h3 className='text-xl font-semibold mb-3 text-white'>Price Alerts</h3>
                     <p className='text-gray-400'>Never miss an opportunity with customizable price alerts and notifications.</p>
                </div>

                <div className="bg-[#172133] backdrop-blur-sm  rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl" style={{animationDelay:"0s", border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                     <div className="bg-[#4c4669] rounded-lg w-12  h-12 flex  items-center justify-center mb-3 text-[#9b87f5] group-hover:bg-purple/20 transition-colors duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-6 w-6"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                     </div>
                     <h3 className='text-xl font-semibold mb-3 text-white'>Cold Storage</h3>
                     <p className='text-gray-400'>Majority of assets stored in offline cold wallets for maximum security.</p>
                </div>

            </div>
        </div>
      
    </section>
  )
}

export default Features
