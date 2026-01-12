import React, { useState } from "react";

function AskQuestions() {
  const [openIndex, setOpenIndex] = useState(null);


  const faqs = [
    {
      question: "How secure is CryptoFlow?",
      answer:
        "CryptoFlow employs bank-level security measures including 256-bit encryption, cold storage for 95% of assets, two-factor authentication, and regular security audits. Our platform has never been compromised and we maintain a comprehensive insurance policy to protect user funds.",
    },
    {
      question: "What cryptocurrencies can I trade on CryptoFlow?",
      answer:
        "CryptoFlow supports trading of over 50 cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Cardano (ADA), Ripple (XRP), and many more. We regularly add new cryptocurrencies based on market trends and user demand.",
    },
    {
      question: "What are the fees for using CryptoFlow?",
      answer:
        "Our fee structure is transparent and competitive. Basic accounts pay 0.25% per trade, Pro accounts pay 0.1%, and Enterprise accounts pay no trading fees. There are no hidden fees, and we don't charge for deposits. Withdrawal fees vary by cryptocurrency to cover network costs.",
    },
    {
      question: "How do I deposit funds into my CryptoFlow account?",
      answer:
        "You can deposit funds via bank transfer, credit/debit card, or by transferring cryptocurrency from another wallet. Bank transfers typically process within 1-3 business days, while card payments and crypto transfers are nearly instant.",
    },
    {
      question: "Is CryptoFlow available in my country?",
      answer:
        "CryptoFlow is available in over 140 countries worldwide. However, due to regulatory constraints, we cannot serve users from certain jurisdictions. Please check our Terms of Service or contact our support team to verify availability in your specific location.",
    },
    {
      question: "How do I get started with CryptoFlow?",
      answer:
        "Getting started is simple. Create an account, complete the verification process (which typically takes less than 10 minutes), deposit funds using your preferred method, and you're ready to start trading. Our intuitive interface is designed to make cryptocurrency trading accessible for beginners while offering powerful tools for experienced traders.",
    },
  ];

  return (
    <section className="py-5 bg-[#202c3f] min-h-screen">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-transparent bg-clip-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Got questions about CryptoFlow? We've got answers. If you don't see
            what you're looking for, reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden animate-on-scroll show"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <h3 className="flex">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      className="flex flex-1 items-center justify-between font-medium transition-colors duration-300 px-6 py-4 text-white hover:text-[#5e49b9]"
                    >
                      {faq.question}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>


                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4 text-sm text-gray-300">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AskQuestions;
