import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IProps } from "../../mm-app";

const MainContainer: React.FC<IProps> = ({children}) => {
    return <>
        <SafeAreaView className="flex-1 pt-[20px] bg-[#201520]">
            {children}
        </SafeAreaView>
    </>
}

export default MainContainer;