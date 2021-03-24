import React, {
    useEffect,
    useState
} from 'react';
import {
    TextInput as NativeTextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {
    style_main
} from './stylesheet';
import {
    useCoreTokens,
    useCoreTheme
} from '../../context';
import Text from '../text';
import Icon from '../icon';
const TextInput = ({
    nativeInputStyle,
    onChangeText,
    titleStyle,
    isRequired,
    cleanable,
    style,
    title,
    value,
    ...props
}) => {
    const [coreTokens, setCoreTokens] = useCoreTokens();
    const [coreTheme, setCoreTheme] = useCoreTheme();

    const {
        typography,
        colors
    } = coreTheme;
    const {
        radiuses,
        borders,
        spaces
    } = coreTokens;

    const [isFocused, setIsFocused] = useState(false);
    const [_value, setValue] = useState(value);

    useEffect(() => {
        if(onChangeText) onChangeText(_value);
    }, [_value]);

    const _title = isRequired ? "*" + title : title;

    return <View
        style={[
            style_main.container,
            {
                borderColor: isFocused ? colors.primary : colors.seperator,
                paddingHorizontal: spaces.inputHorizontal,
                paddingVertical: spaces.inputVertical,
                borderRadius: radiuses.textInput,
                borderWidth: borders.textInput
            },
            style
        ]}
    >
        <View
            style={style_main.content}
        >
            <Text
                type="header9"
                numberOfLines={1}
                style={[
                    style_main.title,
                    {
                        color: (_value && _value.length) || isFocused ? colors.primary : colors.body,
                        marginBottom: typography.header3.fontSize / 2
                    },
                    titleStyle
                ]}
            >
                {_title}
            </Text>
            <NativeTextInput
                {...props}
                value={_value}
                onChangeText={e => setValue(e)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={[
                    style_main.input,
                    {
                        ...typography.body,
                        color: colors.body
                    },
                    nativeInputStyle
                ]}
            />
        </View>
        {
            _value && _value.length && cleanable ?
                <TouchableOpacity
                    onPress={() => setValue("")}
                    style={[
                        style_main.cleanButton,
                        {
                            marginLeft: spaces.inline,
                            alignSelf: "center"
                        }
                    ]}
                >
                    <Icon
                        family="MaterialCommunityIcons"
                        name="close-circle"
                        size={24}
                        color={colors.primary}
                    />
                </TouchableOpacity>
                :
                null
        }
    </View>;
};
export default TextInput;