import React from 'react';
import { Cog, Clock, Sparkles } from 'lucide-react';

const FeatureInProgress = ({
                                       title = "Coming Soon",
                                       description = "This feature is currently under active development and will be available soon.",
                                       estimatedArrival = "Check back for updates!"
                                   }) => {
    return (
        <div className="w-full flex flex-col items-center justify-center p-6 border-4 border-dashed border-purple-400 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50">
            <div className="relative mb-6">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 opacity-70 blur-lg animate-pulse"></div>
                <Cog className="relative text-indigo-600 w-16 h-16 animate-spin" />
                <Sparkles className="text-yellow-500 w-8 h-8 absolute top-0 left-0 animate-pulse" />
                <Clock className="text-pink-500 w-8 h-8 absolute bottom-0 right-0" />
            </div>

            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2 text-center">{title}</h2>

            <p className="text-indigo-700 mb-4 text-center max-w-md">{description}</p>

            <div className="bg-gradient-to-r from-yellow-300 to-pink-500 px-6 py-2 rounded-full text-white font-medium shadow-md">
                {estimatedArrival}
            </div>

            <div className="mt-8 w-full max-w-md">
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full w-3/4 animate-pulse"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs font-medium">
                    <span className="text-blue-500">Development</span>
                    <span className="text-purple-500">Testing</span>
                    <span className="text-pink-500">Release</span>
                </div>
            </div>
        </div>
    );
};

export default FeatureInProgress;