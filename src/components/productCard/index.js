import React from "react";
import {
    TouchableOpacity,
    Image,
    View,
} from "react-native";
import {
    styles_main
} from "./stylesheet";
import {
    useCoreTheme,
    useCoreTokens
} from "../../core/context";
import {
    Text
} from "../../core/components";
import {
    numberDivideder
} from "../../helpers";

const ProductCard = ({
    onLongPress,
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
        onLongPress={() => onLongPress()}
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

        <View
            style={[
                styles_main.descriptionContainer,
                {
                    marginLeft: spaces.container
                }
            ]}
        >
            <Text
                type={"header7"}
            >
                {title}
            </Text>

            <View
                style={styles_main.descriptionItem}
            >
                <Text
                    type={"light"}
                >
                    Birim Fiyat:
                </Text>

                <Text
                    type={"header11"}
                    style={{
                        color: colors.success
                    }}
                >
                    {numberDivideder(unitPrice)} ₺
                </Text>
            </View>

            <View
                style={styles_main.descriptionItem}
            >
                <Text
                    type={"light"}
                >
                    Adet:
                </Text>

                <Text
                    type={"header11"}
                >
                    x {numberDivideder(count)}
                </Text>
            </View>

            <View
                style={styles_main.descriptionItem}
            >
                <Text
                    type={"light"}
                >
                    Potansiyel Kazanç:
                </Text>

                <Text
                    type={"header11"}
                    style={{
                        color: colors.success
                    }}
                >
                    {numberDivideder(count * unitPrice)} ₺
                </Text>
            </View>
        </View>
    </TouchableOpacity>
};

export default ProductCard;