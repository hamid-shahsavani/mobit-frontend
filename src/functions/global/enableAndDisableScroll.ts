type TArgs = {
  status: 'enable' | 'disable';
};
export default function enableAndDisableScroll(args: TArgs): void {
  // detect is-visible scroll-y-bar in right-side
  function isScrollbarVisible() {
    var element = document.createElement('div');
    element.style.width = '100px';
    element.style.height = '10000px';
    element.style.overflow = 'scroll';
    element.style.visibility = 'hidden';
    element.style.position = 'absolute';
    element.style.top = '-9999px';
    document.body.appendChild(element);
    var isScrollbarVisible = element.offsetWidth - element.clientWidth > 0;
    document.body.removeChild(element);
    return (
      isScrollbarVisible &&
      document.querySelector('html')!.scrollHeight >
        document.querySelector('html')!.clientHeight
    );
  }
  // is-visible scroll-y-bar ? overflow-hidden + padding-right : overflow-hidden);
  document.body?.classList[args.status === 'enable' ? 'remove' : 'add'](
    isScrollbarVisible()
      ? 'disable-scroll_scrollbar-is-visible'
      : 'disable-scroll_scrollbar-is-not-visible',
  );
}
