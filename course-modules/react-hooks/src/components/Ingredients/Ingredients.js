import React, {
    useState,
    useEffect,
    useCallback,
    useReducer,
    useMemo,
} from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

// An alternative to useState.
// Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.

// useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or
// when the next state depends on the previous one.
// useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
const ingredientReducer = (currentIngredients, action) => {
    switch (action.type) {
        case "INIT":
            return action.ingredients;
        case "ADD":
            return [...currentIngredients, action.ingredient];
        case "DELETE":
            return currentIngredients.filter((ig) => ig.id !== action.id);
        default:
            throw new Error("Error");
    }
};

const httpReducer = (httpState, action) => {
    switch (action.type) {
        case "SEND_REQUEST":
            return {
                loading: true,
                error: null,
            };
        case "RECEIVE_REQUEST":
            return {
                ...httpState,
                loading: false,
            };
        case "ERROR":
            return {
                loading: false,
                error: action.error,
            };
        case "CLEAR_ERROR":
            return {
                ...httpState,
                error: null,
            };
        default:
            throw new Error("Error");
    }
};

function Ingredients() {
    const [ingredients, dispatchIgs] = useReducer(ingredientReducer, []);
    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        loading: false,
        error: null,
    });

    // Pass an inline callback and an array of dependencies.
    // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
    // This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders
    // (e.g. shouldComponentUpdate).
    const filteredIngredientsHandler = useCallback((filteredIngredients) => {
        dispatchHttp({
            type: "SEND_REQUEST",
        });
        dispatchIgs({
            type: "INIT",
            ingredients: filteredIngredients,
        });
    }, []);

    const clearErrorHandler = useCallback(() => {
        dispatchHttp({
            type: "CLEAR_ERROR",
        });
    }, []);

    // useEffect can be used multiple times
    useEffect(() => {
        console.log("RENDERING INGREDIENTS");
    }, [ingredients]);

    const addIngredientHandler = useCallback((ingredient) => {
        dispatchHttp({
            type: "SEND_REQUEST",
        });
        fetch(
            "https://react-hooks-132f3-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
            {
                method: "POST",
                body: JSON.stringify(ingredient),
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                dispatchHttp({
                    type: "RECEIVE_REQUEST",
                });
                return response.json();
            })
            .then((responseData) => {
                dispatchIgs({
                    type: "ADD",
                    ingredient: { id: responseData.name, ...ingredient },
                });
            })
            .catch((err) => {
                dispatchHttp({
                    type: "ERROR",
                    error: err.message,
                });
            });
    }, []);

    const removeIngredientHandler = useCallback((igId) => {
        dispatchHttp({
            type: "RECEIVE_REQUEST",
        });
        fetch(
            `https://react-hooks-132f3-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${igId}.json`,
            {
                method: "DELETE",
            }
        )
            .then((response) => {
                dispatchIgs({
                    type: "DELETE",
                    id: igId,
                });
            })
            .catch((err) => {
                dispatchHttp({
                    type: "ERROR",
                    error: err.message,
                });
            });
    }, []);

    // useMemo returns a memoized value.

    // Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed.
    // This optimization helps to avoid expensive calculations on every render.

    // Remember that the function passed to useMemo runs during rendering.
    // Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in useEffect, not useMemo.

    // If no array is provided, a new value will be computed on every render.
    // You may rely on useMemo as a performance optimization, not as a semantic guarantee.

    const ingredientList = useMemo(() => {
        return (
            <IngredientList
                ingredients={ingredients}
                onRemoveItem={removeIngredientHandler}
            />
        );
    }, [ingredients, removeIngredientHandler]);

    return (
        <div className="App">
            {httpState.error && (
                <ErrorModal onClose={clearErrorHandler}>
                    {httpState.error}
                </ErrorModal>
            )}
            <IngredientForm
                onAddIngredient={addIngredientHandler}
                loading={httpState.isLoading}
            />

            <section>
                <Search onLoadIngredients={filteredIngredientsHandler} />
                {ingredientList}
            </section>
        </div>
    );
}

export default Ingredients;
