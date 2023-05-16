import Link from 'next/link';
import logo from '@/assets/images/template/header/logo.svg';
import Image from 'next/image';
import { FC, useState } from 'react';
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
import toast from '@/functions/global/toast';
import TOASTMSG from '@/constants/global/toastMessages';
import { CategoryItemType } from '@/types/template/header/categoryItem.type';
import { categoryData } from '@/temp/resources/categoryData';
import SkeletonMobileCategory from '@/constants/global/skeletons/template/header/mobileCategory';

async function fetcherFetchCategoryData() {
  try {
    const data = await APIfetchCategoryData();
    return data;
  } catch (error: any) {
    if (!error.response) {
      toast(TOASTMSG.routes.global.pleaseCheckNetworkConnection);
    } else {
      toast(TOASTMSG.routes.global.sorryUnexpectedError);
    }
  }
  return null;
}

interface IPropsCategoryLevel {
  categoryData: CategoryItemType;
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

  // TODO: replace to static categories
  // fetched category data
  // const { data: categoryData } = useSWR<CategoryItemType[] | null>(
  //   atomStateIsShowHumbergerMenu ? 'categoryData' : null,
  //   fetcherFetchCategoryData,
  // );

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
          className="flex justify-between items-center w-full pl-2"
        >
          <div className="flex gap-1 text-base-sm font-bold items-center text-base-gray-400">
            <Image
              src={String(props.categoryData.picture_link)}
              width={40}
              height={40}
              alt=""
            />
            <span className="truncate pl-1">{props.categoryData.name}</span>
          </div>
          <IconChevron
            size={'xs'}
            color={'base-gray-300'}
            position={isOpenSubCategory ? 'top' : 'bottom'}
          />
        </button>
        <ul
          className={`pr-3 text-base-xs text-base-gray-400 font-bold transition-all duration-300 ${
            isOpenSubCategory
              ? 'opacity-100 visible'
              : 'opacity-0 invisible h-0 overflow-hidden'
          }`}
        >
          <Link href={props.categoryData.page_url}>
            <li className="py-2 px-3 border-b border-r border-opacity-60 text-base-gray-400 text-opacity-80 border-gray-200">
              مشاهده این دسته بندی
            </li>
          </Link>
          <ul>
            {props.categoryData.children.map((item: CategoryItemType) => {
              return (
                <li
                  key={item.id}
                  className="[&:not(:last-child)]:border-b py-0.5 border-r border-opacity-60 border-gray-200"
                >
                  {item.children?.length ? (
                    <CategoryLevelTwoWithSubCategory categoryData={item} />
                  ) : (
                    <Link
                      href={item.page_url}
                      className="flex justify-between items-center w-full ml-2"
                    >
                      <div className="flex px-3 py-2 gap-1 items-center text-base-gray-400">
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
          className="flex justify-between items-center w-full pl-2"
        >
          <div className="flex px-3 py-2 gap-1 items-center text-base-gray-400">
            <span className="truncate pl-1">{props.categoryData.name}</span>
          </div>
          <IconChevron
            size={'xs'}
            color={'base-gray-300'}
            position={isOpenSubCategory ? 'top' : 'bottom'}
          />
        </button>
        <ul
          className={`pr-3 text-c-sm mb-1 transition-all duration-300 ${
            isOpenSubCategory
              ? 'opacity-100 visible'
              : 'opacity-0 invisible h-0 overflow-hidden'
          }`}
        >
          <Link href={props.categoryData.page_url}>
            <li className="py-2 px-3 border-b border-r border-opacity-60 text-base-gray-400 text-opacity-70 border-gray-200">
              مشاهده این دسته بندی
            </li>
          </Link>
          <ul>
            {props.categoryData.children.map((item: any) => {
              return (
                <li
                  key={item.id}
                  className="[&:not(:last-child)]:border-b border-r border-opacity-60 border-gray-200"
                >
                  <Link
                    href={item.page_url}
                    className="flex justify-between items-center w-full"
                  >
                    <div className="flex px-3 py-2 gap-1 items-center text-base-gray-400 w-full">
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
      className={`modal_overlay ${
        atomStateIsShowHumbergerMenu
          ? 'bg-black/20 visible'
          : 'opacity-0 invisible'
      }`}
    >
      <div
        onClick={hideHumbergerMenuHandler}
        className="fixed top-0 left-0 bottom-0 right-0"
      ></div>
      <div
        className={`bg-white font-bold h-screen w-[270px] fixed top-0 left-0 right-0 bottom-0 transition-all duration-500 ${
          atomStateIsShowHumbergerMenu ? 'translate-x-0' : '!translate-x-80'
        }`}
      >
        {/* logo and close btn */}
        <div className="p-5 flex items-center w-full bg-base-gradient-purple">
          <button onClick={hideHumbergerMenuHandler}>
            <IconChevron size={'sm'} position={'right'} color={'white'} />
          </button>
          <div className="w-full flex justify-center">
            <Link href="/">
              <Image
                src={logo}
                priority={true}
                className="w-[60px] h-auto"
                alt=""
              />
            </Link>
          </div>
        </div>
        {/* amazing discount */}
        <Link href="/">
          <div
            className={`flex justify-between items-center py-3.5 border-b border-gray-200 mx-2 px-1`}
          >
            <div className="flex items-center gap-2.5">
              <IconDiscountSquare color={'base-red'} />
              <p className="text-base-sm text-base-gray-500 font-bold">
                پیشنهاد های شگفت انگیز
              </p>
            </div>
          </div>
        </Link>
        {/* category list */}
        <div
          className={`flex justify-between items-center py-3.5 border-b border-gray-200 mx-2 px-1`}
        >
          <div className="flex items-center gap-2.5">
            <IconWindow color={'base-royal-blue'} />
            <p className="text-base-sm text-base-gray-500 font-bold">
              دسته بندی ها
            </p>
          </div>
        </div>
        <div className="border-b border-gray-200 mx-2">
          {/* fetched category data ? render category list : show skeleton */}
          {categoryData ? (
            <div>
              <div className={`flex justify-center overflow-hidden`}>
                <div
                  className={`transition-all max-h-[calc(100vh_-_220px)] pl-1 minimal-scrollbar my-1.5 duration-500 w-full justify-center`}
                >
                  <ul>
                    {categoryData.map((item: CategoryItemType) => {
                      return (
                        <li
                          key={item.id}
                          className="[&:not(:last-child)]:border-b py-1 mr-2 border-r border-opacity-60 border-gray-200"
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
