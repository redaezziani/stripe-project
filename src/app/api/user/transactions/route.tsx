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
        if (!user) {
            return Response.json({ status: 'error', message: 'User not found' });
        }
        
        
        const transaction = await db.transaction.findMany({
            where: {
                userId: user?.payload.id as string
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return Response.json({ status: 'success', data: transaction, message: 'user found' });
    }

    catch (error) {
        console.error(error);
        // Handle error and return an appropriate response
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}




export async function DELETE(req: NextRequest, res: NextResponse): Promise<void | Response> {
    try {
        const token = req.cookies.get('token')?.value
        if (!token) {
            return Response.json({ status: 'error', message: 'No token found' });
        }
        const user = await verifyToken(token);
        if (!user || user?.payload.role !== 'admin') {
            return Response.json({ status: 'error', message: 'User not found' });
        }
        const { id } = await req.json();
        const transaction = await db.transaction.delete({
            where: {
                id: id as string
            }
        })
        return Response.json({ status: 'success', data: transaction, message: 'transaction deleted' });
    }
    catch (error) {
        console.error(error);
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}





