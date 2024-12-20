"use server";

import { signOut } from "@/auth";
import { revalidatePath } from 'next/cache'

export const logout = async () => {

   //do some stuff before logout if needed
   await signOut({
      redirectTo: "/",
      redirect : true
   });
   revalidatePath("/");
};