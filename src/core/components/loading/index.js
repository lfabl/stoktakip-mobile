import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from "react-native";
import {
    useCoreTheme
} from "../../context";

const Loading = () => {
    const [coreTheme] = useCoreTheme();
    const {
        colors
    } = coreTheme;

    return <View
        style={styles.container}
    >
        <ActivityIndicator
            size={"large"}
            color={colors.primary}
        />
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Loading