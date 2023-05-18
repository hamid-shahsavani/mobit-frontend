import { atomIsShowCategoryList } from '@/atoms/template/header/desktop/isShowCategoryList';
import SkeletonDesktopCategory from '@/constants/global/skeletons/template/header/desktop/category';
import { categoryData } from '@/temp/resources/categoryData';
import { CategoryItemType } from '@/types/template/header/categoryItem.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, Fragment, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

const CategoryList: FC = (): JSX.Element => {
  // detect is-show category list
  const atomStateIsShowCategoryList = useRecoilValue<boolean>(
    atomIsShowCategoryList,
  );

  // for detect current hovered category level one / default actived index 0
  const [activedCategoryLevelOne, setActivedCategoryLevelOne] =
    useState<CategoryItemType | null>(null);

  // TODO:
  useEffect(() => setActivedCategoryLevelOne(categoryData[0]!), []);

  return (
    <section
      className={`absolute top-20 flex rounded-lg border border-gray-100 bg-white transition-all duration-300 after:absolute after:-top-8 after:h-8 after:w-[200px] ${
        atomStateIsShowCategoryList
          ? 'visible opacity-100'
          : '-opacity-0 -invisible'
      }`}
    >
      {/* if fetched category data and set default activedCategory level one (index 0) ? render category list : show skeleton loader */}
      {activedCategoryLevelOne ? (
        <>
          {/* category level one */}
          <div
            id={'header-desktop_category-level-one'}
            className="h-fit w-48 border-l py-2"
          >
            {categoryData.map((item: CategoryItemType) => {
              return (
                <Link
                  href={item.refrence}
                  onMouseEnter={() => setActivedCategoryLevelOne(item)}
                  key={item.id}
                  className={`flex items-center border-y ${
                    item.id === activedCategoryLevelOne?.id
                      ? 'border-gray-100 bg-base-gray-50'
                      : 'border-transparent'
                  }`}
                >
                  <Image
                    className="mx-1 my-1"
                    src={String(item.picture_link)}
                    width={40}
                    height={40}
                    alt=""
                  />
                  <p
                    className={`w-full truncate text-base-sm text-base-gray-500 ${
                      item.id === activedCategoryLevelOne?.id
                        ? 'font-extrabold text-base-royal-blue'
                        : 'font-bold'
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
          {/* category level two, category level tree */}
          <div
            style={{
              height: `${
                document.getElementById('header-desktop_category-level-one')
                  ?.clientHeight
              }px`, // 
              width: `${
                Math.ceil(Number(document
                  .getElementById('header-desktop-category-level-two-and-tree')
                  ?.querySelectorAll(':scope > *').length) / (Number(document.getElementById('header-desktop_category-level-one')?.querySelectorAll(':scope > *').length) * 1.43)) * 180
              }px`, // 180 : width wrapped column
            }}
            id="header-desktop-category-level-two-and-tree"
            className="flex flex-col flex-wrap gap-x-5 gap-y-2 p-3.5 text-base-xs font-bold text-base-gray-400"
          >
            {activedCategoryLevelOne.children.map((item: CategoryItemType) => {
              return (
                <Fragment key={item.id}>
                  {/* category level one */}
                  <Link
                    key={item.id}
                    href={item.refrence}
                    className="relative w-[160px] truncate py-[3.5px] pr-3 after:absolute after:bottom-0 after:right-0 after:top-0 after:h-full after:w-1 after:rounded-md after:bg-base-royal-blue hover:text-base-royal-blue"
                  >
                    {item.name}
                  </Link>
                  {/* category level two */}
                  {!!item.children.length &&
                    item.children.map((item: CategoryItemType) => {
                      return (
                        <Link
                          key={item.id}
                          href={item.refrence}
                          className="w-[160px] truncate py-[3.5px] hover:text-base-royal-blue"
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                </Fragment>
              );
            })}
          </div>
          <div className="absolute right-[00px] top-[400px]">
            <SkeletonDesktopCategory />
          </div>
        </>
      ) : (
        <SkeletonDesktopCategory />
      )}
    </section>
  );
};

export default CategoryList;
