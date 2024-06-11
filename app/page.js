// pages/index.js

export default function Home() {
    return (
        <div className="main">
                <nav className="max-w-60vw flex justify-between mx-auto items-center h-16">
                <span><img width="53" src="/assets/images/logo.svg" alt="" /></span>
                <div>
                    <button className="btn">English</button>
                    <button className="btn btn-red-sm">Sign In</button>
                </div>
            </nav>

            <div className="box"></div>

            <div className="hero">
                <span className="font-martel-sans font-bold text-3xl text-white text-center">Enjoy big movies, hit series and more from ₹ 149.</span>
                <span className="text-white text-center">Join today. Cancel anytime.</span>
                <span className="text-white text-center">Ready to watch? Enter your email to create or restart your membership.</span>
                <div className="hero-buttons flex items-center justify-center gap-4">
                    <input type="text" placeholder="Email Address" className="input" />
                    <button className="btn btn-red">Get Started &gt;</button>
                </div>
            </div>

            <div className="separation h-7 bg-gray-800"></div>

            {/* Additional sections go here */}

            <footer className="text-white max-w-60vw mx-auto py-16">
                <div className="questions">Questions? Call 000-800-919-1694</div>
                <div className="footer grid grid-cols-2 gap-4">
                    <div className="footer-item">
                        <a href="faq">Investor Relations</a>
                        <a href="faq">Jobs</a>
                        <a href="faq">Ways to Watch</a>
                        <a href="faq">Terms of Use</a>
                    </div>
                    <div className="footer-item">
                        <a href="faq">Help Centre</a>
                        <a href="faq">Account</a>
                        <a href="faq">Speed Test</a>
                        <a href="faq">Legal Notices</a>
                    </div>
                    {/* Additional columns go here */}
                </div>
            </footer>
        </div>
    );
}
