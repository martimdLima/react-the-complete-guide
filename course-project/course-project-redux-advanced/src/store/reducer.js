import * as actionTypes from "./actions";

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: 4,
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 2,
    cheese: 1,
    meat: 3,
};

// Create the Reducer for the app
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]:
                        state.ingredients[action.payload.ingredientName] + 1,
                },
                totalPrice:
                    state.totalPrice +
                    INGREDIENT_PRICES[action.payload.ingredientName],
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]:
                        state.ingredients[action.payload.ingredientName] - 1,
                },
                totalPrice:
                    state.totalPrice -
                    INGREDIENT_PRICES[action.payload.ingredientName],
            };
        default:
            return state;
    }
};

export default reducer;
