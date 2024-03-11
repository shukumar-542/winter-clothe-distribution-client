import { baseApi } from "../../api/baseApi";

const commentApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        postGratitude : builder.mutation({
            query : (body) =>({
                url: '/comment',
                method: "POST", 
                body: body
            }),
            invalidatesTags : ["comment"]
        }),
        getGratitude : builder.query({
            query : () => '/comment',
            providesTags : ["comment"]

        }),
        commentPost : builder.mutation({
            query : ({id, data}) =>({
                url: `/comment/${id}`,
                method: "POST", 
                body: data
            }),
            invalidatesTags : ["comment"]
        })
    })
})


export const  { usePostGratitudeMutation , useGetGratitudeQuery , useCommentPostMutation } = commentApi;