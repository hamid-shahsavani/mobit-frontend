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
      className={`fixed top-0 left-0 right-0 w-full h-screen overflow-hidden bg-white transition-opacity duration-300 lg:w-[350px] lg:h-auto lg:rounded-lg lg:border lg:border-gray-100 lg:top-20 lg:shadow-md lg:left-1/2 lg:right-1/2 lg:translate-x-[80px] xl:w-[400px] xl:translate-x-[101px] ${
        atomStateIsShowSearchResult
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
      }`}
    >
      <div className="container mt-20 mx-1.5 h-full lg:mt-0">
        <div className="flex items-center justify-center h-[calc(100%_-_90px)] lg:my-4">
          <ThreeDots width="65" radius="9" color={theme.colors['royal-blue']} />
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
