import api from '@/services/apiService';
import { TCategoryItem } from '@/types/template/header/categoryItem';
import { AxiosResponse } from 'axios';

type TAxiosResponse = TCategoryItem[];

export const APIfetchCategoryData = async (): Promise<TAxiosResponse> => {
  const { data }: AxiosResponse<TAxiosResponse> = await api.get(
    '/categories',
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
  return data;
};
