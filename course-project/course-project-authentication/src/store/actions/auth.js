import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};
export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData,
    };
};

export const authFail = () => {
    return {
        type: actionTypes.AUTH_FAIL,
    };
};

// sign up - "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY
// sign in - "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY

export const auth = (email, password) => {
    return (dispatch) => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        };

        axios
            .post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtsfmUnmfvIgXBkiNwj2mHOXRvxzr2jPU",
                authData
            )
            .then((response) => {
                console.log(response);
                dispatch(authSuccess());
            })
            .catch((err) => {
                console.log(err);
                dispatch(authFail());
            });
    };
};
