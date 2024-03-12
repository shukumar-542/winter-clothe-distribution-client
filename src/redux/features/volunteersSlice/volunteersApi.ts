import { baseApi } from "../../api/baseApi";

const volunteersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllVolunteers: builder.query({
            query: () => `/donor-testimonial`,
            providesTags : ['donors']
        }),
        postDonorsTestimonials : builder.mutation({
            query: (body) => ({
                
                url: '/donor-testimonial',
                method: "POST",
                body: body
            }),
            invalidatesTags : ['donors']
        }),
        registerVolunteers : builder.mutation({
            query: (body) => ({
                url: '/volunteers',
                method: "POST",
                body: body
            }),
            invalidatesTags : ['volunteers']

        }),
        getVolunteers: builder.query({
            query: () => `/volunteers`,
            providesTags : ['volunteers']
        }),
    })
})

export const { useGetAllVolunteersQuery, usePostDonorsTestimonialsMutation, useRegisterVolunteersMutation , useGetVolunteersQuery } = volunteersApi