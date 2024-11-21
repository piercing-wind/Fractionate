import { QNA } from "@/components/about/qna";
import Animator, { ZoomAnimator } from "@/components/animator";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FadeText } from "@/components/ui/fade-text";
import GradualSpacing from "@/components/ui/gradual-spacing";
import TypingAnimation from "@/components/ui/typing-animation";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
   title: "About Us - Fractionate | Your Real Estate Experts",
   description: "Learn about Fractionate, a trusted name in real estate. With a commitment to excellence, we specialize in helping clients buy, sell, and rent properties with confidence and ease.",
   metadataBase: new URL("https://fractionate.com/about"),
}

export default function AboutPage() {
   return (
      <>
         <div className="w-full relative min-h-screen flex flex-col items-center justify-center px-8">
            <Header  className="fixed top-0 left-0 z-50 backdrop-blur-md p-1 sm:p-2"/>
            <Image
               src='/about/hero-bg.jpg'
               alt="Fractionate About"
               fill
               style={{
                  objectFit: 'cover',
                  zIndex: -1,
               }}
               priority
               loading="eager"
            />
            <div className="max-w-7xl mx-auto w-full ">
               <div className="sm:w-[60%] space-y-8">
                  <GradualSpacing
                     text="About Us"
                     className="font-semibold text-3xl sm:text-5xl uppercase text-yellow"
                  />
                  <GradualSpacing
                     text="Empowering Investors Through Fractional Real Estate"
                     className="font-semibold text-3xl sm:text-5xl mt-2"
                  />
                 <TypingAnimation
                     className="text-gray text-xl mt-4 md:w-[75%] h-28 "
                     text="At Fractionate, we believe everyone deserves the opportunity to own real estate. By offering fractional ownership, we open doors to investments that build wealth and create financial security."
                  />
               </div>
            </div>
         </div>

         <section className="w-full py-14 my-14 relative px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-y-10 gap-4 my-4 justify-between">
               <ZoomAnimator className="animated-border border-[14px] h-[65vmin] sm:h-[50vmin] aspect-[4/3] relative">
                  <Image
                     src='/properties/image-1.jpg'
                     alt="Fractionate Company"
                     fill
                     style={{
                        objectFit: 'cover',
                     }}
                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                     loading="lazy"
                     className="border-8 border-white"
                  />
               </ZoomAnimator>  
               <div className="lg:w-[50%] flex flex-col gap-4">
                  <div>
                     <FadeText className='text-5xl font-semibold text-yellow' framerProps={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { type: "spring", delay: 0.2 } }, }} direction='up' text='Fractionate' />
                     <FadeText className='text-lg' framerProps={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { type: "spring", delay: 0.3 } }, }} direction='up' text='Your Key To Generational Wealth' />
                  </div>
                  <FadeText className='text-xl pcolor' framerProps={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { type: "spring", delay: 0.4 } }, }} direction='up' text='At Fractionate, we make real estate investment accessible to everyone. By offering fractional ownership in high-value properties, we empower investors to diversify their portfolios and grow wealth without the complexities of traditional property ownership. With our expertise and innovative platform, owning a share of premium real estate is now within reach for all.' />
               </div>
            </div>
            <div className="absolute w-24 h-24 bg-gradient-to-bl from-yellow via-neutral-400 to-white opacity-50 -z-20 rounded-full -bottom-14 left-[14%]" />
            <div className="absolute w-24 h-24 bg-gradient-to-bl from-yellow via-neutral-400 to-white opacity-50 -z-20 rounded-full -top-14 right-[14%]" />
         </section>

         <section className="w-full my-24 px-8 py-14">
            <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 ">
               <Animator hoverFlip delay={0.2} className="relative bg-black bg-opacity-20 text-white overflow-hidden flex-1 max-w-md lg:max-w-full h-[60vmin] 2xl:h-[50vmin] rounded-xl flex flex-col items-center justify-center gap-y-8 p-8 shadow-lg">
                  <FadeText
                     text="Our Mission"
                     className="text-3xl sm:text-4xl "
                     direction="left"
                     framerProps={{ show: {transition :{duration : 0.5,delay: 0.2}}}}
                  />
                  <FadeText className='text-xl ' framerProps={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { type: "spring", delay: 0.4 } }, }} direction='up' text='At Fractionate, we aim to make real estate investment accessible to everyone. By offering fractional ownership, we eliminate the barriers to property ownership, allowing people to invest in valuable real estate and build wealth without high upfront costs.' />
                  <Image
                     src='/about/our-mission.jpg'
                     alt="Fractionate Company Mission"
                     fill
                     style={{
                        objectFit: 'cover',
                        zIndex: -20,
                        opacity: 0.8
                     }}
                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                     loading="lazy"
                     // className="border-8 border-white"
                  />
               </Animator>
               <Animator hoverFlip delay={0.4} className="relative bg-black bg-opacity-20 text-white overflow-hidden flex-1 max-w-md lg:max-w-full h-[60vmin] 2xl:h-[50vmin] rounded-xl flex flex-col items-center justify-center gap-y-8 p-8 shadow-lg">
                  <FadeText
                     text="Our Vision"
                     className="text-3xl sm:text-4xl"
                     direction="left"
                     framerProps={{ show: {transition :{duration : 0.5,delay: 0.2}}}}
                  />
                  <FadeText className='text-xl' framerProps={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { type: "spring", delay: 0.4 } }, }} direction='up' text='Our vision is simple: a world where anyone who wants to invest in real estate can do so easily and confidently. We’re here to create a future where property ownership is within reach for more people, opening doors to financial growth and stability for all.' />
                  <Image
                     src='/about/our-vision.jpg'
                     alt="Fractionate Company Mission"
                     fill
                     style={{
                        objectFit: 'cover',
                        zIndex: -1,
                        opacity: 0.8
                     }}
                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                     loading="lazy"
                     // className="border-8 border-white"
                  />
               </Animator>
            </div>  
         </section>
         <section className="w-full my-14 py-14">
            <div className="max-w-7xl mx-auto">
               <h1 className="p-6 text-4xl sm:text-5xl mb-8">Problems we solve as <span className="text-yellow">Fractionate</span></h1>
               <QNA/>
            </div>
         </section>
         <Footer />
      </>
   )

}