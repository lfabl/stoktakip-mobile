import React, {
    useEffect,
    useState,
} from "react";
import {
    ScrollView,
    View,
} from "react-native";
import {
    styles_main
} from "./styles";
import {
    Loading,
    Header,
} from "../../../components";
import {
    useCoreTokens,
    useCoreTheme,
} from "../../../core/context";
import Preview from "./components/preview";
import Edit from "./components/edit";
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

    useEffect(() => {
        navigation.setOptions({
            header: () => {
                return <Header
                    onPressBack={() => !editMode ? navigation.goBack() : setEditMode(false)}
                    onPressEdit={!editMode ? () => setEditMode(true) : undefined}
                    title={"Ürün Detay"}
                    content={!editMode ? "Görüntüle" : "Düzenle"}
                    headerType={"page"}
                />
            }
        })
    }, [editMode]);

    if (loading) return <Loading />
    return <View
        style={styles_main.container}
    >
        <ScrollView>
            {
                !editMode ? <Preview
                    createDate={createDate}
                    unitPrice={unitPrice}
                    image={image}
                    title={title}
                    count={count}
                /> : <Edit
                    unitPrice={unitPrice}
                    title={title}
                    image={image}
                    count={count}
                />
            }
        </ScrollView>
    </View>
};


export default ProductEdit;