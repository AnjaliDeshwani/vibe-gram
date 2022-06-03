import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, singupService } from "../services/authServices";

const initialState = {
  token: "" || JSON.parse(localStorage.getItem("authDetails"))?.token,
  user: "" || JSON.parse(localStorage.getItem("authDetails"))?.token,
  authStatus: "idle",
  loginError: "",
  signupError: "",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await loginService({
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ firstName, lastName, email, password }, thunkAPI) => {
    try {
      const response = await singupService({
        email,
        password,
        firstName,
        lastName,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutHandler: (state) => {
      localStorage.removeItem("authDetails");
      state.token = "";
      state.user = "";
    },
  },
  extraReducers: {
    //login
    [loginUser.pending]: (state) => {
      state.authStatus = "loading";
    },

    [loginUser.fulfilled]: (state, action) => {
      state.authStatus = "success";
      state.user = action.payload.foundUser;
      state.token = action.payload.encodedToken;
      localStorage.setItem(
        "authDetails",
        JSON.stringify({ token: state.token, user: state.user })
      );
    },

    [loginUser.rejected]: (state, action) => {
      state.authStatus = "rejected";
      state.loginError = action.payload.errors;
    },

    //signUp
    [signupUser.pending]: (state) => {
      state.authStatus = "loading";
    },

    [signupUser.fulfilled]: (state, action) => {
      state.authStatus = "success";
      console.log(action.payload);
      state.user = action.payload.createdUser;
      state.token = action.payload.encodedToken;
      localStorage.setItem(
        "authDetails",
        JSON.stringify({ token: state.token, user: state.user })
      );
    },
    [signupUser.rejected]: (state, action) => {
      state.authStatus = "loading";
      state.signupError = action.payload.errors;
    },
  },
});

export const { logoutHandler } = authSlice.actions;
export const authReducer = authSlice.reducer;
