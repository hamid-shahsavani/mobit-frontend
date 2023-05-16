import { atomIsShowCategoryList } from '@/atoms/template/header/desktop/isShowCategoryList';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

const CategoryList: FC = (): JSX.Element => {
  // detect is-show category list
  const atomStateIsShowCategoryList = useRecoilValue<boolean>(
    atomIsShowCategoryList,
  );

  return (
    <section
      className={`bg-white border border-gray-100 rounded-lg shadow-md transition-all duration-300 absolute top-20 min-w-[400px] min-h-[200px] after:absolute after:-top-8 after:h-8 after:w-[200px] ${
        atomStateIsShowCategoryList
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
      }`}
    >
      <p>ggg</p>
    </section>
  );
};

export default CategoryList;
