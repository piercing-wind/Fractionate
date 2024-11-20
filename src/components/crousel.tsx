'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, House } from 'lucide-react';
import Link from 'next/link';
import { ZoomAnimator } from './animator';
import { FadeText } from './ui/fade-text';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50, // Reduced x value for less intensive animation
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50, // Reduced x value for less intensive animation
      opacity: 0,
    }),
  };
  const images = [
   {
      image : "/top-3/image-1.jpg",
      link : "/shop/1",
      description : "Nourishing herbal oil for soothing skin, promoting relaxation, and supporting overall wellness."
   },
   {
      image : "/top-3/image-2.jpg",
      link : "/shop/2",
      description : "Boost stamina, enhance strength, and improve performance for longer, satisfying intimate moments."
   },
   {
      image : "/top-3/image-3.jpg",
      link : "/shop/13",
      description : "Refreshing and nutritious drink that supports digestion, boosts hydration, and promotes overall wellness. Enjoy daily for health benefits."
   },
];

  return (
    <div className='relative h-auto mx-auto max-w-lg flex flex-col items-center justify-center'>
      <section className="min-h-[30vmin] aspect-[16/9] w-full my-4 relative flex items-center justify-center rounded-2xl">
        <div className="absolute w-14 h-14 bg-gradient-to-bl from-yellow via-neutral-400 to-white opacity-50 -z-20 rounded-full -top-10 -right-8" />
        <div className='flex items-center w-[108%] justify-between absolute z-50 top-[50%] bottom-[50%] overflow-visible'>
          <button
            onClick={handlePrev}
            className="p-1 rounded-full bg-white shadow-lg scale-90 hover:scale-100 transition-all duration-300"
          >
            <ChevronLeftIcon size={32} className='text-yellow' />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded-full bg-white shadow-lg scale-90 hover:scale-100 transition-all duration-300"
          >
            <ChevronRightIcon size={32} className='text-yellow' />
          </button>
        </div>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="w-full h-full flex absolute shadow-md rounded-2xl overflow-hidden"
          >
            <Image
              src={images[currentIndex].image}
              alt="Fractionate"
              className="h-full w-full"
              fill
              priority={currentIndex === 0}
              loading={currentIndex === 0 ? 'eager' : 'lazy'}
              style={{
                objectFit: 'fill',
                zIndex: -5
              }}
            />
            <div className='absolute h-full w-full bg-black bg-opacity-10 z-10 ' />
            <div className='absolute bottom-4 sm:bottom-10 z-30 rounded-b-2xl flex flex-col items-center justify-start w-full px-8 pb-2 h-24'>
              <FadeText className='flex font-bold text-[#ffeed4] text-2xl mr-auto rounded-full mx-6 px-2' direction='up' text='New Arrival' />
              <div className='w-full flex items-center justify-between sm:px-8 mt-2 text-white'>
                <div className='flex flex-col items-center z-10 h-14 gap-2'>
                  <FadeText distance={20} className='text-xs sm:text-lg font-semibold' framerProps={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { type: "spring", delay: 0.1 } }, }} direction='up' text='Min Invst.' />
                  <FadeText distance={20} className='text-sm sm:text-xl font-semibold' framerProps={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { type: "spring", delay: 0.2 } }, }} direction='up' text='10 Lakhs' />
                </div>
                <div className='flex flex-col items-center z-10 h-14 gap-2'>
                  <FadeText distance={20} className='text-xs sm:text-lg font-semibold' framerProps={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { type: "spring", delay: 0.3 } }, }} direction='up' text='IRR' />
                  <FadeText distance={20} className='text-sm sm:text-xl font-semibold' framerProps={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { type: "spring", delay: 0.4 } }, }} direction='up' text='10 - 15 %' />
                </div>
                <div className='flex flex-col items-center h-14 gap-2 '>
                  <FadeText distance={20} className='text-xs sm:text-lg font-semibold' framerProps={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { type: "spring", delay: 0.5 } }, }} direction='up' text='Tenure' />
                  <FadeText distance={20} className='text-sm sm:text-xl font-semibold' framerProps={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { type: "spring", delay: 0.6 } }, }} direction='up' text='3 - 5 Years' />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </section>
      <div className="flex items-center justify-between space-x-2 my w-full ">
        {images.slice().reverse().map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full w-full cursor-pointer ${index === images.length - 1 - currentIndex ? 'bg-yellow' : 'bg-neutral-200'}`}
            onClick={() => handleDotClick(images.length - 1 - index)}
          />
        ))}
      </div>
      <Link href="/properties" >
        <ZoomAnimator
          framerProps={{
            hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
          }}
          className="flex mt-14 max-w-72 justify-center items-center gap-2 bg-white rounded-full text-nowrap text-xl shadow-md px-4 py-4 mx-auto"
          hoverScale={1.05}
        >
          <House color="#ffa014" />
          View Opportunity
        </ZoomAnimator>
      </Link>
    </div>
  );
};

export default Carousel;