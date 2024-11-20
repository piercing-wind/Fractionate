import { Bed, TrendingUp, Users } from "lucide-react"
import { FadeText } from "./ui/fade-text"
import Animator, { ZoomAnimator } from "./animator"

export const InvestmentOptions = () => {
   const options = [
      {
         icon : <TrendingUp color="#ffffff" />,
         name : 'FIP - Fractionate Investment Platform',
         description : 'FIP enables fractional ownership in real estate, making high-value investments accessible to all.'
      },
      {
         icon : <Users color="#ffffff" />,
         name : 'Real Estate Crowdfunding',
         description : 'Pool your funds with other investors to invest in large-scale real estate projects and earn potential returns.'
      },
      {
         icon : <Bed color="#ffffff" />,
         name : 'Real Estate Crowdfunding',
         description : 'Pool your funds with other investors to invest in large-scale real estate projects and earn potential returns.'
      }
      ]

   return (
      <section className="w-full py-24 relative min-h-screen flex flex-col items-center justify-center gap-y-8">
             <div className="h-full w-full absolute bg-gradient-to-b from-[#FFA014] to-[#797979]  -z-10 opacity-30"/>
             <FadeText
                  text="Finding Your Purpose"
                  className="text-xl pcolor"
                  direction="up"
                  framerProps={{ show: {transition :{duration : 0.5,delay: 0.8}}}}
               />
               <FadeText
                  text="Investment Options"
                  className="text-4xl sm:text-5xl"
                  direction="up"
                  framerProps={{ show: {transition :{duration : 0.5,delay: 0.5}}}}
               />
               <div className="max-w-7xl mx-auto mt-14">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                     {options.map((option, index) => (
                        <Animator direction="up" delay={index * 0.3} key={index} className="bg-white p-8 rounded-3xl flex flex-col shadow-xl items-center justify-start gap-4">
                           <ZoomAnimator className="bg-yellow shadow-lg rounded-full w-14 h-14 flex items-center justify-center">
                              {option.icon}
                           </ZoomAnimator>
                           <div className="flex flex-col gap-2 mx-auto mt-4 md:mt-0">
                              <h4 className="text-2xl text-center h-14">{option.name}</h4>
                              <p className="text-lg pcolor text-center">{option.description}</p>
                           </div>
                        </Animator>
                     ))}
                  </div>

               </div>
      </section>
   )
}