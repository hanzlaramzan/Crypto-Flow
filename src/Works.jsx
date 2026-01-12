import React from 'react'

function Works() {
  return (
    <section className='py-5 bg-[#202c3f] min-h-screen'>
      
      <div className="container">
        <div className="text-center mb-5">
                <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-transparent bg-clip-text mb-4'>How It Works</h2>
                <p className='text-gray-400 max-w-2xl mx-auto'>Getting started with CryptoFlow is easy. Follow these simple steps to begin your crypto journey.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-[#172133] relative backdrop-blur-sm  rounded-xl p-8  transition-all duration-300 hover:shadow-xl = ml-4" style={{animationDelay:"0s", border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                    <span className='absolute -top-4 -left-4 bg-[#202c3f] rounded-md text-[#9b87f5] font-bold text-xl px-2 py-1' style={{border:"1px solid rgba(255, 255, 255, 0.1)"}}>01</span>
                     <div className="bg-[#4c4669] rounded-lg w-12  h-12 flex  items-center justify-center mb-3 text-[#9b87f5] group-hover:bg-purple/20 transition-colors duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download h-6 w-6"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                     </div>
                     <h3 className='text-xl font-semibold mb-3 text-white'>Create Your Account</h3>
                     <p className='text-gray-400'>Sign up in minutes with our streamlined onboarding process. No complicated forms or lengthy verification.</p>
                </div>

                <div className="bg-[#172133] backdrop-blur-sm  rounded-xl p-8  transition-all duration-300 hover:shadow-xl relative ml-4" style={{animationDelay:"0s", border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                <span className='absolute -top-4 -left-4 bg-[#202c3f] rounded-md text-[#9b87f5] font-bold text-xl px-2 py-1' style={{border:"1px solid rgba(255, 255, 255, 0.1)"}}>02</span>
                     <div className="bg-[#4c4669] rounded-lg w-12  h-12 flex  items-center justify-center mb-3 text-[#9b87f5] group-hover:bg-purple/20 transition-colors duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet h-6 w-6"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                     </div>
                     <h3 className='text-xl font-semibold mb-3 text-white'>Fund Your Wallet</h3>
                     <p className='text-gray-400'>Easily deposit crypto or fiat through multiple payment options with zero deposit fees.</p>
                </div>

                <div className="bg-[#172133] backdrop-blur-sm  rounded-xl p-8  transition-all duration-300 hover:shadow-xl relative ml-4" style={{animationDelay:"0s", border:"1px solid rgba(255, 255, 255, 0.1)"}}>
                <span className='absolute -top-4 -left-4 bg-[#202c3f] rounded-md text-[#9b87f5] font-bold text-xl px-2 py-1' style={{border:"1px solid rgba(255, 255, 255, 0.1)"}}>03</span>
                     <div className="bg-[#4c4669] rounded-lg w-12  h-12 flex  items-center justify-center mb-3 text-[#9b87f5] group-hover:bg-purple/20 transition-colors duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-increasing h-6 w-6"><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M8 17v-3"></path></svg>
                     </div>
                     <h3 className='text-xl font-semibold mb-3 text-white'>Start Trading</h3>
                     <p className='text-gray-400'>Access 50+ cryptocurrencies and start trading immediately with intuitive tools and real-time data.</p>
                </div>

            </div>

             <div className='mt-16 text-center'>
                 <button className=" bg-[#9b87f5] hover:bg-[#6e59a5] text-white   px-8 py-2.5 rounded-xl shadow-lg transition duration-300 w-full sm:w-auto">Create Free Account</button>
             </div>
           

      </div>
    </section>
  )
}

export default Works
