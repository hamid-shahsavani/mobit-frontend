import { IconChevron } from '@/constants/global/icons';
import IMAGES from '@/constants/global/images';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Global: FC = (): JSX.Element => {
  return (
    <div className="container">
      {/* fast access to app section */}
      <div>
        <button
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
          className="flex w-full justify-center"
        >
          <div className="flex items-center gap-2 rounded-t-lg bg-base-gray-100 px-3.5 py-1.5 text-base-xs font-bold text-base-gray-500 lg:text-base-sm">
            <p>بازگشت به بالا</p>
            <IconChevron size={'xs'} color={'base-gray-600'} position={'top'} />
          </div>
        </button>
        <div className="flex flex-col items-center gap-3 rounded-xl bg-base-gray-100 p-5 sm:flex-row sm:justify-between sm:p-3">
          <div className="flex items-center gap-3">
            <Image
              src={IMAGES.template.footer.logoIcon}
              width={40}
              height={40}
              alt="logo icon"
            />
            <p className="text-base-lg font-extrabold text-base-royal-blue">
              دسترسی سریع به اپلیکیشن
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/"
              className="flex items-center rounded-xl bg-white px-3.5 py-1.5 shadow-lg shadow-gray-200"
            >
              <Image
                src={IMAGES.template.footer.downloadAppFromCafebazzar}
                height={30}
                width={110}
                alt="download app from cafebazar"
              />
            </Link>
            <Link
              href="/"
              className="flex items-center rounded-xl bg-white px-3.5 py-1.5 shadow-lg shadow-gray-200"
            >
              <Image
                src={IMAGES.template.footer.downloadAppFromIapps}
                height={30}
                width={110}
                alt="download app from iapps"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* namads, what is mobit? */}
      <div className="flex flex-col gap-3 py-5 lg:flex-row lg:justify-between">
        {/* what is mobit */}
        <div className="flex flex-col gap-2 max-w-lg">
          <p className="text-base-sm font-extrabold text-base-gray-500 lg:text-base-lg">
            فروشگاه اینترنتی مبیت، خرید آسان کالای دیجیتال با مناسب ترین قیمت
          </p>
          <p className="text-base-xs text-justify font-bold text-base-gray-400 lg:text-base-sm">
            فروشگاه اینترنتی مبیت از جمله عرضه‌کنندگان کالای دیجیتال در سراسر
            کشور است که انواع کالاهای دیجیتال از جمله گوشی موبایل، لپ تاپ، تبلت
            و لوازم جانبی گوشی را قیمت مناسب و ضمانت اصالت کالا به فروش می‌رساند.
          </p>
        </div>
        {/* namads */}
        <div className="flex items-center gap-2 justify-center">
          <Link href="/">
            <Image
              src={IMAGES.template.footer.namadEtehadieh}
              width={80}
              height={80}
              alt="namad etehadieh"
            />
          </Link>
          <Link href="/">
            <Image
              src={IMAGES.template.footer.namadSamandehi}
              width={80}
              height={80}
              alt="namad samandehi"
            />
          </Link>{' '}
          <Link href="/">
            <Image
              src={IMAGES.template.footer.namadSep}
              width={80}
              height={80}
              alt="namad sep"
            />
          </Link>
        </div>
      </div>
      {/* copyright */}
      <p className='border-t py-3 flex text-base-sm font-semibold text-base-gray-400 justify-center'>
        طراحی و توسعه در اردیبهشت 1402
      </p>
    </div>
  );
};

export default Global;
