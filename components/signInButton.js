import React from 'react';
import Link from 'next/link';

const SignInButton = () => {
    return (
        <Link href="/signin">
            <a className="btn btn-red-sm px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300">
                Sign In
            </a>
        </Link>
    );
};

export default SignInButton;
