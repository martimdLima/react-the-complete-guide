import * as actionTypes from "../actions/actionTypes";

import { updateObject } from "../utility";

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return updateObject(state, { purchased: false });
        case actionTypes.PURCHASE_BURGUER_START:
            return updateObject(state, { loading: true });

        case actionTypes.PURCHASE_BURGUER_SUCCESS:
            const newOrder = updateObject(action.orderData, {
                id: action.orderId,
            });

            return updateObject(state, {
                loading: false,
                purchased: false,
                orders: state.orders.concat(newOrder),
            });

        case actionTypes.PURCHASE_BURGUER_FAIL:
            return updateObject(state, { loading: false, purchased: false });

        case actionTypes.FETCH_ORDERS_START:
            return updateObject(state, { loading: true });
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return updateObject(state, {
                loading: false,
                orders: action.orders,
            });
        case actionTypes.FETCH_ORDERS_FAILED:
            return updateObject(state, { loading: false });

        default:
            return updateObject(state, null);
    }
};

export default reducer;
