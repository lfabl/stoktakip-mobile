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

const ProductEdit = () => {
    const [coreTheme] = useCoreTheme();
    const {
        colors
    } = coreTheme;

    return <View style={styles.container}>
      
    </View>
};


export default ProductEdit;