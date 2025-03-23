import { LOGIN_SUCCESS, LOGOUT } from "../actions/userAction"

const token = localStorage.getItem('authToken')

const initialState = {
    user: token ? {token, email: 'admin@test.com'} : null,
    isAuthenticated : token ? true :  false
}

const authReducer = ( state = initialState , action) =>{
    switch(action.type) {
        case LOGIN_SUCCESS :
            return {
                ...state, 
                user: action.payload,
                isAuthenticated: true
            }
        case LOGOUT:
            return {
                ...state,
                user:null,
                isAuthenticated : false
            }
        default :
            return state
    }
}

export default authReducer