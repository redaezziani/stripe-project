import db, { secret } from '@/(db)/secrets';
import { jwtVerify } from "jose";
import { NextResponse, NextRequest } from "next/server";

const key = new TextEncoder().encode(secret.jwt_secret);

export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest, res: NextResponse): Promise<void | Response> {
    try {
        const token = req.nextUrl.searchParams.get('token')
        const { payload } = await jwtVerify(token??'', key, {
            algorithms: ['HS256'],
        });
        const payment = await db.paymentLink.findMany({
            where:{
                userId:payload.userId as string,
                productId:payload.productId as string,
                //@ts-ignore
                amount:parseFloat(payload.amount.toString()),
            }
           
        })
        if (!payment) {
            return Response.json({ status: 'error', message: 'Payment not found' });
        }
        
        const fisrtPayment = payment[0];
        const  data = {
            userId : fisrtPayment.userId,
            productId :fisrtPayment.productId,
            amount : fisrtPayment.amount ,
            currency: fisrtPayment.currency
        };
       
        return Response.json({ status: 'success', message: 'Payment verified' , data:data});
    }

    catch (error) {
        console.error(error);
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}







