import React from 'react'
import {User, Link} from "@heroui/react";
import Image from 'next/image';
import { LeftArrow, RightArrow } from './icons';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Card_Slider = () => {

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}>
          <RightArrow className='text-gray-500 w-[2vw] md:w-[1vw]'/>
      </div>   
      );
    }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}>
          <LeftArrow className='text-gray-500 w-[2vw] md:w-[1vw]'/>
      </div>
      );
    }

    const settings = {
    accessibility:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
  };

    const slides = [
  {
    icon: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    name: "Junior Garcia",
    id: "https://x.com/jrgarciadev",
    text: "After 6 months of hard work, i finally got my web development certificate! Never too late to learn something new.",
    image: "/regirock.avif"
  },
  {
    icon: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "Junior Garcia",
    id: "https://x.com/jrgarciadev",
    text: "Made my first home,ade bread today! It's not perfect, but the smaell of fresh bread in my kitchen is everything.",
    image: "/regice.avif"
  },
  {
    icon: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    name: "Junior Garcia",
    id: "https://x.com/jrgarciadev",
    text: "Finally completed my first 5K run! Started from barely being able to run 5 for minutes. Small steps, big achievement!",
    image: "/registeel.jpg"
  },
  {
    icon: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    name: "Junior Garcia",
    id: "https://x.com/jrgarciadev",
    text: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    image: "/regieleki.avif"
  },
  {
    icon: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    name: "Junior Garcia",
    id: "https://x.com/jrgarciadev",
    text: "Backend developer. Join me on this coding adventure!",
    image: "/regidrago.avif"
  }
];

    return (
        <div className="w-[75vw] h-[50vh] m-auto">
          <div className='text-base md:text-2xl my-5 mx-3 text-gray-700'>Featured</div>
            <Slider {...settings}>
                {slides.map((s) => (
                    <div className='h-[43vh] bg-gray-100 rounded-xl border border-gray-300'>

                        <div className="flex gap-3 items-center pl-2 pt-1 md:pt-2">
                            <User
                                avatarProps={{
                                    src: s.icon,
                                    className: "w-[7.4vw] h-[4.2vh] md:w-[2.4vw] md:h-[5vh]"
                                }}
                                description={
                                    <Link isExternal href="https://x.com/jrgarciadev" size="sm" className='text-xs md:text-sm'>
                                        @jrgarciadev
                                    </Link>
                                }
                                name={s.name} classNames={{name: 'text-xs md:text-sm'}}/>
                        </div>


                        <div className='flex flex-col justify-center items-center gap-4 px-4 py-1'>
                            
                            <div className='text-xs md:text-base'>
                                {s.text}
                            </div>

                            <div className='relative h-[20vh] w-[20vw]'>
                                <Image src={s.image} alt="" fill className='rounded-xl object-cover'/>
                            </div>

                        </div>

                    </div>
                ))}
            </Slider>

        </div>
    );
}
