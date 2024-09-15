import React, { useState } from "react";
import { Toast, ToastTitle, useToast } from "@/components/ui/toast";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { LinkText } from "@/components/ui/link";

import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";

import { AlertCircleIcon, EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Link, useRouter } from "expo-router";
import { LoginSchemaType, loginSchema } from "./services/schema";
import { Text } from "@/components/ui/text";
import { useAuth } from "./hooks/useAuth";
import { Spinner } from "@/components/ui/spinner";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, isLoading } = useAuth();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const toast = useToast();

  const onSubmit = async (data: LoginSchemaType) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    try {
      await handleLogin(data);
      toast.show({
        placement: "bottom",

        render: ({ id }) => {
          return (
            <Toast
              className="!w-4/5"
              nativeID={id}
              variant="solid"
              action="success"
            >
              <ToastTitle>Logged in successfully!</ToastTitle>
            </Toast>
          );
        },
      });
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
  };
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };
  const router = useRouter();
  return (
    <VStack className="max-w-[440px] w-full" space="md">
      <VStack className="md:items-center" space="md">
        <Heading className="md:text-center" size="3xl">
          Log in
        </Heading>
      </VStack>
      <VStack className="w-full">
        <VStack space="xl" className="w-full">
          <FormControl isInvalid={!!errors?.phoneNumber} className="w-full">
            <FormControlLabel>
              <FormControlLabelText>Phone Number</FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="phoneNumber"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await loginSchema.parseAsync({ phoneNumber: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputSlot
                    onPress={handleState}
                    style={{
                      paddingLeft: 12,
                    }}
                  >
                    <Text>+233</Text>
                  </InputSlot>
                  <InputField
                    placeholder="Eg. 0559627288"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                    keyboardType="phone-pad"
                    allowFontScaling={false}
                  />
                </Input>
              )}
            />

            <FormControlError>
              <FormControlErrorText>
                <FormControlErrorIcon as={AlertCircleIcon} />
                {errors?.phoneNumber?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          {/* Label Message */}
          <FormControl isInvalid={!!errors.password} className="w-full">
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="password"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await loginSchema.parseAsync({ password: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                  <InputSlot onPress={handleState} className="pr-3">
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </InputSlot>
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                {errors?.password?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <HStack className="w-full justify-between ">
            <Link href="/(auth)/forgot-password">
              <LinkText className="font-medium text-sm text-primary-700 group-hover/link:text-primary-600">
                Forgot Password?
              </LinkText>
            </Link>
          </HStack>
        </VStack>
        <VStack className="w-full my-7 " space="lg">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <Spinner size="small" color="text-gray-500" animating={isLoading} />
            <ButtonText className="font-medium">Log in</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Login;
