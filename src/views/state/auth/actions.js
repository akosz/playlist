import { authApi } from "../../../api/rest";

export const STORE_USER = 'STORE_USER';

//Sync
export const storeUser = authData => ({
    type: STORE_USER,
    payload: authData
})

//Async
export const login = (username, password) => async dispatch => {
    const response = await authApi.login(username, password)
    if(response.code){
        throw new Error('Authentiacation failed!')
    }
    dispatch(storeUser(response))
}