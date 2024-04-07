'use server'
import { NextResponse,NextRequest } from "next/server";
import db from '@/(db)/secrets';
import { verifyToken } from "@/(db)/lib/auth";
export async function GET(req: NextRequest, res: NextResponse) {
    try {
       const cookies = req.cookies.get('token')?.value;
         if (!cookies) {
              throw new Error("Token not found");
         }
         const payload = await verifyToken(cookies);
       const notifications = await db.notification.findMany({
              where: {
                //@ts-ignore
                userId: payload?.id,
              },
              select: {
                title: true,
                message: true,
                type: true,
                action: true,
                createdAt: true
            }
        });
       if (!notifications) {
           throw new Error("Failed to fetch notifications");
       }
        return NextResponse.json({status: "success", data: notifications, "message": "notifications fetched"});
    } catch (error) {
        console.error(error);
    }
}


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        
        const res = await db.notification.create({
            data:
            {
            title: "Session Expired in 5 minutes",
            message: "Your session will expire in 5 minutes, please save your work",
            type: "ERROR",
            action: "DELETE",
            userId: "42a47bfe-0040-4efd-81e2-833e63dcc73c"
            },
            
        });
        if (!res) {
            throw new Error("Failed to create notifications");
        }
        
        return NextResponse.json({status: "success", data: res, "message": "notifications created"});
    } catch (error) {
        console.error(error);
    }
}
