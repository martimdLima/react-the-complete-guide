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

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

// sign up - "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY
// sign in - "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY

export const auth = (email, password, isSignup) => {
    return (dispatch) => {
        dispatch(authStart());

        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtsfmUnmfvIgXBkiNwj2mHOXRvxzr2jPU"
           ;

        if (!isSignup) {
            url =  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDtsfmUnmfvIgXBkiNwj2mHOXRvxzr2jPU"
                ;
        }

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        };

        axios
            .post(url, authData)
            .then((response) => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch((err) => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};
