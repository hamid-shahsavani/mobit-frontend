import { default as Chevron } from '@/constants/global/icons/global/chevron';
import { default as User } from '@/constants/global/icons/template/global/user';
import { default as Cart } from '@/constants/global/icons/template/global/cart';
import { default as ThreeDots } from '@/constants/global/icons/template/header/threeDots';
import { default as Magnifier } from '@/constants/global/icons/template/header/magnifier';
import { default as Window } from '@/constants/global/icons/template/header/window';
import { default as DiscountSquare } from '@/constants/global/icons/template/header/discountSquare';

const ICONS = {
  global: {
    chevron: Chevron,
  },
  template: {
    global: {
      user: User,
      cart: Cart,
    },
    header: {
      threeDots: ThreeDots,
      magnifier: Magnifier,
      window: Window,
      discountSquare: DiscountSquare,
    },
  },
};
export const IconChevron = ICONS.global.chevron;
export const IconCart = ICONS.template.global.cart;
export const IconUser = ICONS.template.global.user;
export const IconThreeDots = ICONS.template.header.threeDots;
export const IconMagnifier = ICONS.template.header.magnifier;
export const IconWindow = ICONS.template.header.window;
export const IconDiscountSquare = ICONS.template.header.discountSquare;