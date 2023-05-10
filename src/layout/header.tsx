import Desktop from '@/containers/template/header/desktop';
import Mobile from '@/containers/template/header/mobile';
import React, { FC } from 'react';

const Header: FC = (): JSX.Element => {
  return (
    <header className="bg-gradient-to-r from-[#2124b5] via-[#3b3ece] to-[#2124b5] py-2">
      <div className="container">
        <Desktop />
        <Mobile />
      </div>
    </header>
  );
};

export default Header;
