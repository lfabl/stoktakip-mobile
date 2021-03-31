const DEFAULT_GLOBAL_STATE = {
    navigationState: {
        type: "loading",
        callBack: () => { }
    },
    userData: {
        login: false,
        token: null,
        userName: "",
        fullName: "",
        profileImage: ""
    }
};

export default DEFAULT_GLOBAL_STATE;