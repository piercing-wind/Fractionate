import Animator from "@/components/animator";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FadeText } from "@/components/ui/fade-text";
import { AlignVerticalDistributeCenter, ChartNoAxesCombined, ClipboardList, DollarSign, HandCoins, Home, Landmark, Percent, PieChart, Repeat, Shield, Star, TrendingUp, Waypoints } from "lucide-react";
import Image from "next/image";

export default function HowItWorksPage() {
   const steps = [
      {
         title: "Start with Thorough Research",
         desc : "Investing begins with informed decisions. Explore our carefully selected real estate opportunities, backed by detailed market research and expert analysis. We make sure each property is vetted for quality, potential returns, and risk factors, so you can choose confidently and focus on what aligns with your financial goals.",
         icons : <Star size={48} color="#ffa014"/>
      },
      {
         title: "Make Your Investment with Ease",
         desc : "Once you've chosen the perfect opportunity, investing is straightforward and secure. With our streamlined process, you can invest in fractional ownership without needing a massive upfront capital. Whether you're starting small or aiming high, your investment is built on a foundation of trust and transparency.",
         icons : <HandCoins size={48} color="#ffa014"/>
      },
      {
         title: "Track and Monitor Your Progress",
         desc : "Stay in control of your investment journey. Our platform provides real-time insights and regular updates about your property's performance. From rental income to market appreciation, you can track every detail and watch your investment grow without the hassle of day-to-day management.",
         icons : <ChartNoAxesCombined size={48} color="#ffa014"/>
      },
      {
         title: "Earn Steady Returns Effortlessly",
         desc : "Sit back and enjoy the benefits of your investment. Whether it's consistent rental income or long-term capital appreciation, your investment works hard while you stay relaxed. It’s a reliable way to grow your wealth while focusing on other priorities in life.",
         icons : <Percent size={48} color="#ffa014"/>
      },
      {
         title: "Sell When You're Ready",
         desc : "Flexibility is key. When it's time to cash out or shift your focus to new opportunities, our platform ensures an easy and hassle-free selling process. Liquidate your investment quickly, reinvest in new properties, or use the funds for your next big step.",
         icons : <DollarSign size={48} color="#ffa014"/>
      },
      {
         title: "Enjoy a Relaxed and Secure Lifestyle",
         desc : "With your investment generating returns in the background, you can live the life you’ve always envisioned. Whether it’s traveling the world, pursuing passions, or spending more time with loved ones, your financial security is well taken care of.",
         icons : <Shield size={48} color="#ffa014"/>
      },
   ];

   const BenefitsOfFractional = [
      {
        title: "Diversification with Lower Capital Requirements",
        icon: <PieChart size={40} color="#FFA014" />,
      },
      {
        title: "Affordable Access to Premium Real Estate",
        icon: <Home size={40} color="#FFA014" />,
      },
      {
        title: "Flexibility to Sell Your Shares Anytime",
        icon: <Repeat size={40} color="#FFA014" />,
      },
      {
        title: "Enjoy Hassle-Free Property Management",
        icon: <ClipboardList size={40} color="#FFA014" />,
      },
      {
        title: "Earn Passive Income from Rental Yields",
        icon: <DollarSign size={40} color="#FFA014" />,
      },
      {
        title: "Benefit from Property Value Appreciation",
        icon: <TrendingUp size={40} color="#FFA014" />,
      },
    ];
    

  return (
      <main className="w-full relative">
         <Header className="absolute top-0 left-0 lg:text-white z-50 backdrop-blur"/>
         <section className="w-full h-screen relative flex items-center justify-center px-8">
            <Image
               src='/how-it-works/hero-bg.png'
               alt="Fractionate How it works"
               fill
               style={{
                  objectFit : 'cover',
                  zIndex: -20
               }}
               loading="eager"
               sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black -z-10 opacity-50"/>
            <div className="max-w-7xl m-auto flex flex-col gap-y-8">
               <FadeText
                  direction="up"
                  text="Transforming Ideas into Reality."
                  className="font-semibold text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] text-white z-10"
               />
               <FadeText
                  direction="up"
                  framerProps={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { type: "spring", delay : 0.4 } },
                  }}
                  text="Simplifying Investments for Your Success!"
                  className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-yellow z-10"
               />
            </div>
         </section>
         <section className="w-ful my-14 py-14 px-8">
            <div className="max-w-7xl mx-auto">
               <div className="flex items-center gap-4 mb-14">
                  <FadeText
                     direction="left"
                     framerProps={{
                           hidden: { opacity: 0 },
                           show: { opacity: 1, transition: { type: "spring", delay : 0.4 } },
                     }}
                     text="How it Works"
                     className="font-semibold text-4xl sm:text-5xl z-10"
                  />
                  <span><Waypoints size={48} color="#ffa014"/></span>
               </div>
               <div className="w-full relative max-h-screen overflow-y-auto rounded-3xl" style={{scrollbarWidth : 'none'}}>
                   {steps.map((step, index) => (
                     <div key={index} className="w-full m-8 mx-auto sticky top-0  h-screen aspect-[16/9] rounded-3xl overflow-hidden shadow-md shadow-yellow">
                        <div className="w-full h-full relative rounded-3xl overflow-hidden flex items-center p-8">
                           <Image
                              key={index}
                              src={`/how-it-works/image-${index + 1}.png`}
                              alt={`Fractionate How it works ${step.title}`}
                              fill
                              style={{
                                 objectFit : 'cover',
                                 zIndex: -11
                              }}
                              loading="eager"
                              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           />
                           <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black -z-10 ${index === 5 ? 'opacity-70' : 'opacity-50' }`}/>
                           <div className="flex flex-col gap-y-8 md:p-8">
                              <div className="flex items-center gap-4">
                                 <FadeText
                                    direction="up"
                                    framerProps={{
                                          hidden: { opacity: 0 },
                                          show: { opacity: 1, transition: { type: "spring", delay : 0.2 } },
                                    }}
                                    text={step.title}
                                    className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl z-10 text-white"
                                 />
                                 <Animator direction="up" delay={0.2}>
                                  {step.icons}
                                 </Animator>
                              </div>
                              <FadeText
                                 direction="up"
                                 framerProps={{
                                       hidden: { opacity: 0 },
                                       show: { opacity: 1, transition: { type: "spring", delay : 0.4 } },
                                 }}
                                 text={step.desc}
                                 className="text-lg sm:text-2xl md:text-3xl z-10 text-white"
                              />
                           </div>
                        </div>
                     </div>
                   ))}  
               </div>
            </div>
         </section>
         <section className="w-ful my-14 py-14 px-8">
            <div className="max-w-7xl mx-auto">
               <div className="flex items-center gap-4 mb-14">
                  <FadeText
                     direction="left"
                     framerProps={{
                           hidden: { opacity: 0 },
                           show: { opacity: 1, transition: { type: "spring", delay : 0.4 } },
                     }}
                     text="Benefits of Fractional Ownership"
                     className="font-semibold text-4xl sm:text-5xl z-10"
                  />
                  <Animator delay={0.3}><AlignVerticalDistributeCenter size={48} color="#ffa014"/></Animator>
               </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
                 {BenefitsOfFractional.map(({title, icon}, index) => (
                  <Animator delay={0.1*index} key={index} className="shadow-md m-auto h-[40vmin] aspect-[1] rounded-full flex flex-col gap-y-2 items-center justify-center p-4 bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 ">
                     {icon}
                     <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center">{title}</h4>
                  </Animator>
                 ))}
                </div>     
            </div>
         </section>
         <Footer/>
      </main>
  );
}
