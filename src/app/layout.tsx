import fontIransansx from '@/constants/global/fonts';
import { Providers } from './providers';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/global/index.scss';
import '@/styles/routes/global/index.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="rtl">
      <body
        cz-shortcut-listen="false"
        className={`relative ${fontIransansx.className}`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
