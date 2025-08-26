import { db } from "@/lib/db";

export const getUserbyEmail = async (email: string) => {
   try {
      const user = await db.user.findUnique({
         where: {
            email,
         },
      });
      return user;
   } catch (error) {
      return null;
   }
}

export const getUserbyId = async (id : string) => {
   try {
      const user = await db.user.findUnique({
         where: {
            id,
         },
      });
      return user;
   } catch (error) {
      return null;
   }
}

export const getUsers = async (page: number = 1, limit: number = 10) => {
   try {
     const offset = (page - 1) * limit;
     const users = await db.user.findMany({
       skip: offset,
       take: limit,
     });
     return users;
   } catch (error) {
     return null;
   }
 };