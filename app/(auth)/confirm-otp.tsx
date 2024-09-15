import React, { memo, useMemo, useRef, useState } from "react";
import { ActivityIndicator, TextStyle, TouchableOpacity } from "react-native";
// import OtpInputs from "react-native-otp-inputs";
import { useAuth } from "./hooks/useAuth";
import { Button } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const ConfirmOtp: React.FC = () => {
  const otpInputRef = useRef(null);
  const [code, setCode] = useState("");

  const { phoneNumber, handleResendOtp, handleConfirmOtp, isLoading } =
    useAuth();
  console.log("🚀 ~ phoneNumber:", phoneNumber);

  const inputStyles: TextStyle = useMemo(
    () => ({
      borderWidth: 1,
      borderRadius: 5,
      width: 45,
      height: 45,
      color: "text-primary",
      borderColor: "#A6A2A2",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 20,
      fontSize: 24,
    }),
    []
  );

  return (
    <VStack className="w-full">
      <VStack className="md:items-center" space="md">
        <Heading className="md:text-center" size="3xl">
          Confirm OTP
        </Heading>
        <Heading className="md:text-center" size="md">
          Enter the 6-digit code sent to{" "}
          <Text className="font-bold"> {phoneNumber}:</Text>
        </Heading>
      </VStack>

      {/* <OtpInputs
        ref={otpInputRef}
        handleChange={(code: string) => {
          setCode(code);
        }}
        numberOfInputs={6}
        keyboardType="phone-pad"
        autofillFromClipboard={false}
        inputStyles={inputStyles}
      /> */}
      {/* <Spacer height={36} /> */}

      <TouchableOpacity onPress={handleResendOtp}>
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
        <ActivityIndicator animating={isLoading} color="red" />
        <Text>Continue</Text>
      </Button>
    </VStack>
  );
};
export default ConfirmOtp;
