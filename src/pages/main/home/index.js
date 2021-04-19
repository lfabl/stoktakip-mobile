import React, {
    useEffect
} from "react";
import {
    View
} from "react-native";
import {
    styles
} from "./styles";
import {
    useCoreTheme
} from "../../../core/context";
import {
    Header
} from "../../../components";

const Home = ({
    navigation
}) => {
    const [coreTheme] = useCoreTheme();
    const {
        colors
    } = coreTheme;

    useEffect(() => {
        navigation.setOptions({
            header: () => <Header
                onPressDrawer={() => {
                    navigation.openDrawer();
                }}
                title={"Stok Takip"}
                headerType={"page"}
            />
        });
    }, []);

    return <View style={styles.container}>

    </View>
};


export default Home;