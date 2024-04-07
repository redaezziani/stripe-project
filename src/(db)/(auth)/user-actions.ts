'use server';
import {z} from 'zod'
import { ChangePasswordSchema, SignInSchema, SignUpSchema } from '@/app/types/from';
import { createToken, generateRandomNumbers, generateRestePasswordToken, getRestPasswordToken, getUserByEmail, ResetPassowrdEmail, VereficationEmail, verifyToken } from '../lib/auth';
import { cookies } from 'next/headers';
import { createHash } from 'crypto';
import db from '../secrets';
import { SignUpSchemaType,ChangePasswordType } from '@/app/types/from';
import { CreateNotification } from '../notifications';
import { ActionType, NotificationType } from '@prisma/client';
export interface Notification {
  title : string
  message : string
  type : NotificationType
  action : ActionType
  userId : string
}

export const SignIn = async (result : z.infer<typeof SignInSchema>) => {
    try {  
      const findUser = await db.users.findFirst({
        where: {
          email: result.email,
        },
      });
      if (!findUser) {
        return {status: 'error', message: 'User not found. Please sign up.'};
      }
      if (!findUser.isVerified) {
        const token = await  generateRandomNumbers()
        const {
          email,
          id
        } = findUser
        const name = findUser.name??'';

        const findToken = await db.userVerificationRequest.findMany({
          where: {
            userId: findUser.id,
          },
        });
        if (findToken.length > 0) {
          await db.userVerificationRequest.deleteMany({
            where: {
              userId: findUser.id,
            },
          });
        }

        const res = await db.userVerificationRequest.create({
          data: {
           token:token,
            userId: findUser.id,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          },
        });
        if (!res) {
          return {status : 'error', message: 'Token not created'}
        }
        
        
        const send = await VereficationEmail({email,name,token,id});
        if (!send) {
          return {status : 'error', message: 'Email not sent'}
        }
        const data: Notification = {
          title: 'Account not verified',
          message: 'User not verified yet, please check your email',
          type: 'INFO',
          action: 'NONE',
          userId: findUser.id,
        }
        const resNot = await CreateNotification(data);
        if (!resNot) {
          return {status : 'error', message: 'Notification not created'}
        }

        return {status : 'error', message: 'User not verified yet, please check your email'}
      }
      const hashedPassword = createHash('sha256').update(result.password).digest('hex');
      if (hashedPassword !== findUser.password) {
        return {status : 'error', message: 'Password or email not match'}
      }
      const token = await createToken(findUser) ?? '';
      const cookie = cookies().set('token', token, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
      if (!cookie) {
        return {status : 'error', message: 'Cookie not set'}
      }
      return {status : 'success', message: 'User found'}
    } catch (error) {
      console.log(error);
      return {status : 'error', message: 'Somthing Worng ! try again laiter.'}
    }
}


export const SignUp = async (result : SignUpSchemaType) => {
  try {
    const isValid = SignUpSchema.safeParse(result);
    if (!isValid.success) {
      return {status : 'error', message: 'Invalid data'}
    }
    const {name, email, password} = result;
    const findUser = await getUserByEmail(email);
    if (findUser) {
      return {status : 'error', message: 'User already exist'}
    }
    const hashedPassword = createHash('sha256').update(password).digest('hex');
    const user = await db.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    if (!user) {
      return {status : 'error', message: 'User not created'}
    }
    const token = await  generateRandomNumbers()
    const {
      id
    } = user
    const findToken = await db.userVerificationRequest.findMany({
      where: {
        userId: user.id,
      },
    });
    if (findToken.length > 0) {
      await db.userVerificationRequest.deleteMany({
        where: {
          userId: user.id,
        },
      });
    }
    const res = await db.userVerificationRequest.create({
      data: {
        token:token,
        userId: user.id,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    });
    if (!res) {
      return {status : 'error', message: 'Token not created'}
    }
    const send = await VereficationEmail({email,name,token,id});
    if (!send) {
      return {status : 'error', message: 'Email not sent'}
    }
    const data: Notification = {
      title: 'Account created',
      message: 'User created successfully. Please verify your email',
      type: 'INFO',
      action: 'NONE',
      userId: user.id,
    }
    const resNot = await CreateNotification(data);
    if (!resNot) {
      return {status : 'error', message: 'Notification not created'}
    }
    return {status : 'success', message: 'User created successfully. Please verify your email.'}
  } catch (error) {
    return {status : 'error', message: 'Somthing Worng ! try again laiter.'}
  }
}

const types = z.object({
  id: z.string(),
  token: z.string(),
});

export const verifyTokenUser = async ({ id, token } : z.infer<typeof types>) => {
  try {
    const findToken = await db.userVerificationRequest.findFirst({
      where: {
        userId: id,
        token: token,
        expires: {
          gt: new Date(),
        },
      },
    });

    if (!findToken) {
      return { status: 'error', message: 'Token not found' };
    }

    await db.users.update({
      where: {
        id: id,
      },
      data: {
        isVerified: true,
      },
    });

    await db.userVerificationRequest.deleteMany({
      where: {
        userId: id,
      },
    });

    return { status: 'success', message: 'User verified successfully' };
  } catch (error) {
    console.error(error);
    return { status: 'error', message: 'Something went wrong! Please try again later.' };
  }
};


export const forgetPassword = async (userEmail : string) => {
  try {
    const user = await getUserByEmail(userEmail);
    if (!user) {
      return {status : 'error', message: 'User not found'}
    }
    const token = await  generateRandomNumbers()
    const {email,name} = user
    const secret= await generateRestePasswordToken(email, token);
    if (!secret) {
      return {status : 'error', message: 'Token not created'}
    }
    const isToken = await db.resetPasswordRequest.findFirst({
      where: {
        userId: user.id,
      },
    });
    if (isToken) {
      await db.resetPasswordRequest.deleteMany({
        where: {
          userId: user.id,
        },
      });
    }
    
    const send = await ResetPassowrdEmail(secret.toString(), name ?? '', email);
    if (!send) {
      return {status : 'error', message: 'Email not sent'}
    }
    const res = await db.resetPasswordRequest.create({
      data: {
        token: parseInt(token),
        userId: user.id,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    });
    return {status : 'success', message: 'Email sent successfully'}
  } catch (error) {
    console.log(error);
    return {status : 'error', message: 'Somthing Worng ! try again laiter.'}
  }
}


export const changePassowrd = async (data : ChangePasswordType) => {
  try {
    const isValid = ChangePasswordSchema.safeParse(data);
    if (!isValid.success) {
      return {status : 'error', message: 'Invalid data'}
    }
    if (data.newPassword !== data.confirmPassword) {
      return {status : 'error', message: 'Password does not match'}
    }
    const token = cookies().get('token')?.value??'';

    const getUser = await verifyToken(token);
    const user = await getUserByEmail(getUser?.payload?.email as string);
    if (!user) {
      return {status : 'error', message: 'User not found'}
    }
    const hashedPassword = createHash('sha256').update(data.currentPassword).digest('hex');
    if (hashedPassword !== user.password) {
      return {status : 'error', message: 'Password does not match'}
    }
    const hashedNewPassword = createHash('sha256').update(data.newPassword).digest('hex');
    
    await db.users.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedNewPassword,
      },
    });
    return {status : 'success', message: 'Password updated successfully'}
  } catch (error) {
    console.log(error);
    return {status : 'error', message: 'Somthing Worng ! try again laiter.'}
  }
}



export const restPassword = async (data : any) => {
  try {
   
    if (data.newPassword !== data.confirmPassword) {
      return {status : 'error', message: 'Password does not match'}
    }

    const Token = await getRestPasswordToken(data.token)as any;
    const user = await getUserByEmail(Token?.payload.email as string);
    if (!user) {
      return {status : 'error', message: 'User not found'}
    }
 
    const findToken = await db.resetPasswordRequest.findFirst({
      where: {
        userId: user.id,
        token: parseInt(Token.payload.token),
      },
    });
    if (!findToken) {
      return {status : 'error', message: 'Token not found'}
    }
    const hashedNewPassword = createHash('sha256').update
    (data.newPassword).digest('hex');
    
    await db.users.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedNewPassword,
      },
    });
    return {status : 'success', message: 'Password updated successfully'}
  } catch (error) {
    console.log(error);
    return {status : 'error', message: 'Somthing Worng ! try again laiter.'}
  }
}