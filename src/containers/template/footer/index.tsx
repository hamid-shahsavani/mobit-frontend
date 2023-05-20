import React, { FC } from 'react';
import Mobile from './mobile';
import Global from './global';

const Footer: FC = (): JSX.Element => {
  return (
    <footer>
      <Global />
      <Mobile />
    </footer>
  );
};

export default Footer;
