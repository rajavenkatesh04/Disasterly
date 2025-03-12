export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6 rounded-lg m-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                {/* Section 1: Logo or Mission Statement */}
                <div>
                    <h1 className="text-2xl font-bold text-white">Disasterly</h1>
                    <p className="mt-2 text-sm">
                        Dedicated to providing immediate assistance and connecting people during times of crisis.
                    </p>
                </div>

                {/* Section 2: Navigation Links */}
                <div>
                    <h2 className="text-lg font-semibold text-white">Quick Links</h2>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="#map" className="hover:text-amber-400">Map</a>
                        </li>
                        <li>
                            <a href="#help" className="hover:text-amber-400">Get Help</a>
                        </li>
                        <li>
                            <a href="#contacts" className="hover:text-amber-400">Emergency Contacts</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-amber-400">About Us</a>
                        </li>
                    </ul>
                </div>

                {/* Section 3: Contact Info */}
                <div>
                    <h2 className="text-lg font-semibold text-white">Contact Us</h2>
                    <p className="mt-2 text-sm">Email: support@disasterrelief.org</p>
                    <p className="text-sm">Phone: +1 (800) 123-4567</p>
                    <p className="mt-2">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-400"
                        >
                            Follow us on Twitter
                        </a>
                    </p>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
                © 2025 Disasterly. All rights reserved.
            </div>
        </footer>
    );
}
