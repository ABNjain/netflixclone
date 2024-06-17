// app/singin.jsx
import React from "react";

export default function SignIn() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
                <div className="bg-gray-800 p-8 rounded-md shadow-md w-full max-w-md">
                    <h1 className="text-3xl mb-6 text-center">Sign In</h1>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                            <input type="email" id="email" className="input bg-gray-700 text-white p-2 rounded-md w-full" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                            <input type="password" id="password" className="input bg-gray-700 text-white p-2 rounded-md w-full" />
                        </div>
                        <button type="submit" className="btn btn-red w-full py-2 rounded-md">Sign In</button>
                    </form>
                </div>
            </div>
        </>
    );
}
