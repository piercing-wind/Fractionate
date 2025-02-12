import Image from "next/image"
import { ZoomAnimator } from "./animator"
import { FadeText } from "./ui/fade-text"
import { Suspense } from "react"

export const Properties =()=>{
      const data = [
         {
            name : "Ghaziabad, UP",
            sector : "141",
         },
         {
            name : "Gurugram, HR",
            sector : "96",
         },
         {
            name : "New Delhi, IN",
            sector : "241",
         },
         {
            name : "Ranchi, JH",
            sector : "112",
         },
         {
            name : "Mumbai, MH",
            sector : "54",
         },
      ]

   return(
      <section className="w-full py-10 px-8 my-14 relative">
        <div className="absolute w-16 h-16 bg-gradient-to-bl from-yellow via-neutral-400 to-white opacity-50 -z-20 rounded-full -top-8 left-[40%]" />
        <div className="absolute w-24 h-24 bg-gradient-to-bl from-yellow via-neutral-400 to-white opacity-50 -z-20 rounded-full -bottom-20 right-[20%]" />
         <div className="max-w-7xl mx-auto flex flex-col gap-y-8 mb-20 md:px-6 lg:px-16 xl:px-8">
            <FadeText
               text="Areas Across the Country"
               className="text-xl sm:text-2xl uppercase text-yellow"
               direction="up"
            />
            <FadeText
               text="Our Invested Properties"
               className="text-4xl sm:text-5xl"
               direction="up"
               framerProps={{ show: {transition :{duration : 0.4,delay: 0.5}}}}
            />
         </div>
         <div className="max-w-7xl lg:max-w-full mx-auto space-y-12 ">
            <div className="flex items-center flex-wrap justify-center gap-12 mx-auto">
            <Suspense fallback={<div className="relative min-h-[60vmin] sm:min-h-[50vmin] md:min-h-[55vmin] lg:min-h-[40vmin] w-full md:w-[45%] 2xl:w-auto  lg:aspect-[1/1] rounded-3xl shadow-lg overflow-hidden">Loading...</div>}>
               <ZoomAnimator 
                  className="relative min-h-[60vmin] sm:min-h-[50vmin] md:min-h-[55vmin] lg:min-h-[40vmin] w-full md:w-[45%] 2xl:w-auto  lg:aspect-[1/1] rounded-3xl shadow-lg overflow-hidden"
                  framerProps={{
                     hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
                     visible: { opacity: 1, scale: [0.8, 1.2, 1], transition: { type: 'keyframes', duration: 0.7, delay: 0.6, ease: 'easeInOut' } },
                  }}
               >
                  <Image
                     src="/properties/image-1.jpg"
                     alt="Fractionate"
                     fill
                     style={{
                        objectFit : 'fill',
                     }}
                  />
                  <div className="absolute z-10 bg-black h-full w-full bg-opacity-10">
                     <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-4xl font-semibold">{data[0].sector}</h4>
                        <p className="text-lg">{data[0].name}</p>
                     </div>
                  </div>
               </ZoomAnimator>
             </Suspense>
               <Suspense fallback={<div className="relative min-h-[60vmin] sm:min-h-[50vmin] md:min-h-[55vmin]  lg:min-h-[40vmin] w-full md:w-[45%] 2xl:w-auto lg:aspect-[1/1] rounded-3xl shadow-lg overflow-hidden">Loading...</div>}>
               <ZoomAnimator 
                  className="relative min-h-[60vmin] sm:min-h-[50vmin] md:min-h-[55vmin]  lg:min-h-[40vmin] w-full md:w-[45%] 2xl:w-auto lg:aspect-[1/1] rounded-3xl shadow-lg overflow-hidden"
                  framerProps={{
                     hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
                     visible: { opacity: 1, scale: [0.8, 1.2, 1], transition: { type: 'keyframes', duration: 0.7, delay: 0.8, ease: 'easeInOut' } },
                  }}
               >
                  <Image
                     src="/properties/image-2.jpg"
                     alt="Fractionate"
                     fill
                     style={{
                        objectFit : 'fill',
                     }}
                  />
                  <div className="absolute z-10 bg-black h-full w-full bg-opacity-10">
                     <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-4xl font-semibold">{data[1].sector}</h4>
                        <p className="text-lg">{data[1].name}</p>
                     </div>
                  </div>
               </ZoomAnimator>
               </Suspense>
               <Suspense fallback={<div className="relative min-h-[60vmin] sm:min-h-[50vmin] md:min-h-[55vmin]  lg:min-h-[40vmin] w-full md:w-[95%] 2xl:w-auto lg:aspect-[16/9] rounded-3xl shadow-lg overflow-hidden">Loading...</div>}>
               <ZoomAnimator 
                  className="relative min-h-[60vmin] sm:min-h-[50vmin] md:min-h-[55vmin]  lg:min-h-[40vmin] w-full md:w-[95%] 2xl:w-auto lg:aspect-[16/9] rounded-3xl shadow-lg overflow-hidden"
                  framerProps={{
                     hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
                     visible: { opacity: 1, scale: [0.8, 1.2, 1], transition: { type: 'keyframes', duration: 0.7, delay: 1, ease: 'easeInOut' } },
                  }}
               >
                  <Image
                     src="/properties/image-3.jpg"
                     alt="Fractionate"
                     fill
                     style={{
                        objectFit : 'fill',
                     }}
                  />
                   <div className="absolute z-10 bg-black h-full w-full bg-opacity-10">
                     <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-4xl font-semibold">{data[2].sector}</h4>
                        <p className="text-lg">{data[2].name}</p>
                     </div>
                  </div>
               </ZoomAnimator>
               </Suspense>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-12 mx-auto">
            <Suspense fallback={<div className="relative min-h-[60vmin] sm:min-h-[50vmin] md:min-h-[55vmin]  lg:min-h-[40vmin] w-full md:w-[95%] 2xl:w-auto lg:aspect-[1.6] rounded-3xl shadow-lg overflow-hidden">Loading...</div>}>
               <ZoomAnimator 
                  className="relative min-h-[60vmin] sm:min-h-[50vmin] md:min-h-[55vmin]  lg:min-h-[40vmin] w-full md:w-[95%] 2xl:w-auto lg:aspect-[1.6] rounded-3xl shadow-lg overflow-hidden"
                  framerProps={{
                     hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
                     visible: { opacity: 1, scale: [0.8, 1.2, 1], transition: { type: 'keyframes', duration: 0.7, delay: 1.2, ease: 'easeInOut' } },
                  }}
               >
                  <Image
                     src="/properties/image-4.jpg"
                     alt="Fractionate"
                     fill
                     style={{
                        objectFit : 'fill',
                     }}
                  />
                  <div className="absolute z-10 bg-black h-full w-full bg-opacity-10">
                     <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-4xl font-semibold">{data[3].sector}</h4>
                        <p className="text-lg">{data[3].name}</p>
                     </div>
                  </div>
               </ZoomAnimator>
               </Suspense>
               <Suspense fallback={<div className="relative min-h-[60vmin] sm:min-h-[50vmin] md:min-h-[55vmin]  lg:min-h-[40vmin] w-full md:w-[95%] 2xl:w-auto lg:aspect-[21/9] rounded-3xl shadow-lg overflow-hidden">Loading...</div>}>
               <ZoomAnimator 
                  className="relative min-h-[60vmin] sm:min-h-[50vmin] md:min-h-[55vmin]  lg:min-h-[40vmin] w-full md:w-[95%] 2xl:w-auto lg:aspect-[21/9] rounded-3xl shadow-lg overflow-hidden"
                  framerProps={{
                     hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
                     visible: { opacity: 1, scale: [0.8, 1.2, 1], transition: { type: 'keyframes', duration: 0.7, delay: 1.4, ease: 'easeInOut' } },
                  }}
               >
                  <Image
                     src="/properties/image-5.jpg"
                     alt="Fractionate"
                     fill
                     style={{
                        objectFit : 'fill',
                     }}
                  />
                  <div className="absolute z-10 bg-black h-full w-full bg-opacity-10">
                     <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-4xl font-semibold">{data[4].sector}</h4>
                        <p className="text-lg">{data[4].name}</p>
                     </div>
                  </div>
               </ZoomAnimator>
               </Suspense>
            </div>
         </div>
      </section>
   )
}