import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const portfolioSlice = createApi({
  reducerPath: 'portfolioSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jsonbin.io'
  }),
  endpoints: (builder) => ({
    getPortfolio: builder.query({
      query: () => 'v3/b/63af1bf701a72b59f23c8e8b'
    })
  })
});

export const { useGetPortfolioQuery } = portfolioSlice;
