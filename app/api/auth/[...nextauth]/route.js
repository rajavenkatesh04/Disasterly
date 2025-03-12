import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/lib/mongodb/connection";
import User from "@/lib/mongodb/models/User";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            await dbConnect();
            const existingUser = await User.findOne({ email: user.email });

            if (!existingUser) {
                await User.create({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                });
            }
            return true;
        },
        async session({ session }) {
            await dbConnect();
            const dbUser = await User.findOne({ email: session.user.email });
            session.user.id = dbUser?._id;
            return session;
        }
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
