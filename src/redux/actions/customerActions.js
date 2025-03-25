import { ADD_CUSTOMER, DELETE_CUSTOMER } from "./actionTypes";

export const addCustomer = (customer) =>({
    type : ADD_CUSTOMER,
    payload : customer
})

export const deleteCustomer = (id) =>({
    type : DELETE_CUSTOMER,
    payload : id
})