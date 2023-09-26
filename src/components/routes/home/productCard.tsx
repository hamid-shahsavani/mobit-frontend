import {
  IconDiscount,
  IconDiscountSquare,
  IconFastDelivery,
  IconStar,
} from '@/constants/global/icons';
import convertNumber from '@/functions/global/convertNumber';
import { TProduct } from '@/types/routes/global/product';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  type: 'vertical' | 'horizontal';
  data: TProduct;
}

const ProductCard: FC<IProps> = ({ ...props }): JSX.Element => {
  return (
    <Link
      href={props.data.refrence}
      className="flex flex-col gap-2"
    >
      <div className="bg-c-gray-100 group relative flex h-[150px] w-full items-center justify-center rounded-xl">
        {/* image */}
        <div className="relative h-[130px] w-[130px]">
          <Image
            className="transition-all duration-300 group-hover:scale-105"
            src={props.data.image}
            alt={props.data.name}
            fill
          />
        </div>
        <div className=" absolute right-2.5 top-2.5 flex flex-col gap-1.5">
          {/* discount */}
          {!!props.data.discount && (
            <div className="bg-c-red flex items-center gap-0.5 rounded-md px-[7px]">
              <p className="text-c-md pt-0.5 font-semibold text-white">
                {convertNumber({
                  number: String(props.data.discount),
                  type: 'to-persian',
                })}
              </p>
              <IconDiscount />
            </div>
          )}
          {/* fast delivery */}
          {props.data.fastDelivery && (
            <div className="bg-c-yellow w-fit rounded-md px-1.5 py-[3px]">
              <IconFastDelivery />
            </div>
          )}
        </div>
        {/* super discount */}
        {props.data.superDiscount && (
          <div className="absolute left-2.5 top-2.5">
            <IconDiscountSquare
              className='stroke-c-red h-[24px] fill-transparent'
            />
          </div>
        )}
        {/* colors */}
        <div
          className={`bg-c-gray-200 absolute bottom-2.5 right-2.5 flex gap-[5px] rounded-[5px] p-[7px] ${
            !!(props.data.colors.length > 3) &&
            'after:text-c-gray-500 pl-5 after:absolute after:left-[6px] after:top-0 after:font-medium after:content-["_+"]'
          }`}
        >
          {props.data.colors.slice(0, 3).map((item, index) => {
            return (
              <span
                key={index}
                className={`rounded-lg p-[3.5px]`}
                style={{ backgroundColor: item }}
              />
            );
          })}
        </div>
      </div>
      {/* title */}
      <h4 className="text-c-sm my-1 line-clamp-2 w-full font-semibold leading-5">
        {props.data.name}
      </h4>
      {/* price */}
      <div className="flex justify-end gap-2">
        {!!props.data.discount && (
          <del className="text-c-md text-c-gray-400 lg:text-c-lg font-semibold">
            {Math.round(Number(props.data.price)).toLocaleString('fa')}
          </del>
        )}
        <div className="text-c-sm text-c-gray-600 flex gap-[3px] font-semibold">
          <p className="text-c-md lg:text-c-lg text-black">
            {Math.round(
              Number(props.data.price) * (1 - props.data.discount / 100),
            ).toLocaleString('fa')}
          </p>{' '}
          تومان
        </div>
      </div>
      <div className="flex items-center justify-end gap-1.5">
        {/* comment */}
        <div className="text-c-sm font-semibold">
          {!!props.data.commentsLength ? (
            <p className="text-c-gray-300">
              (
              {convertNumber({
                number: String(props.data.commentsLength),
                type: 'to-persian',
              })}{' '}
              نظر)
            </p>
          ) : (
            <p className="text-c-royal-blue">نظر دهید</p>
          )}
        </div>
        {/* rate */}
        <div className="text-c-md text-c-gray-400 lg:text-c-lg flex gap-1 font-medium">
          <p>
            {convertNumber({
              number: String(props.data.rating),
              type: 'to-persian',
            })}
          </p>
          <IconStar />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
