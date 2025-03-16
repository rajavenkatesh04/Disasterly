import GoogleProvider from "next-auth/providers/google";
import dbConnect from "lib/mongodb/connection";
import User from "lib/mongodb/models/User";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            try {
                await dbConnect();
                console.log("Signing in user:", user.email);

                // Check if the user already exists
                const existingUser = await User.findOne({ email: user.email });

                if (!existingUser) {
                    // Create a new user if they don't exist
                    await User.create({
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        isProfileComplete: false
                    });
                    console.log("New user created:", user.email);
                }

                return true;
            } catch (error) {
                console.error("Error during sign-in:", error);
                return false;
            }
        },

        async jwt({ token, user, trigger, session }) {
            // Handle session updates - this is crucial for updating the profile completion status
            if (trigger === "update" && session) {
                console.log("JWT update triggered with session data:", session.user);
                // Make sure we're copying all user properties from the updated session
                return {
                    ...token,
                    isProfileComplete: session.user.isProfileComplete
                };
            }

            // Initial token creation
            if (user) {
                try {
                    await dbConnect();
                    // Get the latest user data from the database
                    const dbUser = await User.findOne({ email: user.email });

                    if (dbUser) {
                        // Set profile completion status from database
                        token.isProfileComplete = dbUser.isProfileComplete || false;
                        console.log("Setting initial JWT with isProfileComplete:", token.isProfileComplete);
                    }
                } catch (error) {
                    console.error("Error fetching user in JWT callback:", error);
                }
            }

            return token;
        },

        async session({ session, token }) {
            // Add the isProfileComplete flag to the session user object
            if (session?.user) {
                session.user.isProfileComplete = token.isProfileComplete;
                console.log("Creating session with isProfileComplete:", session.user.isProfileComplete);
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    debug: process.env.NODE_ENV === "development",
};