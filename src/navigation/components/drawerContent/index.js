import React from "react";
import {
    TouchableOpacity,
    Image,
    View,
} from "react-native";
import {
    styles_main
} from "./stylesheet";
import {
    Text,
    Icon
} from "../../../core/components";
import {
    useCoreTheme
} from "../../../core/context";
import {
    pageNameDetector
} from "../../../helpers";
import useGlobalState from "../../../context";

const DrawerContent = (props) => {
    const [globalState] = useGlobalState();
    const [nCoreTheme] = useCoreTheme();

    const {
        navigation,
        state,
    } = props;
    const {
        profileImage
    } = globalState.userData;
    const {
        colors
    } = nCoreTheme;

    return <View
        style={[
            styles_main.container,
            {
                backgroundColor: colors.pageBody
            }
        ]}
    >
        <View
            style={styles_main.profileContainer}
        >
            <TouchableOpacity
                style={styles_main.profileBarContainer}
            >
                <Image
                    source={{ uri: profileImage }}
                    style={styles_main.profileBarImage}
                />
                <View
                    style={styles_main.profileBarDescriptionContainer}
                >
                    <Text
                        type={"header7"}
                        style={{
                            color: colors.body
                        }}
                        numberOfLines={1}
                    >
                        Görkem Yıldız
                    </Text>
                    <Text
                        type={"header8"}
                        style={{
                            color: colors.body,
                            flexWrap: 'wrap',
                        }}
                        numberOfLines={1}
                    >
                        Ticaret Sorumlusu dsaddddd dDASDSAS
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles_main.signOutContainer}
            >
                <Icon
                    family={"FontAwesome5"}
                    name={"sign-out-alt"}
                    size={22}
                    color={colors.body}
                />
            </TouchableOpacity>
        </View>

        {
            state.routeNames && state.routeNames.map((item, index) => {
                return <TouchableOpacity
                    style={[
                        styles_main.routeItemContainer,
                        {
                            backgroundColor: index === state.index ? colors.primary : "rgba(0,0,0,0)",
                        }
                    ]}
                    key={index}
                    onPress={() => navigation.navigate(item)}
                >
                    <Text
                        type={"header8"}
                        style={{
                            color: index === state.index ? colors.buttonText : colors.body
                        }}
                    >
                        {
                            pageNameDetector(item)
                        }
                    </Text>
                </TouchableOpacity>
            })
        }
    </View >
};

export default DrawerContent
