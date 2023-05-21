'use client';

import { atomIsShowSearchResult } from '@/atoms/template/header/global/isShowSearchResult';
import {
  IconCart,
  IconDiscountSquare,
  IconMagnifier,
  IconUser,
  IconWindow,
} from '@/constants/global/icons';
import IMAGES from '@/constants/global/images';
import enableAndDisableScroll from '@/functions/global/enableAndDisableScroll';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import CategoryList from './categoryList';
import { atomIsShowCategoryList } from '@/atoms/template/header/desktop/isShowCategoryList';

const Desktop: FC = (): JSX.Element => {
  // show and hide search result handler
  const setAtomStateIsShowSearchResult = useSetRecoilState<boolean>(
    atomIsShowSearchResult,
  );
  const showAndHideSearchResultHandler = (args: { type: 'show' | 'hide' }) => {
    setAtomStateIsShowSearchResult(args.type === 'hide' ? false : true);
    enableAndDisableScroll({
      status: args.type === 'show' ? 'disable' : 'enable',
    });
  };

  // show and hide category list handler / detect isShow category list
  const [atomStateIsShowCategoryList, setAtomStateIsShowCategoryList] =
    useRecoilState<boolean>(atomIsShowCategoryList);
  const showAndHideCategoryListHandler = (args: { type: 'show' | 'hide' }) => {
    setAtomStateIsShowCategoryList(args.type === 'hide' ? false : true);
    enableAndDisableScroll({
      status: args.type === 'show' ? 'disable' : 'enable',
    });
  };

  return (
    <div className="hidden w-full bg-base-gradient-purple py-3 lg:block">
      <div className="container flex w-full items-center justify-between">
        <div className="flex items-center">
          {/* logo */}
          <Link href={'/'} className="ml-6 xl:ml-9">
            <Image
              src={IMAGES.template.header.logoWhite}
              width={80}
              height={80}
              alt=""
            />
          </Link>
          <div className="flex gap-3 xl:gap-5">
            {/* category btn, category list */}
            <div
              onMouseEnter={() =>
                showAndHideCategoryListHandler({ type: 'show' })
              }
              onMouseLeave={() =>
                showAndHideCategoryListHandler({ type: 'hide' })
              }
            >
              <div
                className={`relative flex cursor-pointer items-center gap-2 px-1 text-base-sm font-bold text-white after:absolute after:-bottom-[18px] after:left-0 after:right-0 after:block after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full ${
                  !!atomStateIsShowCategoryList && 'after:w-full'
                }`}
              >
                <IconWindow color="white" />
                <p>دسته بندی ها</p>
              </div>
              {/* show category list after hover category btn */}
              <CategoryList />
            </div>
            {/* amazing discount */}
            <Link
              href="/"
              className="relative flex items-center gap-2 px-1 text-base-sm font-bold text-white after:absolute after:-bottom-[18px] after:left-0 after:right-0 after:block after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full"
            >
              <IconDiscountSquare type={'outline'} color="white" />
              <p>پیشنهاد های شگفت انگیز</p>
            </Link>
          </div>
        </div>
        {/* search field */}
        <div className="w-[350px] xl:w-[400px]">
          <div
            className={`container flex items-center gap-2.5 rounded-xl border-2 border-transparent bg-[#4E51D3] p-[11px] text-white transition-all duration-200 focus-within:border-white`}
          >
            <div className="relative flex w-5 justify-center after:absolute after:-top-1.5 after:left-0 after:right-7 after:h-8 after:w-[1px] after:bg-white">
              <IconMagnifier />
            </div>
            <input
              spellCheck={false}
              placeholder="جستجو در مبیت ..."
              onFocus={() => showAndHideSearchResultHandler({ type: 'show' })}
              onBlur={() => showAndHideSearchResultHandler({ type: 'hide' })}
              className={`mr-3 w-full text-base-sm placeholder:font-medium placeholder:text-white/95`}
            />
          </div>
        </div>
        {/* login/profile, cart */}
        <div className="flex gap-5 xl:gap-7">
          <div className="flex cursor-pointer items-center gap-2">
            <IconUser color={'white'} />
            <p className="text-base-sm font-bold text-white">ورود / ثبت نام</p>
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <IconCart color={'white'} />
            <p className="text-base-sm font-bold text-white">سبد خرید</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
