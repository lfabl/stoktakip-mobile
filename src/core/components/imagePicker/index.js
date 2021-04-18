import React from "react";
import {
    TouchableOpacity
} from "react-native";
import {
    useCoreTheme
} from "../../context";
import Icon from "../icon";
import Picker from 'react-native-image-crop-picker';

const ImagePicker = ({
    onChangeImage,
    style,
}) => {
    const [nCoreTheme] = useCoreTheme();

    const {
        colors
    } = nCoreTheme;

    const openImage = () => {
        Picker.openPicker({
            cropping: true
        }).then(image => {
            onChangeImage(image);
        });
    };

    return <TouchableOpacity
        style={[
            style
        ]}
        onPress={() => openImage()}
    >
        <Icon
            family={"MaterialCommunityIcons"}
            name={"camera-party-mode"}
            color={colors.body}
            size={22}
        />
    </TouchableOpacity>
};

export default ImagePicker;