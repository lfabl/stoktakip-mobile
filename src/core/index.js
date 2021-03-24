import React, {
    useEffect
} from 'react';
import {
    SafeAreaView
} from 'react-native';
import CoreContext, {
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
        try {
            const projectColors = require("../theme/index");
            if (projectColors) {
                setCoreTheme({
                    colors: projectColors.default(coreTheme.value)
                });
            } else {
                setCoreTheme({
                    colors: GenerateColors(coreTheme.value)
                });
            }
        } catch (e) {
            setCoreTheme({
                colors: GenerateColors(coreTheme.value)
            });
        }
    }, [coreTheme.value]);
    return children;
};

const Core = ({
    children
}) => {
    return (
        <CoreContext>
            <SafeAreaView
                style={style_main.container}
            >
                <SetDefaults>
                    {children}
                </SetDefaults>
            </SafeAreaView>
        </CoreContext>
    );
};
export default Core;