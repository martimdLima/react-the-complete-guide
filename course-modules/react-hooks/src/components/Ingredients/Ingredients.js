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
            throw new Error("");
    }
};

function Ingredients() {
    const [ingredients, dispatch] = useReducer(ingredientReducer, []);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // Pass an inline callback and an array of dependencies.
    // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
    // This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders
    // (e.g. shouldComponentUpdate).
    const filteredIngredientsHandler = useCallback((filteredIngredients) => {
        dispatch({
            type: "INIT",
            ingredients: filteredIngredients,
        });
    }, []);

    const clearErrorHandler = () => {
        setError(null);
        setIsLoading(false);
    };

    // useEffect can be used multiple times
    useEffect(() => {
        console.log("RENDERING INGREDIENTS");
    }, [ingredients]);

    const addIngredientHandler = (ingredient) => {
        setIsLoading(true);
        fetch(
            "https://react-hooks-132f3-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
            {
                method: "POST",
                body: JSON.stringify(ingredient),
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                setIsLoading(false);
                return response.json();
            })
            .then((responseData) => {
                dispatch({
                    type: "ADD",
                    ingredient: { id: responseData.name, ...ingredient },
                });
            })
            .catch((err) => {
                setError("Something went wrong. Please try again in a moment.");
            });
    };

    const removeIngredientHandler = (igId) => {
        setIsLoading(true);
        fetch(
            `https://react-hooks-132f3-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${igId}.json`,
            {
                method: "DELETE",
            }
        )
            .then((response) => {
                dispatch({
                    type: "DELETE",
                    id: igId,
                });
                setIsLoading(false);
            })
            .catch((err) => {
                setError("Something went wrong. Please try again in a moment.");
            });
    };

    return (
        <div className="App">
            {error && (
                <ErrorModal onClose={clearErrorHandler}>{error}</ErrorModal>
            )}
            <IngredientForm
                onAddIngredient={addIngredientHandler}
                loading={isLoading}
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
