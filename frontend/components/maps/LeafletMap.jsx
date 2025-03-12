"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import MapComponent without SSR
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function LeafletMap() {
    return (
        <div className="w-full h-[500px]">
            <MapComponent />
        </div>
    );
}
