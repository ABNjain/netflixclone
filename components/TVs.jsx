// components/TVs.jsx
import React from "react";
import Image from "next/image";

const TVs = () => {
  return (
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
  )
}

export default TVs