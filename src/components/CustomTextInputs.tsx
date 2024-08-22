import { InputProps } from "@/mm-app";
import React from "react";
import { Text, TextInput, View } from "react-native";

const CustomTextInput: React.FC<InputProps> = ({
  label,
  onChangeText,
  icon,
  isSecureText,
  keyboardType,
  placeholder,
}) => {
  return (
    <View className="flex justify-start w-full mb-4">
      {label && (
        <Text className="text-[#EFE3C8] mb-2 text-[13px]">{label}</Text>
      )}
      <View className="w-full bg-[#171017] border-[#EFE3C850] border-[1px] rounded-md h-[57px] p-1 flex justify-center items-center flex-row">
        {icon && (
          <View className="flex items-center justify-center h-[38px] w-[38px]">
            {icon}
          </View>
        )}
        <TextInput
          className="flex flex-1 bg-transparent text-lg text-[#EFE3C895] h-[50px] pl-2"
          onChangeText={onChangeText}
          secureTextEntry={isSecureText}
          keyboardType={keyboardType}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;
