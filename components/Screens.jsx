// components/Screens.jsx
import React from "react";
import Image from "next/image";

const Screens = () => {
  return (
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
  )
}

export default Screens