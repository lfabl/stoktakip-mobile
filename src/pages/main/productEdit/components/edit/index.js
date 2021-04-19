import React, {
    useState
} from "react";
import {
    Image,
    View,
} from "react-native";
import {
    TextInput
} from "../../../../../core/components";
import {
    ImagePicker
} from "../../../../../components";
import {
    useCoreTokens,
} from "../../../../../core/context";
import {
    styles_main
} from "./stylesheet";

const Edit = ({
    unitPrice,
    title,
    image,
    count
}) => {
    const [nCoreTokens] = useCoreTokens();

    const [_unitPrice, _setUnitPrice] = useState(unitPrice);
    const [_title, _setTitle] = useState(title);
    const [_count, _setCount] = useState(count);
    const [_image, _setImage] = useState(image);

    const {
        spaces
    } = nCoreTokens;

    return <View
        style={{
            padding: spaces.container
        }}
    >
        <Image
            source={{
                uri: typeof _image === "object" ? _image.path : _image
            }}
            style={[
                styles_main.image,
                {
                    marginBottom: spaces.container
                }
            ]}
            resizeMethod={"resize"}
            resizeMode={"contain"}
        />

        <ImagePicker
            onChangeImage={(val) => _setImage(val)}
            style={styles_main.imagePicker}
        />

        <TextInput
            onChangeText={(val) => _setTitle(val)}
            title={"Ürün Adı"}
            cleanable={true}
            value={_title}
            style={{
                marginBottom: spaces.container
            }}
        />

        <TextInput
            onChangeText={(val) => _setUnitPrice(val)}
            title={"Birim Fiyat"}
            cleanable={true}
            value={_unitPrice}
            style={{
                marginBottom: spaces.container
            }}
        />

        <TextInput
            onChangeText={(val) => _setCount(val)}
            title={"Adet"}
            cleanable={true}
            value={_count}
            style={{
                marginBottom: spaces.container
            }}
        />
    </View>
};

export default Edit;