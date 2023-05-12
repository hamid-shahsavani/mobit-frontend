import Desktop from '@/containers/template/header/desktop';
import Mobile from '@/containers/template/header/mobile';
import React, { FC } from 'react';
import SearchResult from './global/searchResult';

const Header: FC = (): JSX.Element => {
  return (
    <header className="bg-gradient-to-r from-[#2124b5] via-[#3b3ece] to-[#2124b5] sticky top-0 py-3.5">
      <div className="container">
        <SearchResult />
        <Desktop />
        <Mobile />
      </div>
    </header>
  );
};

export default Header;
