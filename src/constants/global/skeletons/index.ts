import { default as MobileCategory } from '@/constants/global/skeletons/template/header/mobile/category';
import { default as DesktopCategory } from '@/constants/global/skeletons/template/header/desktop/category';

const SKELETONS = {
  template: {
    header: {
      mobileCategory: MobileCategory,
      desktopCategory: DesktopCategory,
    },
  },
};

export const SekeletonMobileCategory =
  SKELETONS.template.header.mobileCategory;
export const SekeletonDesktopCategory =
  SKELETONS.template.header.desktopCategory;
