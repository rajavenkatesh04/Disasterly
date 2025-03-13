"use client";
import { useRouter } from "next/navigation";
import { Plus, Handshake, DollarSign, AlertTriangle } from "lucide-react";

export default function ActionButtons() {
    const router = useRouter();

    const buttons = [
        {
            label: "Get Help",
            number: "Request assistance",
            gradient: "from-blue-500 to-blue-600",
            hoverGradient: "from-blue-600 to-blue-700",
            icon: <Plus size={24} />,
            href: "/get-help",
            description: "Access support services"
        },
        {
            label: "Provide Help",
            number: "Volunteer services",
            gradient: "from-emerald-500 to-green-500",
            hoverGradient: "from-emerald-600 to-green-600",
            icon: <Handshake size={24} />,
            href: "/provide-help",
            description: "Offer your assistance"
        },
        {
            label: "Donate",
            number: "Support relief efforts",
            gradient: "from-amber-400 to-yellow-500",
            hoverGradient: "from-amber-500 to-yellow-600",
            icon: <DollarSign size={24} />,
            href: "/donation",
            description: "Financial contributions"
        },
        {
            label: "SOS",
            number: "Emergency assistance",
            gradient: "from-red-500 to-red-600",
            hoverGradient: "from-red-600 to-red-700",
            icon: <AlertTriangle size={24} />,
            href: "/sos",
            description: "Urgent help needed"
        },
    ];

    return (
        <div className="rounded-xl overflow-hidden bg-white/95 backdrop-blur-md shadow-md">
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-3 px-4">
                <h2 className="text-xl font-bold text-white text-center">Action Buttons</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-3">
                    {buttons.map((button, index) => (
                        <li
                            key={index}
                            className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
                            onClick={() => router.push(button.href)}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${button.gradient} group-hover:${button.hoverGradient} transition-all duration-300`}></div>
                            <div className="relative flex items-center gap-4 p-4 text-white">
                                <div className="bg-white/20 p-2 rounded-full">
                                    {button.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-lg">{button.label}</span>
                                    <span className="font-bold">{button.number}</span>
                                    <span className="text-xs text-white/80">{button.description}</span>
                                </div>
                                <div className="ml-auto">
                                    <div className="px-3 py-1 bg-white/20 group-hover:bg-white/30 rounded-full text-sm transition-colors duration-200">
                                        Go
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}