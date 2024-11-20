import React, { memo, lazy } from 'react';
import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/ui/gradual-spacing";
import TypingAnimation from "./ui/typing-animation";


const Carousel = lazy(() => import('@/components/crousel'));
const RegisterForm = lazy(() => import('@/components/registerform').then(module => ({ default: module.RegisterForm })));
const ZoomAnimator = lazy(() => import('@/components/animator'));


const HeroSection : React.FC  = () => {
   return (
      <section className="w-full flex items-center justify-center py-24 relative ">
         <div className="w-full h-full gap-y-10 flex flex-col lg:flex-row items-end max-w-7xl mx-auto px-8">
            <div className="lg:w-[60%] max-w-lg  h-full mx-auto z-40 ">
               <div className="flex flex-col gap-y-4">
                  <GradualSpacing
                     text="REAL ESTATE"
                     className="text-yellow text-xl"
                  />
                  <GradualSpacing
                     text="Invest in Your Future Today"
                     className="font-semibold text-3xl sm:text-5xl"
                  />
                  <GradualSpacing
                     text="- Guaranteed Growth"
                     className="font-semibold text-3xl sm:text-5xl"
                  />
                  <TypingAnimation
                     className="text-gray text-xl mt-4 md:w-[75%] h-28 "
                     text="Fractionate makes premium real estate investments accessible, offering  high-return opportunities through fractional ownership in prime locations."
                  />
               </div>
               <Carousel />

            </div>
            <div className="w-full lg:w-[40%] max-w-lg h-full mx-auto">
               <div className="w-full bg-white  rounded-3xl py-4 shadow-lg">
                  <div className="w-full flex flex-col items-center gap-6 h-48 sm:h-52">
                     <h4 className="text-2xl sm:text-4xl text-yellow text-center">Need help choosing the <br /> right Investment?</h4>
                     <p className="flex items-center mx-auto gap-4"><Phone color="#ffa014"/>Get Personalized Investment Advice</p>
                     <div className="w-[80%] rounded-full h-1 bg-yellow mb-12"/>
                  </div>
                  <RegisterForm />
               </div>
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
         <div className="h-[90%] w-full absolute top-0 left-0  rounded-b-full bg-gradient-to-b opacity-15 from-[#4CC9F0] to-yellow -z-50" />
         <Image
            src="/hero-bg.png"
            alt="Fractionate"
            fill
            style={{ zIndex: -40, opacity: 0.6, objectFit: "fill" }}
            
         />
        <div className="absolute w-24 h-24 bg-gradient-to-bl from-yellow via-neutral-400 to-white opacity-50 -z-20 rounded-full -bottom-14 left-[14%]" />

      </section>
   )
}
HeroSection.displayName = "HeroSection";
export default memo(HeroSection);
