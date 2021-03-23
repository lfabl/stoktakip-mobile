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
export const CoreThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        (state, newValue) => ({ ...state, ...newValue }),
        DEFAULT_CORE_THEME_STORE
    );
    return (
        <CoreThemeContext.Provider
            value={state}
        >
            <CoreThemeDispatchContext.Provider
                value={dispatch}
            >
                {children}
            </CoreThemeDispatchContext.Provider>
        </CoreThemeContext.Provider>
    );
};
export const useCoreTheme = () => [
    useContext(CoreThemeContext),
    useContext(CoreThemeDispatchContext)
];

const CoreTokensContext = createContext(DEFAULT_CORE_TOKENS_STORE);
const CoreTokensDispatchContext = createContext(undefined);
export const CoreTokensProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        (state, newValue) => ({ ...state, ...newValue }),
        DEFAULT_CORE_TOKENS_STORE
    );
    return (
        <CoreTokensContext.Provider
            value={state}
        >
            <CoreTokensDispatchContext.Provider
                value={dispatch}
            >
                {children}
            </CoreTokensDispatchContext.Provider>
        </CoreTokensContext.Provider>
    );
};
export const useCoreTokens = () => [
    useContext(CoreTokensContext),
    useContext(CoreTokensDispatchContext)
];