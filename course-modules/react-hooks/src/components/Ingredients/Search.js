import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
    const { onLoadIngredients } = props;
    const [inputFilter, setInputFilter] = useState("");
    // working with Refs & useRef()
    const inputRef = useRef();

    // The Effect Hook lets you perform side effects in function components
    // Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

    // If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument.
    // This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.
    // If you pass an empty array ([]), the props and state inside the effect will always have their initial values.
    // Passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model
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
