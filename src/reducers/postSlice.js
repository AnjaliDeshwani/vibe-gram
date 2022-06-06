import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPostsService,
  createPostService,
  deletePostService,
} from "../services/postService";

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

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postData, token }, thunkAPI) => {
    try {
      const response = await createPostService({ postData, token });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await deletePostService({ postId, token });
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
    //getAllPosts
    [getPosts.pending]: (state) => {
      state.postsStatus = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.allPosts = action.payload.posts;
    },
    [getPosts.rejected]: (state) => {
      state.postsStatus = "rejected";
    },

    //createPost
    [createPost.pending]: (state) => {
      state.postsStatus = "loading";
    },
    [createPost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.allPosts = action.payload.posts;
    },
    [getPosts.rejected]: (state) => {
      state.postsStatus = "rejected";
    },

    //deletePost
    [deletePost.pending]: (state) => {
      state.postsStatus = "loading";
    },
    [deletePost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.allPosts = action.payload.posts;
    },
    [deletePost.rejected]: (state) => {
      state.postsStatus = "rejected";
    },
  },
});

export const postReducer = postSlice.reducer;
