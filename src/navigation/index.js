import * as React from 'react';
import {
    Dimensions
} from 'react-native';
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {
    createDrawerNavigator
} from '@react-navigation/drawer';
import DrawerContent from "./components/drawerContent";
import {
    useCoreTheme
} from "../core/context";
import useGlobalState from "../context";

import Loading from "../pages/loading";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import ForgetPassword from "../pages/auth/forgetPassword";
import Home from "../pages/main/home";
import Products from "../pages/main/products";
import ProductEdit from "../pages/main/productEdit";

const LoadingStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();

const { width } = Dimensions.get("window");
const DRAWER_CONTAINER_WIDTH = width / 1.47;

const LoadingNav = () => {
    return <LoadingStack.Navigator
        initialRouteName={"Loading"}
        screenOptions={{
            headerShown: false
        }}
    >
        <LoadingStack.Screen
            name={"Loading"}
            component={Loading}
        />
    </LoadingStack.Navigator>
};

const AuthNav = () => {
    return <AuthStack.Navigator
        initialRouteName={"Login"}
        screenOptions={{
            headerShown: false
        }}
    >
        <AuthStack.Screen
            name={"Login"}
            component={Login}
        />
        <AuthStack.Screen
            name={"Signup"}
            component={Signup}
        />
        <AuthStack.Screen
            name={"ForgetPassword"}
            component={ForgetPassword}
        />
    </AuthStack.Navigator>
};

const MainDrawerNav = () => {
    return <MainDrawer.Navigator
        drawerType={"slide"}
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerStyle={{
            width: DRAWER_CONTAINER_WIDTH,
        }}
    >
        <MainDrawer.Screen
            name={"Home"}
            component={Home}
        />

        <MainDrawer.Screen
            name={"Products"}
            component={Products}
        />

    </MainDrawer.Navigator>
}

const MainStackNav = () => {
    return <MainStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <MainStack.Screen
            name={"MainDrawerNav"}
            component={MainDrawerNav}
        />

        <MainStack.Screen
            name={"ProductEdit"}
            component={ProductEdit}
        />
    </MainStack.Navigator>
};

const MainRouter = () => {
    const [globalState, setGlobalState] = useGlobalState();
    const [coreTheme] = useCoreTheme();
    const {
        colors
    } = coreTheme;
    const {
        navigationState,
        userData
    } = globalState;

    return (
        <NavigationContainer
            theme={{
                dark: false,
                colors: {
                    background: colors.layer1
                }
            }}
        >
            {
                navigationState.type === "loading" ? <LoadingNav /> :
                    !userData.login ? <AuthNav /> :
                        <MainStackNav />
            }
        </NavigationContainer>
    );
};

export default MainRouter;
