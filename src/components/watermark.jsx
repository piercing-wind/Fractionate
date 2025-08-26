import { Heart } from 'lucide-react';
import React from 'react';

const Watermark = ({className = ""}) => {
  return (
    <div className={` bottom-0 right-0 w-full flex flex-wrap sm:max-w-48 h-24 my-4 ${className} `}>
      <div className='flex items-center flex-row w-full'>
         <p className='text-xs w-full' style={{display : 'ruby'}}>This Website is Made With &nbsp; <Heart size={16} className='fill-red-500'/>&nbsp; By</p>
      </div>
      <div className='flex flex-wrap justify-between items-center gap-2 sm:gap-0 w-full'>
      <a href="https://byteswithbits.com/contact" target='_blank'>
         <button className='border flex items-center justify-center w-full px-2 flex-shrink-0 text-nowrap rounded-full min-w-[6rem] min-h-6 h-full text-xs border-purple-600 hover:bg-purple-200 hover:scale-105 transition-all duration-200'>
            Get Your website
         </button>
      </a>
      <a href="https://byteswithbits.com" target='_blank'>
         <img
            src="/byteswithbits.png"
            alt="Bytes with Bits"
            width={80}
            height={10}
            className='hover:scale-105 transition-all duration-200'
            loading="lazy"
         />
      </a>
      </div>
    </div>
  );
};

export default Watermark;