'use client';

import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

export default function GlobalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
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
      <RecoilRoot>{children}</RecoilRoot>
    </>
  );
}
