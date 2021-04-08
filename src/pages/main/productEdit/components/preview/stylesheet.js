import {
    StyleSheet
} from "react-native";

export const styles_main = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: 200
    }
});

export const styles_item = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        width: 45,
    },
    descriptionContainer: {
        width: "100%",
        flexDirection: "column"
    },
    contentText: {
        fontSize: 14
    }
});