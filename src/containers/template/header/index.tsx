import Desktop from '@/containers/template/header/desktop';
import Mobile from '@/containers/template/header/mobile';
import React, { FC } from 'react';
import Global from './global';

const Header: FC = (): JSX.Element => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Global />
        <Desktop />
        <Mobile />
      </header>
    </>
  );
};

export default Header;
