import React from "react";
import {
    TextInput,
    View
} from "react-native";
import {
    useCoreTheme
} from "../../context";
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
    const [nCoreTheme] = useCoreTheme();
    const {
        colors
    } = nCoreTheme;

    return <View
        style={[
            styles_main.container,
            {
                borderColor: colors.hideText
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
            onChangeText={(val) => onChangeText(val)}
            placeholder={placeholder ? placeholder : "Arama metnini giriniz."}
        />
    </View>;
};

export default Search;