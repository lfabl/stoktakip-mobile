import {
    StyleSheet,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");
const CONTAINER_WIDTH = width / 1.47;

export const styles_main = StyleSheet.create({
    container: {
        width: CONTAINER_WIDTH,
        height: height
    },
    profileContainer: {
        width: CONTAINER_WIDTH,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 10,
        marginBottom: 10
    },
    profileBarContainer: {
        flexDirection: "row"
    },
    profileBarDescriptionContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 5,
        flex: 0.85
    },
    profileBarImage: {
        width: 60,
        height: 60,
        borderRadius: 5
    },
    signOutContainer: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    routeItemContainer: {
        width: "90%",
        height: 45,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        paddingHorizontal: 20,
        justifyContent: "center",
        marginVertical: 5,
    }

});
