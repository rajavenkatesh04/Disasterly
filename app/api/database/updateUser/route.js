import { NextResponse } from "next/server";
import dbConnect from "lib/mongodb/connection";
import User from "lib/mongodb/models/User";

export async function POST(req) {
    await dbConnect();
    try {
        const { email, ...updatedProfile } = await req.json();

        // Make sure we're explicitly setting isProfileComplete to true
        const updateData = {
            ...updatedProfile,
            isProfileComplete: true
        };

        // Update the user with the new profile data
        const user = await User.findOneAndUpdate(
            { email },
            updateData,
            { new: true }
        );

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Profile updated successfully",
            user: {
                email: user.email,
                isProfileComplete: user.isProfileComplete
            }
        }, { status: 200 });
    } catch (error) {
        console.error("Error updating profile:", error);
        return NextResponse.json({
            message: "Error updating profile",
            error: error.message
        }, { status: 500 });
    }
}