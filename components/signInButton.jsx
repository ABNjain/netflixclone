import React from "react";
import Link from "next/link";

const SignInButton = () => {
    return (
        // <Link href="/signin">
        //     <div className="btn btn-red-sm px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300">
        //         Sign In
        //     </div>
        // </Link>
        <a href="/signin" className="btn btn-red-sm px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300">
            Sign In
        </a>
    );
};

export default SignInButton;
