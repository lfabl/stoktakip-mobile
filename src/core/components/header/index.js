import React from "react";
import {
    TouchableOpacity,
    View,
} from "react-native";
import {
    styles_main
} from "./stylesheet";
import {
    useCoreTokens,
    useCoreTheme
} from "../../context";
import Icon from "../icon";
import Text from "../text";

const Header = ({
    onPressBack,
    title
}) => {
    const [nCoreTheme] = useCoreTheme();
    const [nCoreTokens] = useCoreTokens();

    const {
        colors
    } = nCoreTheme;
    const {
        spaces
    } = nCoreTokens;

    return <View
        style={[styles_main.container, {
            padding: spaces.container
        }]}
    >
        <TouchableOpacity
            onPress={() => onPressBack()}
        >
            <View
                style={styles_main.subContainer}
            >
                <Icon
                    family="FontAwesome5"
                    name="chevron-left"
                    color={colors.body}
                    size={24}
                />
            </View>
        </TouchableOpacity>

        <Text
            type="header10"
        >
            {title}
        </Text>

        <View
            style={styles_main.subContainer}
        />
    </View>
};

export default Header;