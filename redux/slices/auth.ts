import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VerifyOtpResponseDto } from "../api/openapi.generated";

export interface AuthState {
  accessToken: string;
  refreshToken: string;
}

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<
        Pick<VerifyOtpResponseDto, "accessToken" | "refreshToken">,
        string
      >
    ) => {
      state.accessToken = action.payload.accessToken as string;
      state.refreshToken = action.payload.refreshToken as string;
    },
    clearTokens: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
