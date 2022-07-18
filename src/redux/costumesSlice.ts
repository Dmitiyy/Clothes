import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const costumesApi = createApi({
  reducerPath: 'costumesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    likeCostume: builder.mutation({
      query(data) {
        return {
          url: 'users/like',
          method: 'POST',
          body: data
        }
      }
    })
  })
});

export const { useLikeCostumeMutation } = costumesApi;