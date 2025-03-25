import { ADD_QUOTATION, DELETE_QUOTATION } from "./actionTypes";

export const addQuotation = (quotation) =>({
    type : ADD_QUOTATION,
    payload : quotation
})

export const deleteQuotation = (id) => ({
    type : DELETE_QUOTATION,
    payload : id
})