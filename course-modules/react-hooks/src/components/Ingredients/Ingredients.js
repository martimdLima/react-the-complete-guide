import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {

    const [ingredients, setIngredients] = useState([]);

    // The Effect Hook lets you perform side effects in function components
    // Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

    // If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. 
    // This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. 
    // If you pass an empty array ([]), the props and state inside the effect will always have their initial values. 
    // Passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model
    useEffect(() => {
        fetch(
            "https://react-hooks-132f3-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                const loadedIngredients = [];

                for (const key in responseData) {
                    loadedIngredients.push(responseData[key]);
                }

                setIngredients(loadedIngredients);
            });
    }, []);

    // useEffect can be used multiple times
    useEffect(() => {
      console.log("RENDERING INGRIDIENTS")
    }, [ingredients]);

    const addIngredientHandler = (ingredient) => {
        fetch(
            "https://react-hooks-132f3-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
            {
                method: "POST",
                body: JSON.stringify(ingredient),
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                setIngredients((prevIngs) => [
                    ...prevIngs,
                    { id: responseData.name, ...ingredient },
                ]);
            });
    };

    const onRemoveItem = (igId) => {
        setIngredients((prevIngs) =>
            prevIngs.filter((ig) => {
                return ig.id !== igId;
            })
        );
    };

    return (
        <div className="App">
            <IngredientForm onAddIngredient={addIngredientHandler} />

            <section>
                <Search />
                <IngredientList
                    ingredients={ingredients}
                    onRemoveItem={onRemoveItem}
                />
            </section>
        </div>
    );
}

export default Ingredients;
