import React from 'react';
import {
    style_main
} from './stylesheet';
import PropTypes from 'prop-types';
import {
    ActivityIndicator,
    TouchableOpacity,
    ViewPropTypes,
    View
} from 'react-native';
import {
    SIZES
} from './tokens';
import {
    useCoreTokens,
    useCoreTheme
} from '../../context';
import Icon from '../icon';
import Text from '../text';
const Button = ({
    color = "primary",
    type = "filled",
    wrap = "wrap",
    size = "sm",
    titleStyle,
    textColor,
    disabled,
    loading,
    onPress,
    title,
    style,
    icon,
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
        borders
    } = coreTokens;

    const radiusCalculator = (radius) => {
        switch (size) {
            case "sm":
                return radius;
            case "md":
                return radius * 1.5;
            case "lg":
                return radius * 2;
        }
    };
    const wrapCalcualtor = (wrap) => {
        switch (wrap) {
            case "wrap":
                return "baseline";
            case "no-wrap":
                return "stretch";
            default:
                return null;
        }
    };
    const frontColorGenerate = () => {
        if (textColor) {
            return textColor;
        } else {
            switch (type) {
                case "filled":
                    return colors.buttonText;
                default:
                    return colors[color];
            }
        }
    };

    const frontColor = frontColorGenerate();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                style_main.container,
                {
                    backgroundColor: type === "filled" ? colors[color] : "transparent",
                    borderColor: type === "outline" ? colors[color] : "transparent",
                    borderRadius: radiusCalculator(radiuses.button),
                    alignSelf: wrapCalcualtor(wrap),
                    borderWidth: borders.button,
                    opacity: disabled ? coreTokens.disabled.opacity : 1,
                    ...SIZES[size].container
                },
                style
            ]}
            disabled={disabled}
            {...props}
        >
            {
                loading ? <ActivityIndicator
                    size={"large"}
                    color={frontColor}
                /> : <>
                    {
                        icon ?
                            <Icon
                                family={icon.family}
                                name={icon.name ? icon.name : "home"}
                                size={SIZES[size].icon.size}
                                color={frontColor}
                                style={{
                                    position: title ? "absolute" : "relative",
                                    left: title ? SIZES[size].icon.size ?
                                        (SIZES[size].container.paddingHorizontal + SIZES[size].icon.size) / 2.25
                                        :
                                        (SIZES[size].container.paddingHorizontal + 24) / 2.25 : null
                                }}
                            />
                            :
                            null
                    }
                    {
                        title ?
                            <Text
                                type="button"
                                numberOfLines={1}
                                style={[
                                    style_main.title,
                                    {
                                        color: frontColor,
                                        ...SIZES[size].title,
                                        ...typography["button"]
                                    },
                                    titleStyle
                                ]}
                            >
                                {icon ? <View style={{
                                    width: icon.size ? icon.size : 24
                                }}></View> : null}
                                {title}
                            </Text>
                            :
                            null
                    }
                </>
            }

        </TouchableOpacity>
    );
};
Button.propTypes = {
    style: ViewPropTypes.style,
    title: PropTypes.string,
    onPress: PropTypes.func
};
export default Button;