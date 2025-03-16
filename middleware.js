import { NextResponse } from "next/server";

export async function middleware(request) {
    const { getToken } = await import("next-auth/jwt"); // Dynamic import
    const path = request.nextUrl.pathname;

    // Skip middleware for these paths
    if (
        path.startsWith("/api") ||
        path.startsWith("/_next") ||
        path === "/favicon.ico" ||
        path === "/signin" ||
        path === "/auth/signin" ||
        path.startsWith("/auth/") ||
        path.includes("callback")  // Add this to bypass OAuth callback routes
    ) {
        console.log("Bypassing middleware for path:", path);
        return NextResponse.next();
    }

    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    });

    console.log("Middleware: Token data:", token, "Path:", path);

    // If no token and not already on signin, redirect to signin
    if (!token && path !== "/signin") {
        console.log("No token, redirecting to signin");
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    // If token exists (user is authenticated)
    if (token) {
        // Redirect users with complete profiles away from complete-profile page
        if (path === "/complete-profile" && token.isProfileComplete === true) {
            console.log("Profile complete, redirecting to dashboard");
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }

        // Redirect users with incomplete profiles to complete-profile page
        if (token.isProfileComplete === false && path !== "/complete-profile") {
            console.log("Profile incomplete, redirecting to complete-profile");
            return NextResponse.redirect(new URL("/complete-profile", request.url));
        }
    }

    console.log("Proceeding normally to:", path);
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all paths except:
         * 1. /api routes
         * 2. /_next (Next.js internals)
         * 3. /favicon.ico, /fonts, /images (static files)
         * 4. All files in the public folder
         */
        "/((?!api|_next/static|_next/image|favicon.ico|fonts|images|public).*)"
    ],
};