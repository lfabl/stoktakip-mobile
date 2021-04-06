import React from "react";
import {
    TouchableOpacity,
    Image,
    View,
    Text,
} from "react-native";
import {
    styles_main
} from "./stylesheet";
import {
    useCoreTheme,
    useCoreTokens
} from "../../context";

const ProductCard = ({
    unitPrice,
    onPress,
    image,
    title,
    count,
    style
}) => {
    const [nCoreTheme] = useCoreTheme();
    const [nCoreTokens] = useCoreTokens();

    const {
        colors
    } = nCoreTheme;
    const {
        radiuses,
        spaces,
    } = nCoreTokens;

    return <TouchableOpacity
        style={[
            styles_main.container,
            {
                backgroundColor: colors.seperator,
                marginBottom: spaces.container,
                borderRadius: radiuses.card,
                padding: spaces.content,
            },
            style
        ]}
        activeOpacity={0.8}
        onPress={() => onPress()}
    >
        <Image
            source={{ uri: image }}
            style={[
                styles_main.image,
                {
                    borderRadius: radiuses.image
                }
            ]}
        />
    </TouchableOpacity>
};

export default ProductCard;