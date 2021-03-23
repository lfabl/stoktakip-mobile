import React, {
    useEffect
} from 'react';
import {
    View
} from 'react-native';
import {
    style_main
} from './stylesheet';
import {
    GlobalStateProvider
} from "./context";
import Core from './core';
import {
    useCoreTokens,
    useCoreTheme
} from './core/context';
import MainRouter from './navigation';

const UpdateCoreConfigs = ({
    children
}) => {
    const [coreTheme, setCoreTheme] = useCoreTheme();
    const [coreTokens, setCoreTokens] = useCoreTokens();
    const {
        typography
    } = coreTheme;
    const {
        radiuses
    } = coreTokens;
    useEffect(() => {
        setCoreTheme({
            typography: {
                button: {
                    ...typography.button,
                    fontFamily: "Montserrat-SemiBold"
                },
                inputTitle: {
                    ...typography.inputTitle,
                    fontFamily: "Montserrat-Thin"
                }
            }
        });
        setCoreTokens({
            radiuses: {
                ...radiuses,
                button: 8
            }
        });
    }, []);
    return children;
};

const App = () => {
    return <GlobalStateProvider>
        <Core>
            <UpdateCoreConfigs>
                <View
                    style={style_main.container}
                >
                    <MainRouter />
                </View>
            </UpdateCoreConfigs>
        </Core>
    </GlobalStateProvider>;
};
export default App;