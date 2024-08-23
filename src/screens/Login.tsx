import React, { useState } from "react";
import MainContainer from "../components/MainContainer";
import KeyboardAvoidWrapper from "../components/KeyboardAvoidWrapper";
import { Pressable, Text, View } from "react-native";
import CustomTextInput from "../components/CustomTextInputs";
import { AtSymbolIcon, LockClosedIcon } from "react-native-heroicons/solid";
import CustomButton from "../components/CustomButton";

const Login = () => {
    const [email, setEmail] = useState<String | null>(null);
    const [password, setPassword] = useState<String | null>(null);

    const onUsernameChange = (email: String) => {
        setEmail(email);
    };

    const onPasswordChange = (password: String) => {
        setPassword(password);
    };

    return (
        <MainContainer>
            <KeyboardAvoidWrapper>
                <View className="flex flex-row items-center justify-center gap-0 pt-[25%]">
                    <Text className="text-3xl text-[#EFE3c8] font-mono">Secure</Text>
                    <Text className="text-3xl text-[#EFE3c850] font-sans">App</Text>
                </View>
                <View className="flex flex-1 justify-center items-center pt-[20%] px-[25px]">
                    <Text className="text-[#EFE3c8] text-md">
                        Enter your account credentials
                    </Text>
                    <View className="ht-[50px] w-full"></View>
                    <CustomTextInput icon={<AtSymbolIcon color={"EFE3C850"} width={35} height={35} />} 
                      onChangeText={onUsernameChange}
                      label="Email"
                      keyboardType={"email-address"}
                      placeholder="Enter your email"
                    />
                    <CustomTextInput icon={<LockClosedIcon color={"#EFE3C8"} width={35} height={35} />}
                      onChangeText={onPasswordChange}
                      label="Password"
                      keyboardType="default"
                      placeholder="* * * * * * *"
                    />
                    <CustomButton buttonText="Register"
                      buttonClassNames="w-full rounded-md p-3 bg-transparent flex justify-center items-center mt-3 border-[1px] border-[#EFE3C8] border-solid"
                      textClassNames="text-[#EFE3C8] text-[18px] font-semibold"
                      onPress={() => console.log(password)}
                    />
                    <View className="flex w-full justify-end items-end pt-4">
                        <Pressable onPress={() => {}}>
                            <Text className="text-center text-gray-500 text-sm">
                                Forgot Password?
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidWrapper>
        </MainContainer>
    );
}

export default Login;