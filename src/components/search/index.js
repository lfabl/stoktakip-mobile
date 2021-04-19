import React from "react";
import {
    TextInput,
    View
} from "react-native";
import {
    useCoreTokens,
    useCoreTheme,
} from "../../core/context";
import {
    styles_main
} from "./stylesheet";

const Search = ({
    containerStyle,
    onChangeText,
    placeholder,
    inputStyle,
    value
}) => {
    const [nCoreThemes] = useCoreTheme();
    const [nCoreTokens] = useCoreTokens();

    const {
        colors
    } = nCoreThemes;
    const {
        spaces 
    } = nCoreTokens;

    return <View
        style={[
            styles_main.container,
            {
                borderColor: colors.seperator,
                marginBottom: spaces.container,
            },
            containerStyle
        ]}
    >
        <TextInput
            style={[
                styles_main.inputStyle,
                inputStyle
            ]}
            value={value}
            placeholderTextColor={colors.sperator}
            onChangeText={(val) => onChangeText(val)}
            placeholder={placeholder ? placeholder : "Arama metnini giriniz."}
        />
    </View>;
};

export default Search;