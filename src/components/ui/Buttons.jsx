import React from "react";

export default function Buttons() {
    return (
        <div className="grid grid-cols-2 gap-2 w-full">
            <button className="bg-yellow-500 text-white p-4 rounded-lg">Get Help</button>
            <button className="bg-green-500 text-white p-4 rounded-lg">Provide Help</button>
            <button className="bg-blue-500 text-white p-4 rounded-lg col-span-2">Donate</button>
            <button className="bg-red-600 text-white p-4 rounded-lg col-span-2">SOS</button>
        </div>
    )
}