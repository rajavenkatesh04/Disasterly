"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
    const { data: session } = useSession();

    return session ? (
        <div className="flex items-center gap-4">
            <p className="text-sm">Welcome, {session.user.name}!</p>
            <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Sign Out
            </button>
        </div>
    ) : (
        <button
            onClick={() => signIn("google")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
        >
            Sign In with Google
        </button>
    );
}
