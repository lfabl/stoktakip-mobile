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
    Header,
    Loading
} from "../../../core/components";
import {
    useCoreTokens,
    useCoreTheme,
} from "../../../core/context";
import Preview from "./components/preview";
import { PRODUCTS_DATAS } from "../../../exampleDatas";

const ProductEdit = ({
    navigation,
    route
}) => {
    const [nCoreTheme] = useCoreTheme();
    const [nCoreTokens] = useCoreTokens();

    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);

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
    } = nCoreTheme;
    const {
        spaces
    } = nCoreTokens;

    useEffect(() => {
        if (id) {
            const detectedData = PRODUCTS_DATAS.filter((val) => val.id === id);
            if (detectedData.length !== 0) {
                const newData = detectedData[0];
                setTitle(newData.title);
                setCount(newData.count);
                setImage(newData.image);
                setUnitPrice(newData.unitPrice);
                setCreateDate(newData.createDate);
            }
            setLoading(false);
        }
    }, [id])

    if (loading) return <Loading />
    return <View
        style={styles_main.container}
    >
        <Header
            onPressBack={() => !editMode ? navigation.goBack() : setEditMode(false)}
            onPressEdit={!editMode ? () => setEditMode(true) : undefined}
            title={"Ürün Detay"}
            content={!editMode ? "Görüntüle" : "Düzenle"}
            headerType={"page"}
        />

        <ScrollView>
            {
                !editMode ? <Preview
                    createDate={createDate}
                    unitPrice={unitPrice}
                    image={image}
                    title={title}
                    count={count}
                /> : null
            }
        </ScrollView>
    </View>
};


export default ProductEdit;