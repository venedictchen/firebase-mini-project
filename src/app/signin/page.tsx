"use client"
import React, { useState } from "react";
import signIn from "../firebase/auth/signin";
import { useRouter } from 'next/navigation'
import toast from "react-hot-toast";

function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    

    const handleForm = async (event:any) => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);

        if (error) {
            console.log("masuk")
            toast.error("Failed to sign in. Please check credential!")
        } else {
            toast.success("Sign in success!")
            router.push("/admin");
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-200">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/3">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>
                <form onSubmit={handleForm}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="example@mail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            type="password"
                            name="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-indigo-600"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page;
