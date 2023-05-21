// global
import { default as Chevron } from '@/constants/global/icons/global/chevron';
// template/global
import { default as User } from '@/constants/global/icons/template/global/user';
import { default as DiscountSquare } from '@/constants/global/icons/template/global/discountSquare';
// template/header
import { default as ThreeDots } from '@/constants/global/icons/template/header/threeDots';
import { default as Magnifier } from '@/constants/global/icons/template/header/magnifier';
import { default as Window } from '@/constants/global/icons/template/header/window';
// template/footer
import { default as Cart } from '@/constants/global/icons/template/global/cart';
import { default as Home } from '@/constants/global/icons/template/footer/home';

const ICONS = {
  global: {
    chevron: Chevron,
  },
  template: {
    global: {
      user: User,
      discountSquare: DiscountSquare,
      cart: Cart,
    },
    header: {
      threeDots: ThreeDots,
      magnifier: Magnifier,
      window: Window,
    },
    footer: {
      home: Home,
    },
  },
};

// global
export const IconChevron = ICONS.global.chevron;
// template/global
export const IconUser = ICONS.template.global.user;
export const IconDiscountSquare = ICONS.template.global.discountSquare;
export const IconCart = ICONS.template.global.cart;
// template/header
export const IconThreeDots = ICONS.template.header.threeDots;
export const IconMagnifier = ICONS.template.header.magnifier;
export const IconWindow = ICONS.template.header.window;
// template/footer
export const IconHome = ICONS.template.footer.home;
