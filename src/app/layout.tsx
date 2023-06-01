'use client';

import localFont from 'next/font/local';
import '@/styles/index.scss';
import Header from '@/containers/template/header';
import Footer from '@/containers/template/footer';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import theme from 'theme';

// set font globaly
const iransansx = localFont({
  src: [
    {
      path: '../assets/fonts/thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ultraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/demiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/extraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  // detect current pathname
  const pathname = usePathname();

  // hide template in '/auth'
  const [isShowTemplate, setIsShowTemplate] = useState<boolean>(() =>
    pathname === '/auth' ? false : true,
  );
  useEffect(() => {
    setIsShowTemplate(pathname === '/auth' ? false : true);
  }, [pathname]);

  return (
    <html lang="en" dir="rtl">
      <body
        cz-shortcut-listen="false"
        className={`relative ${iransansx.className}`}
      >
        <NextTopLoader
          color={theme.colors['royal-blue']}
          crawl={false}
          showSpinner={false}
        />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          limit={1}
          rtl={true}
          closeButton={false}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={true}
          theme="light"
        />
        <RecoilRoot>
          {!!isShowTemplate ? (
            <>
              <Header />
              <main className={`flex flex-col gap-7 pb-6 pt-[88px] lg:py-7 transition-all duration-300`}>
                {children}
              </main>
              <Footer />
            </>
          ) : (
            <main>{children}</main>
          )}
        </RecoilRoot>
      </body>
    </html>
  );
}
