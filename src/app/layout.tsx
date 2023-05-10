import Header from '@/layout/header';
import '@/styles/global/index.scss';

export const metadata = {
  title: 'مبیت',
  description: 'mobit.ir front-end!',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
