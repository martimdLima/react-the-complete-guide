import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
    state = {
        persons: [],
    };

    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.prs.map((person) => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDeletePerson(person.id)}
                    />
                ))}
            </div>
        );
    }
}

// mapStateToProps stores a function which expects the state stored in redux as the input
// and returns a javascript object which is a map of prop names and slices of the state stored in redux.
// This function will eventually be executed by the react-redux package.
const mapStateToProps = (state) => {
    return {
        prs: state.persons,
    };
};

// mapDispatchToProps stores a function which will receive the dispatch function which we can execute as an argument,
// the react-redux package gives us well basically this helper function which will call dispatch on the store behind the scenes.
const mapDispatchToProps = (dispatch) => {
    return {
        onAddPerson: () => dispatch({ type: actionTypes.ADD_PERSON }),
        onDeletePerson: (id) =>
            dispatch({
                type: actionTypes.REMOVE_PERSON,
                payload: { personId: id },
            }),
    };
};

// By passing mapDispatchToProps to the connect method we get access to the onIncrementCounter method in the components.

//  Connect then gives us a container with access to this ctr, our property. This now allows us to output the ctr property.
// Connect is a function that returns a higher order component used on the export,
export default connect(mapStateToProps, mapDispatchToProps)(Persons);
