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
        
        const data = await db.accountMony.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
       
        let holdCount = 0;
        let balanceCount = 0;
        let withdawCount = 0;
        let completCount = 0;
        data.map((item)=>{
            holdCount += item.hold;
            balanceCount += item.balance;
            withdawCount += item.withdaw;
            completCount += item.complet;
        })
        const count = {
            hold: holdCount,
            balance: balanceCount,
            withdaw: withdawCount,
            complet: completCount
        }
        return Response.json({ status: 'success', data: count, message: 'user found' });
    }

    catch (error) {
        console.error(error);
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}







