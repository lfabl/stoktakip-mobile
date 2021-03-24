import React, {
    useState
} from "react";
import {
    TouchableOpacity,
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

const Login = () => {
    const navigation = useNavigation();
    const [nCoreTheme] = useCoreTheme();
    const [nCoreTokens] = useCoreTokens();

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

    return <View
        style={styles_main.container}
    >
        <View
            style={styles_main.headerContainer}
        >
            <TouchableOpacity
                onPress={() => {}}
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
            <Button
                onPress={() => { }}
                title="Kaydet"
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
    </View >
};

export default Login;
