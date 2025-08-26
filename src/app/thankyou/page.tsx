import { Check } from "lucide-react";
import Link from "next/link";

export default function Page(){
   return(
      <div className="w-full h-screen overflow-hidden flex items-center justify-center">
         <div className="p-4 rounded-md shadow-md space-y-8 flex flex-col items-center justify-center">
            <Check className="w-24 h-24 text-green-500 mx-auto"/>
            <h2 className="text-4xl md:text-7xl font-bold text-center my-4">Thank you for Contacting Us!</h2>
            <p className="text-center text-2xl">We have received your information. We will contact you soon!</p>
            <Link href="/" className="text-center text-yellow">
               Back to Home
            </Link>
         </div>
      </div>
   )
}