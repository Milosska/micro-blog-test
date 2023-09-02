import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  handleRegistration,
  handleLogin,
  handleLogout,
  handleRefresh,
} from "@/helpers/supabase/supabaseAuth";
import { IRegisterForm, ILoginForm } from "@/types/formTypes";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: IRegisterForm) => {
    try {
      const response = await handleRegistration(data);

      return response;
    } catch (error: any) {
      console.error("Unexpected error during registration:", error.message);
      return { message: "Registration failed." };
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: ILoginForm) => {
    try {
      const response = await handleLogin(data);

      return response;
    } catch (error: any) {
      console.error("Unexpected error during registration:", error.message);
      return { user: null };
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    await handleLogout();
    return;
  } catch (error: any) {
    console.error("Unexpected error during registration:", error.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refreshUser", async () => {
  try {
    const response = await handleRefresh();
    return response;
  } catch (error: any) {
    console.error("Unexpected error during registration:", error.message);
    return null;
  }
});
