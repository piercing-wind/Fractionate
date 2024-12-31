import React from "react";
import { locationData, Location } from "@/data/location"
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { FAQItem } from "@/components/faq";
import { Metadata } from "next";

export async function generateStaticParams() {
   const urls = locationData.map(({slug})=>({
      location : slug
   }))
   return urls;
 }


 export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) : Promise<Metadata>{
   const { location: locationUrl } = await params;
   const data : Location | undefined = locationData.find(loc => loc.slug.includes(locationUrl));

   return{
      title: `Fractionate ${data?.title}`,
      description: data?.description.slice(0,150),
      openGraph:{
         title: `Fractionate ${data?.title}`,
         description: data?.description.slice(0,150)
      },
   }
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
   const { location: locationUrl } = await params;
   const data : Location | undefined = locationData.find(loc => loc.slug.includes(locationUrl));
  
   if(!data) return notFound();

   const getRandomWordHighlighted = (text: string) => {
      const words = text.split(" ");
      const randomIndex = Math.floor(Math.random() * words.length);
      return words.map((word, index) => (
         <React.Fragment key={index}>
            {index === randomIndex ? <span className="text-yellow">{word}</span> : word}
            {index < words.length - 1 && " "}
         </React.Fragment>
      ));
   };
   const generateRandomBalls = (count: number) => {
      const balls = [];
      for (let i = 0; i < count; i++) {
         const size = Math.random() * 50 + 20; // Random size between 20 and 70
         const top = Math.random() * 100; // Random top position
         const left = Math.random() * 100; // Random left position

         balls.push(
            <div
               key={i}
               className="absolute rounded-full"
               style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  background: `linear-gradient(to bottom right, yellow, #a8a8a8, white)`,
                  opacity: 0.5,
                  zIndex: -10,
               }}
            />
         );
      }
      return balls;
   };

   return (
      <main className="w-full relative overflow-x-hidden">
         <Header className="z-50 bg-white"/>
           <div className="relative w-full mx-auto max-w-7xl py-14 tracking-wide text-base sm:text-lg mt-14 px-4 sm:px-8 2xl:px-0">
            {generateRandomBalls(10)}
            <section className="flex flex-col lg:flex-row items-start gap-8 ">
               <div className="flex flex-col justify-center gap-y-4 w-full lg:max-w-3xl">
                 <h1 className="font-bold text-4xl mb-4">{getRandomWordHighlighted(data?.title!)}</h1>
                 <p>{data?.description}</p>
                 <p>{data?.description2}</p>

               </div>
               <div className="relative sm:h-96 aspect-[16/9] w-full rounded-lg shadow-md overflow-hidden">
                  <Image
                     src={data?.image!}
                     alt={`Fractionate ${data?.title}`}
                     fill
                     style={{ objectFit: "cover" }}
                  />
               </div>
            </section>
            {/* About */}
             <section className="w-full mt-24 flex flex-col items-center gap-y-8">
                <h2 className="font-bold text-2xl mb-4">{getRandomWordHighlighted(data?.section2.title!)}</h2>
                <p>{data?.section2.description}</p>
                <p>{data?.section2.description2}</p>
             </section>

            {/* Section3 */}
            <section className="my-8 p-6 bg-gray-100 rounded-lg shadow-md mt-24">
              <h2 className="text-2xl font-semibold mb-4">{getRandomWordHighlighted(data?.section3.title!)}</h2>
              <div className="space-y-4">
                 {data?.section3.data.map((item, index) => (
                    <div key={index} className="md:p-4 rounded-lg shadow-sm">
                       <h3 className="text-xl font-medium text-gray-800 my-4">{index+1}. {item.title}</h3>
                       <p className="text-gray-600">{item.description}</p>
                    </div>
                 ))}
              </div>
           </section>
               {/* FAQ */}
           <section className="my-8 md:p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 px-4">{getRandomWordHighlighted(data?.faq.title!)}</h2>
            <div className="space-y-4">
               {data?.faq.data.map((item, index) => (
                  <FAQItem key={index} question={item.question} answer={item.answer} />
               ))}
            </div>
          </section>

           <div className="w-full my-14 flex flex-col items-center">
            <p> {data?.end}</p>
            <span className="mx-auto my-8 text-xl text-yellow">* * * * *</span>
           </div>  

         </div>
         <Footer/>
      </main>
   )
 }