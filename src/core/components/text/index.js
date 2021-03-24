import React from  'react';
import {
    Text as NativeText
} from 'react-native';
import {
    useCoreTheme
} from '../../context';
const Text = ({
    type = "body",
    children,
    style,
    ...props
}) => {
    const [coreTheme, setCoreTheme] = useCoreTheme();

    const {
        typography,
        colors
    } = coreTheme;

    return <NativeText
        style={[
            {
                ...typography[type],
                color: colors.body
            },
            style
        ]}
        {...props}
    >
        {children}
    </NativeText>;
};
export default Text;