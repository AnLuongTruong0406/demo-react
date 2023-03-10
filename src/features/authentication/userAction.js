import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../config";
import { login, register, logout } from "./services/postUserService";

export const userLogin = createAsyncThunk(
  config.authApi.login,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await login({
        email,
        password,
      });
      user && localStorage.setItem("user", JSON.stringify(user));
      return user.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userRegister = createAsyncThunk(
  config.authApi.register,
  async ({ email, password, type }, { rejectWithValue }) => {
    try {
      const user = await register({
        email,
        password,
        type,
      });
      user && localStorage.setItem("user", JSON.stringify(user));
      return user.data;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors);
      } else {
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

export const userLogout = createAsyncThunk(config.authApi.logout, async () => {
  await logout();
  localStorage.removeItem("user");
});
