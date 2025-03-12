// app/layout.js (Server Component - Can export metadata)
import LayoutWrapper from "./LayoutWrapper";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SessionWrapper from "../frontend/components/SessionWrapper";

export const metadata = {
    title: "Disasterly",
    description: "A Disaster relief web app",
};

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>  {/* Wrap the entire app inside SessionWrapper */}
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
            <Analytics />
        </SessionWrapper>
        </body>
        </html>
    );
}
