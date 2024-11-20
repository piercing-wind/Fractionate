'use client'
import { UserCircle, Menu, X, HeartHandshake } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useSession,signOut } from "next-auth/react"
import { SessionProvider } from "next-auth/react"
import { Button } from "./ui/button"
import { logout } from "@/actions/logout"

const HeaderWithoutSessionProvider = ({className = ''}:{className ?: string}) => {
   const [current, setCurrent] = useState('/')
   const [isOpen, setIsOpen] = useState(false)
   const active = "shadow-md bg-yellow text-white "
   const path = usePathname();
   const { data: session, status } = useSession()
   useEffect(() => {
      setCurrent(path)
   },[path])

   const toggleMenu = () => {
      setIsOpen(!isOpen)
   }

   return (
      <header className={cn(`w-full sm:px-14 xl:px-28 p-2 px-4 sm:p-4`,className)}>
         <nav className="w-full flex items-center justify-between text-lg font-medium">
            <ul className="hidden lg:flex items-center gap-6 w-full ">
               <li className="hover:scale-105 transition-all duration-300" ><Link className={`text-nowrap px-5 py-2 rounded-full ${current === '/' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300`} href='/'>Home</Link></li>
               <li className="hover:scale-105 transition-all duration-300" ><Link className={`text-nowrap px-5 py-2 rounded-full ${current === '/about' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300`} href='/about'>About</Link></li>
               {/* <li className="hover:scale-105 transition-all duration-300" ><Link className={`text-nowrap px-5 py-2 rounded-full ${current === '/listings' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300`} href='/listings'>Listings</Link></li> */}
               <li className="hover:scale-105 transition-all duration-300" ><Link className={`text-nowrap px-5 py-2 rounded-full ${current === '/how-it-works' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300`} href='/how-it-works'>How it Works</Link></li>
            </ul>
            <Link href='/' className="flex-shrink-0">
               <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={150}
                  height={50}
                  priority
               />
            </Link>
            <ul className="hidden lg:flex items-center justify-end gap-4 w-full">
               <li className="hover:scale-105 transition-all duration-300" ><Link className={`text-nowrap px-5 py-2 rounded-full ${current === '/contact' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300`} href='/contact'>Contact Us</Link></li>
               <li className="hover:scale-105 transition-all duration-300" >{status !== "authenticated" ? (<Link className={`text-nowrap px-5 h-8 py-2 rounded-full ${current === '/login' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300 flex items-center gap-2`} href='/login'> <UserCircle size={16}/> Login</Link> ): (<span className="flex flex-col items-center justify-center"><span className="text-yellow">Hello</span><span className="flex items-center gap-2"><HeartHandshake size={16} color="#ef4444" className="flex-shrink-0"/> {(session?.user.name as string)}</span></span>) }</li>
               {status !== "authenticated" ? <li className="hover:scale-105 transition-all duration-300" ><Link className={`text-nowrap px-5 py-2 rounded-full shadow-md bg-yellow text-white hover:bg-yellow hover:bg-opacity-55 transition-all duration-300`} href='/register'>Register</Link></li> :
                  <Button onClick={()=>{signOut({redirect : false}); logout()}} className={`hover:scale-105 text-base text-nowrap px-5 py-2 rounded-full shadow-md bg-yellow text-white hover:bg-yellow hover:bg-opacity-55 transition-all duration-300`}>
                     Logout
                  </Button>
               }
            </ul>
            <div className="lg:hidden flex items-center">
               <button onClick={toggleMenu} className="focus:outline-none">
                  {isOpen ? <X size={24} /> : <Menu size={32} color="#ffa014" />}
               </button>
            </div>
         </nav>
         <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: isOpen ? 0 : '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-50 flex flex-col p-4 lg:hidden"
         >
            <button onClick={toggleMenu} className="self-end mb-4 focus:outline-none">
               <X size={24} />
            </button>
            <ul className="flex flex-col gap-4">
               <li><Link className={`text-nowrap px-5 py-2 rounded-full ${current === '/' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300`} href='/'>Home</Link></li>
               <li><Link className={`text-nowrap px-5 py-2 rounded-full ${current === '/about' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300`} href='/about'>About</Link></li>
               {/* <li><Link className={`text-nowrap px-5 py-2 rounded-full ${current === '/listings' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300`} href='/listings'>Listings</Link></li> */}
               <li><Link className={`text-nowrap px-5 py-2 rounded-full ${current === '/how-it-works' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300`} href='/how-it-works'>How it Works</Link></li>
               <li><Link className={`text-nowrap px-5 py-2 rounded-full ${current === '/contact' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300`} href='/contact'>Contact</Link></li>
               <li className="hover:scale-105 transition-all duration-300" >{status !== "authenticated" ? (<Link className={`text-nowrap px-5 h-8 py-2 rounded-full ${current === '/login' ?  active : 'hover:bg-yellow hover:bg-opacity-55 '} transition-all duration-300 flex items-center gap-2`} href='/login'> <UserCircle size={16}/> Login</Link> ): (<span className="flex flex-col items-center justify-center"><span className="text-yellow">Hello</span><span className="flex items-center gap-2"><HeartHandshake size={16} color="#ef4444" className="flex-shrink-0"/> {(session?.user.name as string)}</span></span>) }</li>
               {status !== "authenticated" ? <li className="hover:scale-105 transition-all duration-300" ><Link className={`text-nowrap px-5 py-2 rounded-full shadow-md bg-yellow text-white hover:bg-yellow hover:bg-opacity-55 transition-all duration-300`} href='/register'>Register</Link></li> :
                  <Button onClick={()=>{signOut({redirect : false}); logout()}} className={`hover:scale-105 text-base text-nowrap px-5 py-2 rounded-full shadow-md bg-yellow text-white hover:bg-yellow hover:bg-opacity-55 transition-all duration-300`}>
                     Logout
                  </Button>
               }
            </ul>
         </motion.div>
      </header>
   )
}

export const Header = ({className = ''}:{className ?: string}) => {
   return (
      <SessionProvider >

         <HeaderWithoutSessionProvider className={className} />
      </SessionProvider>
   )
}
