import * as actionTypes from "./actionTypes";

export const addIngredient = (ingrName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingrName,
    };
};

export const removeIngredient = (ingrName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingrName,
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients,
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    };
};

export const initIngredients = () => {
    return { type: actionTypes.INIT_INGREDIENTS };
};
