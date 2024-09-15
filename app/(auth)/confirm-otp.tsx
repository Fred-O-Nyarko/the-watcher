import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import OtpInput from "react-native-otp-textinput";
import { useAuth } from "./hooks/useAuth";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Spinner } from "@/components/ui/spinner";
import { Colors } from "@/constants/Colors";
import Space from "@/components/custom/space";

const ConfirmOtp: React.FC = () => {
  const otpInputRef = useRef(null);

  const clearText = () => {
    //   @ts-ignore
    otpInputRef?.current.clear();
  };

  const [code, setCode] = useState("");

  const { phoneNumber, handleResendOtp, handleConfirmOtp, isLoading } =
    useAuth();

  return (
    <VStack className="w-full">
      <VStack>
        <Heading size="3xl">Confirm OTP</Heading>
        <Heading>
          Enter the 6-digit code sent to{" "}
          <Text className="font-bold"> {phoneNumber}:</Text>
        </Heading>
      </VStack>
      <Space height={10} />
      <OtpInput
        ref={otpInputRef}
        handleTextChange={(code: string) => {
          setCode(code);
        }}
        inputCount={6}
        keyboardType="phone-pad"

        // autofillFromClipboard={false}
        // inputStyles={inputStyles}
        // textInputStyle={inputStyles}
      />
      <Space height={36} />

      <TouchableOpacity
        onPress={() => {
          handleResendOtp();
          clearText();
        }}
      >
        <Text>
          Didn’t get a text?{" "}
          <Text underline className="font-bold">
            Try again
          </Text>
        </Text>
      </TouchableOpacity>

      <Button
        className="mt-2"
        onPress={() => handleConfirmOtp(code)}
        disabled={code.length !== 6 || isLoading}
      >
        <Spinner
          size="small"
          color={Colors.light.background}
          animating={isLoading}
        />
        <ButtonText className="font-medium ml-2">Continue</ButtonText>
      </Button>
    </VStack>
  );
};
export default ConfirmOtp;
