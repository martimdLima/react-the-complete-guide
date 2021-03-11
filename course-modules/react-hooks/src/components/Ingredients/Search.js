import React, { useState, useEffect, useRef } from "react";

import useHttp from "../../hooks/http";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
    const { onLoadIngredients } = props;
    const [inputFilter, setInputFilter] = useState("");
    // working with Refs & useRef()
    const inputRef = useRef();

    const { isLoading, error, data, sendRequest, clear } = useHttp();

    // The Effect Hook lets you perform side effects in function components
    // Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
    // useEffect can be used multiple times
    // If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument.
    // This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.
    // If you pass an empty array ([]), the props and state inside the effect will always have their initial values.
    // Passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model
      
    useEffect(() => {
        const timer = setTimeout(() => {
          if (inputFilter === inputRef.current.value) {
            const queryParams =
            inputFilter.length === 0
                ? ''
                : `?orderBy="title"&equalTo="${inputFilter}"`;
            sendRequest(
              "https://react-hooks-132f3-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json" + queryParams,
              'GET'
            );
          }
        }, 500);
        return () => {
          clearTimeout(timer);
        };
      }, [inputFilter, inputRef, sendRequest]);

      useEffect(() => {
        if (!isLoading && !error && data) {
          const loadedIngredients = [];
          for (const key in data) {
            loadedIngredients.push({
              id: key,
              title: data[key].title,
              amount: data[key].amount
            });
          }
          onLoadIngredients(loadedIngredients);
        }
      }, [data, isLoading, error, onLoadIngredients]);

    return (
        <section className="search">
             {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    {isLoading && <span>Loading</span>}
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
