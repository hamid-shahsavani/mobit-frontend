import { default as DesktopCategory } from '@/constants/skeletons/template/header/desktop/category';
import { default as MobileCategory } from '@/constants/skeletons/template/header/mobile/category';

const SKELETONS = {
  template: {
    header: {
      mobileCategory: MobileCategory,
      desktopCategory: DesktopCategory,
    },
  },
};

export const SekeletonMobileCategory = SKELETONS.template.header.mobileCategory;
export const SekeletonDesktopCategory =
  SKELETONS.template.header.desktopCategory;
