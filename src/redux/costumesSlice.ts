import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const costumesApi = createApi({
  reducerPath: 'costumesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    likeCostume: builder.mutation({
      query(data) {
        return {url: 'users/like', method: 'POST', body: data}
      }
    }),
    saveCostume: builder.mutation({
      query(data) {
        return {url: 'users/save', method: 'POST', body: data}
      }
    }),
    fetchCostumes: builder.query({
      query(data) {
        return {url: 'costumes/all', method: 'GET', params: data}
      }
    })
  })
});

export const { 
  useLikeCostumeMutation, useFetchCostumesQuery, useSaveCostumeMutation
} = costumesApi;