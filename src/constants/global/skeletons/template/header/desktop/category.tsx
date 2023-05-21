import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonDesktopCategory: FC = () => (
  <div>
    <div className="flex h-[314px] w-[659px] pr-2">
      {/* right - level one */}
      <div className="w-[186px] border-l py-[17px]">
        {new Array(6).fill(null).map((item: any, index: any) => (
          <ContentLoader
            uniqueKey={'desktopCategoryRight'}
            key={index}
            className="w-full"
            speed={2}
            width={192}
            height={48}
            backgroundColor="#eee"
            foregroundColor="#ddd"
          >
            <rect x="142" y="3" rx="6" ry="6" width="33" height="33" />
            <rect x="20" y="10" rx="4" ry="4" width="110" height="20" />
          </ContentLoader>
        ))}
      </div>
      {/* left - level two and level tree */}
      <div className="flex flex-col flex-wrap items-start gap-5 px-4 py-[19px]">
        {new Array(21).fill(null).map((item: any, index: any) => (
          <div className="w-[130px]" key={index}>
            <ContentLoader
              uniqueKey={'desktopCategoryLeft'}
              className="w-full"
              speed={2}
              width={130}
              height={22}
              backgroundColor="#eee"
              foregroundColor="#ddd"
            >
              <rect x="0" y="0" rx="5" ry="5" width="130" height="22" />
            </ContentLoader>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkeletonDesktopCategory;
