import { verifyToken } from "@/(db)/lib/auth";
import db from "@/(db)/secrets";
import { AnalysDataType } from "@/app/types/user";
import { NextResponse,NextRequest } from "next/server";

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
        const data:AnalysDataType={
            transactionsNumber: 0,
            totalDayAmount: 0,
            totalAmount: 0
        }
        const transactionsNumber = await  db.transaction.count({
            where:{
                userId:user.payload.id as string
            }
        })
        const totalAmount= await db.transaction.aggregate({
            where:{
                userId:user.payload.id as string,
                type:'PAID'
            },
            _sum:{
                amount:true
            }
        })

        const totalDayAmount= await db.transaction.aggregate({
            where:{
                userId:user.payload.id as string,
                createdAt:{
                    gte:new Date(new Date().setHours(0,0,0,0)),
                    lte:new Date(new Date().setHours(23,59,59,999))
                },
                type:'PAID'
            },
            _sum:{
                amount:true
            }
        })  
        data.transactionsNumber=transactionsNumber
        data.totalAmount=totalAmount._sum.amount?totalAmount._sum.amount:0
        data.totalDayAmount=totalDayAmount._sum.amount?totalDayAmount._sum.amount:0
        return Response.json({ status: 'success', data, message: 'user found' });
    }
 
    catch (error) {
        console.error(error);
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}