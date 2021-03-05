import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
    state = {
        counter: 0,
    };

    counterChangedHandler = (action, value) => {
        switch (action) {
            case "inc":
                this.setState((prevState) => {
                    return { counter: prevState.counter + 1 };
                });
                break;
            case "dec":
                this.setState((prevState) => {
                    return { counter: prevState.counter - 1 };
                });
                break;
            case "add":
                this.setState((prevState) => {
                    return { counter: prevState.counter + value };
                });
                break;
            case "sub":
                this.setState((prevState) => {
                    return { counter: prevState.counter - value };
                });
                break;
            default:
                this.setState((prevState) => {
                    return { counter: prevState.counter };
                });
        }
    };

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl
                    label="Add 5"
                    clicked={this.props.onAddCounter}
                />
                <CounterControl
                    label="Subtract 5"
                    clicked={this.props.onSubCounter}
                />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.strResults.map((strResult) => (
                        <li
                            key={strResult.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}>
                            {strResult.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

// mapStateToProps stores a function which expects the state stored in redux as the input
// and returns a javascript object which is a map of prop names and slices of the state stored in redux.
// Now this function will eventually be executed by the react-redux package.
const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        strResults: state.res.results,
    };
};

// mapDispatchToProps stores a function which will receive the dispatch function which we can execute as an argument,
// the react-redux package gives us well basically this helper function which will call dispatch on the store behind the scenes.
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, payload: { value: 5 } }),
        onSubCounter: () => dispatch({ type: actionTypes.SUB, payload: { value: 5 } }),
        onStoreResult: (res) => dispatch({ type: actionTypes.STORE_RESULT, payload: {result: res}}),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT , payload: {resultId: id}}),
    };
};

// By passing mapDispatchToProps to the connect method we get access to the onIncrementCounter method in the components.

//  Connect then gives us a container with access to this ctr, our property. This now allows us to output the ctr property.
// Connect is a function that returns a higher order component used on the export,
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
