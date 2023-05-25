'use client';

import ProductCard from '@/components/routes/home/productCard';
import { IconChevron, IconDiscountSquare } from '@/constants/global/icons';
import convertNumber from '@/functions/global/convertNumber';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import useDetectScreenSize from '@/hooks/routes/home/detectScreenSize';
import { TProduct } from '@/types/routes/global/product';

interface IProps {
  data: TProduct[];
  type:
    | 'most-visited'
    | 'new-products'
    | 'new-phones'
    | 'similar-products'
    | 'special-offer';
}

const ProductCardSlider: FC<IProps> = ({ ...props }): JSX.Element => {
  // for show or hide see all btn for special-offer type
  const { innerWidth } = useDetectScreenSize();

  // get title with props.type
  const switchTitle = (type: string): string => {
    const list: any = {
      'most-visited': 'پربازدید های ماه',
      'new-products': 'محصولات جدید',
      'new-phones': 'جدیدترین گوشی ها',
      'similar-products': 'محصولات مشابه',
      'special-offer': 'پیشنهاد ویژه',
    };
    return list[type];
  };

  // get title with props.type
  const switchSellAllReference = (type: string): string => {
    const list: any = {
      'most-visited': '/',
      'new-products': '/',
      'new-phones': '/',
      'similar-products': '/',
      'special-offer': '/',
    };
    return list[type];
  };

  // special offer timer
  const [timeLeftFromDay, setTimeLeftFromDay] = useState<number[] | null>(null);
  const interval = setInterval(() => {
    const currentTime: any = new Date();
    const endOfDay: any = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const timeDiff = endOfDay - currentTime;
    const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDiff / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((timeDiff / 1000) % 60);
    setTimeLeftFromDay([hoursLeft, minutesLeft, secondsLeft]);
    if (timeDiff < 0) {
      clearInterval(interval);
    }
  }, 1000);

  return (
    <section className="container relative flex flex-col gap-4">
      {/* head */}
      <div
        className={`flex h-[50px] items-center justify-between rounded-xl px-2.5 lg:h-[57px] lg:px-4 ${
          props.type === 'special-offer' ? 'bg-base-red' : 'bg-base-gray-100'
        }`}
      >
        {/* title */}
        <div className="flex items-center gap-1 lg:gap-2">
          {!!(props.type === 'special-offer') && (
            <>
              <div className="block lg:hidden">
                <IconDiscountSquare
                  type={'outline'}
                  color={'white'}
                  size={'sm'}
                />
              </div>
              <div className="hidden lg:block">
                <IconDiscountSquare
                  type={'outline'}
                  color={'white'}
                  size={'md'}
                />
              </div>
            </>
          )}
          <h3
            className={`text-base-sm font-extrabold lg:text-base-xl ${
              props.type === 'special-offer' ? 'text-white' : 'text-black'
            }`}
          >
            {switchTitle(props.type)}
          </h3>
        </div>
        {/* time left from today [only props.type === 'special-offer'] */}
        {!!(props.type === 'special-offer') && (
          <div
            className={`flex items-center gap-1.5 transition-all duration-300 lg:gap-2 ${
              timeLeftFromDay ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
          >
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-white p-3 text-base-md font-extrabold lg:h-11 lg:w-11 lg:rounded-xl lg:text-base-xl">
              {timeLeftFromDay &&
                convertNumber({
                  number:
                    String(timeLeftFromDay[2]).length === 1
                      ? String('0' + timeLeftFromDay[2])
                      : String(timeLeftFromDay[2]),
                  type: 'to-persian',
                })}
            </div>
            <p className="text-base-xl font-black text-white">:</p>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-white p-3 text-base-md font-bold lg:h-11 lg:w-11 lg:rounded-xl lg:text-base-xl lg:font-extrabold">
              {timeLeftFromDay &&
                convertNumber({
                  number:
                    String(timeLeftFromDay[1]).length === 1
                      ? String('0' + timeLeftFromDay[1])
                      : String(timeLeftFromDay[1]),
                  type: 'to-persian',
                })}
            </div>
            <p className="text-base-xl font-black text-white">:</p>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-white p-3 text-base-md font-bold lg:h-11 lg:w-11 lg:rounded-xl lg:text-base-xl lg:font-extrabold">
              {timeLeftFromDay &&
                convertNumber({
                  number:
                    String(timeLeftFromDay[0]).length === 1
                      ? String('0' + timeLeftFromDay[0])
                      : String(timeLeftFromDay[0]),
                  type: 'to-persian',
                })}
            </div>
          </div>
        )}
        {/* see-all reference */}
        <Link
          href={switchSellAllReference(props.type)}
          className={`items-center gap-1.5 lg:gap-2 ${
            props.type === 'special-offer' ? 'hidden sm:flex' : 'flex'
          }`}
        >
          <span
            className={`text-base-sm font-semibold lg:font-bold ${
              props.type === 'special-offer'
                ? 'text-white'
                : 'text-base-gray-400'
            }`}
          >
            مشاهده همه
          </span>
          <IconChevron
            size={'sm'}
            color={props.type === 'special-offer' ? 'white' : 'base-gray-400'}
            position={'left'}
          />
        </Link>
      </div>
      {/* body */}
      <div className="!z-0">
        <Swiper
          slidesPerView={'auto'}
          id="product-slider"
          className="!static"
          navigation
          modules={[Navigation]}
        >
          {props.data.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="!w-[220px] lg:!w-[250px] [&:not(:last-child)]:!ml-4"
              >
                <ProductCard data={item} type={'vertical'} />
              </SwiperSlide>
            );
          })}
          {/* see-all reference (only for specia-offer (hide in sm)) */}
          {!!(props.type === 'special-offer' && innerWidth <= 640) && (
            <SwiperSlide className="!w-[95px]">
              <Link
                href={props.type}
                className="relative flex h-[245px] w-[95px] items-center rounded-lg bg-base-gray-100 p-4 text-base-md"
              >
                <p className="w-20 text-base-sm font-semibold leading-7">
                  مشاهده کالا های بیشتر
                </p>
                <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
                  <IconChevron
                    position={'left'}
                    color={'base-gray-400'}
                    size={'md'}
                  />
                </div>
              </Link>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCardSlider;
