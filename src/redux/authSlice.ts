import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/users/' }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query(data) {
        return {
          url: 'create',
          method: 'POST',
          body: data
        }
      }
    })
  })
});

export const { useCreateUserMutation } = authApi;