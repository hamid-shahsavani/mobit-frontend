import { default as Chevron } from '@/constants/global/icons/global/chevron';
import { default as User } from '@/constants/global/icons/template/global/user';
import { default as ThreeDots } from '@/constants/global/icons/template/header/threeDots';
import { default as Magnifier } from '@/constants/global/icons/template/header/magnifier';

const ICONS = {
  global: {
    chevron: Chevron,
  },
  template: {
    global: {
      user: User,
    },
    header: {
      threeDots: ThreeDots,
      magnifier: Magnifier,
    },
  },
};
export const IconChevron = ICONS.global.chevron;
export const IconUser = ICONS.template.global.user;
export const IconThreeDots = ICONS.template.header.threeDots;
export const IconMagnifier = ICONS.template.header.magnifier;