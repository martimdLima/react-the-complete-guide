import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
    const [ingredients, setIngredients] = useState([]);

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
