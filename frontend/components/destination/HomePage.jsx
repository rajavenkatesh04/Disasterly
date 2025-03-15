"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ActionButtons from "../ui/ActionButtons";
import EmergencyContacts from "../ui/EmergencyContacts";
import SudoMap from "@/components/maps/SudoMap";


// Load Map component dynamically with no SSR since Leaflet requires window object
const MapComponent = dynamic(() => import("../maps/MapComponent"), {
    ssr: false,
});



export default function HomePage() {
    // State to track window height for map sizing
    const [mapHeight, setMapHeight] = useState("400px");

    // Calculate and set the map height on mount and window resize
    useEffect(() => {
        const updateMapHeight = () => {
            // Only adjust on larger screens
            if (window.innerWidth >= 768) {
                // Get combined height of action buttons and emergency contacts
                const rightColumnHeight = document.getElementById("rightColumn")?.clientHeight;
                if (rightColumnHeight) {
                    setMapHeight(`${rightColumnHeight}px`);
                }
            } else {
                // Default height for mobile
                setMapHeight("400px");
            }
        };

        // Initial calculation
        setTimeout(updateMapHeight, 100); // Small delay to ensure components are rendered

        // Update on resize
        window.addEventListener("resize", updateMapHeight);
        return () => window.removeEventListener("resize", updateMapHeight);
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Hero Section - Always at top */}
            <section className="mb-6 mt-20">
                <div className="rounded-xl overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white shadow-lg">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Disasterly</h1>
                    <p className="text-white/90 text-sm md:text-base">
                        A Project aimed at unifying critical services to minimise loss of lives....
                        <button type="button" onClick={() => (window.location.href = "/LandingPage")}>
                            Visit now
                        </button>
                    </p>


                </div>
            </section>

            {/* Mobile Layout (Stack) */}
            <div className="block md:hidden space-y-6">
                {/* Map - Full width on mobile */}
                <div className="h-96 w-full">
                    {/*<MapComponent />*/}
                    <SudoMap />
                </div>

                {/* Action Buttons */}
                <ActionButtons />

                {/* Emergency Contacts */}
                <EmergencyContacts />
            </div>

            {/* Tablet/Desktop Layout (Side by Side) */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
                {/* Left Side - Map */}
                <div style={{ height: mapHeight }} className="transition-all duration-300">
                    {/*<MapComponent />*/}
                    <SudoMap />
                </div>

                {/* Right Side - Action Buttons and Emergency Contacts */}
                <div id="rightColumn" className="space-y-6">
                    <ActionButtons />
                    <EmergencyContacts />
                </div>
            </div>
        </div>
    );
}