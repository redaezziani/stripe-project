import { verifyToken } from "@/(db)/lib/auth";
import db from "@/(db)/secrets";
import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";

/*
model Transaction {
  id        String    @id @default(uuid()) @db.VarChar(36)
  amount    Float
  type      TransactionType @default(PAID)
  userId    String
  email     String
  phone     String?
  name      String?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  deletedAt DateTime?
  user      users     @relation(fields: [userId], references: [id])
}

*/
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


// delete transaction


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

/*
{
                 data: {
                    email: newEmail,
                    name: newName,
                    phone: newPhone,
                    amount: newAmount,
                    code: newCode,
                    type: selectedType,
                    id
                 }
                }
*/

const TransactionData = z.object({
    email: z.string(),
    name: z.string(),
    phone: z.string().optional(),
    amount: z.number(),
    code: z.string(),
    id: z.string(),
    type: z.string()
})


export async function PUT(req: NextRequest, res: NextResponse): Promise<void | Response> {
    try {
        const token = req.cookies.get('token')?.value
        if (!token) {
            return Response.json({ status: 'error', message: 'No token found' });
        }
        const user = await verifyToken(token);
        if (!user || user?.payload.role !== 'admin') {
            return Response.json({ status: 'error', message: 'User not found' });
        }
        const { data } = await req.json();
        const { email, name, phone, amount, code, id, type } = TransactionData.parse(data)
        const transaction = await db.transaction.update({
            where: {
                id
            },
            data: {
                email,
                name,
                phone,
                amount,
                code,
                type: type as any
            }
        })

        return Response.json({ status: 'success', data: transaction, message: 'transaction updated' });

    }
    catch (error) {
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}





