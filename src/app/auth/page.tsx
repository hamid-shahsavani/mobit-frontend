import IMAGES from '@/constants/images';
import Form from '@/containers/routes/auth/form';
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
    <div className="w-screnn container flex h-screen flex-col items-center justify-center">
      {/* bottom image */}
      <div className="fixed bottom-0 left-0 right-0 h-[100px] w-full">
        <Image
          fill
          src={IMAGES.routes.auth.bottomBackground}
          className="object-cover"
          alt="تصویر پس زمینه"
        />
      </div>
      {/* logo */}
      <Link href={'/'} className="relative h-[100px] w-[110px]">
        <Image src={IMAGES.routes.auth.logoPurple} fill alt="لوگو مبیت" />
      </Link>
      {/* form */}
      <Form />
    </div>
  );
}
