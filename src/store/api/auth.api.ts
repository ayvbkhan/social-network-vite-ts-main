import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type {  } from './types'
import { baseUrl } from '../../utils/baseUrl'

interface GetUserByIdResponce {
    statues: number;
    message: {
        mail: string;
        phone_number: string;
        user_id: number;
        name: string;
        reg_date: Date;
        city: string;
    };

}

export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUserById: builder.query<GetUserByIdResponce, number>({
            query: (id) => `user?user_id=${id}`,
        }),
    }),
})

export const { useGetUserByIdQuery } = AuthApi