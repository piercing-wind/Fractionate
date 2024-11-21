import Animator from "@/components/animator";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FolderPen, Mail, MapPin, MapPinHouse, Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Contact Us - Fractionate | Get in Touch with Real Estate Experts",
   description: "Have questions about buying, selling, or renting property? Contact Fractionate today. Our dedicated team is here to assist with all your real estate needs.",
   metadataBase: new URL("https://fractionate.in/contact"),
}

export default function ContactPage() {
   return (
      <main className="w-full">
         <Header/>
         <section className="w-full relative mb-14">
            <div className="max-w-7xl mx-auto  h-screen flex items-center">
               <Animator className="min-h-[50vmin] border-4 w-full max-w-lg flex flex-col items-center justify-start p-4 backdrop-blur-lg text-white">
                  <h1 className="text-4xl md:text-5xl">Contact</h1>
                  <div className="w-full my-4 text-xl flex flex-col gap-y-4">
                     <p style={{display: 'ruby'}}>Business Name <FolderPen color="#ffa014"/>: <span className="text-2xl text-yellow"> Fractionate</span></p>
                     <p style={{display: 'ruby'}}>Address <MapPinHouse color="#ffa014"/>: D Block Ranit Avenue, Amritsar, India</p>
                     <p style={{display: 'ruby'}}>Phone <Phone color="#ffa014"/>: <Link className="hover:text-yellow" href="tel:917700008725">+91 77000 08725</Link></p>
                     <p style={{display: 'ruby'}}>Email <Mail color="#ffa014"/>: <Link className="hover:text-yellow" href="mailto:info@fractionate.in">info@fractionate.in</Link></p>
                     <p style={{display: 'ruby'}}>Geo Location <MapPin color="#ffa014"/>: <Link className="hover:text-yellow" href="https://maps.app.goo.gl/UUA8aTegmswzs3iX7">Google Map</Link></p>
                  </div>
               </Animator>
            </div>
            <Image
               src='/contact/hero-bg.jpg'
               alt= "Fractionate Contact"
               fill
               sizes="100vw"
               loading="eager"
               style={{
                  objectFit: 'cover',
                  zIndex: -1,
               }}
            /> 
         </section>
         <Footer/>
      </main>
   )
}