'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef } from 'react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IconChevron } from '@/constants/global/icons';
import useDetectScreenSize from '@/hooks/routes/home/detectScreenSize';
import { heroSliderData } from '@/resources/routes/home/heroSliderData';

const HeroSlider: FC = (): JSX.Element => {
  // detect current innerWidth
  const { innerWidth } = useDetectScreenSize();

  const swiperRef = useRef<any>(null);

  return (
    <section
      id="hero_slider"
      dir="ltr"
      className="group/hero-slider container relative"
    >
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
        {heroSliderData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={'/'}>
                <div className="bg-c-gray-100 aspect-h-2 aspect-w-3 overflow-hidden rounded-xl sm:aspect-h-2 sm:aspect-w-7">
                  {!!innerWidth && (
                    <Image
                      fill
                      src={
                        innerWidth <= 640 ? item.imageMobile : item.imageDesktop
                      }
                      className="block h-full w-full object-cover object-center"
                      alt="تصویر اسلایدر"
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
            className="group/hero-slider_navigation flex w-6 items-center justify-center rounded-[5px] bg-white opacity-0 transition-all duration-300 group-hover/hero-slider:opacity-100"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <IconChevron
              color={'base-gray-400'}
              hoverColor={{
                group: 'hero-slider_navigation',
                color: 'base-gray-600',
              }}
              size={'xs'}
              position={'left'}
            />
          </button>
          <div id="hero-slider_pagination" />
          <button
            className="group/hero-slider_navigation flex w-6 items-center justify-center rounded-[5px] bg-white opacity-0 transition-all duration-300 group-hover/hero-slider:opacity-100"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <IconChevron
              color={'base-gray-400'}
              hoverColor={{
                group: 'hero-slider_navigation',
                color: 'base-gray-600',
              }}
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
