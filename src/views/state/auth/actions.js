import { authApi } from "../../../api/rest";
import { getToken, getuserId } from "./selectors";

export const STORE_USER = 'STORE_USER';
export const REMOVE_USER = 'REMOVE_USER';

//Sync
export const storeUser = authData => ({
    type: STORE_USER,
    payload: authData
})

export const removeUser = () => ({
    type: REMOVE_USER,
})

//Async
export const login = (username, password) => async dispatch => {
    const response = await authApi.login(username, password)
    if(response.code){
        throw new Error('Authentiacation failed!')
    }
    dispatch(storeUser(response))
}

export const logout = () => dispatch => {
    authApi.logout();
    dispatch(removeUser())
}

export const restoreUser = () => async dispatch => {
    const token = authApi.getToken()
    if(token){
        const data = JSON.parse(atob(token.split('.')[1]))
        const userId = data.sub
        const user = await authApi.getuserById(userId, token)
        dispatch(storeUser({
            user,
            accessToken: token
        }))
    }
    else{
        console.log("Valami");
    }
}

//Util
export const addToken = fn => (dispatch, getState, ...rest) => {
    const token = getToken(getState())
    fn(dispatch, getState, ...rest, token)
}

export const addUserId = fn => (dispatch, getState, ...rest) => {
    const userId = getuserId(getState())
    fn(dispatch, getState, ...rest, userId)
}