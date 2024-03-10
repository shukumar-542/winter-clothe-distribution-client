import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://l2-b2-frontend-path-assignment-6-server-starter-pack-theta.vercel.app/api/v1' }),
    tagTypes : ['products'],
    endpoints: () => ({})
})
