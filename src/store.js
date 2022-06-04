import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
});
