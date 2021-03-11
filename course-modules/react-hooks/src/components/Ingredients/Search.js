import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
    const { onLoadIngredients } = props;
    const [inputFilter, setInputFilter] = useState("");
    // working with Refs & useRef()
    const inputRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (inputFilter === inputRef.current.value) {
                const queryParams =
                    inputFilter.length === 0
                        ? ""
                        : `?orderBy="title"&equalTo="${inputFilter}"`;
                fetch(
                    "https://react-hooks-132f3-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json" +
                        queryParams
                )
                    .then((response) => {
                        return response.json();
                    })
                    .then((responseData) => {
                        const loadedIngredients = [];

                        for (const key in responseData) {
                            loadedIngredients.push({
                                id: key,
                                title: responseData[key].title,
                                amount: responseData[key].amount,
                            });
                        }

                        onLoadIngredients(loadedIngredients);
                    });
            }
        }, 500);
        // cleaning Up with useEffect()
        return () => {
            clearTimeout(timer);
        };
    }, [inputFilter, onLoadIngredients, inputRef]);

    return (
        <section className="search">
            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputFilter}
                        onChange={(event) => setInputFilter(event.target.value)}
                    />
                </div>
            </Card>
        </section>
    );
});

export default Search;
