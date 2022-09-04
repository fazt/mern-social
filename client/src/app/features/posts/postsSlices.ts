import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getPostsRequest, createPostRequest } from "../../../api/posts.request";

interface Post {
  _id?: string;
  title: string;
  description: string;
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchAllPosts", async () => {
  const response = await getPostsRequest();
  return response.data;
});

export const createNewPost = createAsyncThunk(
  "posts/createPost",
  async (newPost: Post) => {
    const response = await createPostRequest(newPost);
    return response.data;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      // Add user to the state array
      state.posts = action.payload;
      // state.entities.push(action.payload)
    });
  },
});

export default postSlice.reducer;
