// pages/index.js
import Image from "next/image";
import Head from 'next/head';
import SignInButton from "../components/signInButton";

export default function Home() {
    return (
        <>
            <div className="bg-black text-white overflow-hidden">
                {/* Background Image with Gradient Overlays */}
                <div>
                    <div className="absolute inset-0 bg-fit bg-center bg-no-repeat opacity-60" style={{ backgroundImage: "url('/images/bgImage.jpg')" }}></div>
                    <div className="absolute inset-0 flex flex-col justify-between">
                        <div className="bg-gradient-to-b from-black via-transparent to-transparent h-96 w-full"></div>
                        <div className="bg-gradient-to-t from-black via-transparent to-transparent h-96 w-full"></div>
                    </div>
                </div>

                <div className="relative z-10">
                <nav className="flex justify-between items-center mx-auto py-20 px-40">
                        <span><Image width={150} height={0} src="/images/logo.svg" alt="Netflix Logo" /></span>
                        <SignInButton />
                        {/* <div className="flex gap-10">
                            <button className="btn text-base border rounded-md font-semibold py-1 px-8">English</button>
                            {status === 'loading' ? (
                                <p>Loading...</p>
                            ) : session ? (
                                <button onClick={() => signOut()} className="signInButton bg-red-600 text-base py-1 px-4 font-semibold rounded-md">Sign Out</button>
                            ) : (
                                <button onClick={() => signIn('github')} className="signInButton bg-red-600 text-base py-1 px-4 font-semibold rounded-md">Sign In</button>
                            )}
                        </div> */}
                    </nav>

                    <div className="hero flex flex-col items-center justify-center gap-6 h-[400px]">
                        <span className="font-extrabold tracking-wide text-5xl text-center -mt-10">
                        Unlimited movies, TV shows and more</span>
                        <span className="text-center text-3xl">Watch anywhere. Cancel anytime.</span>
                        <span className="text-center text-2xl">Ready to watch? Enter your email to create or restart your membership.</span>
                        <div className="hero-buttons flex items-center justify-center w-full gap-4">
                            <input type="text" placeholder="Email Address" className="input bg-transparent text-white text-cente py-4 px-5 w-1/3 text-xl rounded-md border border-gray-600 backdrop-blur-md" />
                            <button className="btn bg-red-600 px-3 py-4 w-56 rounded-md font-bold text-xl">Get Started &gt;</button>
                        </div>

                    </div>
                </div>

                <div className="separation bg-gray-900 h-2 relative z-20 top-32"></div>

                <section className="first flex justify-center items-center mt-40">
                    <div className="text-start">
                        <span className="block text-5xl font-bold leading-relaxed">Enjoy on your TV</span>
                        <span className="block text-2xl w-[600px]">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
                    </div>

                    <div className="secImg">
                        <Image src="/images/tv.png" alt="TV" width={555} height={0} />
                        {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay loop muted className="absolute w-full h-full"></video> */}
                    </div>
                </section>

                <div className="separation bg-gray-900 h-2 relative z-20 top-32"></div>

                <section className="first second mt-40 flex justify-center items-center">
                    <div className="secImg">
                        <Image src="/images/mobile.jpg" alt="Mobile" width={555} height={0} />
                    </div>
                    <div className="text-start">
                        <span className="block text-5xl w-[600px] font-extrabold mb-6">Download your shows to watch offline</span>
                        <span className="block text-2xl w-[500px] font-semibold">Save your favourites easily and always have something to watch.</span>
                    </div>
                </section>

                <div className="separation bg-gray-900 h-2 relative z-20 top-32"></div>

                <section className="first third mt-48 flex justify-center items-center">
                    <div className="text-start">
                        <span className="block text-5xl font-bold mb-6">Watch everywhere</span>
                        <span className="block text-2xl w-[550px]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
                    </div>
                    <div className="secImg flex justify-center items-center">
                        <Image src="/images/device-pile-in.png" alt="Devices" width={555} height={0} />
                        {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoPlay loop muted className="absolute w-full h-full"></video> */}
                    </div>
                </section>

                <div className="separation bg-gray-900 h-2 relative z-20 top-32"></div>

                <section className="first second mt-48 flex justify-center items-center">
                    <div className="secImg flex justify-center items-center">
                        <Image src="/images/kids.png" alt="Kids" width={555} height={0} />
                    </div>
                    <div className="text-start">
                        <span className="block text-5xl font-bold mb-6">Create profiles for kids</span>
                        <span className="block text-2xl w-[600px]">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
                    </div>
                </section>

                <div className="separation bg-gray-900 h-2 relative z-20 top-20"></div>

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

                <div className="separation bg-gray-900 h-2 relative z-20 top-14"></div>

                <footer className="text-white grid justify-center items-center w-[1600px] mt-24 pb-20">
                    <div className="questions mb-8">Questions? Call 000-800-919-1694</div>
                    <div className="footer flex">
                        <div className="footer-item flex flex-col justify-center items-center gap-10 w-96 underline cursor-pointer">
                            <a href="faq">Investor Relations</a>
                            <a href="faq">Jobs</a>
                            <a href="faq">Ways to Watch</a>
                            <a href="faq">Terms of Use</a>
                        </div>
                        <div className="footer-item flex flex-col justify-center items-center gap-10 w-96 underline cursor-pointer">
                            <a href="faq">Help Centre</a>
                            <a href="faq">Account</a>
                            <a href="faq">Speed Test</a>
                            <a href="faq">Legal Notices</a>
                        </div>
                        <div className="footer-item flex flex-col justify-center items-center gap-10 w-96 underline cursor-pointer">
                            <a href="faq">Media Centre</a>
                            <a href="faq">Privacy</a>
                            <a href="faq">Cookie Preferences</a>
                            <a href="faq">Corporate</a>
                        </div>
                        <div className="footer-item flex flex-col justify-center items-center gap-10 w-96 underline cursor-pointer ">
                            <a href="faq">Contact Us</a>
                            <a href="faq">Speed Test</a>
                            <a href="faq">Legal Notices</a>
                            <a href="faq">Only on Netflix</a>
                        </div>
                    </div>
                    <div>
                        <button className="btn text-base border rounded-md font-semibold mt-8 py-1 px-8">English</button>
                    </div>
                    <div className="title mt-8">Netflix India</div>
                </footer>
            </div>
        </>
    );
}
