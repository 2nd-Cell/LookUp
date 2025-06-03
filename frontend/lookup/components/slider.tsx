import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { LeftArrow, RightArrow } from "@/components/icons";

export const Slider = () => {

const slides = [
  {
    image: "/vecteezy_illustration-of-people-make-engage-and-viral-content-in_6470926.jpg",
    title: "Share Ideas",
    text: "Engage in vibrant conversations with people of fellow interests"
  },
  {
    image: "/Project_45-03.jpg",
    title: "Get Feedback",
    text: "Receive feedback of others on your questions"
  },
  {
    image: "/Project_45-09.jpg",
    title: "Ask away",
    text: "Conduct opinion polls or quizes"
  },
  {
    image: "/vecteezy_illustration-of-people-agreeing-with-each-other-in-an_13192645.jpg",
    title: "Verify",
    text: "Have people verify your answers"
  },
  {
    image: "/vecteezy_man-holding-magnifying-glass-and-looking-through-it-at_18998157.jpg",
    title: "Start Looking",
    text: "Remove all doubts and be sure"
  }
];

  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };


  return (
    <div className="relative h-[40vh] md:h-[80vh] w-full overflow-hidden">
        {/* Navigation Arrows */}
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={previousSlide}
            className="bg-none text-gray-500 rounded"
          >
            <LeftArrow className="w-[2vw]" />
          </button>
        </div>

        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={nextSlide}
            className="bg-none text-gray-500 rounded"
          >
            <RightArrow className="w-[2vw]" />
          </button>
        </div>

        {/* Carousel container */}
        <div className="w-full h-full">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              width: `${slides.length * 100}vw`,
              transform: `translateX(-${currentSlide * 100}vw)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative w-[100vw] h-full flex-shrink-0 flex"
              >
                {/* Text Container - Centered vertically */}
                <div className="w-[40vw] h-full flex items-center justify-center pl-[10vw]">
                  <div className="max-w-[30vw]">
                    <h2 className="text-[4vw] text-blue-400 mb-[1vw]">
                      {slide.title}
                    </h2>
                    <p className="text-[2vw] text-slate-500">
                      {slide.text}
                    </p>
                  </div>
                </div>

                {/* Image Container - 60vw */}
                <div className="w-[60vw] h-full relative">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    sizes="60vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}
