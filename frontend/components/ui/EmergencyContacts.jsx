import { LocalPolice, LocalFireDepartment, LocalHospital, VolunteerActivism } from "@mui/icons-material";

export default function EmergencyContacts() {
    const contacts = [
        { label: "Police", number: "100", color: "bg-red-500", icon: <LocalPolice /> },
        { label: "Fire Department", number: "112", color: "bg-orange-500", icon: <LocalFireDepartment /> },
        { label: "Medical Emergency", number: "911", color: "bg-blue-500", icon: <LocalHospital /> },
        { label: "Disaster Relief Center", number: "1-800-RED-CROSS", color: "bg-green-500", icon: <VolunteerActivism /> },
    ];

    return (
        <div className="border border-purple-800 rounded-lg p-4 bg-gray-100 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-800 text-center mb-4">Emergency Contacts</h2>
            <ul className="space-y-4">
                {contacts.map((contact, index) => (
                    <li
                        key={index}
                        className={`flex items-center gap-4 p-3 text-white rounded-lg shadow-md ${contact.color}`}
                    >
                        <span className="text-3xl">{contact.icon}</span>
                        <div className="flex flex-col">
                            <span className="font-medium text-lg">{contact.label}</span>
                            <span className="font-bold">{contact.number}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
