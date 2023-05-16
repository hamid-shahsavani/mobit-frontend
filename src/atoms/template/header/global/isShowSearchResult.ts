const { atom } = require('recoil');

const atomIsShowSearchResult = atom({
  key: 'atomIsShowSearchResult',
  default: false,
});

export { atomIsShowSearchResult };
