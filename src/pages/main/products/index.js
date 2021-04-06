import React, {
    useState
} from "react";
import {
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
    Header,
    Search
} from "../../../core/components";

const Products = ({
    navigation
}) => {
    const [nCoreThems] = useCoreTheme();
    const [nCoreTokens] = useCoreTokens();
    const [searchValue, setSearchValue] = useState("");

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

            
        </View>
    </View>
};


export default Products;