import * as React from 'react';
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {
    createDrawerNavigator
} from '@react-navigation/drawer';
import {
    useCoreTheme
} from "../core/context";
import useGlobalState from "../context";

import Loading from "../pages/loading";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import ForgetPassword from "../pages/auth/forgetPassword";
import Home from "../pages/main/home";

const LoadingStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();

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

const MainStackNav = () => {
    return <MainStack.Navigator>
        <MainDrawer.Navigator>
            <MainDrawer.Screen
                name={"Home"}
                component={Home}
            />
        </MainDrawer.Navigator>
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
        <NavigationContainer theme={{
            dark: false,
            colors: {
                background: colors.body
            }
        }} >
            {
                navigationState.type === "loading" ? <LoadingNav /> :
                    !userData.login ? <AuthNav /> :
                        <MainStackNav />
            }
        </NavigationContainer>
    );
};

export default MainRouter;
