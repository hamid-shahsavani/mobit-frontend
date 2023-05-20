type ArgsType = {
  status: 'enable' | 'disable';
};
export default function enableAndDisableScroll(args: ArgsType): void {
  function isScrollbarVisible() {
    // Create a dummy element with a large height to force scrollbar
    var element = document.createElement('div');
    element.style.width = '100px';
    element.style.height = '10000px';
    element.style.overflow = 'scroll';
    element.style.visibility = 'hidden';
    element.style.position = 'absolute';
    element.style.top = '-9999px';
  
    document.body.appendChild(element);
  
    // Check if the scrollbar is visible
    var isScrollbarVisible = element.offsetWidth - element.clientWidth > 0;
  
    // Clean up the dummy element
    document.body.removeChild(element);
  
    return isScrollbarVisible;
  }
  document.body?.classList[args.status === 'enable' ? 'remove' : 'add'](
    isScrollbarVisible() ? 'disable-scroll_scrollbar-is-visible' : 'disable-scroll_scrollbar-is-not-visible'
  );

}
