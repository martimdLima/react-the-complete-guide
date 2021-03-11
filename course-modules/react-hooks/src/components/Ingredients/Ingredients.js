import React, { useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

function Ingredients() {
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // Pass an inline callback and an array of dependencies.
    // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
    // This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders
    // (e.g. shouldComponentUpdate).
    const filteredIngredientsHandler = useCallback((filteredIngredients) => {
        setIngredients(filteredIngredients);
    }, []);

    const clearErrorHandler = () => {
        setError(null);
        setIsLoading(false);
    };

    // useEffect can be used multiple times
    useEffect(() => {
        console.log("RENDERING INGRIDIENTS");
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
                setIngredients((prevIngs) => [
                    ...prevIngs,
                    { id: responseData.name, ...ingredient },
                ]);
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
                setIngredients((prevIngs) =>
                    prevIngs.filter((ig) => {
                        return ig.id !== igId;
                    })
                );
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
