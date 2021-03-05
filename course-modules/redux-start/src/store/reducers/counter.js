// Outsourced action Types to a separate file
import * as actionTypes from "../actions";

const initialState = {
    counter: 0,
};

// Create the counterReducer for the app
const counterReducer = (state = initialState, action) => {
    // Initialize the switch statement based on the action.type, this will return the appropriate updated state based on the type
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            };

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            };

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.payload.value,
            };

        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.payload.value,
            };

        default:
            return {
                ...state,
                counter: state.counter + 0,
            };
    }
};

export default counterReducer;
