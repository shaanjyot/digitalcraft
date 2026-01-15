import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value;
    const isLoginPage = request.nextUrl.pathname === '/admin/login';

    // Protect all /admin routes
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // If user is trying to access login page, let them through
        // Optional: could redirect to dashboard if already logged in
        if (isLoginPage) {
            if (token) {
                return NextResponse.redirect(new URL('/admin/dashboard', request.url));
            }
            return NextResponse.next();
        }

        // For all other admin routes, check for token
        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
