import localFont from 'next/font/local';
import Header from '@/containers/template/header';
import '@/styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/containers/template/footer';
import GlobalWrapper from '@/containers/template/global/globalWrapper';

export const metadata = {
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
    <html lang="en" dir="rtl">
      <body
        cz-shortcut-listen="false"
        className={`relative ${iransansx.className}`}
      >
        <GlobalWrapper>
          <Header />
          <main className="container pb-3 pt-[74px] lg:pt-3">{children}</main>
          <Footer />
        </GlobalWrapper>
      </body>
    </html>
  );
}
