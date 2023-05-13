import Desktop from '@/containers/template/header/desktop';
import Mobile from '@/containers/template/header/mobile';
import React, { FC } from 'react';
import SearchResult from './global/searchResult';

const Header: FC = (): JSX.Element => {
  return (
    <header className="sticky top-0">
      <SearchResult />
      <Desktop />
      <Mobile />
    </header>
  );
};

export default Header;
