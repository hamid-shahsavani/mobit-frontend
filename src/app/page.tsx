import ProductCardSlider from '@/containers/routes/global/productSlider';
import HeroSlider from '@/containers/routes/home/heroSlider';
import MobileBrandSlider from '@/containers/routes/home/mobileBrandSlider';
import TopCategories from '@/containers/routes/home/topCategories';
import { APIfetchProductSliderData } from '@/services/routes/global/fetchProductSliderData';
import { Metadata } from 'next';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'فروشگاه اینترنتی مبیت',
    description:
      'فروشگاه اینترنتی موبایل مبیت عرضه کننده انواع کالاهای دیجیتال در ایران است.خرید اینترنتی موبایل,تبلت,هارد اکسترنال,فلش مموری,کنسول بازی فقط با چند کلیک ساده',
  };
}

export default async function Page() {
  const [
    specialOfferProductSliderData,
    mostVisitedProductSliderData,
    newProductsProductSliderData,
    newPhonesProductSliderData,
  ] = await Promise.all([
    APIfetchProductSliderData({ type: 'special-offer' }),
    APIfetchProductSliderData({ type: 'most-visited' }),
    APIfetchProductSliderData({ type: 'new-products' }),
    APIfetchProductSliderData({ type: 'new-phones' }),
  ]);

  return (
    <>
      <HeroSlider />
      <TopCategories />
      <ProductCardSlider
        type={'special-offer'}
        data={specialOfferProductSliderData}
      />
      <MobileBrandSlider />
      <ProductCardSlider
        type={'most-visited'}
        data={mostVisitedProductSliderData}
      />
      <ProductCardSlider
        type={'new-phones'}
        data={newPhonesProductSliderData}
      />
      <ProductCardSlider
        type={'new-products'}
        data={newProductsProductSliderData}
      />
    </>
  );
}
