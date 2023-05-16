const { atom } = require('recoil');

const atomIsShowHumbergerMenu = atom({
  key: 'atomIsShowHumbergerMenu',
  default: false,
});

export { atomIsShowHumbergerMenu };
