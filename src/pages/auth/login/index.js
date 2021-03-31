import React, {
    useState
} from "react";
import {
    KeyboardAvoidingView,
    TouchableOpacity,
    Platform,
    Image,
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
    Icon,
    Text
} from "../../../core/components";
import {
    useCoreTokens,
    useCoreTheme
} from "../../../core/context";
import useGlobalState from "../../../context";

const Login = () => {
    const navigation = useNavigation();

    const [globalState, setGlobalState] = useGlobalState();
    const [nCoreTokens] = useCoreTokens();
    const [nCoreTheme] = useCoreTheme();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {
        colors
    } = nCoreTheme;
    const {
        spaces
    } = nCoreTokens;

    const goSignupPage = () => {
        navigation.navigate("Signup");
    };

    const goForgetPasswordPage = () => {
        navigation.navigate("ForgetPassword");
    };

    const signin = () => {
        setGlobalState({
            userData: {
                ...globalState.userData, 
                login: true,
                userName: "gorkemYildiz",
                fullName: "Gorkem Yildiz",
                profileImage: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
        });
    }

    return <KeyboardAvoidingView
        style={styles_main.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        <View
            style={styles_main.headerContainer}
        >
            <TouchableOpacity
                onPress={() => { }}
            >
                <Icon
                    family="FontAwesome5"
                    name="info-circle"
                    size={28}
                    color={colors.body}
                />
            </TouchableOpacity>
        </View>

        <View style={[
            styles_main.contentContainer,
            {
                padding: spaces.container
            }
        ]}>
            <Image
                style={[
                    styles_main.logo,
                    {
                        marginBottom: spaces.container * 2
                    }
                ]}
                source={require("../../../assets/appLogo.png")}
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
                title="Şifre"
                value={password}
                onChangeText={(val) => setPassword(val)}
                cleanable={true}
                style={{
                    marginBottom: spaces.container
                }}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={[
                    styles_main.createAccountInformationContainer,
                    {
                        padding: spaces.content * 2
                    }
                ]}
                onPress={() => goForgetPasswordPage()}
            >
                <Text
                    type="header8"
                >
                    Şifreni mi unuttun ?
                </Text>
            </TouchableOpacity>

            <Button
                onPress={() => signin()}
                title="Giriş Yap"
                wrap="no-wrap"
            />
        </View>

        <TouchableOpacity
            style={[
                styles_main.createAccountInformationContainer,
                {
                    padding: spaces.content
                }
            ]}
            onPress={() => goSignupPage()}
        >

            <Text
                type="header6"
            >
                Hala kayıt olmadın mı ?
            </Text>
            <Text
                type="header7"
                style={{
                    marginLeft: spaces.inline
                }}
            >
                Kayıt Ol
            </Text>
        </TouchableOpacity>
    </KeyboardAvoidingView >
};

export default Login;
