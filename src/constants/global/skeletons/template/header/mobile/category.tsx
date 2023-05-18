import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonMobileCategory: FC = () => (
  <div className="my-1 mr-2">
    {new Array(5).fill(null).map((item: any, index: any) => (
      <ContentLoader
        uniqueKey={'mobileCategory'}
        key={index}
        className="w-full border-r border-gray-200 border-opacity-60 [&:not(:last-child)]:border-b"
        speed={2}
        width={250}
        height={42}
        backgroundColor="#eee"
        foregroundColor="#ddd"
      >
        <rect x="209" y="5" rx="6" ry="6" width="30" height="30" />
        <rect x="125" y="13" rx="4" ry="4" width="76" height="16" />
        <circle cx="19" cy="22" r="12" />
      </ContentLoader>
    ))}
  </div>
);

export default SkeletonMobileCategory;
