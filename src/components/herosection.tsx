import React, { memo, lazy } from 'react';
import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/ui/gradual-spacing";
import TypingAnimation from "./ui/typing-animation";
import Animator from '@/components/animator';


const Carousel = lazy(() => import('@/components/crousel'));
const RegisterForm = lazy(() => import('@/components/registerform').then(module => ({ default: module.RegisterForm })));
const ZoomAnimator = lazy(() => import('@/components/animator'));


const HeroSection : React.FC  = () => {
   return (
      <section className="w-full flex items-center justify-center py-40 relative ">
         <div className="w-full h-full gap-y-10 flex flex-col lg:flex-row items-end max-w-7xl mx-auto px-8">
            <div className="lg:w-[60%] max-w-lg h-full mx-auto z-40 ">
               <div className="flex flex-col gap-y-4">
                     <GradualSpacing
                        text="REAL ESTATE"
                        className="text-yellow text-xl"
                        />
                   <div>
                     <GradualSpacing
                        text="Invest in Your Future Today - Maximize Your"
                        className="font-semibold lg:text-white text-3xl sm:text-5xl"
                     />
                     <GradualSpacing
                        text="Potential"
                        className="font-semibold lg:text-white text-3xl sm:text-5xl"
                     />
                  </div>
                  <TypingAnimation
                     className="text-white mb-14 text-xl mt-4 md:w-[75%] min-h-36 h-full px-2 py-4 rounded-sm backdrop-blur-lg shadow shadow-white "
                     text="Fractionate makes premium real estate investments accessible, offering  high-return opportunities through fractional ownership in prime locations."
                  />
               </div>
               <Carousel />
            </div>
            <div className="w-full lg:w-[40%] max-w-lg h-full mx-auto z-20">
               <Animator direction='up' delay={0.5} className="w-full backdrop-blur-3xl shadow-white  text-white rounded-3xl py-4 shadow-md">
                  <div className="w-full flex flex-col items-center gap-6 h-48 sm:h-52">
                     <h4 className="text-2xl sm:text-4xl text-yellow text-center font-semibold"
                     style={{
                        textShadow: '0px 0px 1px rgba(255, 255, 255, 0.5)',
                        // WebkitTextStroke: '1px '
                     }}
                     >Need help choosing the <br /> right Investment?</h4>
                     <p className="flex items-center mx-auto gap-4"><Phone color="#ffa014"/>Get Personalized Investment Advice</p>
                     <div className="w-[80%] rounded-full h-1 bg-yellow mb-12"/>
                  </div>
                     <RegisterForm className='text-black' formLabelColor="text-white" />
               </Animator>
               <Link href="/properties" >
                  <ZoomAnimator
                    framerProps={{
                     hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
                     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                  }}
                  className="flex mt-14 max-w-72 text-sm justify-center items-center gap-2 bg-white rounded-full text-nowrap shadow-md px-4 py-3 mx-auto"
                  hoverScale={1.05}
                  delay={0.5}
                 >
                     <Image 
                        src='/form-cta-button.png'
                        alt="Fractionate"
                        height={40}
                        width={40}
                        className="rounded-full"
                        />
                     10+ New <br />Listing Every 3 Months!
                  </ZoomAnimator>
               </Link>
            </div>
         </div>
         <div className="h-[60%] w-full absolute top-0 left-0  rounded-b-full bg-gradient-to-b opacity-15 from-[#4CC9F0] to-yellow -z-50" />
         <div className="h-full w-full absolute top-0 left-0 bg-fuchsia-900 z-10 opacity-20" />
         <Image
            src="/hero-bg-1X2.png"
            alt="Fractionate"
            fill
            style={{ zIndex: -40, opacity: 1, objectFit: "fill" }}
            sizes='100vw'
            className="h-full w-full lg:hidden "
            loading='eager'
         />
         <Image
            src="/hero-bg-1.png"
            alt="Fractionate"
            fill
            style={{ zIndex: -40, opacity: 1, objectFit: "fill" }}
            sizes='100vw'
            className="h-full w-full hidden lg:block"
            loading='eager'
         />
        <div className="absolute w-24 h-24 bg-gradient-to-bl from-yellow via-neutral-400 to-white opacity-50 -z-20 rounded-full -bottom-14 left-[14%]" />

      </section>
   )
}
HeroSection.displayName = "HeroSection";
export default memo(HeroSection);
