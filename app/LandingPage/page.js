"use client"

import React from 'react';
import { ArrowRight, MapPin, Users, AlertCircle, Heart, Menu, X, Info, Shield, Clock } from 'lucide-react';

const Page = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Navigation - Modern, minimal design with better mobile support */}
            <nav className="sticky top-0 z-50 bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Disasterly</span>
                        </div>

                        {/* Mobile menu button */}
                        <div className="sm:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-500 hover:text-blue-600 focus:outline-none"
                            >
                                {mobileMenuOpen ?
                                    <X className="h-6 w-6" /> :
                                    <Menu className="h-6 w-6" />
                                }
                            </button>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden sm:flex items-center space-x-6">
                            <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-600 transition-all">Features</a>
                            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-600 transition-all">How It Works</a>
                            <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-600 transition-all">Contact</a>
                            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl">
                                Get Help
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                {mobileMenuOpen && (
                    <div className="sm:hidden bg-white shadow-lg rounded-b-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#features" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md" onClick={() => setMobileMenuOpen(false)}>Features</a>
                            <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
                            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                            <button className="block w-full text-left mt-4 px-3 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md" onClick={() => setMobileMenuOpen(false)}>
                                Get Help
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section - More dynamic with better visual hierarchy */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
                {/* Abstract geometric shapes for visual interest */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute -left-10 -top-10 w-64 h-64 bg-white rounded-full"></div>
                    <div className="absolute right-0 top-1/4 w-96 h-96 bg-white rounded-full"></div>
                    <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-white rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40">
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                <span className="block">Connecting Communities</span>
                                <span className="block mt-2 text-blue-100">When It Matters Most</span>
                            </h1>
                            <p className="mt-6 max-w-lg mx-auto text-lg text-blue-100 sm:text-xl md:max-w-3xl md:text-2xl">
                                A centralized platform that connects disaster victims with resources, volunteers, and aid organizations in real-time—even with limited connectivity.
                            </p>
                            <div className="mt-12 sm:flex sm:justify-center sm:space-x-6">
                                <button className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-white hover:bg-gray-50 text-blue-600 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                                    Request Aid <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                                <button className="w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-blue-700 hover:bg-blue-800 border-2 border-white transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                                    Offer Help <Heart className="ml-2 h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave divider instead of skew */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff" preserveAspectRatio="none" className="w-full h-12 sm:h-16 md:h-20">
                        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </div>

            {/* Features Section - Card-based approach with hover effects */}
            <div id="features" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block pb-2 border-b-4 border-blue-600">
                            Designed for When Connection Matters Most
                        </h2>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                            Our platform works even with limited or intermittent connectivity, ensuring help reaches those who need it.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                                <MapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Resource Mapping</h3>
                            <p className="text-gray-600 text-lg">
                                Interactive maps showing shelters, medical aid, and distribution points that work offline once downloaded.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Coordination</h3>
                            <p className="text-gray-600 text-lg">
                                Match skills with needs and coordinate response teams even with limited connectivity through our mesh network system.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 lg:col-span-1 md:col-span-2">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                                <AlertCircle className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Offline-First Design</h3>
                            <p className="text-gray-600 text-lg">
                                The platform functions without constant internet, syncing data when connectivity returns to keep everyone updated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section - Modern timeline layout */}
            <div id="how-it-works" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block pb-2 border-b-4 border-blue-600">
                            How Disasterly Works
                        </h2>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                            Our platform bridges the gap between those in need and those who can help, despite connectivity challenges.
                        </p>
                    </div>

                    <div className="mt-20 relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-600 transform -translate-x-1/2"></div>

                        <div className="space-y-24 lg:space-y-0 relative">
                            {/* Step 1 */}
                            <div className="lg:flex lg:items-center lg:justify-between">
                                <div className="lg:w-5/12">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                        <div className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg mb-4">1</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Before Disaster</h3>
                                        <p className="text-gray-600 text-lg">
                                            Install our Progressive Web App to ensure you have access to critical information even when networks go down.
                                        </p>
                                    </div>
                                </div>

                                {/* Circle connector for desktop */}
                                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-2xl z-10">1</div>

                                <div className="lg:w-5/12">
                                    {/* Empty div for layout */}
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="lg:flex lg:items-center lg:justify-between">
                                <div className="lg:w-5/12">
                                    {/* Empty div for layout */}
                                </div>

                                {/* Circle connector for desktop */}
                                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-2xl z-10">2</div>

                                <div className="lg:w-5/12">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                        <div className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg mb-4">2</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect When Possible</h3>
                                        <p className="text-gray-600 text-lg">
                                            At connectivity hubs or through mesh networks, update your situation and available resources.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="lg:flex lg:items-center lg:justify-between">
                                <div className="lg:w-5/12">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                        <div className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg mb-4">3</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Request or Offer Help</h3>
                                        <p className="text-gray-600 text-lg">
                                            Whether you need assistance or can provide resources, our matching system works to connect the right people at the right time.
                                        </p>
                                    </div>
                                </div>

                                {/* Circle connector for desktop */}
                                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-2xl z-10">3</div>

                                <div className="lg:w-5/12">
                                    {/* Empty div for layout */}
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="lg:flex lg:items-center lg:justify-between">
                                <div className="lg:w-5/12">
                                    {/* Empty div for layout */}
                                </div>

                                {/* Circle connector for desktop */}
                                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-2xl z-10">4</div>

                                <div className="lg:w-5/12">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                        <div className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg mb-4">4</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Coordinate Response</h3>
                                        <p className="text-gray-600 text-lg">
                                            Our system prioritizes and organizes aid distribution efficiently, ensuring critical needs are met first.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats/Impact Section */}
            <div className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white inline-block pb-2 border-b-4 border-white">
                            Making a Difference Together
                        </h2>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                            Disasterly has helped communities recover faster and more effectively.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform transition-all hover:scale-105">
                            <p className="text-5xl font-bold text-white mb-2">120+</p>
                            <p className="text-xl text-blue-100">Communities Served</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform transition-all hover:scale-105">
                            <p className="text-5xl font-bold text-white mb-2">45,000+</p>
                            <p className="text-xl text-blue-100">People Helped</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform transition-all hover:scale-105">
                            <p className="text-5xl font-bold text-white mb-2">12,800+</p>
                            <p className="text-xl text-blue-100">Volunteers Connected</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform transition-all hover:scale-105">
                            <p className="text-5xl font-bold text-white mb-2">92%</p>
                            <p className="text-xl text-blue-100">Faster Response Time</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block pb-2 border-b-4 border-blue-600">
                            Real Stories of Impact
                        </h2>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                            Hear from communities and organizations about how Disasterly has made a difference.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Testimonial 1 */}
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100 relative">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <p className="italic text-gray-600 mb-4">
                                "When the hurricane hit, we had no way to communicate with neighboring towns. Disasterly's offline maps guided people to our shelter when nothing else worked."
                            </p>
                            <div className="flex items-center mt-6">
                                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                                <div className="ml-4">
                                    <p className="font-bold text-gray-900">Maria Rodriguez</p>
                                    <p className="text-gray-500">Community Leader, Port Haven</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100 relative">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <p className="italic text-gray-600 mb-4">
                                "As a volunteer coordinator, I've never seen a system work so well with limited connectivity. We were able to deploy teams exactly where they were needed most."
                            </p>
                            <div className="flex items-center mt-6">
                                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                                <div className="ml-4">
                                    <p className="font-bold text-gray-900">David Chen</p>
                                    <p className="text-gray-500">Volunteer Coordinator, First Response Team</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100 relative md:col-span-2 lg:col-span-1">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <p className="italic text-gray-600 mb-4">
                                "The mesh network capability literally saved lives in our community. When all other communication failed, Disasterly kept working."
                            </p>
                            <div className="flex items-center mt-6">
                                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                                <div className="ml-4">
                                    <p className="font-bold text-gray-900">Sarah Johnson</p>
                                    <p className="text-gray-500">Emergency Management Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl shadow-2xl overflow-hidden">
                        <div className="px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
                            <div className="lg:flex lg:items-center lg:justify-between">
                                <div className="lg:w-0 lg:flex-1">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                        Prepare Your Community Today
                                    </h2>
                                    <p className="mt-4 max-w-3xl text-lg text-blue-100">
                                        Don't wait for disaster to strike. Download Disasterly now and be ready when your community needs it most.
                                    </p>
                                </div>
                                <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                                    <div className="inline-flex rounded-md shadow">
                                        <button className="py-4 px-6 bg-white rounded-full font-medium text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-1 shadow-lg">
                                            Download Now
                                        </button>
                                    </div>
                                    <div className="inline-flex ml-4">
                                        <button className="py-4 px-6 rounded-full font-medium text-white border-2 border-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-1">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block pb-2 border-b-4 border-blue-600">
                            Get In Touch
                        </h2>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                            Have questions or want to partner with us? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows={4} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 space-y-8">
                            <div>
                                <div className="flex items-center mb-4">
                                    <Info className="h-6 w-6 text-blue-600 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                                </div>
                                <p className="text-gray-600">
                                    Email: contact@disasterly.org<br />
                                    Phone: (555) 123-4567
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center mb-4">
                                    <Shield className="h-6 w-6 text-blue-600 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900">Emergency Support</h3>
                                </div>
                                <p className="text-gray-600">
                                    For emergency deployment requests:<br />
                                    emergencyhelp@disasterly.org<br />
                                    Hotline: (555) 911-0123
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center mb-4">
                                    <Clock className="h-6 w-6 text-blue-600 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900">Hours of Operation</h3>
                                </div>
                                <p className="text-gray-600">
                                    Support Team: 24/7<br />
                                    Administrative Office: Mon-Fri, 9am-5pm PT
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Disasterly</h3>
                            <p className="text-gray-400">
                                Helping communities prepare for, respond to, and recover from disasters with innovative technology solutions.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Access</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                            <div className="flex space-x-4 mb-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-gray-400 mb-2">Stay Updated</h4>
                                <div className="flex">
                                    <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">© 2025 Disasterly. All rights reserved.</p>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Page;