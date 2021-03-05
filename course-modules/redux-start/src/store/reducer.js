const initialState = {
    counter: 0,
    results: [],
};

// Create the Reducer for the app
const reducer = (state = initialState, action) => {
    // Initialize the switch statement based on the action.type, this will return the appropriate updated state based on the type
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1,
            };

        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1,
            };

        case "ADD":
            return {
                ...state,
                counter: state.counter + action.payload.value,
            };

        case "SUB":
            return {
                ...state,
                counter: state.counter - action.payload.value,
            };

        case "STORE_RESULT":
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter,
                }),
            };

        case "DELETE_RESULT":
            return {
                ...state,
                results: 0,
            };

        default:
            return {
                ...state,
                counter: state.counter + 0,
            };
    }
};

export default reducer;
