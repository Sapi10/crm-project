import { ADD_DEALER, DELETE_DEALER, UPDATE_DEALER } from "../actions/actionTypes"


const initialState = {
    dealers : []
}

function dealerReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_DEALER :
            return {...state, dealers : [...state.dealers, action.payload]}

        case DELETE_DEALER :
            return {...state, dealers : state.dealers.filter((d) => d.id !== action.payload)}

        case UPDATE_DEALER :
            return {
                ...state,
                dealers : state.dealers.map((dealer) => dealer.id === action.payload.id ? action.payload : dealer )
            }
        
        default :
            return state
    }
}

export default dealerReducer