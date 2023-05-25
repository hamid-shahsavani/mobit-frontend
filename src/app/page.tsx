import ProductCardSlider from '@/containers/routes/global/productSlider';
import HeroSlider from '@/containers/routes/home/heroSlider';
import MobileBrandSlider from '@/containers/routes/home/mobileBrandSlider';
import TopCategories from '@/containers/routes/home/topCategories';
import { APIfetchProductSliderData } from '@/services/routes/global/fetchProductSliderData';

export const revalidate = 0;

async function FETCHERfetchProductSliderData(args: {
  type:
    | 'most-visited'
    | 'new-products'
    | 'new-phones'
    | 'similar-products'
    | 'special-offer';
}) {
  const data = await APIfetchProductSliderData({ type: args.type });
  return data || null;
}

export default async function Page() {
  const [
    specialOfferProductSliderData,
    mostVisitedProductSliderData,
    newProductsProductSliderData,
    newPhonesProductSliderData,
  ] = await Promise.all([
    FETCHERfetchProductSliderData({ type: 'special-offer' }),
    FETCHERfetchProductSliderData({ type: 'most-visited' }),
    FETCHERfetchProductSliderData({ type: 'new-products' }),
    FETCHERfetchProductSliderData({ type: 'new-phones' }),
  ]);

  return (
    <>
      <HeroSlider />
      <TopCategories />
      <ProductCardSlider type={'special-offer'} data={specialOfferProductSliderData} />
      <MobileBrandSlider />
      <ProductCardSlider type={'most-visited'} data={mostVisitedProductSliderData} />
      <ProductCardSlider type={'new-phones'} data={newPhonesProductSliderData} />
      <ProductCardSlider type={'new-products'} data={newProductsProductSliderData} />
    </>
  );
}
