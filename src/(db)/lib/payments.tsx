"use server";


const key = new TextEncoder().encode(secret.jwt_secret);
import { SignJWT, jwtVerify } from 'jose';
import db, { secret } from '../secrets';
import { cookies } from 'next/headers';
import { verifyToken } from './auth';

interface data{
    productId:string,
    amount:number
}

export const generatePaymentLink =async (data:data)=>{
    try {
        const userToken = cookies().get('token')?.value
        if (!userToken) {
            return Response.json({ status: 'error', message: 'No token found' });
        }
        const user = await verifyToken(userToken);
        if (!user) {
            return Response.json({ status: 'error', message: 'User not found' });
        }
        const payload = {
            userId : user.payload.id,
            productId :data.productId,
            amount : data.amount 
        };
        const token = await new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .sign(key);
        const payment = await db.paymentLink.create({
            data:{
                userId: user.payload.id as string,
                productId:data.productId,
                amount:parseFloat(data.amount.toString()), 
            }
        })
        return token;
    } catch (error) {
        console.log(error)
    }
}