import { ADD_CUSTOMER, DELETE_CUSTOMER } from '../actions/actionTypes'


const initialState ={
    customers : []
}

function customerReducer(state = initialState , action) {
  switch(action.type){

    case ADD_CUSTOMER :
        return {...state, customers : [...state.customers, action.payload]}

    case DELETE_CUSTOMER : 
        return {...state, customers : state.customers.filter((c) => c.id !== action.payload)}
        
    default :
        return state
  }
}

export default customerReducer