'use client';

import { IconChevron, IconDiscountSquare } from '@/constants/global/icons';
import convertNumber from '@/functions/global/convertNumber';
import Link from 'next/link';
import { FC, useState } from 'react';

interface IProps {
  type:
    | 'most-visited'
    | 'new-products'
    | 'new-phones'
    | 'similar-products'
    | 'special-offer';
}

const ProductCardSlider: FC<IProps> = ({ ...props }): JSX.Element => {
  // get title with props.type
  const switchTitle = (args: IProps): string => {
    const list: any = {
      'most-visited': 'پربازدید های ماه',
      'new-products': 'محصولات جدید',
      'new-phones': 'جدیدترین گوشی ها',
      'similar-products': 'محصولات مشابه',
      'special-offer': 'پیشنهاد ویژه',
    };
    return list[args.type];
  };

  // get title with props.type
  const switchSellAllReference = (args: IProps): string => {
    const list: any = {
      'most-visited': '/',
      'new-products': '/',
      'new-phones': '/',
      'similar-products': '/',
      'special-offer': '/',
    };
    return list[args.type];
  };

  // special offer timer
  const [timeLeftFromDay, setTimeLeftFromDay] = useState<
    [number, number, number]
  >([0, 0, 0]);
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
    <section>
      <div
        className={`flex h-[50px] items-center justify-between rounded-xl lg:h-[57px] lg:px-4 ${
          props.type === 'special-offer' ? 'bg-base-red px-2.5' : 'bg-base-gray-100 px-3.5'
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
          <p
            className={`text-base-sm font-extrabold lg:text-base-lg ${
              props.type === 'special-offer' ? 'text-white' : 'text-black'
            }`}
          >
            {switchTitle({ type: props.type })}
          </p>
        </div>
        {/* time left from today [only props.type === 'special-offer'] */}
        {!!(props.type === 'special-offer') && (
          <div className="flex gap-1 lg:gap-2 items-center">
            <div className="flex h-[34px] w-[34px] items-center text-base-md justify-center rounded-lg bg-white p-3 font-bold lg:w-11 lg:h-11 lg:text-base-lg lg:rounded-xl">
              {convertNumber({
                number:
                  String(timeLeftFromDay[2]).length === 1
                    ? String('0' + timeLeftFromDay[2])
                    : String(timeLeftFromDay[2]),
                type: 'to-persian',
              })}
            </div>
            <p className='font-black text-white text-base-xl'>:</p>
            <div className="flex h-[34px] w-[34px] items-center text-base-md justify-center rounded-lg bg-white p-3 font-bold lg:w-11 lg:h-11 lg:text-base-lg lg:rounded-xl">
              {convertNumber({
                number:
                String(timeLeftFromDay[1]).length === 1
                  ? String('0' + timeLeftFromDay[1])
                  : String(timeLeftFromDay[1]),
                type: 'to-persian',
              })}
            </div>
            <p className='font-black text-white text-base-xl'>:</p>
            <div className="flex h-[34px] w-[34px] items-center text-base-md justify-center rounded-lg bg-white p-3 font-bold lg:w-11 lg:h-11 lg:text-base-lg lg:rounded-xl">
              {convertNumber({
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
          href={switchSellAllReference({ type: props.type })}
          className="flex items-center gap-1.5 lg:gap-2"
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
    </section>
  );
};

export default ProductCardSlider;
