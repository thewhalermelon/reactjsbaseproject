import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const portfolioSlice = createApi({
  reducerPath: 'portfolioSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jsonbin.io'
  }),
  endpoints: (builder) => ({
    getPortfolio: builder.query({
      query: () => 'v3/b/63b3b65e15ab31599e2ae945'
    })
  })
});

export const { useGetPortfolioQuery } = portfolioSlice;
