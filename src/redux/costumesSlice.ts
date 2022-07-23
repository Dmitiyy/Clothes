import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const costumesApi = createApi({
  reducerPath: 'costumesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    costumeAction: builder.mutation({
      query(data: {costumeId: string, userId: string, url: string}) {
        const { costumeId, userId } = data;
        return {url: `users/${data.url} `, method: 'POST', body: { costumeId, userId }}
      }
    }),
    fetchCostumes: builder.query({
      query(data) {
        return {url: 'costumes/all', method: 'GET', params: data}
      }
    })
  })
});

export const { useCostumeActionMutation, useFetchCostumesQuery } = costumesApi;