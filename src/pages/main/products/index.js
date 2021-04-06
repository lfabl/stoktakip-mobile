import React from "react";
import {
    View,
    ActivityIndicator
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

const Products = ({
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
            onPressPlus={() => {

            }}
            title={"Ürünler"}
            headerType={"page"}
        />
    </View>
};


export default Products;