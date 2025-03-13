"use client";
import dynamic from "next/dynamic";
import EmergencyContacts from "../ui/EmergencyContacts";
import ActionButtons from "../ui/ActionButtons";

// Dynamically import Leaflet to avoid SSR issues
const LeafletMap = dynamic(() => import("../maps/LeafletMap"), {
    ssr: false,
});

export default function HomePage() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20 m-5">
                {/* Left Column - Map */}
                <div className="lg:col-span-2">
                    <LeafletMap />
                </div>

                {/* Right Column - ActionButtons and EmergencyContacts */}
                <div className="flex flex-col gap-4">
                    <ActionButtons />
                    <EmergencyContacts />
                </div>
            </div>

        </>
    );
}
