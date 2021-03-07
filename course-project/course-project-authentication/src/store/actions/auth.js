import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};
export const authSuccess = (tokenId, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        tokenId: tokenId,
        userId: userId,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const auth = (email, password, isSignup) => {
    return (dispatch) => {
        dispatch(authStart());

        let url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtsfmUnmfvIgXBkiNwj2mHOXRvxzr2jPU";
        if (!isSignup) {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDtsfmUnmfvIgXBkiNwj2mHOXRvxzr2jPU";
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
                dispatch(
                    authSuccess(response.data.idToken, response.data.localId)
                );
            })
            .catch((err) => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};
