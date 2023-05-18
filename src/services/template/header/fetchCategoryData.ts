import api from '@/services/apiService';
import { CategoryItemType } from '@/types/template/header/categoryItem.type';
import { AxiosResponse } from 'axios';

type AxiosResponseType = CategoryItemType[];

export const APIfetchCategoryData = async (): Promise<AxiosResponseType> => {
  const { data }: AxiosResponse<AxiosResponseType> = await api.get(
    '/categories',
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
  return data;
};
