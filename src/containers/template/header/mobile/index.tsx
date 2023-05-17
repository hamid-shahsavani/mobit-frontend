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
import { atomIsShowSearchResult } from '@/atoms/template/header/global/isShowSearchResult';
import useDetectScrollDirection from '@/hooks/template/header/detectScrollDirection';
import HumbergerMenu from './humbergerMenu';
import enableAndDisableScroll from '@/functions/global/enableAndDisableScroll';
import { atomIsShowHumbergerMenu } from '@/atoms/template/header/mobile/isShowHumbergerMenu';

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
      <div className={`flex flex-col overflow-hidden lg:hidden`}>
        {/* logo, right-side menu btn, profile btn */}
        <div className="bg-base-gradient-purple">
          <div className="container">
            <div className="z-10 flex items-center justify-between px-1.5 py-3.5">
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
          className={`absolute left-0 right-0 transition-all duration-500 ${
            detectedScrollDirection === 'top' ? 'top-[53px]' : '-top-28'
          } ${
            isFocusSearchField
              ? 'bg-transparent'
              : '-z-10 bg-base-gradient-purple'
          }`}
        >
          <div className="container">
            <div
              className={`container relative mb-3.5 flex items-center gap-2.5 rounded-xl border-2 border-transparent p-3 transition-all duration-200 focus-within:border-base-royal-blue ${
                isFocusSearchField
                  ? '-top-10 bg-base-gray-100'
                  : 'top-0 bg-[#3F41C5]'
              }`}
            >
              <div className="flex w-5 justify-center">
                {isFocusSearchField ? (
                  <button
                    onClick={() =>
                      showAndHideSearchResultHandler({ type: 'hide' })
                    }
                  >
                    <IconChevron
                      size={'sm'}
                      position={'right'}
                      color={'base-gray-400'}
                    />
                  </button>
                ) : (
                  <IconMagnifier />
                )}
              </div>
              <input
                onFocus={() => showAndHideSearchResultHandler({ type: 'show' })}
                spellCheck={false}
                placeholder="جستجو در مبیت ..."
                className={`w-full text-base-md ${
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
