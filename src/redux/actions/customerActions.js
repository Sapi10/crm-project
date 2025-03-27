import { ADD_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from "./actionTypes";

export const addCustomer = (customer) =>({
    type : ADD_CUSTOMER,
    payload : customer
})

export const deleteCustomer = (id) =>({
    type : DELETE_CUSTOMER,
    payload : id
})

export const updateCustomer = (updatedCustomer) => ({
    type: UPDATE_CUSTOMER,
    payload : updatedCustomer
})