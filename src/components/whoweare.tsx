import { Hexagon, Pentagon, User } from "lucide-react"
// import Animator, { ZoomAnimator } from "./animator"
import { lazy, memo, Suspense} from "react";
import { FadeText } from "./ui/fade-text"
import Image from "next/image"

const Animator = lazy(() => import("./animator"));
const ZoomAnimator = lazy(() => import("./animator").then(module => ({ default: module.ZoomAnimator })));


export const WhoWeAre = memo(() => {
   return(
      <section className="w-full flex flex-col items-center justify-center my-20 px-8 sm:px-14">
         <p className="pcolor">Trusted by 100+ Investors accross the globe</p>
         <div className="w-full flex flex-wrap items-center max-w-7xl xl:max-w-full mx-auto my-10 overflow-hidden">
            <div className="max-w-lg flex flex-col mx-auto gap-y-8">
               <FadeText
                  text="Who Are We"
                  className="text-xl sm:text-2xl uppercase text-yellow"
                  direction="left"

               />
               <FadeText
                  text="Revolutionizing Real Estate Investment with Fractional Ownership"
                  className="text-4xl sm:text-5xl"
                  direction="left"
                  framerProps={{ show: {transition :{duration : 0.5,delay: 0.5}}}}
               />
               <FadeText
                  text="At Fractionate, we’re transforming real estate investment by making premium properties accessible through fractional ownership, offering high-return opportunities for investors of all sizes."
                  className="text-xl pcolor"
                  direction="left"
                  framerProps={{ show: {transition :{duration : 0.5,delay: 0.8}}}}
              />
            <Suspense fallback={<div className="max-w-80 h-56">Loading...</div>}>
              <Animator className="shadow-xl rounded-xl flex items-center gap-4 max-w-80 p-4" duration={0.5} direction="left" delay={1}>
                  <Pentagon color="#FFBA53" size={40} className="flex-shrink-0"/>
                  <div>
                     <h6 className="text-yellow text-lg">Diverse Investment Options</h6>
                     <p className="pcolor">Explore a wide range of real estate investments tailored for every goal.</p>
                  </div>
               </Animator>
              <Animator className="shadow-xl rounded-xl flex items-center gap-4 max-w-80 p-4" duration={0.5} direction="left" delay={1.3}>
                   <span className="relative flex-shrink-0 w-11 h-11">
                      <Hexagon color="#FFBA53" size={40} className="absolute inset-0 w-full h-full" />
                      <User color="#FFBA53" size={28} className="absolute inset-0 m-auto" />
                  </span>
                  <div>
                     <h6 className="text-yellow text-lg">Your Investment Partner</h6>
                     <p className="pcolor">Invest with confidence—our team is here to support you.</p>
                  </div>
               </Animator>
            </Suspense>
            </div>
            <div className="max-w-xl md:max-w-2xl mt-24 md:mt-0 mx-auto grid grid-cols-2 items-center gap-4 w-full ">
            <Suspense fallback={<div>Loading...</div>}>
               <ZoomAnimator 
                  className="relative sm:w-auto min-h-[70vmin] mt-14 sm:mt-36 flex-shrink-0 aspect-[9/16] rounded-2xl shadow-lg overflow-hidden"
                  amount={0.2}
                  framerProps={{
                     hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
                     visible: { opacity: 1, scale: [0.8, 1.2, 1], transition: { type: 'keyframes', duration: 0.7, delay: 0.5, ease: 'easeInOut' } },
                   }}
                >
                  <Image
                     src="/who-we-are/image-1.jpg"
                     alt="Fractionate"
                     fill
                     style={{
                        objectFit : 'fill',
                     }}
                     className="hover:scale-105 transition-all duration-300"
                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
               </ZoomAnimator>
            </Suspense>
               <div className="flex flex-col gap-4 mb-14 relative w-full ">   
               <Suspense fallback={<div>Loading...</div>}>   
                  <ZoomAnimator 
                     className="relative md:min-h-[30vmin] md:w-auto aspect-[1/1] rounded-2xl shadow-lg overflow-hidden"
                     amount={0.5}
                     framerProps={{
                        hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
                        visible: { opacity: 1, scale: [0.8, 1.2, 1], transition: { type: 'keyframes', duration: 0.7, delay: 0.8, ease: 'easeInOut' } },
                      }}
                   >
                     <Image
                        src="/who-we-are/image-2.jpg"
                        alt="Fractionate"
                        fill
                        style={{
                           objectFit : 'fill',
                        }}
                        className="hover:scale-105 transition-all duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                     />
                  </ZoomAnimator>
                  <ZoomAnimator 
                     className="relative md:min-h-[20vmin] md:w-auto sm:h-40 aspect-[16/9] rounded-2xl shadow-lg overflow-hidden"
                     amount={0.5}
                     framerProps={{
                        hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
                        visible: { opacity: 1, scale: [0.8, 1.2, 1], transition: { type: 'keyframes', duration: 0.7, delay: 1.1, ease: 'easeInOut' } },
                      }}
                   >
                     <Image
                        src="/who-we-are/image-3.jpg"
                        alt="Fractionate"
                        fill
                        style={{
                           objectFit : 'fill',
                        }}
                        className="hover:scale-105 transition-all duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                     />

                  </ZoomAnimator>
               </Suspense>
                   <div className="absolute z-10 w-16 h-16 bg-gradient-to-bl from-yellow via-neutral-400 to-white opacity-50 rounded-full -bottom-10 left-[14%]" />
               </div>
            </div>
         </div>
      </section>
   )
});
WhoWeAre.displayName = "WhoWeAre";