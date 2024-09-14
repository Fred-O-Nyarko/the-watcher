import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Input,
  InputGroup,
  ScrollView,
  Text,
  useColorModeValue,
  useTheme,
} from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import useAppTheme from "../../../_shared/theme/useAppTheme";
import { useAuth } from "../hooks/useAuth";
import {
  ActivityIndicator,
  ErrorText,
  FormTextInput,
  Label,
  PrimaryButton,
  Screens,
  useNavigationHelpers,
} from "../../../_shared";

import { useAuthForm } from "../hooks/useAuthForm";

// const {width: imageWidth, height: imageHeight} =
//   RNImage.resolveAssetSource(Logo);

const Auth: React.FC = () => {
  const { colors } = useTheme();
  const appTheme = useAppTheme();

  const { goBack, signIn, handleLogin, isLoading } = useAuth();
  const navigation = useNavigationHelpers();

  const {
    password,
    phoneNumber,
    isSubmitting,
    handleChange,
    handleBlur,
    getError,
    handleSubmit,
  } = useAuthForm({
    onSubmit: handleLogin,
    signIn,
  });

  return (
    <Flex flex="1" safeArea>
      <ScrollView flex="1" px="8" py="4">
        <TouchableOpacity onPress={goBack}>
          {/* <BackIcon color={appTheme.icons.default} /> */}
        </TouchableOpacity>
        <Image
          alt="appLogo"
          w="32"
          h="32"
          mb="-8"
          ml="-8"
          testID="appLogo"
          // source={Logo}
          // style={{aspectRatio: aspectRatio(imageWidth, imageHeight)}}
          resizeMode="contain"
        />

        <Text
          mt="2"
          mb="6"
          fontSize="20"
          fontWeight="700"
          alignSelf="center"
          color={appTheme.text.bold}
        >
          Log in to your account
        </Text>

        <Box mb={4}>
          <Box flexGrow="1">
            <Label renderIf mb={2}>
              Phone number
            </Label>
            <InputGroup flexDir="row" alignItems="center">
              <Input
                placeholder="E.g 241234567"
                placeholderTextColor={appTheme.text.placeholder}
                value={phoneNumber}
                variant="rounded"
                leftElement={
                  <Center flexDir="row">
                    <Text mx={2}>+233</Text>
                    <Divider
                      h="7"
                      mx="2"
                      color="red.800"
                      orientation="vertical"
                    />
                  </Center>
                }
                onChangeText={handleChange("phoneNumber")}
                keyboardType="phone-pad"
                allowFontScaling={false}
                testID="phoneInput"
              />
            </InputGroup>
            <ErrorText renderIf={!!getError("phoneNumber")}>
              {getError("phoneNumber")}
            </ErrorText>
            {/* <HelperText renderIf>
          We’ll call or text you to confirm your number.
        </HelperText> */}
          </Box>

          <FormTextInput
            label={"Password"}
            secureTextEntry
            value={password}
            type="password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            // helperText={
            //   'Must include a symbol or number and have at least 8 characters.'
            // }
            error={getError("password")}
          />
        </Box>

        <PrimaryButton
          mb="6"
          flexDir="row"
          bgColor="transparent"
          borderWidth="1"
          borderColor={appTheme.text.primary}
          onPress={handleSubmit as any}
        >
          <ActivityIndicator renderIf={isLoading} color={colors.primary[500]} />
          <PrimaryButton.Text color={appTheme.text.primary}>
            Login
          </PrimaryButton.Text>
        </PrimaryButton>

        <TouchableOpacity
          onPress={() => navigation.push(Screens.ForgotPassword)()}
        >
          <Text textDecorationLine="underline" fontWeight="bold">
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Flex>
  );
};

export default Auth;
