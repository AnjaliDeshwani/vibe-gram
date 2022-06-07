import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBookmarkPostHandlerService,
  addBookmarkPostService,
  removePostFromBookmarkService,
} from "../services/userService";

const initialState = {
  bookmarks: [],
  loadingStatus: "",
};

export const getBookmarkPosts = createAsyncThunk(
  "users/getBookmarkPosts",
  async (token, thunkAPI) => {
    try {
      const response = await getBookmarkPostHandlerService(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addBookmarkPosts = createAsyncThunk(
  "users/addBookmarkPosts",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await addBookmarkPostService({ token, postId });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removePostFromBookmark = createAsyncThunk(
  "users/removePostfromBookmark",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await removePostFromBookmarkService({ token, postId });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    //getBookmarks
    [getBookmarkPosts.pending]: (state) => {
      state.loadingStatus = "loading";
    },
    [getBookmarkPosts.fulfilled]: (state, action) => {
      state.loadingStatus = "success";
      state.bookmarks = action.payload.bookmarks;
    },
    [getBookmarkPosts.rejected]: (state) => {
      state.loadingStatus = "rejected";
    },

    //addBookmark
    [addBookmarkPosts.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.bookmarks;
    },

    //removeBookmark
    [removePostFromBookmark.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.bookmarks;
    },
  },
});

export const userReducer = userSlice.reducer;
