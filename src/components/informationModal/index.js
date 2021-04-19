import React from "react";
import {
    TouchableOpacity,
    View,
} from "react-native";
import Modal from "react-native-modal";
import {
    Text
} from "../../core/components";
import {
    useCoreTheme,
    useCoreTokens,
} from "../../core/context";
import {
    styles_main
} from "./stylesheet";

const InformationModal = ({
    onPressSubmit,
    submitTitle,
    submitColor,
    canelTitle,
    setVisible,
    visible,
    content,
    title,
}) => {
    const [nCoreTheme] = useCoreTheme();
    const [nCoreTokens] = useCoreTokens();

    const {
        colors
    } = nCoreTheme;
    const {
        spaces,
        radiuses
    } = nCoreTokens;

    return <Modal
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
    >
        <View
            style={[
                styles_main.container,
                {
                    padding: spaces.container,
                    borderRadius: radiuses.modal,
                    backgroundColor: colors.constrastBody
                }
            ]}
        >
            <Text
                type={"header5"}
                style={{
                    marginBottom: spaces.container / 2
                }}
            >
                {title}
            </Text>

            <Text
                type={"header8"}
            >
                {content}
            </Text>

            <View
                style={styles_main.bottomContainer}
            >
                <TouchableOpacity
                    onPress={() => setVisible(false)}
                >
                    <Text
                        type={"header8"}
                        style={[
                            styles_main.bottomHorizontal,
                            {
                                paddingHorizontal: spaces.container / 2
                            }
                        ]}
                    >
                        {canelTitle}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onPressSubmit()}
                >
                    <Text
                        type={"header8"}
                        style={[
                            styles_main.bottomHorizontal,
                            {
                                paddingHorizontal: spaces.container / 2,
                                color: submitColor,
                            }
                        ]}
                    >
                        {submitTitle}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
};

export default InformationModal;