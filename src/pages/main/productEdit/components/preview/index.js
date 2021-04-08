import React from "react";
import {
    Image,
    View,
} from "react-native";
import {
    styles_main,
    styles_item
} from "./stylesheet";
import {
    useCoreTokens,
    useCoreTheme,
} from "../../../../../core/context";
import {
    numberDivideder
} from "../../../../../helpers";
import {
    Icon,
    Text,
} from "../../../../../core/components";

const Preview = ({
    createDate,
    unitPrice,
    image,
    title,
    count,
}) => {
    const [nCoreTokens] = useCoreTokens();
    const {
        spaces
    } = nCoreTokens;

    return <View
        style={styles_main.container}
    >
        <Image
            source={{ uri: image }}
            style={[
                styles_main.image,
                {
                    marginVertical: spaces.container
                }
            ]}
            resizeMethod={"resize"}
            resizeMode={"contain"}
        />

        <PreviewItem
            icon={"tag"}
            title={"Ürün Adı"}
            description={title}
        />
        <PreviewItem
            icon={"money-bill-wave"}
            title={"Birim Fiyat"}
            description={`${numberDivideder(unitPrice)} ₺`}
        />
        <PreviewItem
            icon={"cubes"}
            title={"Adet"}
            description={`${numberDivideder(count)}`}
        />
        <PreviewItem
            icon={"safe"}
            title={"Potansiyel Kazanç"}
            description={`${numberDivideder(count * unitPrice)} ₺`}
            fontFamily={"MaterialCommunityIcons"}
        />
        <PreviewItem
            icon={"calendar-day"}
            title={"Oluşturulma Tarihi"}
            description={`${count}`}
        />
    </View>
};

const PreviewItem = ({
    description,
    fontFamily,
    title,
    icon,
}) => {
    const [nCoreTheme] = useCoreTheme();
    const [nCoreTokens] = useCoreTokens();

    const {
        colors
    } = nCoreTheme;
    const {
        radiuses,
        spaces
    } = nCoreTokens;

    return <View
        style={[
            styles_item.container,
            {
                paddingHorizontal: spaces.container,
                paddingVertical: spaces.container / 2
            }
        ]}
    >
        <View
            style={[
                styles_item.iconContainer,
                {
                    borderRadius: radiuses.card,
                    backgroundColor: colors.primary
                }
            ]}
        >
            <Icon
                family={fontFamily ? fontFamily : "FontAwesome5"}
                name={icon}
                color={colors.constrastBody}
                size={18}
            />
        </View>

        <View
            style={[
                styles_item.descriptionContainer,
                {
                    paddingHorizontal: spaces.container / 1.4
                }
            ]}
        >
            <Text
                type={"header7"}
            >
                {title}
            </Text>

            <Text
                type={"header8"}
                style={styles_item.contentText}
            >
                {description}
            </Text>
        </View>
    </View>
};

export default Preview;
