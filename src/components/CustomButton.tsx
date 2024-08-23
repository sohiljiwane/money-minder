import { CustomButtonProps } from "@/mm-app";
import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton: React.FC<CustomButtonProps> = ({onPress, buttonClassNames, textClassNames, buttonText}) => {
    return (
         <Pressable className="{`${buttonClassNames}`}" onPress={onPress}>
            <Text className="{`${textClassNames}`}">
                {buttonText}
            </Text>
         </Pressable>
    )
}

export default CustomButton;