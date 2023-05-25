import { toast as toastify } from 'react-toastify';

type ArgsType = {
  text: any;
  type: string;
  timer?: number;
};

export default function toast(args: ArgsType): void {
  // repeat render toast && only show once toast and fix show toast after close first toast
  if (typeof window !== 'undefined') {
    if (toastify.isActive(args.text)) {
      toastify[args.type as 'error' | 'success'](args.text, {
        toastId: args.text,
        ...(args.timer && { autoClose: args.timer }),
      });
    }
  }
}
