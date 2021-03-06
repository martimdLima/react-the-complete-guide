import * as actionTypes from "../actions/actionTypes";

import { updateObject } from "../utility";

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
};

const purchaseInit = (state, action) => {
    return updateObject(state, { purchased: false });
};

const purchaseBurguerStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const purchaseBurguerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {
        id: action.orderId,
    });

    return updateObject(state, {
        loading: false,
        purchased: false,
        orders: state.orders.concat(newOrder),
    });
};

const purchaseBurguerFailed = (state, action) => {
    return updateObject(state, { loading: false, purchased: false });
};

const fetchOrdersStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        orders: action.orders,
    });
};

const fetchOrdersFailed = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGUER_START:
            return purchaseBurguerStart(state, action);

        case actionTypes.PURCHASE_BURGUER_SUCCESS:
            return purchaseBurguerSuccess(state, action);

        case actionTypes.PURCHASE_BURGUER_FAIL:
            return purchaseBurguerFailed(state, action);
        case actionTypes.FETCH_ORDERS_START:
            return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAILED:
            return fetchOrdersFailed(state, action);

        default:
            return updateObject(state, null);
    }
};

export default reducer;
