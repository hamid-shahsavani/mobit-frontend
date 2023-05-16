const { atom } = require('recoil');

const atomIsShowCategoryList = atom({
  key: 'atomIsShowCategoryList',
  default: false,
});

export { atomIsShowCategoryList };
