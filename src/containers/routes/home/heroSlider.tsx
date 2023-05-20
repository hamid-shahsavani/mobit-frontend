'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

import imageDesktop from '@/temp/assets/routes/home/hero-slider/desktop.jpg';
import imageMobile from '@/temp/assets/routes/home/hero-slider/mobile.jpg';

const HeroSlider: FC = (): JSX.Element => {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="hero_slider overflow-hidden rounded-xl"
      >
        <SwiperSlide>
          <Link href={'/'}>
            <div className="aspect-w-3 aspect-h-1 lg:aspect-w-4">
              <Image
                fill
                src={imageMobile}
                className="block h-full w-full overflow-hidden rounded-xl bg-[#eee] object-cover object-center"
                alt="slide image"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'}>
            <div className="aspect-w-3 aspect-h-1 lg:aspect-w-4">
              <Image
                fill
                src={imageMobile}
                className="block h-full w-full overflow-hidden rounded-xl bg-[#eee] object-cover object-center"
                alt="slide image"
              />
            </div>
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link href={'/'}>
            <div className="aspect-w-3 aspect-h-1 lg:aspect-w-4">
              <Image
                fill
                src={imageMobile}
                className="block h-full w-full overflow-hidden rounded-xl bg-[#eee] object-cover object-center"
                alt="slide image"
              />
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
