import React from "react";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getUsers } from "@/data/user";

const page = async () => {
  const session = await auth();
  console.log(session?.user);
  if (session?.user.role !== "ADMIN") {
    notFound()
  }
  const users = await getUsers();
  return (
    <div className="w-full">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen my-4">
        <h1 className="text-2xl">Submitted Forms</h1>
        <div className="flex gap-4 my-4">
          <table className="min-w-full bg-white border border-neutral-300">
            <thead>
              <tr className="bg-gray-100 border border-neutral-400">
                <th className="py-2 px-4 text-left text-gray-600 font-semibold">Sr.No. </th>
                <th className="py-2 px-4 text-left text-gray-600 font-semibold">Name </th>
                <th className="py-2 px-4 text-left text-gray-600 font-semibold">Email</th>
                <th className="py-2 px-4 text-left text-gray-600 font-semibold">Phone</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user.id} className="border border-neutral-400 hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
