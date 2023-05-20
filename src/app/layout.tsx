'use client';

import { RecoilRoot } from 'recoil';
import localFont from 'next/font/local';
import Header from '@/containers/template/header';
import '@/styles/global/index.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/containers/template/footer';

const metadata = {
  title: 'مبیت',
  description: 'mobit.ir front-end!',
};

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
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="twitter:description" content={metadata.description} />
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
          <Header />
          <main className="pb-3 pt-[74px] lg:pt-3">{children}</main>
          <Footer />
        </RecoilRoot>
      </body>
    </html>
  );
}
