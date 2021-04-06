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
    useCoreTokens
} from "../../../core/context";
import {
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
    const [searchValue, setSearchValue] = useState("");
    const [_datas, _setDatas] = useState(PRODUCTS_DATAS);
    const [datas, setDatas] = useState([]);
    const [nCoreTokens] = useCoreTokens();

    const {
        spaces
    } = nCoreTokens;

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
                    onPress={() => { }}
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