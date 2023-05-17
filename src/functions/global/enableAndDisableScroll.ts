type ArgsType = {
  status: 'enable' | 'disable';
};
export default function enableAndDisableScroll(args: ArgsType): void {
  document.body?.classList[args.status === 'enable' ? 'remove' : 'add'](
    'overflow-y-hidden',
  );
}
