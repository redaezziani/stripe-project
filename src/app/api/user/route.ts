import { verifyToken } from "@/(db)/lib/auth";
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
  return Response.json({ status: 'success', data: user?.payload , message: 'user found' });
  }
     catch (error) {
        console.error(error);
        // Handle error and return an appropriate response
        return Response.json({ status: 'error', message: 'An error occurred while processing your request.' });
    }
}