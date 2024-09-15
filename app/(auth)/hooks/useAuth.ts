import { phone } from "phone";
import { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { useReduxDispatch } from "@/redux/hooks";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ResendOtpResponseDto,
  useAuthControllerLoginMutation,
  useAuthControllerResendOtpMutation,
  useAuthControllerSendResetForgottenPasswordCodeMutation,
  useAuthControllerVerifyOtpMutation,
  useLazyAuthControllerGetLoggedInUserQuery,
  useLazyAuthControllerLogoutQuery,
  VerifyOtpResponseDto,
} from "@/redux/api/openapi.generated";
import { LoginSchemaType } from "../services/schema";
import { transformTelephoneNumber } from "@/utils";
import { currentUserActions } from "@/redux/slices/currentUser";
import { authActions } from "@/redux/slices/auth";

export function useAuth() {
  const router = useRouter();
  const dispatch = useReduxDispatch();

  const params = useLocalSearchParams<{
    phoneNumber: string;
    email: string;
    password: string;
    from: string;
  }>();

  const [loginUser, { isError, isLoading: isLoadingLogin, data, error }] =
    useAuthControllerLoginMutation();

  const [resetPasswordMutation, { isLoading: isLoadingForgotPassword }] =
    useAuthControllerSendResetForgottenPasswordCodeMutation();

  const [verifyOtp, { isLoading: isLoadingOtp }] =
    useAuthControllerVerifyOtpMutation();

  const [resendOtp, { isLoading: isLoadingResendOtp }] =
    useAuthControllerResendOtpMutation();

  const [getUser, { isLoading: isLoadingGetUser }] =
    useLazyAuthControllerGetLoggedInUserQuery();
  const [logout] = useLazyAuthControllerLogoutQuery();

  const [signIn, setSignIn] = useState(true);

  const handleLogin = async (values: LoginSchemaType) => {
    const slicedPhoneNumber = values.phoneNumber.startsWith("0")
      ? values.phoneNumber.slice(1)
      : values.phoneNumber;
    const phoneNumber = `+233${slicedPhoneNumber}`;
    console.log("🚀 ~ handleLogin ~ phoneNumber:", phoneNumber);
    try {
      const res = await loginUser({
        loginRequestDto: {
          password: values.password,
          username: phoneNumber,
        },
      }).unwrap();

      console.log("res", res);

      router.push(`/confirm-otp?phoneNumber=${values.phoneNumber}`);
    } catch (e) {
      console.log("🚀 ~ handleLogin ~ e:", e);
      //   showError((e as { data: LoginResponseDto }).data.error);
    }
  };

  async function handleConfirmOtp(code: string) {
    try {
      const res = await verifyOtp({
        verifyOtpRequestDto: {
          otp: code,
          phone: `+233${params.phoneNumber}`,
        },
      });

      dispatch(
        authActions.setTokens({
          accessToken: (res as { data: VerifyOtpResponseDto }).data.accessToken,
          refreshToken: (res as { data: VerifyOtpResponseDto }).data
            .refreshToken,
        })
      );

      const user = await getUser().unwrap();
      dispatch(currentUserActions.updateUser(user));

      router.push("/(tabs)");

      // showInfo("Success");
    } catch (e) {
      console.log("🚀 ~ handleConfirmOtp ~ e:", e);
      // showError((e as { data: ResendOtpResponseDto }).data.error);
    }
  }

  async function handleResendOtp() {
    try {
      const res = await resendOtp({
        resendOtpRequestDto: {
          phone: `+233${params.phoneNumber}`,
        },
      });
      console.log("res", res);
      // showInfo("OTP sent successfully.");
    } catch (e) {
      console.log("🚀 ~ handleResendOtp ~ e:", e);
      // showInfo("Failed to resend OTP. Please try again.");
    }
  }

  const handleForgotPassword = async (phoneNumber: string) => {
    try {
      const res = await resetPasswordMutation({
        sendResetForgottenPasswordCodeRequestDto: {
          phone: `+233${phoneNumber}`,
          redirectUrl: "https://www.google.com",
        },
      }).unwrap();
      console.log("res", res);
      //   showInfo("Reset code sent successfully", {});
    } catch (e) {
      console.log(e);
      //   showError("An error occurred. Please try again.");
    }
  };

  async function logOut() {
    try {
      await logout().unwrap();
      dispatch(currentUserActions.logOutCurrentUser());
      dispatch(authActions.clearTokens());

      // await AsyncStorage.clear();

      // navigationHelpers.resetTo(Screens.Auth)();
    } catch (e) {
      console.log(e);
      // showError("Error logging out");
    }
  }

  return {
    signIn,
    handleLogin,
    handleForgotPassword,
    isLoading:
      isLoadingOtp ||
      isLoadingResendOtp ||
      isLoadingForgotPassword ||
      isLoadingLogin,
    handleConfirmOtp,
    handleResendOtp,
    logOut,
    phoneNumber: params.phoneNumber,
  };
}
