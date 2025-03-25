import { combineReducers, createStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import customerReducer from "./reducers/customerReducer";
import dealerReducer from "./reducers/dealerReducer";
import Quotations from "../pages/Quotations";
import quotationReducer from "./reducers/quotationReducer";

const rootReducer = combineReducers ({
    auth : authReducer,
    customers: customerReducer,
    dealers: dealerReducer,
    quotations: quotationReducer
})

const store = createStore(rootReducer)

export default store