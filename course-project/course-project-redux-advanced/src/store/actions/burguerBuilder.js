import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

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
        type: actionTypes.FETCH_INGREDIENTS_FAIL,
    };
};

export const initIngredients = () => {
    return (dispatch) => {
        axios
            .get(
                "https://react-course-project-31af6-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
            )
            .then((response) => {
                dispatch(setIngredients(response.data));
            })
            .catch((error) => {
                dispatch(fetchIngredientsFailed());
            });
    };
};
