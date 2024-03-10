import { baseApi } from "../../api/baseApi";

const volunteersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllVolunteers: builder.query({
            query: () => `/donor-testimonial`
        }),
        postDonorsTestimonials : builder.mutation({
            query: (body) => ({
                
                url: '/donor-testimonial',
                method: "POST",
                body: body
            })
        })
    })
})

export const { useGetAllVolunteersQuery, usePostDonorsTestimonialsMutation } = volunteersApi