
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

// here the userData is passed from the login page
// it will be passed to the update the state in the reducer
// and the isAuthenticated will be set to true

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData
});

export const logout = () =>({type: LOGOUT});