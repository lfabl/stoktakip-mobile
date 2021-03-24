import React, {
    createContext,
    useContext,
    useReducer
} from 'react';
import {
    DEFAULT_CORE_TOKENS_STORE,
    DEFAULT_CORE_THEME_STORE
} from '../constants';

const CoreThemeContext = createContext(DEFAULT_CORE_THEME_STORE);
const CoreThemeDispatchContext = createContext(undefined);

const CoreTokensContext = createContext(DEFAULT_CORE_TOKENS_STORE);
const CoreTokensDispatchContext = createContext(undefined);

const CoreContext = ({ children }) => {
    const [coreTheme, setCoreTheme] = useReducer(
        (state, newValue) => ({ ...state, ...newValue }),
        DEFAULT_CORE_THEME_STORE
    );
    const [coreTokens, setCoreTokens] = useReducer(
        (state, newValue) => ({ ...state, ...newValue }),
        DEFAULT_CORE_TOKENS_STORE
    );

    return (
        <CoreThemeContext.Provider
            value={coreTheme}
        >
            <CoreThemeDispatchContext.Provider
                value={setCoreTheme}
            >
                <CoreTokensContext.Provider
                    value={coreTokens}
                >
                    <CoreTokensDispatchContext.Provider
                        value={setCoreTokens}
                    >
                        {children}
                    </CoreTokensDispatchContext.Provider>
                </CoreTokensContext.Provider>
            </CoreThemeDispatchContext.Provider>
        </CoreThemeContext.Provider>
    );
};
export const useCoreTheme = () => [
    useContext(CoreThemeContext),
    useContext(CoreThemeDispatchContext)
];


export const useCoreTokens = () => [
    useContext(CoreTokensContext),
    useContext(CoreTokensDispatchContext)
];

export default CoreContext;