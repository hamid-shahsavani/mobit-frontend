import { TProduct } from '@/types/routes/global/product';
import { supabase } from '@/utils/supabase';

type TResponse = TProduct[];

export const APIfetchProductSliderData = async (args: {
  type:
    | 'most-visited'
    | 'new-products'
    | 'new-phones'
    | 'similar-products'
    | 'special-offer';
}): Promise<TResponse> => {
  const { data } = await supabase.from('home_products-slider').select()
  return data!;
};
