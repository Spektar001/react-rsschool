import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCESS_KEY } from '../../components/Key/key';
import { Data } from '../../components/Types/types';
import { ServerRespones } from '../../components/Types/types';

export const unsplashApi = createApi({
  reducerPath: 'unsplash/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchCards: build.query<Data[], string>({
      query: (search: string) => ({
        url: `search/photos?page=1&per_page=20&query=${search}&client_id=${ACCESS_KEY}`,
      }),
      transformResponse: (response: ServerRespones<Data>) => response.results,
    }),
    searchItem: build.query<Data, string>({
      query: (itemID: string) => ({
        url: `photos/${itemID}?client_id=${ACCESS_KEY}`,
      }),
    }),
  }),
});

export const { useSearchCardsQuery, useSearchItemQuery } = unsplashApi;
