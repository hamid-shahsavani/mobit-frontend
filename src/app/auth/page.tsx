import IMAGES from '@/constants/global/images';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'ورود / ثبت نام',
    description:
      'اگر شما نیز به دنبال بستری مناسب برای فروش بیشتر کالای دیجیتال خود و کسب درآمد هستید، با ثبت نام در مارکت پلیس مبیت گامی بزرگ در جهت ارتقای فروشگاه خود بردارید.',
  };
}

export default async function Page() {
  return (
    <>
      <Link href={'/'}>go to home</Link>
      <div className="fixed bottom-0 left-0 right-0 h-[80px] w-full">
        <Image
          fill
          src={IMAGES.routes.auth.bottomBackground}
          className="object-cover"
          alt="تصویر پس زمینه"
        />
      </div>
    </>
  );
}
