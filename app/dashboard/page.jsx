"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FeatureInProgress from "../../frontend/components/ui/FeatureInProgress";

const Dashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/signin");
        }
    }, [status, router]);

    // ✅ Show a loading screen while authentication is being checked
    if (status === "loading") {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl text-gray-600">Checking authentication...</p>
            </div>
        );
    }

    // ✅ Show dashboard content only if authenticated
    if (session) {
        return (
            <>
                <div>Welcome to the Dashboard, {session?.user?.name}!</div>
                <FeatureInProgress />
            </>
        );
    }

    return null; // Ensures no flickering if unauthenticated
};

export default Dashboard;
