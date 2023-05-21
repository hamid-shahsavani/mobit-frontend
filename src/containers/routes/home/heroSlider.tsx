'use client';

import { FC, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

import imageDesktopOne from '@/temp/assets/routes/home/hero-slider/desktop-1.jpg';
import imageDesktopTwo from '@/temp/assets/routes/home/hero-slider/desktop-2.png';
import imageDesktopTree from '@/temp/assets/routes/home/hero-slider/desktop-3.png';
import imageDesktopFour from '@/temp/assets/routes/home/hero-slider/desktop-4.png';
import imageMobileOne from '@/temp/assets/routes/home/hero-slider/mobile-1.jpg';
import imageMobileTwo from '@/temp/assets/routes/home/hero-slider/mobile-2.png';
import imageMobileTree from '@/temp/assets/routes/home/hero-slider/mobile-3.png';
import imageMobileFour from '@/temp/assets/routes/home/hero-slider/mobile-4.png';
import { IconChevron } from '@/constants/global/icons';
import useDetectScreenSize from '@/hooks/global/detectScreenSize';

const HeroSlider: FC = (): JSX.Element => {
  // detect current innerWidth and innerHeight
  const { innerWidth, innerHeight } = useDetectScreenSize();

  const swiperRef = useRef<any>(null);
  const sliderData = [
    {
      image: innerWidth <= 640 ? imageMobileOne : imageDesktopOne,
    },
    {
      image: innerWidth <= 640 ? imageMobileTwo : imageDesktopTwo,
    },
    {
      image: innerWidth <= 640 ? imageMobileTree : imageDesktopTree,
    },
    {
      image: innerWidth <= 640 ? imageMobileFour : imageDesktopFour,
    },
  ];

  return (
    <section id="hero_slider" dir='ltr' className="group relative">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
          el: '#hero-slider_pagination',
        }}
        modules={[Autoplay, Pagination]}
        className="overflow-hidden rounded-xl"
      >
        {sliderData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={'/'}>
                <div className="aspect-h-2 aspect-w-3 sm:aspect-h-2 bg-base-gray-100 overflow-hidden rounded-xl sm:aspect-w-7">
                  {!!innerWidth && (
                    <Image
                      fill
                      src={item.image}
                      className="block h-full w-full object-cover object-center"
                      alt="slide image"
                    />
                  )}
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* custom pagination and custom navigation for hero slider */}
      <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center">
        <div className="flex w-fit gap-2">
        <button
            className="flex w-6 items-center justify-center rounded-[5px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <IconChevron
              color={'base-gray-400'}
              size={'xs'}
              position={'left'}
            />
          </button>
          <div id="hero-slider_pagination" />
          <button
            className="flex w-6 items-center justify-center rounded-[5px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <IconChevron
              color={'base-gray-400'}
              size={'xs'}
              position={'right'}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;