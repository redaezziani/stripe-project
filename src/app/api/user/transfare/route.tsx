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
        const data = await db.bankTransfer.findMany({
            where: {
                userId: user?.payload.id as string
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return Response.json({ status: 'success', data: data, message: 'user found' });
    }

    catch (error) {
        console.error(error);
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}

// post request

export async function POST(req: NextRequest, res: NextResponse): Promise<void | Response> {
    try {
        const token = req.cookies.get('token')?.value
        if (!token) {
            return Response.json({ status: 'error', message: 'No token found' });
        }
        const user = await verifyToken(token);
        if (!user) {
            return Response.json({ status: 'error', message: 'User not found' });
        }
        const { amount, bankAccount } = await req.json();
        // get the user account balance
        console.log(amount, bankAccount)
        const userAccount = await db.accountMony.findFirst({
            where: {
                userId: user.payload.id as string
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        // check if the user has enough balance
        //@ts-ignore
        if (userAccount?.balance < parseFloat(amount)) {
            return Response.json({ status: 'error', message: 'Insufficient balance' });
        }
        // create the bank transfer
        const data = await db.bankTransfer.create({
            data: {
                userId: user.payload.id as string,
                amount: parseFloat(amount),
                bankAccount: bankAccount
            }
        })
        // update the user account balance
        //@ts-ignore
        if (userAccount?.balance < parseFloat(amount)) {
            return Response.json({ status: 'error', message: 'Insufficient balance' });
        }
        const account = await db.accountMony.update({
            data: {
                // @ts-ignore
                balance: userAccount?.balance - parseFloat(amount)
            },
            where: {
                id: userAccount?.id as string             
            }
        })

        // lets update the user account widraw 
        const accountWidraw = await db.accountMony.update({
            data: {
                // @ts-ignore
                withdaw: userAccount?.withdaw + parseFloat(amount)
            },
            where: {
                id: userAccount?.id as string
            }
        })
        
        return Response.json({ status: 'success', data: data, message: 'user found' });
    }
    catch (error) {
        console.error(error);
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}







