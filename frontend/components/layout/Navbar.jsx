"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LoginButton from "../ui/LoginButton"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-sm p-4 mx-5 mt-5 sticky top-0 z-[1000] border border-gray-100">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-medium text-gray-800">Disasterly</h1>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6 text-sm text-gray-600">
                    <li><a href="#volunteer" className="hover:text-gray-900 transition">Volunteer</a></li>
                    <li><a href="#alerts" className="hover:text-gray-900 transition">Alerts</a></li>
                    <li><a href="#donation" className="hover:text-gray-900 transition">Donate</a></li>
                </ul>

                {/* Google Login Button & Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <LoginButton /> {/* Google Sign-In Button */}

                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu with Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-16 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm border-t border-gray-100 rounded-b p-4"
                    >
                        <ul className="flex flex-col gap-4 text-sm text-gray-600">
                            <li><a href="#volunteer" className="block py-1 hover:text-gray-900 transition">Volunteer</a></li>
                            <li><a href="#alerts" className="block py-1 hover:text-gray-900 transition">Alerts</a></li>
                            <li><a href="#donation" className="block py-1 hover:text-gray-900 transition">Donate</a></li>
                            <li className="pt-2 border-t border-gray-100">
                                <LoginButton /> {/* Google Sign-In Button inside Mobile Menu */}
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
