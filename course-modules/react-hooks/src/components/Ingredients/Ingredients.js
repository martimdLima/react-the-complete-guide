import React, { useState, useEffect, useCallback, useReducer } from "react";

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

    //const [isLoading, setIsLoading] = useState(false);
    //const [error, setError] = useState("");

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

    const clearErrorHandler = () => {
        dispatchHttp({
            type: "CLEAR_ERROR",
        });
    };

    // useEffect can be used multiple times
    useEffect(() => {
        console.log("RENDERING INGREDIENTS");
    }, [ingredients]);

    const addIngredientHandler = (ingredient) => {
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
    };

    const removeIngredientHandler = (igId) => {
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
    };

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
                <IngredientList
                    ingredients={ingredients}
                    onRemoveItem={removeIngredientHandler}
                />
            </section>
        </div>
    );
}

export default Ingredients;
