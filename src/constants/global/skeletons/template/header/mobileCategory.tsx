import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonMobileCategory: FC = () => (
  <div className="my-1 mr-2">
    {new Array(3).fill(null).map(
      (item, index): React.ReactNode => (
        <ContentLoader
          key={index}
          className="w-full border-r border-gray-200 border-opacity-60 [&:not(:last-child)]:border-b"
          speed={2}
          width={250}
          height={42}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="209" y="5" rx="6" ry="6" width="32" height="32" />
          <rect x="125" y="14" rx="4" ry="4" width="76" height="16" />
          <circle cx="19" cy="22" r="12" />
        </ContentLoader>
      ),
    )}
  </div>
);

export default SkeletonMobileCategory;
