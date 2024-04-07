import { verifyToken } from "@/(db)/lib/auth";
import db from "@/(db)/secrets";
import { NextResponse, NextRequest } from "next/server";

/*
  REFUND
  PAID
  FAILED
  CANCELLED
*/

/*
model Transaction {
  id        String    @id @default(uuid()) @db.VarChar(36)
  amount    Float
  type      TransactionType @default(PAID)
  userId    String
  email     String
  phone     String?
  name      String?
  code      String
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  deletedAt DateTime?
  user      users     @relation(fields: [userId], references: [id])
}
*/

interface dataType {
    REFUND :number,
    PAID: number,
    FAILED: number,
    CANCELLED: number
}




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
        const data: dataType = {
            REFUND: 0,
            PAID: 0,
            FAILED: 0,
            CANCELLED: 0
        }

        // get the total of each transaction type for the user
        const transaction= await db.transaction.findMany({
            where: {
                userId: user?.payload.id as string
            }
        });

        transaction.forEach((t) => {
            if (t.type === 'REFUND') {
                data.REFUND += 1;
            }
            if (t.type === 'PAID') {
                data.PAID += 1;
            }
            if (t.type === 'FAILED') {
                data.FAILED += 1;
            }
            if (t.type === 'CANCELLED') {
                data.CANCELLED += 1;
            }
        });


       

        return Response.json({ status: 'success', data, message: 'user found' });
    }

    catch (error) {
        console.error(error);
        // Handle error and return an appropriate response
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}


