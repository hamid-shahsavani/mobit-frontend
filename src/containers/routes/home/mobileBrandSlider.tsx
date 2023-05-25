'use client';

import ProductCard from '@/components/routes/home/productCard';
import { IconChevron } from '@/constants/global/icons';
import Link from 'next/link';
import { FC, Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { mobileBrandSliderData } from '@/resources/routes/home/mobileBrandSliderData';

const MobileBrandSlider: FC = (): JSX.Element => {
  return (
    <section className="container relative !z-0 flex">
      <Swiper
        slidesPerView={'auto'}
        id="mobile-brand-slider"
        className="!static"
        navigation
        modules={[Navigation]}
      >
        {mobileBrandSliderData.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="!w-[150px] lg:!w-[220px] [&:not(:last-child)]:!ml-4"
            >
              <Link
                href={item.reference}
                className="flex flex-col items-center"
              >
                <div className="relative h-[150px] w-[150px] lg:h-[220px] lg:w-[220px]">
                  <Image
                    src={item.image}
                    alt={item.text}
                    fill
                  />
                </div>
                <p className="text-base-md font-semibold">{item.text}</p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default MobileBrandSlider;
