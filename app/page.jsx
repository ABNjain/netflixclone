// app/page.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link.js";

import SignInButton from "../components/signInButton.jsx";
import Footer from "../components/Footer.jsx";
import FAQs from "../components/FAQs.jsx";
import Kids from "../components/Kids.jsx";
import Screens from "../components/Screens.jsx";
import Downloads from "../components/Downloads.jsx";
import TVs from "../components/TVs.jsx";

const Separation = () => {
    return (
        <div className="separation bg-gray-900 h-2 relative z-20 top-20"></div>
    );
}

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
                        <Link href={"#"}><span><Image width={150} height={0} src="/images/logo.svg" alt="Netflix Logo" /></span></Link>
                        <SignInButton />
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
                <Separation />
                <TVs />
                <Separation />
                <Downloads />
                <Separation />
                <Screens />
                <Separation />
                <Kids />
                <Separation />
                <FAQs />
                <Separation />
                <Footer />
            </div>
        </>
    );
}
