'use client';

import Footer from '@/containers/template/footer';
import Header from '@/containers/template/header';
import { usePathname } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

export function Providers({ children }: { children: React.ReactNode }) {
  // detect isShow root layout
  const pathname = usePathname();
  const [isShowRootLayout, setIsShowRootLayout] = useState<boolean>(() =>
    pathname === '/auth' ? false : true,
  );
  useEffect(() => {
    setIsShowRootLayout(pathname === '/auth' ? false : true);
  }, [pathname]);

  return (
    <>
      <NextTopLoader color={'#377DFF'} crawl={false} showSpinner={false} />
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
        {!!isShowRootLayout ? (
          <>
            <Header />
            <main
              className={`flex flex-col gap-7 pb-6 pt-[88px] transition-all duration-300 lg:py-7`}
            >
              {children}
            </main>
            <Footer />
          </>
        ) : (
          <main>{children}</main>
        )}
      </RecoilRoot>
    </>
  );
}
