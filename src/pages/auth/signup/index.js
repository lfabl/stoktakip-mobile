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
import {
    signUp
} from "../../../server";
import md5 from "md5";
import Toast from "react-native-simple-toast";

const Signup = () => {
    const navigation = useNavigation();
    const [nCoreTokens] = useCoreTokens();

    const [companyCode, setCompanyCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");

    const {
        spaces
    } = nCoreTokens;

    const signUpUser = async () => {
        setLoading(true);
        const signUpResult = await signUp({
            companyCode: companyCode,
            password: md5(password),
            userName: userName,
            fullName: fullName,
            mail: mail
        });
        if (signUpResult.code === 200) {
            navigation.navigate("Login");
        }   
        Toast.show(signUpResult.message, Toast.LONG);
        setLoading(false);
    };

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
                onPress={() => {
                    signUpUser();
                }}
                title="Kayıt Ol"
                wrap="no-wrap"
                loading={loading}
            />
        </View>
    </KeyboardAvoidingView >;
};

export default Signup;
