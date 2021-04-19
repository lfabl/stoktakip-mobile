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
} from "../../core/context";
import {
    Icon,
    Text
} from "../../core/components";

const Header = ({
    onPressDrawer,
    onPressPlus,
    onPressEdit,
    onPressBack,
    headerType,
    content,
    style,
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
        style={[
            styles_main.container,
            {
                padding: spaces.container,
                backgroundColor: headerType === "page" ? colors.seperator : "rgba(0,0,0,0)"
            },
            style
        ]}
    >
        <TouchableOpacity
            onPress={() => {
                if (onPressBack) onPressBack()
                else if (onPressDrawer) onPressDrawer()
            }}
        >
            <View
                style={styles_main.subContainer}
            >
                <Icon
                    family="FontAwesome5"
                    name={onPressDrawer ? "align-left" : "chevron-left"}
                    color={colors.body}
                    size={24}
                />
            </View>
        </TouchableOpacity>

        <View
            style={styles_main.detailContainer}
        >
            <Text
                type="header10"
            >
                {title}
            </Text>
            {
                content ? <Text
                    type="header8"
                >
                    {content}
                </Text> : null
            }
        </View>

        <TouchableOpacity
            onPress={() => {
                if (onPressPlus) onPressPlus()
                else if (onPressEdit) onPressEdit()
            }}
            style={styles_main.subContainer}
        >
            {
                onPressPlus || onPressEdit ? <View
                    style={styles_main.subContainer}
                >
                    <Icon
                        family="FontAwesome5"
                        name={onPressPlus ? "plus" : "edit"}
                        color={colors.body}
                        size={24}
                    />
                </View> : null
            }
        </TouchableOpacity>
    </View >
};

export default Header;