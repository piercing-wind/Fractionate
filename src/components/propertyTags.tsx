import { BadgeDollarSign, Flame, House } from "lucide-react"

const Popular = ({className}:{className ?: string})=>{
   return (
      <div className={`${className} text-red-600 bg-red-100 rounded-full shadow-md px-4 py-1 flex items-center justify-center gap-2`}>
         <Flame/> Popular
      </div>
   )
} 
const NewListing = ({className}:{className ?: string})=>{
   return (
      <div className={`${className} text-blue-600 bg-blue-100 rounded-full shadow-md px-4 py-1 flex items-center justify-center gap-2`}>
         <House/> New Listing
      </div>
   )
} 
const Discounted = ({className}:{className ?: string})=>{
   return (
      <div className={`${className} text-green-600 bg-green-100 rounded-full shadow-md px-4 py-1 flex items-center justify-center gap-2`}>
         <BadgeDollarSign/> Discounted
      </div>
   )
} 

export {Popular,NewListing,Discounted}