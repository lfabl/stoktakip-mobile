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
  
    useEffect(() => {

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