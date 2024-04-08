import { verifyToken } from "@/(db)/lib/auth";
import db from "@/(db)/secrets";
import { NextResponse, NextRequest } from "next/server";


export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest, res: NextResponse): Promise<void | Response> {
    try {
        const token = req.cookies.get('token')?.value
        if (!token) {
            return Response.json({ status: 'error', message: 'No token found' });
        }
        const user = await verifyToken(token);
        if (!user || user?.payload.role !== 'admin') {
            return Response.json({ status: 'error', message: 'User not found or not an admin' });
        }
        const data = await db.bankTransfer.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        })
        return Response.json({ status: 'success', data: data, message: 'user found' });
    }

    catch (error) {
        console.error(error);
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}








