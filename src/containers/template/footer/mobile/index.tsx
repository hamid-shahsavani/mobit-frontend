import React, { FC } from 'react';
import NavBottom from './navBottomMenu';

const Mobile: FC = (): JSX.Element => {
  return (
    <div className="lg:hidden">
      <NavBottom />
    </div>
  );
};

export default Mobile;
