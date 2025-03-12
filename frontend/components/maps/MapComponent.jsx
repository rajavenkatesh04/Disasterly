"use client";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const map = L.map("map").setView([51.505, -0.09], 13);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            return () => {
                map.remove(); // Cleanup on unmount
            };
        }
    }, []);

    return <div id="map" className="w-full h-full rounded-lg shadow-md" />;
}
