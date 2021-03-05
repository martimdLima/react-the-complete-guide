import * as actionTypes from "./actions";

const initialState = {
    persons: [],
};

// Create the Reducer for the app
const reducer = (state = initialState, action) => {
    // Initialize the switch statement based on the action.type, this will return the appropriate updated state based on the type
    switch (action.type) {
        // Adds a new Person
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.payload.name,
                age: action.payload.age,
            };

            return {
                ...state,
                persons: state.persons.concat(newPerson),
            };

        // Removes a new Person
        case actionTypes.REMOVE_PERSON:
            // create a new const to hold the updated array and use the filter method to delete elements immutably
            const updatedPersons = state.persons.filter(
                (person) => person.id !== action.payload.personId
            );

            return {
                ...state,
                persons: updatedPersons,
            };

        default:
            return {
                ...state,
                persons: state.persons,
            };
    }
};

export default reducer;
