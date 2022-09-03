import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getPosts } from "../../../api/posts.request";

interface Post {
  _id: string;
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
  const response = await getPosts();
  return response.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createNewPost(state) {
      state.posts.push({
        _id: "1",
        title: "title",
        description: "description",
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      // Add user to the state array
      state.posts = action.payload;
      // state.entities.push(action.payload)
    });
  },
});

export const { createNewPost } = postSlice.actions;
export default postSlice.reducer;
