import IMAGES from '@/constants/global/images';
import Image from 'next/image';

export default async function Page() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-[110px] w-full">
        <Image
          fill
          src={IMAGES.routes.auth.bottomBackground}
          alt="تصویر پس زمینه"
        />
      </div>
    </>
  );
}
