import { atomIsShowSearchResult } from '@/atoms/template/header/global/isShowSearchResult';
import React, { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useRecoilValue } from 'recoil';
import theme from 'theme';

const SearchResult: FC = (): JSX.Element => {
  // detect is-show search result
  const atomStateIsShowSearchResult = useRecoilValue<boolean>(
    atomIsShowSearchResult,
  );

  return (
    <section
      className={`container fixed left-0 right-0 top-0 z-50 h-screen w-full overflow-hidden bg-white transition-opacity duration-300 lg:left-1/2 lg:right-1/2 lg:top-20 lg:h-auto lg:w-[350px] lg:translate-x-[80px] lg:rounded-lg lg:border lg:border-gray-100 xl:w-[400px] xl:translate-x-[101px] ${
        atomStateIsShowSearchResult
          ? 'visible opacity-100'
          : 'invisible opacity-0'
      }`}
    >
      <div className="mt-[75px] h-full lg:mt-0">
        <div className="flex h-[calc(100%_-_87px)] items-center justify-center lg:my-4">
          <ThreeDots width="65" radius="9" color={theme.colors['royal-blue']} />
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
