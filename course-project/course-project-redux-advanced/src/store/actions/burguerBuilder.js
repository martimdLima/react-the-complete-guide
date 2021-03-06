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
