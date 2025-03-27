import { ADD_DEALER, DELETE_DEALER, UPDATE_DEALER } from "./actionTypes";

export const addDealer =  (dealer) =>({
    type : ADD_DEALER,
    payload : dealer
})

export const deleteDealer = (id) => ({
    type: DELETE_DEALER,
    payload : id
})

export const updateDealer = (updatedDealer) =>({
    type : UPDATE_DEALER,
    payload : updateDealer
})