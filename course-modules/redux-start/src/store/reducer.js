const initialState = {
    counter: 0,
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

        default:
            return {
                ...state,
                counter: state.counter + 0,
            };
    }
};

export default reducer;
