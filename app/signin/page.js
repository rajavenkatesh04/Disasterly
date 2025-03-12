"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
    const { data: session } = useSession();
    const router = useRouter();

    // Redirect to dashboard if already logged in
    useEffect(() => {
        if (session) {
            router.push("/dashboard");
        }
    }, [session, router]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Sign In to Disasterly
                </h1>
                <p className="text-gray-600 text-center mb-4">
                    Please sign in to continue.
                </p>
                <button
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                    className="flex items-center justify-center w-full px-6 py-3 text-white bg-red-500 hover:bg-red-600 rounded-md shadow-md transition duration-300"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google Logo"
                        className="w-6 h-6 mr-2"
                    />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}
