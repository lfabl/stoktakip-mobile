import React, {
    useEffect,
    useState,
} from "react";
import {
    ScrollView,
    Image,
    View,
} from "react-native";
import {
    styles_main
} from "./styles";
import {
    Header
} from "../../../core/components";
import {
    useCoreTheme
} from "../../../core/context";
import { PRODUCTS_DATAS } from "../../../exampleDatas";

const ProductEdit = ({
    navigation,
    route
}) => {
    const [coreTheme] = useCoreTheme();
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [unitPrice, setUnitPrice] = useState(0);
    const [count, setCount] = useState(0);
    const [createDate, setCreateDate] = useState("");

    const {
        id
    } = route.params;
    const {
        colors
    } = coreTheme;

    useEffect(() => {
        if (id) {
            const detectedData = PRODUCTS_DATAS.filter((val) => val.id === id);
            if (detectedData.length !== 0) {
                const newData = detectedData[0]
                setTitle(newData.title);
                setCount(newData.count);
                setImage(newData.image);
                setUnitPrice(newData.unitPrice);
                setCreateDate(newData.createDate);
            }
        }
    }, [id])

    return <View
        style={styles_main.container}
    >
        <Header
            onPressBack={() => {

            }}
            onPressEdit={() => {

            }}
            title={"Ürün Detay"}
            content={"Görüntüle"}
            headerType={"page"}
        />

        <ScrollView>
            <Image
                source={image}
                style={{
                    width: "100%",
                    height: 200
                }}
            />
        </ScrollView>
    </View>
};


export default ProductEdit;