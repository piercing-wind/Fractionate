"use server";
import * as z from "zod";
import { LoginSchema } from "@/schema";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";
import { getUserbyEmail } from "@/data/user";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validatedData = LoginSchema.safeParse(data);
  if (!validatedData.success) {
    return { error: "Invalid Credentails!" };
  }
   const { email, password } = validatedData.data;

   const existingUser = await getUserbyEmail(email);

   if (!existingUser || !existingUser.email  || !existingUser.password) {
      return { error: "This email doesn't exist, Please Register it first" };
   }

  try {
   await signIn("credentials", {
      email,
      password,
      redirectTo : DEFAULT_LOGIN_REDIRECT,
    });
      return { success: "Login Successful!" };
  } catch (error) {
   if(error instanceof AuthError){
      switch(error.type){
         case 'CredentialsSignin': 
            return {error: "Invalid Credentials!"};
        
         default:
            return {error: "An error occured while signing in!"};
      }
   }
   throw error;
  }
};
