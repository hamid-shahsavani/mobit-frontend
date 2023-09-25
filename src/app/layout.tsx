'use client';

import '@/styles/index.scss';
import Header from '@/containers/template/header';
import Footer from '@/containers/template/footer';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import fontIransansx from '@/constants/global/fonts';

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
        className={`relative ${fontIransansx.className}`}
      >
        <NextTopLoader
          color={'#377DFF'}
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
