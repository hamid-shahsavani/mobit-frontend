import { atomIsShowSearchResult } from '@/atoms/template/header/isShowSearchResult';
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
      className={`fixed top-0 left-0 right-0 w-full h-screen overflow-hidden bg-white transition-all duration-300 ${
        atomStateIsShowSearchResult
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
      }`}
    >
      <div className="container mt-20 mx-1.5 h-full">
        <div className='flex items-center justify-center h-[calc(100%_-_90px)]'>
          <ThreeDots width="65" radius="9" color={theme.colors['royal-blue']} />
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
