import {
  IconCart,
  IconDiscountSquare,
  IconMagnifier,
  IconUser,
  IconWindow,
} from '@/constants/global/icons';
import IMAGES from '@/constants/global/images';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Desktop: FC = (): JSX.Element => {
  return (
    <div className="hidden lg:block bg-base-header-blue py-3 w-full">
      <div className="container flex justify-between items-center w-full">
        {/* logo, categories, amazing discount */}
        <div className="flex items-center">
          <Link href={'/'} className="ml-8 xl:ml-12">
            <Image
              src={IMAGES.template.header.logo}
              width={80}
              height={80}
              alt=""
            />
          </Link>
          <div className="flex gap-3 xl:gap-5">
            <div className="flex items-center gap-2 font-bold text-white text-base-sm px-1 relative cursor-pointer hover:text-white after:transition-all after:duration-300 after:block after:w-0 after:h-[3px] after:bg-white after:absolute after:left-0 after:right-0 after:-bottom-[18px] hover:after:w-full">
              <IconWindow color="white" />
              <p>دسته بندی ها</p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-white text-base-sm px-1 relative hover:text-white after:transition-all after:duration-300 after:block after:w-0 after:h-[3px] after:bg-white after:absolute after:left-0 after:right-0 after:-bottom-[18px] hover:after:w-full"
            >
              <IconDiscountSquare color="white" />
              <p>پیشنهاد های شگفت انگیز</p>
            </Link>
          </div>
        </div>
        {/* search field */}
        <div className="w-[350px] xl:w-[400px]">
          <div
            className={`transition-all duration-300 text-white bg-[#4E51D3] p-2.5 rounded-xl flex items-center gap-2.5 border-2 container border-transparent focus-within:border-white`}
          >
            <div className="w-5 flex justify-center relative after:absolute after:left-0 after:right-7 after:-top-1.5 after:h-8 after:w-[1px] after:bg-white">
              <IconMagnifier />
            </div>
            <input
              placeholder="جستجو در مبیت ..."
              className={`text-base-sm mr-3 w-full placeholder:text-white/90`}
            />
          </div>
        </div>
        {/* login/profile, cart */}
        <div className="flex gap-5 xl:gap-7">
          <div className='flex items-center cursor-pointer gap-2'>
            <IconUser color={'white'} />
            <p className='text-white font-bold text-base-sm'>ورود / ثبت نام</p>
          </div>
          <div className='flex items-center cursor-pointer gap-2'>
            <IconCart color={'white'} />
            <p className='text-white font-bold text-base-sm'>سبد خرید</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
