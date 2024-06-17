// components/Footer.jsx
import React from "react";

export default function Footer () {
  return (
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
  )
}
