const TOASTMSG = {
  routes: {
    global: {
      pleaseLogin: {
        type: 'error',
        text: 'برای دسترسی به این صفحه لطفا وارد حساب کاربری خود شوید!',
      },
      pleaseCheckNetworkConnection: {
        type: 'error',
        text: 'لطفا وضعیت اینترنت خود را بررسی کنید!',
      },
      sorryYouNotAccessThisRoute: {
        type: 'error',
        text: 'با عرض پوزش، دسترسی شما به این صفحه مجاز نمی باشد.',
      },
      sorryUnexpectedError: {
        type: 'error',
        text: 'متاسفیم, یک خطای غیر منتظره رخ داد!',
      },
    },
  },
};

export default TOASTMSG;
