import { lazy, memo } from "react";
import { FadeText } from "./ui/fade-text"
import { Button } from "./ui/button";
import Image from "next/image";
import { Discounted, NewListing, Popular } from "./propertyTags";
// import { IndianRupee } from "lucide-react";
import Link from "next/link";
const ZoomAnimator = lazy(() => import("./animator").then(module => ({ default: module.ZoomAnimator })));

type Property = {
   image : string,
   name : string,
   location : string,
   tag : 'popular' | 'discounted' | 'newlisting'
}

const PropertyCard = memo(({data, tag = "popular"}:{data : Property ,tag ?: 'popular' | 'discounted' | 'newlisting'}) => {
   const tagComponent = {
      popular : <Popular/>,
      discounted : <Discounted/>,
      newlisting : <NewListing/>,
   }
   return (
      // <Link href="/properties/1">
      <div className="min-h-[65vmin] min-w-64 max-w-72 flex-shrink-0 bg-gray-200 rounded-xl">
               <ZoomAnimator 
                  className="relative flex-shrink-0 min-h-[60vmin] sm:min-h-[40vmin] lg:min-h-[30vmin] w-full 2xl:w-auto lg:aspect-[1/1] rounded-3xl shadow-lg overflow-hidden"
                  framerProps={{
                     hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
                     visible: { opacity: 1, scale: [0.8, 1.2, 1], transition: { type: 'keyframes', duration: 0.7, delay: 0.8, ease: 'easeInOut' } },
                  }}
               >
                  <Image
                     src={data.image}
                     alt="Fractionate"
                     fill
                     style={{
                        objectFit : 'fill',
                     }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                     <div className="absolute bottom-4 left-4 text-white">
                       {tagComponent[tag]}
                     </div>
               </ZoomAnimator>
               <div className="p-4 flex flex-col gap-4">
                  <div>
                     <h2 className="text-2xl font-semibold">{data.name}</h2>
                     <p className="text-lg pcolor">{data.location}</p>
                  </div>
                  {/* <p className="text-lg pcolor">Discription</p> */}
                  <Link href="mailto:info@fractionate.com" className="px-8 py-1 border-2 border-yellow mt-2 rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center text-lg">Inquire Now</Link>
                  {/* <p className="text-lg pcolor flex gap-4 items-center">Price <IndianRupee size={16}/></p> */}
               </div>
      </div>
      // </Link>
   )
})

PropertyCard.displayName = "PropertyCard"

export const OurListing = memo(() => {
   const properties : Property[] = [
      {
         image : '/top-3/image-1.jpg',
         name : 'Royal Tower',
         location : 'SEO 14, Gurgaon',
         tag : 'popular'
      },
      {
         image : '/properties/image-1.jpg',
         name : 'Royal Tower',
         location : 'Sector 1, Chandigarh',
         tag : 'discounted'
      }
   ]

   return (
      <section className="w-full px-8">
         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-y-4 overflow-x-hidden">
            <div className="flex flex-col gap-y-4 max-w-xl">
               <FadeText
                  text="CHECKOUT OUR NEW"
                  className="text-2xl uppercase text-yellow"
                  direction="left"
               />
               <FadeText
                  text="Latest Listed Properties"
                  className="text-5xl "
                  direction="left"
                  framerProps={{ show: {transition :{duration : 0.5,delay: 0.5}}}}
               />
               <FadeText
                  text="At Fractionate, we’re transforming real estate investment by making premium properties accessible through fractional ownership, offering high-return opportunities for investors of all sizes."
                  className="text-xl pcolor"
                  direction="left"
                  framerProps={{ show: {transition :{duration : 0.5,delay: 0.8}}}}
               />
            </div>
            <div className="flex items-center gap-4">
                  <Button variant={'outline'} className={`p-2 px-8 text-yellow rounded-full border hover:bg-opacity-50 hover:bg-yellow hover:text-white transition-all duration-200 border-yellow ${''} `}>All</Button>
                  <Button variant={'outline'} className={`p-2 px-8 text-yellow rounded-full border hover:bg-opacity-50 hover:bg-yellow hover:text-white transition-all duration-200 border-yellow ${''} `}>Live</Button>
                  <Button variant={'outline'} className={`p-2 px-8 text-yellow rounded-full border hover:bg-opacity-50 hover:bg-yellow hover:text-white transition-all duration-200 border-yellow ${''} `}>Rent</Button>
            </div>
         </div>
         <div className="max-w-7xl w-full mx-auto my-14 py-4">
  
            <div className="flex items-center overflow-x-auto gap-8 flex-shrink-0 w-full mx-auto " style={{scrollbarWidth: 'none' }}>
               {
                  properties.map((property,index) => (
                     <PropertyCard key={index} data={property} tag={property.tag as 'popular' | 'discounted' | 'newlisting'}/>
                  ))
               }
            </div>
   
         </div>
      </section>
   )
})

OurListing.displayName = "OurListing"