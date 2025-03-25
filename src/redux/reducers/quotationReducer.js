import { ADD_QUOTATION, DELETE_QUOTATION } from "../actions/actionTypes"

const initialState = {
    quotations : []
}

function quotationReducer(state = initialState , action) {
    switch(action.type) {
        
        case ADD_QUOTATION :
            return {...state, quotations : [...state.quotations, action.payload]}

        case DELETE_QUOTATION : 
            return {...state, quotations : state.quotations.filter((q) => q.id !== action.payload)}

        default :
            return state
    }
}

export default quotationReducer