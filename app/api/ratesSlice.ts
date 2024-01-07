import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CurrencyData } from '../types/currency'

export const ratesSlice = createApi({
  reducerPath: 'exchangeRate',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1/' }), // TODO move base url to env.
  endpoints: (builder) => ({
    getAllExchangeRates: builder.query<CurrencyData, void>({
      query: () => `c7a10010-2fc6-44df-9681-12b985605bf3`,
    }),
  }),
})

export const { useGetAllExchangeRatesQuery } = ratesSlice
