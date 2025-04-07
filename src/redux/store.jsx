import { combineReducers, createStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import customerReducer from "./reducers/customerReducer";
import dealerReducer from "./reducers/dealerReducer";
import quotationReducer from "./reducers/quotationReducer";
import { loadState, saveState } from "./localStorage";

const rootReducer = combineReducers ({
    auth : authReducer,
    customers: customerReducer,
    dealers: dealerReducer,
    quotations: quotationReducer
})

const persistedState = loadState()

const store = createStore(
    rootReducer,
    persistedState
)

store.subscribe( () => {
    saveState({
        auth : store.getState().auth,
        dealers : store.getState().dealers,
        customers : store.getState().customers,
        quotations : store.getState().quotations 
    })
})

export default store