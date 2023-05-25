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
      className="flex min-w-[220px] flex-col gap-2 lg:min-w-[250px]"
    >
      <div className="group relative flex h-[140px] w-full items-center justify-center rounded-xl bg-base-gray-100 lg:h-[160px]">
        {/* image */}
        <div className="relative h-[120px] w-[120px] lg:h-[140px] lg:w-[140px]">
          <Image
            className="transition-all duration-300 group-hover:scale-105"
            src={props.data.product_image}
            alt={props.data.name}
            fill
          />
        </div>
        <div className=" absolute right-2.5 top-2.5 flex flex-col gap-1.5">
          {/* discount */}
          {!!props.data.discount && (
            <div className="flex items-center gap-0.5 rounded-md bg-base-red px-[7px]">
              <p className="text-base-md pt-0.5 font-semibold text-white">
                {convertNumber({
                  number: String(props.data.discount),
                  type: 'to-persian',
                })}
              </p>
              <IconDiscount />
            </div>
          )}
          {/* fast delivery */}
          {props.data.fast_delivery && (
            <div className="w-fit rounded-md bg-base-yellow px-1.5 py-[3px]">
              <IconFastDelivery />
            </div>
          )}
        </div>
        {/* super discount */}
        <div className="absolute left-2.5 top-2.5">
          <IconDiscountSquare color={'base-red'} size={'xs'} type={'outline'} />
        </div>
        {/* colors */}
        <div className="absolute bottom-2.5 right-2.5 flex gap-[5px] rounded-[5px] bg-base-gray-200 p-[7px]">
          {props.data.colors.map((item, index) => {
            return (
              <span
                key={index}
                className={`rounded-lg p-[3.5px]`}
                style={{ backgroundColor: item }}
              >
                {' '}
              </span>
            );
          })}
        </div>
      </div>
      {/* title */}
      <h4 className="line-clamp-2 my-1 w-full text-base-sm font-semibold leading-5">
        {props.data.name}
      </h4>
      {/* price */}
      <div className="flex justify-end gap-2">
        {!!props.data.discount && (
          <del className="text-base-md font-semibold text-base-gray-400 lg:text-base-lg">
            {Math.round(Number(props.data.price)).toLocaleString('fa')}
          </del>
        )}
        <div className="flex gap-[3px] text-base-sm font-semibold text-base-gray-600">
          <p className="text-base-md text-black lg:text-base-lg">
            {Math.round(
              Number(props.data.price) * (1 - props.data.discount / 100),
            ).toLocaleString('fa')}
          </p>{' '}
          تومان
        </div>
      </div>
      <div className="flex items-center justify-end gap-1.5">
        {/* comment */}
        <div className="text-base-sm font-semibold">
          {!!props.data.comments_number ? (
            <p className="text-base-gray-300">
              (
              {convertNumber({
                number: String(props.data.comments_number),
                type: 'to-persian',
              })}{' '}
              نظر)
            </p>
          ) : (
            <p className="text-base-royal-blue">نظر دهید</p>
          )}
        </div>
        {/* rate */}
        <div className="flex gap-1 text-base-md font-medium text-base-gray-400 lg:text-base-lg">
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
