import { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { useReduxDispatch } from "@/redux/hooks";
import { useRouter } from "expo-router";
import {
  useAuthControllerLoginMutation,
  useAuthControllerSendResetForgottenPasswordCodeMutation,
} from "@/redux/api/openapi.generated";
import { LoginSchemaType } from "../services/schema";
import { transformTelephoneNumber } from "@/utils";
import { updateCurrentUser } from "@/redux/slices/currentUser";

export function useAuth() {
  const router = useRouter();
  const dispatch = useReduxDispatch();
  const navigation = useNavigation();

  const [loginUser, { isError, isLoading, data, error }] =
    useAuthControllerLoginMutation();

  const [resetPasswordMutation, { isLoading: isLoadingForgotPassword }] =
    useAuthControllerSendResetForgottenPasswordCodeMutation();

  const [signIn, setSignIn] = useState(true);

  const handleLogin = async (values: LoginSchemaType) => {
    try {
      const res = await loginUser({
        loginRequestDto: {
          password: values.password,
          username: transformTelephoneNumber(values.phoneNumber) as string,
        },
      }).unwrap();

      router.push("/");
    } catch (e) {
      console.log("🚀 ~ handleLogin ~ e:", e);
      //   showError((e as { data: LoginResponseDto }).data.error);
    }
  };
  const handleForgotPassword = async (phoneNumber: string) => {
    console.log("phoneNumber", phoneNumber);
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

  return {
    signIn,
    // goBack: navigationHelpers.goBack,
    handleLogin,
    handleForgotPassword,
    isLoading: isLoading || isLoadingForgotPassword,
  };
}
