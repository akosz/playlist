import { STORE_USER } from "./actions";

const initialState = {};
export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

    if(type === STORE_USER)
        return payload

    return state
}