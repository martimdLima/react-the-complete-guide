const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {

/*     if(action.type === "INCREMENT") {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }

    if(action.type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }

    if(action.type === "ADD5") {
        return {
            ...state,
            counter: state.counter + 5,
        }
    }

    if(action.type === "SUB5") {
        return {
            ...state,
            counter: state.counter - 5,
        }
    }


    return state; */

    let updatedState;

    switch (action.type) {
        case "INCREMENT":
            updatedState = {
                ...state,
                counter: state.counter + 1,
            };
            break;
        case "DECREMENT":
            updatedState = {
                ...state,
                counter: state.counter - 1,
            };
            break;
        case "ADD5":
            updatedState = {
                ...state,
                counter: state.counter + 5,
            };
            break;
        case "SUB5":
            updatedState = {
                ...state,
                counter: state.counter - 5,
            };
            break;
        default:
            updatedState = {
                ...state,
                counter: state.counter + 0,
            };
    }

    return updatedState;
};

export default reducer;
