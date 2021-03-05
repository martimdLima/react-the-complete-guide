// Outsourced action Types to a separate file
import * as actionTypes from "../actions";

const initialState = {
    results: [],
};

// Create the resultsReducer for the app
const resultsReducer = (state = initialState, action) => {
    // Initialize the switch statement based on the action.type, this will return the appropriate updated state based on the type
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.payload.result,
                }),
            };

        case actionTypes.DELETE_RESULT:
            // create a new const to hold the updated array and use the filter method to delete elements immutably
            const updatedArray = state.results.filter(
                (result) => result.id !== action.payload.resultId
            );

            return {
                ...state,
                results: updatedArray,
            };

        default:
            return {
                ...state,
                results: state.results,
            };
    }
};

export default resultsReducer;
