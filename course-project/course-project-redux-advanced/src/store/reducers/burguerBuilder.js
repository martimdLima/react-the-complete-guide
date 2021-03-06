import * as actionTypes from "../actions/actionTypes";

import { updateObject } from "../utility";

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
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
            const updatedIngredient = {
                [action.ingredientName]:
                    state.ingredients[action.ingredientName] + 1,
            };
            const updatedIngredients = updateObject(
                state.ingredients,
                updatedIngredient
            );
            const updatedState = {
                ...state,
                ingredients: updatedIngredients,
                totalPrice:
                    state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
            };
            return updatedState(state, updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            const updatedIngr = {
                [action.ingredientName]:
                    state.ingredients[action.ingredientName] - 1,
            };
            const updatedIngrs = updateObject(state.ingredients, updatedIngr);
            const updatedSt = {
                ...state,
                ingredients: updatedIngrs,
                totalPrice:
                    state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
            };
            return updatedState(state, updatedSt);
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                totalPrice: 4,
                error: false,
            });
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {
                error: true,
            });
        default:
            return state;
    }
};

export default reducer;
