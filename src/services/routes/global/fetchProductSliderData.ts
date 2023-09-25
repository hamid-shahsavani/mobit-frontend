import { productSliderData } from '@/resources/routes/home/productSliderData';
import { TProduct } from '@/types/routes/global/product';

type AxiosResponseType = TProduct[];

export const APIfetchProductSliderData = async (args: {
  type:
    | 'most-visited'
    | 'new-products'
    | 'new-phones'
    | 'similar-products'
    | 'special-offer';
}): Promise<AxiosResponseType> => {
  // get end-point with args.type
  const switchEndpoint = (type: string): string => {
    const list: any = {
      'most-visited': '/products',
      'new-products': '/products',
      'new-phones': '/newest_smartphones',
      'similar-products': '/products',
      'special-offer': '/special_offers',
    };
    return list[type];
  };

  // const { data }: AxiosResponse<AxiosResponseType> = await api.get(
  //   switchEndpoint(args.type),
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   },
  // );
  // return data;

  return productSliderData;
};
