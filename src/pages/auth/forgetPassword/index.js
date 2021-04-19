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
    useNavigation
} from "@react-navigation/native";
import {
    TextInput,
    Button,
} from "../../../core/components";
import {
    Header
} from "../../../components";
import {
    useCoreTokens
} from "../../../core/context";

const ForgetPassword = () => {
    const navigation = useNavigation();
    const [nCoreTokens] = useCoreTokens();

    const [mail, setMail] = useState("");

    const {
        spaces
    } = nCoreTokens;

    return <View
        style={styles_main.container}
    >
        <Header
            onPressBack={() => navigation.goBack()}
            title="Şifremi Unuttum"
        />

        <View style={[
            styles_main.contentContainer,
            {
                padding: spaces.container
            }
        ]}>
            <TextInput
                title="E-Posta"
                value={mail}
                onChangeText={(val) => setMail(val)}
                cleanable={true}
                style={{
                    marginBottom: spaces.content
                }}
            />

            <Button
                onPress={() => { }}
                title="Gönder"
                wrap="no-wrap"
            />
        </View>
    </View >
};

export default ForgetPassword;
