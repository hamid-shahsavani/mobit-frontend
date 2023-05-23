'use client';

import { IconChevron, IconDiscountSquare } from '@/constants/global/icons';
import Link from 'next/link';
import { FC } from 'react';

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

  return (
    <section>
      <div
        className={`flex justify-between rounded-xl px-3.5 h-[50px] lg:px-4 lg:h-[57px] ${
          props.type === 'special-offer' ? 'bg-base-red' : 'bg-base-gray-100'
        }`}
      >
        {/* title */}
        <div className="flex items-center gap-2">
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
