import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsService, createPostService } from "../services/postService";

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
      console.log("inside try1");
      const response = await createPostService({ postData, token });
      console.log("inside try2");
      console.log(response);
      return response.data;
    } catch (error) {
      console.log("inside catch");
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
  },
});

export const postReducer = postSlice.reducer;
