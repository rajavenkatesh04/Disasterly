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
        path.startsWith("/auth/")
    ) {
        return NextResponse.next();
    }

    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    });

    console.log("Middlewareeee: Token data:", token, "Path:", path); // Enhanced debugging

    // Redirect unauthenticated users to signin
    if (!token) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    // Redirect users with complete profiles away from complete-profile page
    if (path === "/complete-profile" && token.isProfileComplete === true) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Redirect users with incomplete profiles to complete-profile page
    if (token.isProfileComplete === false && path !== "/complete-profile") {
        console.log("Redirecting to complete-profile: profile incomplete");
        return NextResponse.redirect(new URL("/complete-profile", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};