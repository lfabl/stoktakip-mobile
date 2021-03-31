import React from "react";
import {
    View
} from "react-native";
import {
    styles
} from "./styles";
import {
    useCoreTheme
} from "../../../core/context";
import {
    Header
} from "../../../core/components";

const Home = ({
    navigation
}) => {
    const [coreTheme] = useCoreTheme();
    const {
        colors
    } = coreTheme;

    return <View style={styles.container}>
        <Header
            onPressDrawer={() => {
                navigation.openDrawer();
            }}
            title={"Stok Takip"}
            headerType={"page"}
        />
    </View>
};


export default Home;