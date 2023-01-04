import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const portfolioSlice = createApi({
  reducerPath: 'portfolioSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jsonbin.io'
  }),
  endpoints: (builder) => ({
    getPortfolio: builder.query({
      query: () => 'v3/b/63b554c515ab31599e2c8622'
    })
  })
});

export const { useGetPortfolioQuery } = portfolioSlice;
