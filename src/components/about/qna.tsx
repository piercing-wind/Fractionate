'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Animator from '../animator';
import { ArrowLeftRight, ChartNoAxesCombined, Coins, Construction, FlipHorizontal, FolderKanban, icons } from 'lucide-react';

const data = [
  {
    title: "High Upfront Costs",
    problem: "Traditional real estate requires significant capital upfront, which limits access for many potential investors.",
    solution: "Fractionate offers fractional ownership, allowing investors to buy shares in properties with a much lower initial investment. This way, anyone can start building wealth in real estate without a huge financial commitment.",
    icon : <Coins size={32} />
   },
  {
    title: "Complexity of Property Management",
    problem: "Managing properties involves time, effort, and expertise that not all investors have.",
    solution: "Fractionate takes care of property management, so investors don’t have to deal with tenants, repairs, or other management tasks. Investors can focus on their returns, while we handle the complexities of ownership.",
    icon : <FolderKanban/>
   },
  {
    title: "Limited Investment Diversification",
    problem: "Many people can only afford to invest in a single property, increasing financial risk.",
    solution: "Fractionate allows investors to diversify by investing in multiple properties across different locations and asset types, spreading risk and potentially increasing returns.",
   icon : <ChartNoAxesCombined/>
   },
  {
    title: "Barrier to Entry for New Investors",
    problem: "New investors often face steep learning curves and high barriers to entry in real estate.",
    solution: "Fractionate simplifies the process with an easy-to-use platform and educational resources. We guide new investors step-by-step, making real estate more approachable.",
    icon : <Construction/>
   },
  {
    title: "High Transaction Costs",
    problem: "Buying and selling real estate involves fees and taxes, which can reduce returns.",
    solution: "Fractionate reduces transaction costs by consolidating investments, allowing multiple investors to share costs and increase overall profitability.",
      icon :<ArrowLeftRight/>
   },
  {
    title: "Lack of Transparency",
    problem: "Traditional real estate transactions can lack transparency, leaving investors uncertain about the true costs and returns.",
    solution: "Fractionate offers clear, transparent information about each property, including expenses, projected returns, and risks, so investors can make informed decisions.",
    icon : <FlipHorizontal/>
   }
];

export const QNA = () => {
   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

   const handleClick = (index: number) => {
     setSelectedIndex(selectedIndex === index ? null : index);
   };
   return (
      <div className="container mx-auto p-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
         <Animator key={index} delay={0.2*index} className='p-4 border border-orange-200 shadow-lg bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50 rounded-xl'>
            <div className='min-h-20 pb-2 w-full'>
              <h2 
                className="text-2xl font-semibold text-yellow mb-2 cursor-pointer"
                onClick={() => handleClick(index)}
                style={{display : 'ruby'}}
              >
                {item.title} &nbsp;&nbsp;&nbsp; {item.icon}
              </h2>
            </div>
          
               <div>
                 <p className="text-lg pcolor mb-2"><span className='text-red-500'>Problem : </span>{item.problem}</p>
                 <p className="text-lg pcolor"><span className='text-green-600'>Solution : </span>{item.solution}</p>
               </div>
          </Animator>
        ))}
      </div>
    );
  };