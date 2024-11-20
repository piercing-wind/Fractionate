'use client'
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MoveLeft, MoveRight, Quote, Star, User } from "lucide-react";
import { FadeText } from "./ui/fade-text";
import TypingAnimation from "./ui/typing-animation";
import Animator, { ZoomAnimator } from "./animator";
import { Button } from "./ui/button";
import { useSwipeable } from "react-swipeable";
import WindowSize from "./windowSizeDetector";

type ReviewCardProps = {
   text : string;
   author : string;
   location : string;
   rating : number;
}

const ReviewCard = ({ review }: { review: ReviewCardProps}) => {

  return (
    <div className="relative flex-shrink-0 w-full max-w-lg rounded-3xl shadow-lg py-4 p-4 sm:p-12 bg-white">
      <Quote size={44} color="#FFC700" className="opacity-40 scale-[-1]" />
      <TypingAnimation className="text-base sm:text-xl mt-4 min-h-44" text={review.text} duration={4} />
      {/* <p className="text-base sm:text-xl mt-4 min-h-44" >{review.text}</p> */}
      <div className="w-full flex items-center justify-between border-t py-4 mt-6">
        <div className="flex items-center gap-4">
          <ZoomAnimator className="rounded-full h-12 w-12 border border-orange-400 flex items-center justify-center">
            <User className="h-full w-full m-2" />
          </ZoomAnimator>
          <Animator delay={0.1}>
            <h6 className="text-lg sm:text-2xl">{review.author}</h6>
          </Animator>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${i < review.rating ? 'text-yellow fill-current' : 'text-black fill-current'}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute w-14 h-14 bg-gradient-to-bl from-yellow via-neutral-400 to-white opacity-50 -z-20 rounded-full -top-8 -left-6" />
    </div>
  );
};

export const ClientReviews = () => {
  const reviews = [
    {
      text: "Fractionate has completely transformed my investment approach. The ability to invest in high-quality real estate through fractional ownership has opened up opportunities I never imagined. The returns have been outstanding, and the entire process is incredibly smooth.",
      author: "Rajesh Patel",
      location: "Gurugram, Haryana",
      rating: 4,
    },
    {
      text: "As a first-time investor, I was initially hesitant about real estate. Fractionate made the process simple and accessible. Their platform is intuitive, and the support team is always ready to help. I'm thrilled with my investment results!",
      author: "Simridhi Singh",
      location: "Noida, Delhi",
      rating: 5,
    },
    {
      text: "Fractionate offers a groundbreaking way to invest in real estate. The fractional ownership model allows me to diversify my portfolio without needing a large capital outlay. The returns have exceeded my expectations, and I couldn't be happier with the service.",
      author: "Vikas Sharma",
      location: "Amritsar, Punjab",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down" | "left" | "right">("up");
  const windowSize = WindowSize();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    setDirection(windowSize.width < 1024 ? "left" : "down");
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    setDirection(windowSize.width < 1024 ? "right" : "up");
  };
  const swipeHandlers = useSwipeable({
   onSwipedLeft: handleNext,
   onSwipedRight: handlePrev,
   preventScrollOnSwipe: true,
   trackMouse: true,
 });
  return (
    <section className="w-full relative min-h-screen flex items-center justify-center py-10">
      <div className="absolute h-full w-full -z-50 bg-gradient-to-r from-[#FFD3D3] to-[#FFE27D]"/>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-y-8 items-center lg:items-start justify-between px-8 w-full">
        <div className="max-w-sm flex flex-col gap-y-8">
          <FadeText text="Testimonials" className="text-lg sm:text-2xl uppercase text-yellow" direction="left" />
          <FadeText
            text="Look what our clients Say!"
            className="text-3xl sm:text-5xl"
            direction="left"
            framerProps={{ show: { transition: { duration: 0.5, delay: 0.5 } } }}
          />
          <FadeText
            text="Hear it straight from those who matter most—our clients. Dive into their stories below."
            className="text-xl pcolor"
            direction="left"
            framerProps={{ show: { transition: { duration: 0.5, delay: 0.8 } } }}
          />
          <div className="hidden lg:flex items-center justify-between w-[40%] mt-4">
            <Button variant="yellow" className="rounded-full p-4 h-10 w-10 bg-white border border-yellow" onClick={handlePrev}>
              <MoveLeft className="hover:text-white text-yellow" />
            </Button>
            <Button variant="yellow" className="rounded-full p-4 h-10 w-10 bg-white border border-yellow" onClick={handleNext}>
              <MoveRight className="hover:text-white text-yellow" />
            </Button>
          </div>
        </div>
        <div className="relative w-full flex flex-col lg:flex-row items-center gap-8 max-w-xl ">
          <AnimatePresence mode="wait">
            <Animator key={currentIndex} direction={direction} className="w-full max-w-lg">
              <ReviewCard review={reviews[currentIndex]} />
            </Animator>
          </AnimatePresence>
          <div {...swipeHandlers} className="h-full flex flex-row lg:flex-col gap-4 items-center justify-between">
          {reviews.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 w-20 lg:h-20 lg:w-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-yellow' : 'bg-white'}`}
              />
            ))}
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-between w-[40%] mt-4 lg:hidden">
            <Button variant="yellow" className="rounded-full p-4 h-10 w-10 bg-white border border-yellow" onClick={handlePrev}>
              <MoveLeft className="hover:text-white text-yellow" />
            </Button>
            <Button variant="yellow" className="rounded-full p-4 h-10 w-10 bg-white border border-yellow" onClick={handleNext}>
              <MoveRight className="hover:text-white text-yellow" />
            </Button>
          </div>
      </div>
    </section>
  );
};