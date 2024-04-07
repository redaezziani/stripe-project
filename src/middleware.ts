'use server';
import { verifyToken } from '@/(db)/lib/auth';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { publicRoute,privateRoute,REDIRECT_URL ,authRoute, adminRoute,userRoute, userRedirect,adminRedirect} from './lib/auth';


export const middleware= async (request: NextRequest) => {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get('token')?.value??'';
    const isVerified = await verifyToken(token);
    if (publicRoute.includes(path)) {
        return NextResponse.next();
    }
    // regex for admin and user route
    const adminregex = new RegExp(`^/dashboard/admin/.*$`);
    const userregex = new RegExp(`^/dashboard/user/.*$`);
    if (!isVerified && adminregex.test(path) || !isVerified && userregex.test(path)) {
        return NextResponse.redirect(new URL(REDIRECT_URL, request.nextUrl).toString());
    }
    if (isVerified && authRoute.includes(path)) {
      if (isVerified.payload.role === 'admin') {
        return NextResponse.redirect(new URL(adminRedirect, request.nextUrl).toString());
      }
      return NextResponse.redirect(new URL(userRedirect, request.nextUrl).toString());
    }
    const regex = new RegExp(`^/dashboard/(admin|user)/.*$`);
    if (isVerified && regex.test(path)) {
        // lets make two regex for admin and user
        const adminregex = new RegExp(`^/dashboard/admin/.*$`);
        const userregex = new RegExp(`^/dashboard/user/.*$`);
        if (isVerified.payload.role !== 'admin' &&  adminregex.test(path)) {
            return NextResponse.redirect(new URL(userRedirect, request.nextUrl).toString());
        }
        if (isVerified.payload.role !== 'user' &&   userregex.test(path)) {
            return NextResponse.redirect(new URL(adminRedirect, request.nextUrl).toString());
        }
        return NextResponse.next();
    }
    return NextResponse.next();    
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}


