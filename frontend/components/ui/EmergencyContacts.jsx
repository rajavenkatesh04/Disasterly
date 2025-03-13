"use client";
import { Shield, Flame, Heart, LifeBuoy } from "lucide-react";

export default function EmergencyContacts() {
    const contacts = [
        {
            label: "Police",
            number: "100",
            gradient: "from-red-500 to-red-600",
            hoverGradient: "from-red-600 to-red-700",
            icon: <Shield size={24} />,
            description: "For law enforcement"
        },
        {
            label: "Fire Department",
            number: "112",
            gradient: "from-orange-500 to-orange-600",
            hoverGradient: "from-orange-600 to-orange-700",
            icon: <Flame size={24} />,
            description: "For fire emergencies"
        },
        {
            label: "Medical Emergency",
            number: "911",
            gradient: "from-blue-500 to-blue-600",
            hoverGradient: "from-blue-600 to-blue-700",
            icon: <Heart size={24} />,
            description: "For medical assistance"
        },
        {
            label: "Disaster Relief Center",
            number: "1-800-RED-CROSS",
            gradient: "from-green-500 to-green-600",
            hoverGradient: "from-green-600 to-green-700",
            icon: <LifeBuoy size={24} />,
            description: "For disaster relief"
        },
    ];

    return (
        <div className="rounded-xl overflow-hidden bg-white/95 backdrop-blur-md shadow-md">
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-3 px-4">
                <h2 className="text-xl font-bold text-white text-center">Emergency Contacts</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-3">
                    {contacts.map((contact, index) => (
                        <li
                            key={index}
                            className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} group-hover:${contact.hoverGradient} transition-all duration-300`}></div>
                            <div className="relative flex items-center gap-4 p-4 text-white">
                                <div className="bg-white/20 p-2 rounded-full">
                                    {contact.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-lg">{contact.label}</span>
                                    <span className="font-bold">{contact.number}</span>
                                    <span className="text-xs text-white/80">{contact.description}</span>
                                </div>
                                <div className="ml-auto">
                                    <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-sm transition-colors duration-200">
                                        Call
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}