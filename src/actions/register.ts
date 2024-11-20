"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserbyEmail } from "@/data/user";
import { RegisterSchema } from "@/schema";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  const validatedData = RegisterSchema.safeParse(data);
  if (!validatedData.success) {
    return { error: "Invalid Field" };
  }
  const {fname, lname, phone, email, password } = validatedData.data
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserbyEmail(email);

   if (existingUser) {
      return { error: "Email already in use!" };
   }

   await db.user.create({
      data: {
         name: `${fname} ${lname}`,
         email,
         phone,
         password: hashedPassword,
      },
   });


   return { success: "We have received your information, We will contact you soon!" };
};
