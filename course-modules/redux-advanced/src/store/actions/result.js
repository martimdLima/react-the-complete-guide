import * as actionTypes from "./actionTypes";

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result,
    };
};

export const storeResult = (result) => {
    return (dispatch) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log("OldCounter: " + oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    };
};

export const deleteResult = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resultId,
    };
};
