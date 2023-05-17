import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      headers.set('authorization', `Bearer ${token}` ? token : '');
      return headers;
    },
  }),
  tagTypes: ['Authorization'],
  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        credentials,
      }),
      invalidatesTags: ['Authorization'],
    }),
    logIn: builder.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        credentials,
      }),
      invalidatesTags: ['Authorization'],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['Authorization'],
    }),
  }),
});

export const { useRegisterMutation, useLogInMutation, useLogOutMutation } =
  authApi;
