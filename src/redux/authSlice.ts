import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from './userReducer';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query(data) {
        return {
          url: 'users/create',
          method: 'POST',
          body: data
        }
      }
    }),
    getUser: builder.query<{user: IUser}, string>({
      query(token) {
        return {
          url: 'google/profile',
          method: 'GET',
          headers: {token: `Bearer ${token}`}
        }
      }
    })
  })
});

export const { useCreateUserMutation, useGetUserQuery } = authApi;