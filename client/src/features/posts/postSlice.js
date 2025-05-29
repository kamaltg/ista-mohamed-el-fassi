import { apiSlice } from "@/features/api/apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter();

// getInitialState() returns a normalized object (entity) with the additional specified keys-values
const initialState = postsAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      transformResponse: (responseData) => {
        return {
          posts: postsAdapter.setAll(initialState, responseData.data),
          pagination: {
            currentPage: responseData.current_page,
            total: responseData.total,
          },
        };
      },
      providesTags: (result) =>
        result
          ? [
              { type: "Post", id: "LIST" },
              ...result.posts.ids.map((id) => ({ type: "Post", id })),
            ]
          : [{ type: "Post", id: "LIST" }],
    }),
  }),
});

export const { useGetPostsQuery } = extendedApiSlice;

// returns the query result object
export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select();

// creates memoized selector
const selectPostsData = createSelector(
  selectPostsResult, // input functions
  // normalized state object with ids & entities
  (postsResult) => postsResult?.data?.posts ?? initialState, // output function
);

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
  // Pass-in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(
  (state) => selectPostsData(state) ?? initialState,
);
