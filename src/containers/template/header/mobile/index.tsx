'use client';

import {
  IconChevron,
  IconMagnifier,
  IconThreeDots,
  IconUser,
} from '@/constants/global/icons';
import { useSetRecoilState } from 'recoil';

import IMAGES from '@/constants/global/images';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { atomIsShowSearchResult } from '@/atoms/template/header/isShowSearchResult';
import useDetectScrollDirection from '@/hooks/template/header/detectScrollDirection';
import HumbergerMenu from './humbergerMenu';
import enableAndDisableScroll from '@/functions/global/enableAndDisableScroll';
import { atomIsShowHumbergerMenu } from '@/atoms/template/header/isShowHumbergerMenu';

const Mobile: FC = (): JSX.Element => {
  // detect focused search field
  const [isFocusSearchField, setIsFocusSearchField] = useState(false);

  // show and hide search result handler
  const setAtomStateIsShowSearchResult = useSetRecoilState<boolean>(
    atomIsShowSearchResult,
  );
  const showAndHideSearchResultHandler = (args: { type: 'show' | 'hide' }) => {
    setIsFocusSearchField(args.type === 'hide' ? false : true);
    setAtomStateIsShowSearchResult(args.type === 'hide' ? false : true);
    enableAndDisableScroll({
      status: args.type === 'show' ? 'disable' : 'enable',
    });
  };

  // show humberger-menu handler
  const setAtomStateIsShowHumbergerMenu = useSetRecoilState<boolean>(
    atomIsShowHumbergerMenu,
  );
  const showHumbergerMenuHandler = () => {
    setAtomStateIsShowHumbergerMenu(true);
    enableAndDisableScroll({ status: 'disable' });
  };

  // detect scroll direction
  const detectedScrollDirection = useDetectScrollDirection();

  return (
    <>
      <HumbergerMenu />
      <div className={`lg:hidden flex flex-col overflow-hidden`}>
        {/* logo, right-side menu btn, profile btn */}
        <div className="bg-base-gradient-purple">
          <div className="container">
            <div className="flex justify-between items-center px-1.5 py-3.5 z-10">
              <button onClick={showHumbergerMenuHandler}>
                <IconThreeDots />
              </button>
              <Link href={'/'}>
                <Image
                  src={IMAGES.template.header.logo}
                  width={70}
                  height={70}
                  alt=""
                />
              </Link>
              <button>
                <IconUser color={'white'} />
              </button>
            </div>
          </div>
        </div>
        {/* search filed */}
        <div
          className={`transition-all duration-500 absolute left-0 right-0 ${
            detectedScrollDirection === 'top' ? 'top-[53px]' : '-top-28'
          } ${
            isFocusSearchField
              ? 'bg-transparent'
              : 'bg-base-gradient-purple -z-10'
          }`}
        >
          <div className="container">
            <div
              className={`transition-all duration-200 p-3 rounded-xl flex items-center gap-2.5 mb-3.5 border-2 container border-transparent focus-within:border-base-royal-blue relative ${
                isFocusSearchField
                  ? 'bg-base-gray-100 -top-10'
                  : 'bg-[#3F41C5] top-0'
              }`}
            >
              <div className="w-5 flex justify-center">
                {isFocusSearchField ? (
                  <button
                    onClick={() =>
                      showAndHideSearchResultHandler({ type: 'hide' })
                    }
                  >
                    <IconChevron size={'sm'} position={'right'} color={'base-gray-400'} />
                  </button>
                ) : (
                  <IconMagnifier />
                )}
              </div>
              <input
                onFocus={() => showAndHideSearchResultHandler({ type: 'show' })}
                spellCheck={false}
                placeholder="جستجو در مبیت ..."
                className={`text-base-md w-full ${
                  isFocusSearchField
                    ? 'placeholder:text-gray-400'
                    : 'placeholder:text-gray-200'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
