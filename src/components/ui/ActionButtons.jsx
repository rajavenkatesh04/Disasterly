import { Add, Handshake, AttachMoney, Warning } from "@mui/icons-material";

export default function ActionButtons() {
    const buttons = [
        { label: "Get Help", color: "bg-blue-500", icon: <Add /> },
        { label: "Provide Help", color: "bg-green-500", icon: <Handshake /> },
        { label: "Donate", color: "bg-yellow-500", icon: <AttachMoney /> },
        { label: "SOS", color: "bg-red-500", icon: <Warning /> },
    ];

    return (
        <div className={"border border-blue-400 rounded-lg p-4 bg-gray-100"}>
            <h2 className="text-2xl font-bold text-purple-800 text-center mb-4">Action Buttons</h2>
            <div className="grid grid-cols-2 gap-4 ">

                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg shadow-md ${button.color}`}
                    >
                        {button.icon}
                        <span>{button.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
