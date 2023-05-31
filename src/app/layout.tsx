'use client';

import localFont from 'next/font/local';
import '@/styles/index.scss';
import { Metadata } from 'next';
import Header from '@/containers/template/header';
import Footer from '@/containers/template/footer';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

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

  // dynamic metadata with pathname
  const switchMetaData = (type: string): Metadata => {
    const list: any = {
      '/': {
        title: 'فروشگاه اینترنتی مبیت',
        description:
          'فروشگاه اینترنتی موبایل مبیت عرضه کننده انواع کالاهای دیجیتال در ایران است.خرید اینترنتی موبایل,تبلت,هارد اکسترنال,فلش مموری,کنسول بازی فقط با چند کلیک ساده',
      },
      '/auth': {
        title: 'ورود / ثبت نام',
        description:
          'اگر شما نیز به دنبال بستری مناسب برای فروش بیشتر کالای دیجیتال خود و کسب درآمد هستید، با ثبت نام در مارکت پلیس مبیت گامی بزرگ در جهت ارتقای فروشگاه خود بردارید.',
      },
    };
    return list[type];
  };
  const metadata: Metadata = switchMetaData(pathname);

  // hide template in '/auth'
  const [isShowTemplate, setIsShowTemplate] = useState<boolean | null>(null);
  useEffect(() => {
    setIsShowTemplate(pathname === '/auth' ? false : true);
  }, [pathname]);

  return (
    <html lang="en" dir="rtl">
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
      </head>
      <body
        cz-shortcut-listen="false"
        className={`relative ${iransansx.className}`}
      >
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
              <main className="flex flex-col gap-7 pb-6 pt-[88px] lg:py-7">
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
