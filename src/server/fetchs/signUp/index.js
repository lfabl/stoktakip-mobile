import {
    serverIP
} from "../../config";

const signUp = async (body) => {
    const fetchURL = serverIP + "signup";

    return fetch(fetchURL, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
        .catch((err) => err);
};
export default signUp;