// Outsourced action Types to a separate file
import * as actionTypes from "./actions";

const initialState = {
    counter: 0,
    results: [],
};

// Create the Reducer for the app
const reducer = (state = initialState, action) => {
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

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter,
                }),
            };

        case actionTypes.DELETE_RESULT:
            /*             
            const id = 2;
            
            // create a copy of the new array and use the spread operator to distribute all the elements in state results into that new array.
            const newArray= [...state.results]

            // then we could simply use that new array here in our splice
            newArray.splice(id, 1); 
            */

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
                counter: state.counter + 0,
            };
    }
};

export default reducer;
