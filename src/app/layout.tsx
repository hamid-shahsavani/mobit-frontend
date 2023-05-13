'use client';

import { RecoilRoot } from 'recoil';
import Header from '@/containers/template/header';
import '@/styles/global/index.scss';

export const metadata = {
  title: 'مبیت',
  description: 'mobit.ir front-end!',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body cz-shortcut-listen="false">
        <RecoilRoot>
          <Header />
          <main className='pt-20 pb-4 lg:pt-4'>{children}</main>
          <footer>footer</footer>
        </RecoilRoot>
      </body>
    </html>
  );
}
