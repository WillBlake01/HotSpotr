const SIGNUP = 'SIGNUP';
const LOGIN = 'LOGIN';

// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. A copy of current state
export const profile = (state = [], action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
        case LOGIN:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
        default:
            return state;
    }
}
