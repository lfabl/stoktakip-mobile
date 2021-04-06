import {
    StyleSheet
} from "react-native";

export const styles_main = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 90,
        height: 90
    },
    descriptionContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    descriptionItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});