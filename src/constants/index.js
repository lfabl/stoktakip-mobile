const DEFAULT_GLOBAL_STATE = {
    navigationState: {
        type: "loading",
        callBack: () => { }
    },
    userData: {
        login: false,
        token: null,
    }
};

export default DEFAULT_GLOBAL_STATE;