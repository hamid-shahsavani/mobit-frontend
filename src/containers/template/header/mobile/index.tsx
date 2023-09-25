import {
  IconChevron,
  IconMagnifier,
  IconThreeDots,
  IconUser,
} from '@/constants/global/icons';
import { useSetRecoilState } from 'recoil';

import { atomIsShowSearchResult } from '@/atoms/template/header/global/isShowSearchResult';
import { atomIsShowHumbergerMenu } from '@/atoms/template/header/mobile/isShowHumbergerMenu';
import IMAGES from '@/constants/global/images';
import enableAndDisableScroll from '@/functions/global/enableAndDisableScroll';
import useDetectScrollDirection from '@/hooks/template/header/detectScrollDirection';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import HumbergerMenu from './humbergerMenu';

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

  // detect scroll direction for hide search input after scroll to bottom
  const detectedScrollDirection = useDetectScrollDirection();

  return (
    <div className="lg:hidden">
      <HumbergerMenu />
      <div className={`flex flex-col overflow-hidden`}>
        {/* logo, right-side menu btn, profile btn */}
        <div className="bg-c-gradient-blue">
          <div className="container">
            <div className="flex items-center justify-between px-1.5 py-3.5">
              <button onClick={showHumbergerMenuHandler}>
                <IconThreeDots />
              </button>
              <Link href={'/'}>
                <Image
                  src={IMAGES.template.header.logoWhite}
                  width={70}
                  height={70}
                  alt="لوگو مبیت"
                />
              </Link>
              <Link href={'/auth'}>
                <IconUser color={'white'} />
              </Link>
            </div>
          </div>
        </div>
        {/* search filed */}
        <div
          className={`absolute left-0 right-0 transition-all duration-500 ${
            detectedScrollDirection === 'top' ? 'top-[53px]' : '-top-28'
          } ${
            isFocusSearchField ? 'bg-transparent' : 'bg-c-gradient-blue -z-10'
          }`}
        >
          <div className="container">
            <div
              className={`container relative mb-3.5 flex items-center gap-2.5 rounded-xl border-2 border-transparent p-3 transition-all duration-200 focus-within:border-c-royal-blue ${
                isFocusSearchField
                  ? '-top-10 bg-c-gray-100'
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
                      size={'md'}
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
                className={`w-full text-c-md ${
                  isFocusSearchField
                    ? 'placeholder:text-gray-400'
                    : 'placeholder:text-gray-200'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
