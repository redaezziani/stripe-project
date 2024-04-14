"use server";


const key = new TextEncoder().encode(secret.jwt_secret);
import { SignJWT, jwtVerify } from 'jose';
import db, { secret } from '../secrets';
import { cookies } from 'next/headers';
import { verifyToken } from './auth';

enum Currency {
    USD = 'USD',
    IQD = 'IQD',
    EUR = 'EUR',
    AED = 'AED',
}
interface data{
    productId:string,
    amount:number
    currency:Currency
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
            amount : data.amount ,
            currency : data.currency
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
                currency:data.currency
            }
        })
        return token;
    } catch (error) {
        console.log(error)
    }
}


export const verifyPaymentLink = async (token:string)=>{
    try {
        const { payload } = await jwtVerify(token, key, {
            algorithms: ['HS256'],
        });
        const payment = await db.paymentLink.findMany({
            where:{
                userId:payload.userId as string,
                productId:payload.productId as string,
            }
           
        })
        if (!payment) {
            return Response.json({ status: 'error', message: 'Payment not found' });
        }
        
        const fisrtPayment = payment[0];
        const  data = {
            userId : fisrtPayment.userId,
            productId :fisrtPayment.productId,
            amount : fisrtPayment.amount 
        };
       
        return Response.json({ status: 'success', message: 'Payment verified' , data:data});
    } catch (error) {
        console.log(error)
    }
}