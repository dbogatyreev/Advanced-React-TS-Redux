import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<IPost[], number>({
            query: (limit) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        }),
        createPost: builder.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            })
        }),
        updatePost: builder.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            })
        }),
        deletePost: builder.mutation<void, string>({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DELETE'
            })
        }),
    }),
});

export const {
    useFetchAllPostsQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = postAPI;
