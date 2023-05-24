import ProductCardSlider from '@/containers/routes/global/productSlider';
import HeroSlider from '@/containers/routes/home/heroSlider';
import TopCategories from '@/containers/routes/home/topCategories';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TopCategories />
      <ProductCardSlider type={'special-offer'} />
      <ProductCardSlider type={'most-visited'} />
      <ProductCardSlider type={'new-phones'} />
      <ProductCardSlider type={'new-products'} />
      <ProductCardSlider type={'similar-products'} />
    </>
  );
}
