import Image from "next/image"
import Animator from "./animator"
import { FadeText } from "./ui/fade-text"
import { Button } from "./ui/button"

export const ContactBanner = () => {
   return (
      <section className="w-full py-20 my-20 px-2">
         <div className="relative max-w-5xl mx-auto w-full overflow-hidden rounded-3xl px-8 sm:px-12 pt-8 sm:pt-0 flex flex-col sm:flex-row items-center justify-between bg-orange-400">
            <Animator className=" hidden sm:flex relative min-h-[30vmin] aspect-[1/1]">
               <Image
                  src='/person.png'
                  alt="Fractionate"
                  fill
                  style={{
                     objectFit:"cover",
                     zIndex: 1,
                  }}
               />
               <div className="absolute w-16 h-16 bg-gradient-to-br from-white to-yellow opacity-50  rounded-full bottom-14 right-0" />

            </Animator>
            <div className="flex flex-col gap-4 sm:w-[40%] relative">
             <FadeText 
                text="Become Testimonial" 
                className="text-4xl text-white" 
                direction="up" 
                framerProps = {{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { type: "spring", delay : 0.4 } },
                }}
               />
             <FadeText 
               text="Share your experience with Fractionate and help others discover the benefits of smart real estate investment." 
               className="text-base lg:text-xl text-white" 
               direction="up"
               framerProps = {{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { type: "spring", delay : 0.5 } },
                }} 
             />
            </div>
            <Animator  delay={0.4} hoverScale={1.1} className="relative mt-4 min-h-14">
               <Button className="bg-white h-full w-full text-yellow text-lg flex-shrink-0 rounded-full hover:bg-yellow hover:bg-opacity-50 hover:text-white">
                  Register Now
               </Button>
            </Animator>
            <Animator className=" sm:hidden relative w-full sm:w-auto min-h-[30vmin] aspect-[1/1]">
               <Image
                  src='/person.png'
                  alt="Fractionate"
                  fill
                  style={{
                     objectFit:"cover",
                     zIndex: 1,
                  }}
               />
               <div className="absolute w-16 h-16 bg-gradient-to-br from-white to-yellow opacity-50  rounded-full bottom-14 right-0" />

            </Animator>
            <div className="absolute w-16 h-16 bg-gradient-to-br from-white to-yellow opacity-50  rounded-full -top-8 right-16" />
         </div>

      </section>
   )
}