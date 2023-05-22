import HeroSlider from '@/containers/routes/home/heroSlider';
import TopCategories from '@/containers/routes/home/topCategories';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TopCategories />
      <div className='h-[200px]'></div>
    </>
  );
}
