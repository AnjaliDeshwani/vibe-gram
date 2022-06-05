import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsService } from "../services/postService";

const initialState = {
  allPosts: [],
  postsStatus: "",
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const response = await getPostsService();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.postsStatus = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.allPosts = action.payload.posts;
    },
    [getPosts.rejected]: (state, action) => {
      state.postsStatus = "rejected";
    },
  },
});

export const postReducer = postSlice.reducer;
