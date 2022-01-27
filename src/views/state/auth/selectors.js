export const getIsLoggedIn = state => !!state.auth.user
export const getToken = state => state.auth.accessToken
export const getUser = state => state.auth.user
export const getuserId = state => state.auth.user.id