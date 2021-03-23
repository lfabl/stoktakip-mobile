import React, {
    useEffect
} from 'react';
import {
    SafeAreaView
} from 'react-native';
import {
    CoreTokensProvider,
    CoreThemeProvider,
    useCoreTheme
} from './context';
import GenerateColors from './theme/colors';
import {
    style_main
} from './stylesheet';

const SetDefaults = ({
    children
}) => {
    const [coreTheme, setCoreTheme] = useCoreTheme();
    useEffect(() => {
        setCoreTheme({
            colors: GenerateColors(coreTheme.value)
        });
    }, []);
    return children;
};

const Core = ({
    children
}) => {
    return (
        <CoreThemeProvider>
            <CoreTokensProvider>
                <SafeAreaView
                    style={style_main.container}
                >
                    <SetDefaults>
                        {children}
                    </SetDefaults>
                </SafeAreaView>
            </CoreTokensProvider>
        </CoreThemeProvider>
    );
};
export default Core;