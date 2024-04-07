import { verifyToken } from "@/(db)/lib/auth";
import db from "@/(db)/secrets";
import { NextResponse, NextRequest } from "next/server";
import { createHash } from 'crypto';
import { z } from "zod";

export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest, res: NextResponse): Promise<void | Response> {
    try {
        const token = req.cookies.get('token')?.value
        if (!token) {
            return Response.json({ status: 'error', message: 'No token found' });
        }
        const user = await verifyToken(token);
        if (!user || user?.payload.role !== 'admin') {
            return Response.json({ status: 'error', message: 'User not found' });
        }
        
        const castomers= await db.users.findMany()
        
        return Response.json({ status: 'success', data: castomers, message: 'users found' });
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
        const
        castomers= await db.users.delete({
            where: {
                id: id as string
            }
        })
        return Response.json({ status: 'success', data: castomers, message: 'transaction deleted' });
    }
    catch (error) {
        console.error(error);
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}



const customerSchema = z.object({
    email: z.string().email({ message: 'the email is not valid' }),
    name: z.string().min(3,
        { message: "your name is too short"}
        ).max(20,
        { message: "your name is too long" 
    }),
    password: z.string().min(6,
        { message: "your password is too weak."}
        ).max(100,
        { message: "your password is too long"
    }),
    role: z.string()
});


export async function POST(req: NextRequest, res: NextResponse): Promise<void | Response> {
    try {
        const token = req.cookies.get('token')?.value
        if (!token) {
            return Response.json({ status: 'error', message: 'No token found' });
        }
        const user = await verifyToken(token);
        if (!user || user?.payload.role !== 'admin') {
            return Response.json({ status: 'error', message: 'you are not authorized to create user' });
        }
        const { email, name, password, role } = await req.json();
        const isValid = customerSchema.safeParse({ email, name, password, role });
        if (!isValid.success) {
            const firstError = isValid.error.errors[0].message;
            return Response.json({ status: 'error', message: firstError });
        }
        const hashedPassword = createHash('sha256').update(password).digest('hex');
        const userExist = await db.users.findFirst({
            where: {
                email
            }
        });
        if (userExist) {
            return Response.json({ status: 'error', message: 'User already exist' });
        }

        const castomer = await db.users.create({
            data: {
                email,
                name,
                password: hashedPassword,
                role,
                isVerified:true
            }
        })
        return Response.json({ status: 'success', data: castomer, message: 'user created' });
    }
    catch (error) {
        console.error(error);
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}



const updateCustomerSchema= z.object({
    email: z.string().email({ message: 'the email is not valid' }),
    name: z.string().min(3,
        { message: "your name is too short"}
        ).max(20,
        { message: "your name is too long" 
    }),
    role: z.string(),
    id: z.string()
});


export async function PUT(req: NextRequest, res: NextResponse): Promise<void | Response> {
    try{
        const token = req.cookies.get('token')?.value
        if (!token) {
            return Response.json({ status: 'error', message: 'No token found' });
        }
        const user = await verifyToken(token);
        if (!user || user?.payload.role !== 'admin') {
            return Response.json({ status: 'error', message: 'User not found' });
        }
        const { data } = await req.json();
        const isValid = updateCustomerSchema.safeParse(data);
        if (!isValid.success) {
            const firstError = isValid.error.errors[0].message;
            return Response.json({ status: 'error', message: firstError });
        }

        const updateCastomer = await db.users.update(
            {
                where:{
                    id:data.id
                },
                data
            }
        )

        return Response.json({ status: 'success', data: updateCastomer, message: 'user updated' });

    
    }
    catch (error) {
        console.error(error);
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}






