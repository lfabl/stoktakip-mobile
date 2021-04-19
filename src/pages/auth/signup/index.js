import React, {
    useState
} from "react";
import {
    KeyboardAvoidingView,
    Platform,
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

const Signup = () => {
    const navigation = useNavigation();
    const [nCoreTokens] = useCoreTokens();

    const [companyCode, setCompanyCode] = useState("");
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");

    const {
        spaces
    } = nCoreTokens;

    return <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles_main.container}
    >
        <Header
            onPressBack={() => navigation.goBack()}
            title="Kayıt Ol"
            style={{
                zIndex: 50
            }}
        />

        <View style={[
            styles_main.contentContainer,
            {
                padding: spaces.container
            }
        ]}>
            <TextInput
                title="İsim Soyisim"
                value={fullName}
                onChangeText={(val) => setFullName(val)}
                cleanable={true}
                style={{
                    marginBottom: spaces.content
                }}
            />
            <TextInput
                title="Firma Kodu"
                value={companyCode}
                onChangeText={(val) => setCompanyCode(val)}
                cleanable={true}
                style={{
                    marginBottom: spaces.content
                }}
            />
            <TextInput
                title="Kullanıcı Adı"
                value={userName}
                onChangeText={(val) => setUserName(val)}
                cleanable={true}
                style={{
                    marginBottom: spaces.content
                }}
            />
            <TextInput
                title="E-Mail"
                value={mail}
                onChangeText={(val) => setMail(val)}
                cleanable={true}
                style={{
                    marginBottom: spaces.content
                }}
            />
            <TextInput
                title="Şifre"
                value={password}
                onChangeText={(val) => setPassword(val)}
                cleanable={true}
                style={{
                    marginBottom: spaces.container
                }}
                secureTextEntry={true}
            />

            <Button
                onPress={() => { }}
                title="Kayıt Ol"
                wrap="no-wrap"
            />
        </View>
    </KeyboardAvoidingView >;
};

export default Signup;
