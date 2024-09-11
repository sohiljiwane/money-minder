import React from "react";
import { IProps } from "../../mm-app";
import { SafeAreaView } from "react-native";

const MainContainer: React.FC<IProps> = ({children}) => {
    return <>
        <SafeAreaView className="flex-1 pt-[20px] bg-[#201520]">
            {children}
        </SafeAreaView>
    </>
}

export default MainContainer;