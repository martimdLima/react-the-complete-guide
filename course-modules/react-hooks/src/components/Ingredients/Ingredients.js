import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
    const [ingredients, setIngredients] = useState([]);

    const addIngredientHandler = (ingredient) => {
        setIngredients((prevIngs) => [
            ...prevIngs,
            { id: Math.random().toString(), ...ingredient },
        ]);
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
