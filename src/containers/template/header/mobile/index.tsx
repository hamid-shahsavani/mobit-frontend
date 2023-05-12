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
import SearchResult from '../global/searchResult';
import { atomIsShowSearchResult } from '@/atoms/template/header/isShowSearchResult';
import useDetectScrollDirection from '@/hooks/template/header/detectScrollDirection';

const Mobile: FC = (): JSX.Element => {
  // detect focused search field
  const [isFocusSearchField, setIsFocusSearchField] = useState(false);

  // show and hide search result handler
  const setAtomStateIsShowSearchResult = useSetRecoilState<boolean>(
    atomIsShowSearchResult,
  );
  const showAndHideSearchResultHandler = (args: {
    type: 'show' | 'hide';
  }) => {
    setIsFocusSearchField(args.type === 'hide' ? false : true);
    setAtomStateIsShowSearchResult(args.type === 'hide' ? false : true);
    document.querySelector('html')?.classList[args.type === 'hide' ? 'remove' : 'add']('overflow-y-hidden');
  };

  // detect scroll direction
  const detectedScrollDirection = useDetectScrollDirection();

  return (
    <>
      {!!isFocusSearchField && <SearchResult />}
      <div className="md:hidden flex flex-col gap-3">
        {/* logo, right-side menu btn, profile btn */}
        <div className="flex justify-between items-center mx-1.5">
          <button>
            <IconThreeDots />
          </button>
          <Link href={'/'}>
            <Image
              src={IMAGES.template.header.logo}
              width={62}
              height={62}
              alt=""
            />
          </Link>
          <button>
            <IconUser color={'white'} />
          </button>
        </div>
        {/* search filed */}
        <div
          className={`p-3 rounded-xl flex items-center gap-2.5 border-2 transition-all duration-300 relative border-transparent focus-within:border-base-royal-blue ${
            isFocusSearchField
              ? 'bg-base-gray-100 -top-9'
              : 'bg-[#3F41C5] top-0'
          }`}
        >
          <div className="w-5 flex justify-center">
            {isFocusSearchField ? (
              <button onClick={() => showAndHideSearchResultHandler({type: 'hide'})}>
                <IconChevron position={'right'} color={'base-gray-400'} />
              </button>
            ) : (
              <IconMagnifier />
            )}
          </div>
          <input
            onFocus={() => showAndHideSearchResultHandler({type: 'show'})}
            placeholder="جستجو در مبیت"
            className={`text-sm w-full z-40 ${
              isFocusSearchField
                ? 'placeholder:text-gray-400'
                : 'placeholder:text-gray-200'
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Mobile;
