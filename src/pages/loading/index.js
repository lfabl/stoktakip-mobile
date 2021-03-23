import React, { useEffect } from "react";
import {
    View,
    ActivityIndicator
} from "react-native";
import {
    styles
} from "./styles";
import {
    useCoreTheme
} from "../../core/context";
import useGlobalState from "../../context";

const Loading = () => {
    const [globalState, setGlobalState] = useGlobalState();
    const [coreTheme] = useCoreTheme();
    const {
        colors
    } = coreTheme;

    useEffect(() => {
        setGlobalState({
            navigationState: {
                type: ""
            }
        });
    }, []);

    return <View style={styles.container}>
        <ActivityIndicator
            size={"large"}
            color={colors.primary}
        />
    </View>
};


export default Loading;