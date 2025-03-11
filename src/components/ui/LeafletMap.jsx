import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
    return (
        <div className="relative w-full h-full">
            {/* Responsive Wrapper for Aspect Ratio */}
            <div className="aspect-square sm:aspect-none sm:h-full sm:w-full">
                <MapContainer
                    center={[20, 78]}
                    zoom={5}
                    className="h-full w-full rounded-lg border border-amber-300"
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[20, 78]}>
                        <Popup>Disaster Area</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}
