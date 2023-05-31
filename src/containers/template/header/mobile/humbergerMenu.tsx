import Link from 'next/link';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import {
  IconChevron,
  IconDiscountSquare,
  IconWindow,
} from '@/constants/global/icons';
import { useRecoilState } from 'recoil';
import { atomIsShowHumbergerMenu } from '@/atoms/template/header/mobile/isShowHumbergerMenu';
import enableAndDisableScroll from '@/functions/global/enableAndDisableScroll';
import useSWR from 'swr';
import { APIfetchCategoryData } from '@/services/template/header/fetchCategoryData';
import SkeletonMobileCategory from '@/constants/global/skeletons/template/header/mobile/category';
import IMAGES from '@/constants/global/images';
import { TCategoryItem } from '@/types/template/header/categoryItem';

interface IPropsCategoryLevel {
  categoryData: TCategoryItem;
}

const HumbergerMenu: FC = (): JSX.Element => {
  // detect is-show humberger menu / hide humberger-menu handler
  const [atomStateIsShowHumbergerMenu, setAtomStateIsShowHumbergerMenu] =
    useRecoilState<boolean>(atomIsShowHumbergerMenu);

  // hide humberger-menu handler
  const hideHumbergerMenuHandler = () => {
    setAtomStateIsShowHumbergerMenu(false);
    enableAndDisableScroll({ status: 'enable' });
  };

  // fetch category data (fetch after first show humberger menu)
  const [firstShowHumbergerMenu, setFirstShowHumbergerMenu] = useState(false);
  useEffect(() => {
    if (atomStateIsShowHumbergerMenu) {
      setFirstShowHumbergerMenu(true);
    }
  }, [atomStateIsShowHumbergerMenu]);
  const { data: categoryData } = useSWR<TCategoryItem[] | null>(
    firstShowHumbergerMenu ? 'categoryData' : null,
    async () => {
      const data = await APIfetchCategoryData();
      return data || null;
    },
  );

  // category level one with sub-category, category level two with sub-category
  const CategoryLevelOneWithSubCategory: FC<IPropsCategoryLevel> = ({
    ...props
  }) => {
    // for detect isopen sub category
    const [isOpenSubCategory, setIsOpenSubCategory] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpenSubCategory((prev) => !prev)}
          className="flex w-full items-center justify-between pl-2"
        >
          <div className="flex items-center gap-1 text-base-sm font-bold text-base-gray-400">
            <Image
              src={String(props.categoryData.picture_link)}
              width={40}
              height={40}
              alt={props.categoryData.name}
            />
            <span className="truncate pl-1">{props.categoryData.name}</span>
          </div>
          <IconChevron
            size={'sm'}
            color={'base-gray-300'}
            position={isOpenSubCategory ? 'top' : 'bottom'}
          />
        </button>
        <ul
          className={`pr-3 text-base-xs font-bold text-base-gray-400 transition-all duration-300 ${
            isOpenSubCategory
              ? 'visible opacity-100'
              : 'invisible h-0 overflow-hidden opacity-0'
          }`}
        >
          <Link href={props.categoryData.refrence}>
            <li className="border-b border-r border-gray-200 border-opacity-60 px-3 py-2 text-base-gray-400 text-opacity-80">
              مشاهده این دسته بندی
            </li>
          </Link>
          <ul>
            {props.categoryData.children.map((item: TCategoryItem) => {
              return (
                <li
                  key={item.id}
                  className="border-r border-gray-200 border-opacity-60 py-0.5 [&:not(:last-child)]:border-b"
                >
                  {item.children?.length ? (
                    <CategoryLevelTwoWithSubCategory categoryData={item} />
                  ) : (
                    <Link
                      href={item.refrence}
                      className="ml-2 flex w-full items-center justify-between"
                    >
                      <div className="flex items-center gap-1 px-3 py-2 text-base-gray-400">
                        <span className="truncate pl-1">{item.name}</span>
                      </div>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  };
  const CategoryLevelTwoWithSubCategory: FC<IPropsCategoryLevel> = ({
    ...props
  }) => {
    // for detect isopen sub category
    const [isOpenSubCategory, setIsOpenSubCategory] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpenSubCategory((prev) => !prev)}
          className="flex w-full items-center justify-between pl-2"
        >
          <div className="flex items-center gap-1 px-3 py-2 text-base-gray-400">
            <span className="truncate pl-1">{props.categoryData.name}</span>
          </div>
          <IconChevron
            size={'sm'}
            color={'base-gray-300'}
            position={isOpenSubCategory ? 'top' : 'bottom'}
          />
        </button>
        <ul
          className={`text-c-sm mb-1 pr-3 transition-all duration-300 ${
            isOpenSubCategory
              ? 'visible opacity-100'
              : 'invisible h-0 overflow-hidden opacity-0'
          }`}
        >
          <Link href={props.categoryData.refrence}>
            <li className="border-b border-r border-gray-200 border-opacity-60 px-3 py-2 text-base-gray-400 text-opacity-70">
              مشاهده این دسته بندی
            </li>
          </Link>
          <ul>
            {props.categoryData.children.map((item: TCategoryItem) => {
              return (
                <li
                  key={item.id}
                  className="border-r border-gray-200 border-opacity-60 [&:not(:last-child)]:border-b"
                >
                  <Link
                    href={item.refrence}
                    className="flex w-full items-center justify-between"
                  >
                    <div className="flex w-full items-center gap-1 px-3 py-2 text-base-gray-400">
                      <span className="truncate">{item.name}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  };

  return (
    <div
      className={` modal_overlay bottom-0 left-0 right-0 top-0 ${
        atomStateIsShowHumbergerMenu
          ? 'visible bg-black/20'
          : 'invisible opacity-0'
      }`}
    >
      <div
        onClick={hideHumbergerMenuHandler}
        className="fixed bottom-0 left-0 right-0 top-0"
      ></div>
      <div
        className={`fixed bottom-0 left-0 right-0 top-0 h-screen w-[270px] bg-white font-bold transition-all duration-500 ${
          atomStateIsShowHumbergerMenu ? 'translate-x-0' : '!translate-x-80'
        }`}
      >
        {/* logo and close btn */}
        <div className="flex w-full items-center bg-base-gradient-purple p-5">
          <button onClick={hideHumbergerMenuHandler}>
            <IconChevron size={'sm'} position={'right'} color={'white'} />
          </button>
          <div className="flex w-full justify-center">
            <Link href="/">
              <Image
                src={IMAGES.template.header.logoWhite}
                width={60}
                height={60}
                alt="لوگو مبیت"
              />
            </Link>
          </div>
        </div>
        {/* amazing discount */}
        <Link href="/">
          <div
            className={`mx-2 flex items-center justify-between border-b border-gray-200 px-1 py-3.5`}
          >
            <div className="flex items-center gap-2.5">
              <IconDiscountSquare
                size={'xs'}
                type={'outline'}
                color={'base-red'}
              />
              <p className="text-base-sm font-bold text-base-gray-500">
                پیشنهاد های شگفت انگیز
              </p>
            </div>
          </div>
        </Link>
        {/* category list */}
        <div
          className={`mx-2 flex items-center justify-between border-b border-gray-200 px-1 py-3.5`}
        >
          <div className="flex items-center gap-2.5">
            <IconWindow color={'base-royal-blue'} />
            <p className="text-base-sm font-bold text-base-gray-500">
              دسته بندی ها
            </p>
          </div>
        </div>
        <div className="mx-2 border-b border-gray-200">
          {/* fetched category data ? render category list : show skeleton */}
          {categoryData ? (
            <div>
              <div className={`flex justify-center overflow-hidden`}>
                <div
                  className={`minimal-scrollbar my-1.5 max-h-[calc(100vh_-_250px)] w-full justify-center pl-1 transition-all duration-500`}
                >
                  <ul>
                    {categoryData.map((item: TCategoryItem) => {
                      return (
                        <li
                          key={item.id}
                          className="mr-2 border-r border-gray-200 border-opacity-60 py-1 [&:not(:last-child)]:border-b"
                        >
                          <CategoryLevelOneWithSubCategory
                            categoryData={item}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <SkeletonMobileCategory />
          )}
        </div>
      </div>
    </div>
  );
};

export default HumbergerMenu;
