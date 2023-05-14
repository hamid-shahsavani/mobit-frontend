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
import { atomIsShowHumbergerMenu } from '@/atoms/template/header/isShowHumbergerMenu';
import enableAndDisableScroll from '@/functions/global/enableAndDisableScroll';
import theme from 'theme';
import { ThreeDots } from 'react-loader-spinner';

const HumbergerMenu: FC = (): JSX.Element => {
  // detect is-show humberger menu / hide humberger-menu handler
  const [atomStateIsShowHumbergerMenu, setAtomStateIsShowHumbergerMenu] =
    useRecoilState<boolean>(atomIsShowHumbergerMenu);
  // hide humberger-menu handler
  const hideHumbergerMenuHandler = () => {
    setAtomStateIsShowHumbergerMenu(false);
    enableAndDisableScroll({ status: 'enable' });
  };

  const data = [
    {
      id: '1e76a7e5-097b-4a4e-b74c-7b57206363db',
      name: 'مانتیور',
      parent: null,
      children: [
        {
          id: 'af03f2de-a5da-42b5-9906-381eba96d61b',
          name: 'زیر شاخه مانیتور',
          parent: '1e76a7e5-097b-4a4e-b74c-7b57206363db',
          children: [],
          picture_link: false,
        },
      ],
      picture_link:
        'https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg',
    },
    {
      id: '359f81c9-6a5f-4aa4-a715-65b146cdabde',
      name: 'مشت باقر',
      parent: null,
      children: [
        {
          id: '180713b5-d9a0-4a2e-bc50-7b382abe4ab0',
          name: 'زیر شاخه لپتاب',
          parent: '359f81c9-6a5f-4aa4-a715-65b146cdabde',
          children: [
            {
              id: 'f778f0e2-db52-4fa4-b7e7-9d177d475380',
              name: 'زیر شاخه لول 3',
              parent: '180713b5-d9a0-4a2e-bc50-7b382abe4ab0',
              children: [
                {
                  id: '87d8d00a-dfc2-438a-b81c-53a3ee5c7804',
                  name: 'زیر شاخه لول 4',
                  parent: 'f778f0e2-db52-4fa4-b7e7-9d177d475380',
                  children: [],
                  picture_link: false,
                },
              ],
              picture_link: false,
            },
          ],
          picture_link: false,
        },
      ],
      picture_link:
        'https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg',
    },
    {
      id: 'a06b2d06-c613-44d2-ab44-e94088c5c2c3',
      name: 'کشسرات',
      parent: null,
      children: [
        {
          id: 'ce1435a2-8e13-40bf-a927-c6440b6418a8',
          name: 'زیر شاخه کسشرات',
          parent: 'a06b2d06-c613-44d2-ab44-e94088c5c2c3',
          children: [],
          picture_link: false,
        },
      ],
      picture_link:
        'https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg',
    },
    {
      id: '2ee4211d-64cb-47dc-bfa9-4f369a613822',
      name: 'گوشی',
      parent: null,
      children: [
        {
          id: '9856b230-184e-4c54-b3d2-d4dc27478aed',
          name: 'زیر شاخه گوشی',
          parent: '2ee4211d-64cb-47dc-bfa9-4f369a613822',
          children: [
            {
              id: '692ee9cd-0a0d-4088-b7af-294d4f0e27a9',
              name: 'زیر شاخه لول 3 گوشی',
              parent: '9856b230-184e-4c54-b3d2-d4dc27478aed',
              children: [],
              picture_link: false,
            },
          ],
          picture_link: false,
        },
      ],
      picture_link:
        'https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg',
    },
  ];

  const Categories = () => {
    return (
      <div>
        <div
          className={`flex justify-center overflow-hidden border-b border-gray-200`}
        >
          <div
            className={`transition-all max-h-[calc(100vh_-_220px)] minimal-scrollbar m-2 duration-500 w-full justify-center`}
          >
            <CategoriesLevelOne data={data} />
          </div>
        </div>
      </div>
    );
  };

  const CategoriesLevelOne = ({ data }: any) => {
    return (
      <ul>
        {data.map((i: any) => {
          return (
            <li
              key={i.id}
              className="[&:not(:last-child)]:border-b py-0.5 mx-2 border-r border-opacity-60 border-gray-200"
            >
              <CategoriesLevelTwo data={i} />
            </li>
          );
        })}
      </ul>
    );
  };

  const CategoriesLevelTwo = ({ data }: any) => {
    //* state for categories-level-one drop-down
    const [isOpenCategoriesLevelTwo, setIsOpenCategoriesLevelTwo] =
      useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpenCategoriesLevelTwo((prev) => !prev)}
          className="flex justify-between items-center w-full pl-2"
        >
          <div className="flex gap-1 text-base-sm font-bold items-center text-base-gray-400">
            <Image src={data.picture_link} width={40} height={40} alt="" />
            <span>{data.name}</span>
          </div>
          <div className="opacity-80">
            <IconChevron
              size={'xs'}
              color={'base-gray-400'}
              position={isOpenCategoriesLevelTwo ? 'top' : 'bottom'}
            />
          </div>
        </button>
        <ul
          className={`pr-3 text-base-xs text-base-gray-400 font-bold transition-all duration-300 ${
            isOpenCategoriesLevelTwo
              ? 'opacity-100 visible'
              : 'opacity-0 invisible h-0 overflow-hidden'
          }`}
        >
          <Link href={'/'}>
            <li className="py-3 px-3 border-b border-r border-opacity-60 text-base-gray-400 text-opacity-80 border-gray-200">
              مشاهده این دسته بندی
            </li>
          </Link>
          <ul>
            {data.children.map((item: any) => {
              return (
                <li
                  key={item.id}
                  className="[&:not(:last-child)]:border-b py-0.5 border-r border-opacity-60 border-gray-200"
                >
                  {item.children?.length ? (
                    <CategoriesLevelTree data={item} />
                  ) : (
                    <Link
                      href={'/'}
                      className="flex justify-between items-center w-full pl-2"
                    >
                      <div className="flex px-3 py-2 gap-1 items-center text-base-gray-400">
                        <span>{item.name}</span>
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

  const CategoriesLevelTree = (data: any) => {
    const [isOpenCategoriesLevelTree, setIsOpenCategoriesLevelTree] =
      useState(false);
    return (
      <div>
        <button
          onClick={() => setIsOpenCategoriesLevelTree((prev) => !prev)}
          className="flex justify-between items-center w-full pl-2"
        >
          <div className="flex px-3 py-2 gap-1 items-center text-base-gray-400">
            <span>{data.name}</span>
          </div>
          <div className="opacity-80">
            <IconChevron
              size={'xs'}
              color={'base-gray-400'}
              position={isOpenCategoriesLevelTree ? 'top' : 'bottom'}
            />
          </div>
        </button>
        <ul
          className={`pr-3 text-base-xs text-base-gray-400 font-bold transition-all duration-300 ${
            isOpenCategoriesLevelTree
              ? 'opacity-100 visible'
              : 'opacity-0 invisible h-0 overflow-hidden'
          }`}
        >
          <Link href={'/'}>
            <li className="py-3 px-3 border-b border-r border-opacity-60 text-base-gray-400 text-opacity-70 border-gray-200">
              مشاهده این دسته بندی
            </li>
          </Link>
          <ul>
            {data.children?.map((item: any) => {
              return (
                <li
                  key={item.id}
                  className="[&:not(:last-child)]:border-b py-0.5 border-r border-opacity-60 border-gray-200"
                >
                  {item.children.length ? (
                    <CategoriesLevelTree data={item} />
                  ) : (
                    <Link
                      href={'/'}
                      className="flex justify-between items-center w-full pl-2"
                    >
                      <div className="flex px-3 py-2 gap-1 items-center text-base-gray-400">
                        <span>{item.name}</span>
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
          atomStateIsShowHumbergerMenu
            ? 'translate-x-0 visible'
            : '!translate-x-[300px] invisible'
        }`}
      >
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
        {data ? (
          <Categories />
        ) : (
          <div className="flex justify-center">
            <ThreeDots
              width={55}
              height={60}
              radius="9"
              color={theme.colors['royal-blue']}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HumbergerMenu;
