import { atomIsShowCategoryList } from '@/atoms/template/header/desktop/isShowCategoryList';
import SkeletonDesktopCategory from '@/constants/skeletons/template/header/desktop/category';
import { APIfetchCategoryData } from '@/services/template/header/fetchCategoryData';
import { TCategoryItem } from '@/types/template/header/categoryItem';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';

const CategoryList: FC = (): JSX.Element => {
  // detect is-show category list
  const [atomStateIsShowCategoryList, setAtomStateIsShowCategoryList] =
    useRecoilState<boolean>(atomIsShowCategoryList);

  // for detect current hovered category / default actived index 0 | null = wait for fetch | TCategoryItem = fetched and set index 0 of fetched array
  const [activedCategoryData, setActivedCategoryData] =
    useState<TCategoryItem | null>(null);

  // for set width and height categoryList left-side
  const {
    width: categoryListDesktopWidth,
    height: categoryListDesktopHeight,
    ref: categoryListDesktopRef,
  } = useResizeDetector();
  const categoryListRightSideRef = useRef<null | HTMLDivElement>(null);
  const categoryListLeftSideRef = useRef<null | HTMLDivElement>(null);
  const [categoryListLeftSideSize, setCategoryListLeftSideSize] = useState<any>(
    {
      width: 0,
      height: 0,
    },
  );

  // set CategoryList LeftSide width to state
  useEffect(() => {
    if (categoryListRightSideRef.current && categoryListLeftSideRef.current) {
      const categoryListLeftSideItemsLength = Math.floor(
        Number(categoryListLeftSideRef.current.children.length),
      );
      const categoryListLeftSideMaxLengthInColumn = Math.floor(
        Number(categoryListRightSideRef.current.children.length) * 1.43,
      );
      const categoryListLeftSideColumnWidth = 180;
      const newWidth =
        Math.ceil(
          categoryListLeftSideItemsLength /
            categoryListLeftSideMaxLengthInColumn,
        ) * categoryListLeftSideColumnWidth;
      setCategoryListLeftSideSize((prev: any) => ({
        ...prev,
        width: newWidth,
      }));
    }
  }, [activedCategoryData]);

  // set CategoryList LeftSide height to state
  useEffect(
    () =>
      setCategoryListLeftSideSize((prev: any) => ({
        ...prev,
        height: categoryListDesktopHeight,
      })),
    [categoryListDesktopHeight],
  );

  // fetch category data (fetch after first show categoryList)
  const [firstShowCategoryList, setFirstShowCategoryList] = useState(false);
  useEffect(() => {
    if (atomStateIsShowCategoryList) {
      setFirstShowCategoryList(true);
    }
  }, [atomStateIsShowCategoryList]);
  const { data: categoryData } = useSWR<TCategoryItem[] | null>(
    firstShowCategoryList ? 'categoryData' : null,
    async () => {
      const data = await APIfetchCategoryData();
      return data || null;
    },
  );

  // set fetched data index 0 to activedCategoryData state
  useEffect(() => {
    if (categoryData) {
      setActivedCategoryData(categoryData[0]!);
    }
  }, [categoryData]);

  return (
    <section
      className={`absolute top-[68.5px] ${
        atomStateIsShowCategoryList
          ? 'visible opacity-100'
          : 'invisible opacity-0'
      }`}
    >
      {/* if fetched category data and set default activedCategory level one (index 0) ? render category list : show skeleton loader */}
      <div
        ref={categoryListDesktopRef}
        className={`flex rounded-b-lg border border-x border-b border-gray-100 bg-white transition-all duration-300 after:absolute after:-top-[22px] after:h-[23px] after:w-[200px]`}
      >
        {!!activedCategoryData && (
          <>
            {/* category level one */}
            <div
              ref={categoryListRightSideRef}
              id={'header-desktop_category-level-one'}
              className="h-fit w-48 border-l py-2"
            >
              {categoryData?.map((item: TCategoryItem) => {
                return (
                  <Link
                    href={item.refrence}
                    onMouseEnter={() => setActivedCategoryData(item)}
                    key={item.id}
                    className={`flex items-center border-y ${
                      item.id === activedCategoryData?.id
                        ? 'border-gray-100 bg-c-gray-50'
                        : 'border-transparent'
                    }`}
                  >
                    <Image
                      className="mx-1 my-1"
                      src={String(item.picture_link)}
                      width={40}
                      height={40}
                      alt={item.name}
                    />
                    <p
                      className={`w-full truncate text-c-sm text-c-gray-500 ${
                        item.id === activedCategoryData?.id
                          ? 'font-extrabold text-c-royal-blue'
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
                height: categoryListLeftSideSize.height,
                width: categoryListLeftSideSize.width,
              }}
              ref={categoryListLeftSideRef}
              className="flex flex-col flex-wrap gap-x-5 gap-y-2 p-3.5 text-c-xs font-bold text-c-gray-400"
            >
              {activedCategoryData.children.map((item: TCategoryItem) => {
                return (
                  <Fragment key={item.id}>
                    {/* category level one */}
                    <Link
                      key={item.id}
                      href={item.refrence}
                      className="relative w-[160px] truncate py-[3.5px] pr-3 after:absolute after:bottom-0 after:right-0 after:top-0 after:h-full after:w-1 after:rounded-md after:bg-c-royal-blue hover:text-c-royal-blue"
                    >
                      {item.name}
                    </Link>
                    {/* category level two */}
                    {!!item.children.length &&
                      item.children.map((item: TCategoryItem) => {
                        return (
                          <Link
                            key={item.id}
                            href={item.refrence}
                            className="w-[160px] truncate py-[3.5px] hover:text-c-royal-blue"
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                  </Fragment>
                );
              })}
            </div>
          </>
        )}
      </div>
      {!!!activedCategoryData && <SkeletonDesktopCategory />}
    </section>
  );
};

export default CategoryList;
