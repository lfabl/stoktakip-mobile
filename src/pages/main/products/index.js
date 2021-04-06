import React, {
    useState
} from "react";
import {
    FlatList,
    View,
} from "react-native";
import {
    styles_main
} from "./stylesheet";
import {
    useCoreTokens,
    useCoreTheme,
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
    const [datas, setDatas] = useState(PRODUCTS_DATAS);
    const [nCoreTokens] = useCoreTokens();
    const [nCoreThems] = useCoreTheme();

    const {
        colors
    } = nCoreThems;
    const {
        spaces
    } = nCoreTokens;


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
            />

        </View>
    </View>
};


export default Products;