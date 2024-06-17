// components/FAQs.jsx
import React from "react";

const FAQs = () => {
  return (
    <section className="faq mt-36 flex flex-col justify-center items-center">
                    <h2 className="text-5xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="faqbox flex items-center justify-between p-4 mb-4 W-96 cursor-pointer bg-zinc-600 hover:bg-zinc-500">
                        <span className="block w-[1000px] text-2xl px-8">What is Netflix</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="text-white">
                            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="faqbox flex items-center justify-between p-4 mb-4 W-96 cursor-pointer bg-zinc-600 hover:bg-zinc-500">
                        <span className="block w-[1000px] text-2xl px-8">How much does Netflix cost?</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="mt-2">
                            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="faqbox flex items-center justify-between p-4 mb-4 W-96 cursor-pointer bg-zinc-600 hover:bg-zinc-500">
                        <span className="block w-[1000px] text-2xl px-8">What can I watch on Netflix?</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="mt-2">
                            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="faqbox flex items-center justify-between p-4 mb-4 W-96 cursor-pointer bg-zinc-600 hover:bg-zinc-500">
                        <span className="block w-[1000px] text-2xl px-8">Where can I watch?</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="mt-2">
                            <path d="M12 4V20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-center mt-3 text-xl mb-5">Ready to watch? Enter your email to create or restart your membership.</span>
                        <div className="hero-buttons flex items-center justify-center w-full gap-4">
                            <input type="text" placeholder="Email Address" className="input bg-transparent text-white text-cente py-4 px-5 w-1/3 text-xl rounded-md border border-gray-600 backdrop-blur-xl" />
                            <button className="btn bg-red-600 px-3 py-4 w-56 rounded-md font-bold text-xl">Get Started &gt;</button>
                        </div>
                </section>
  )
}

export default FAQs