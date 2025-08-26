import Image from "next/image";
import Animator, { ZoomAnimator } from "./animator";
import { FadeText } from "./ui/fade-text";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
type ProfileCardProps = {
   image : string,
   name : string,
   position : string,
   social : {
      linkedin : string,
      instagram : string,
      facebook : string,
      whatsapp : string,
   }
}

const ProfileCard =({data}:{data :ProfileCardProps})=>{
   const {linkedin, instagram, facebook, whatsapp} = data.social

   return (
      <div className="px-2 sm:px-4 min-h-[30vmin] w-36 md:w-52 flex flex-col items-center">
       <ZoomAnimator hoverFlip className="relative h-52 sm:h-64 border border-yellow aspect-[3/4] rounded-tl-[6rem] rounded-3xl overflow-hidden shadow-lg">
          <Image
             src={data.image}
             alt="Fractionate"
             fill
             style={{
                objectFit : 'cover',
             }}
             className="scale-x-[-1]"
             loading="lazy"
          />
       </ZoomAnimator>
       <div className="space-y-2 flex flex-col items-center mt-8 w-full">
          <FadeText
            text={data.name}
            className="text-sm sm:text-xl text-center mx-auto"
            direction="up"
            framerProps={{ show: { transition: { duration: 0.5, delay: 0.5 } } }}
          />
          <FadeText
            text={data.position}
            className="text-xs sm:text-lg text-yellow text-center"
            direction="up"
          />
       </div> 
       <div className="w-full flex items-center justify-between sm:px-2 mt-4">
       <Animator hoverScale={1.05} delay={0.4}><Link href={linkedin} className="h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center"> <Linkedin  className="h-full w-full" color="#ffa014"/></Link></Animator>
       <Animator hoverScale={1.05} delay={0.6}><Link href={instagram} className="h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center"> <Instagram className=" h-full w-full"  color="#ffa014"/></Link></Animator>
       <Animator hoverScale={1.05} delay={0.8}><Link href={facebook} className="h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center"> <Facebook  className=" h-full w-full" color="#ffa014"/></Link></Animator>
       <Animator hoverScale={1.05} delay={1}>
          <Link href={whatsapp}>
          <Image
             src='/whatsapp.svg'
             alt="Fractionate"
             height={20}
             width={20}
             loading="lazy"
          />
          </Link>
        </Animator>
      </div> 
   </div>
   )
}


export const OurTeam = () => {
   const Team = [
      {
         image : "/team/image-1.jpg",
         name : "Manbir Chahal.T Sir",
         position : "CEO & Founder",
         social : {
            linkedin : "https://www.linkedin.com/in/",
            instagram : "https://www.instagram.com/",
            facebook : "https://www.facebook.com/",
            whatsapp : "https://wa.me/",
         }
      },
      {
         image : "/team/image-1.jpg",
         name : "Manbir Chahal.T Sir",
         position : "CEO & Founder",
         social : {
            linkedin : "https://www.linkedin.com/in/",
            instagram : "https://www.instagram.com/",
            facebook : "https://www.facebook.com/",
            whatsapp : "https://wa.me/",
         }
      },
      {
         image : "/team/image-1.jpg",
         name : "Manbir Chahal.T Sir",
         position : "CEO & Founder",
         social : {
            linkedin : "https://www.linkedin.com/in/",
            instagram : "https://www.instagram.com/",
            facebook : "https://www.facebook.com/",
            whatsapp : "https://wa.me/",
         }
      },
      {
         image : "/team/image-1.jpg",
         name : "Manbir Chahal.T Sir",
         position : "CEO & Founder",
         social : {
            linkedin : "https://www.linkedin.com/in/",
            instagram : "https://www.instagram.com/",
            facebook : "https://www.facebook.com/",
            whatsapp : "https://wa.me/",
         }
      },
   ]

  return (
    <section className="w-full flex flex-col gap-y-8 items-center justify-center mt-20 sm:my-24 py-10">
      <FadeText
        text="Meet the people behind Fractionate"
        className="text-lg sm:text-2xl uppercase text-yellow"
        direction="up"
      />
      <FadeText
        text="Our Team of Experts"
        className="text-3xl sm:text-5xl"
        direction="up"
        framerProps={{ show: { transition: { duration: 0.5, delay: 0.5 } } }}
      />
      <div className="max-w-7xl mx-auto my-16">
         <div className="grid grid-cols-2 sm:space-x-4 md:space-x-0 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {Team.map((team, index) => (
               <ProfileCard key={index} data={team} />
            ))}
         </div>
      </div>
    </section>
  );
};
