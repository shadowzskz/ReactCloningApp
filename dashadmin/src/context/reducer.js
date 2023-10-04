
export const initialState = {
    user: null,
    validUser: [],
}

function reducer(state, action) {
    switch(action.type) {
        case "SET_USER": 
            return {
                ...state,
                user: action.user
            }
        case "SET_VALID_USER":
            return {
                ...state,
                validUser: [...state.validUser, action.data]
            }
        default:
            return state
    }
}
export default reducer;