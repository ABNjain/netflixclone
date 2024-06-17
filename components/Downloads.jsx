// components/Downloads.jsx
import React from "react";
import Image from "next/image";

const Downloads = () => {
  return (
    <section className="first second mt-40 flex justify-center items-center">
                    <div className="secImg">
                        <Image src="/images/mobile.jpg" alt="Mobile" width={555} height={0} />
                    </div>
                    <div className="text-start">
                        <span className="block text-5xl w-[600px] font-extrabold mb-6">Download your shows to watch offline</span>
                        <span className="block text-2xl w-[500px] font-semibold">Save your favourites easily and always have something to watch.</span>
                    </div>
                </section>
  )
}

export default Downloads