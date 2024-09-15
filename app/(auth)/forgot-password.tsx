import { Toast, ToastTitle, useToast } from "@/components/ui/toast";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { Box } from "@/components/ui/box";
import { LinkText } from "@/components/ui/link";
import {
  forgotPasswordSchemaType,
  forgotPasswordSchema,
} from "./services/schema";
import { useAuth } from "./hooks/useAuth";

const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<forgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { handleForgotPassword, isLoading } = useAuth();

  const toast = useToast();

  const onSubmit = async (data: forgotPasswordSchemaType) => {
    try {
      await handleForgotPassword(data.phoneNumber);
      toast.show({
        placement: "bottom",
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="solid" action="success">
              <ToastTitle>Link Sent Successfully</ToastTitle>
            </Toast>
          );
        },
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <VStack className="max-w-[440px] w-full" space="md">
      <VStack className="md:items-center" space="md">
        <VStack>
          <Heading className="md:text-center" size="3xl">
            Forgot Password?
          </Heading>
          <Text className="text-sm">
            Enter phone number associated with your account.
          </Text>
        </VStack>
      </VStack>

      <VStack space="xl" className="w-full ">
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
                  await forgotPasswordSchema.parseAsync({ email: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  placeholder="Eg. 0559627288"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              {errors?.phoneNumber?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button className="w-full" onPress={handleSubmit(onSubmit)}>
          <ButtonText className="font-medium">Send Link</ButtonText>
        </Button>

        <Box className="flex flex-row w-full justify-center">
          <Link href="/login">
            <LinkText className="font-medium text-sm text-primary-700 group-hover/link:text-primary-600">
              Back to Login
            </LinkText>
          </Link>
        </Box>
      </VStack>
    </VStack>
  );
};

export default ForgotPassword;
