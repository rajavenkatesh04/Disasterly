import { NextResponse } from "next/server";

export async function middleware(request) {
    const { getToken } = await import("next-auth/jwt"); // Dynamic import

    const path = request.nextUrl.pathname;

    if (
        path.startsWith("/api") ||
        path.startsWith("/_next") ||
        path === "/favicon.ico"
    ) {
        return NextResponse.next();
    }

    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    });

    console.log("Middleware: Token data:", token); // Debugging

    if (!token) {
        return NextResponse.next();
    }

    if (path === "/complete-profile" && token.isProfileComplete) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (!token.isProfileComplete && path !== "/complete-profile") {
        return NextResponse.redirect(new URL("/complete-profile", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
