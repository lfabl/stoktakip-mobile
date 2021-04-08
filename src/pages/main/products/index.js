import React, {
    useEffect,
    useState
} from "react";
import {
    FlatList,
    View
} from "react-native";
import {
    styles_main
} from "./stylesheet";
import {
    useCoreTokens,
    useCoreTheme,
} from "../../../core/context";
import {
    InformationModal,
    ProductCard,
    Header,
    Search
} from "../../../core/components";
import {
    PRODUCTS_DATAS
} from "../../../exampleDatas";

const Products = ({
    navigation
}) => {
    const [nCoreTokens] = useCoreTokens();
    const [nCoreTheme] = useCoreTheme();

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [delteModalIndex, setDeleteModalIndex] = useState(0);
    const [_datas, _setDatas] = useState(PRODUCTS_DATAS);
    const [searchValue, setSearchValue] = useState("");
    const [datas, setDatas] = useState([]);

    const {
        spaces
    } = nCoreTokens;
    const {
        colors
    } = nCoreTheme;

    useEffect(() => {
        if (searchValue) {
            const searchValueLowerCase = searchValue.toLowerCase();
            const filteredDatas = _datas.filter((item) => {
                const title = item.title.toLowerCase();
                const unitPrice = item.unitPrice.toString().toLowerCase();
                const count = item.count.toString().toLowerCase();
                const potentialGain = (item.count * item.unitPrice).toString().toLowerCase();

                return title.indexOf(searchValueLowerCase) !== -1 ||
                    unitPrice.indexOf(searchValueLowerCase) !== -1 ||
                    count.indexOf(searchValueLowerCase) !== -1 ||
                    potentialGain.indexOf(searchValueLowerCase) !== -1
            });
            setDatas(filteredDatas);
        }
        else {
            setDatas(PRODUCTS_DATAS)
        }
    }, [searchValue])

    return <View style={styles_main.container}>
        <InformationModal
            content={`Onaylamanız halinde "${_datas[delteModalIndex].title}" adlı ürün ve beraberinde tüm stoğu silinecktir. Emin misiniz ?`}
            setVisible={() => setDeleteModalVisible(false)}
            visible={deleteModalVisible}
            submitColor={colors.accent}
            canelTitle={"Vazgeç"}
            title={"Ürünü Sil"}
            submitTitle={"Sil"}
            onPressSubmit={() => {
                console.warn("geldi");
            }}
        />

        <Header
            onPressDrawer={() => {
                navigation.openDrawer();
            }}
            onPressPlus={() => {

            }}
            title={"Ürünler"}
            headerType={"page"}
        />

        <View
            style={[
                styles_main.container,
                {
                    padding: spaces.container
                }
            ]}
        >
            <Search
                value={searchValue}
                onChangeText={(val) => setSearchValue(val)}
            />

            <FlatList
                data={datas}
                renderItem={({ item, index }) => <ProductCard
                    onPress={() => navigation.navigate("ProductEdit", {
                        id: item.id
                    })}
                    onLongPress={() => {
                        setDeleteModalVisible(true);
                        setDeleteModalIndex(index);
                    }}
                    unitPrice={item.unitPrice}
                    image={item.image}
                    count={item.count}
                    title={item.title}
                    key={item.id}
                />}
                showsVerticalScrollIndicator={false}
            />

        </View>
    </View>
};


export default Products;