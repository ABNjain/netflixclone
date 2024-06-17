// components/Kids.jsx
import React from "react";
import Image from "next/image";

const Kids = () => {
  return (
    <section className="first second mt-48 flex justify-center items-center">
                    <div className="secImg flex justify-center items-center">
                        <Image src="/images/kids.png" alt="Kids" width={555} height={0} />
                    </div>
                    <div className="text-start">
                        <span className="block text-5xl font-bold mb-6">Create profiles for kids</span>
                        <span className="block text-2xl w-[600px]">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
                    </div>
                </section>
  )
}

export default Kids