const SIGNUP = 'SIGNUP';
const LOGIN = 'LOGIN';

// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. A copy of current state
const profile = (state = [], action) => {
    switch (action.type) {
        case SIGNUP:
            return action.payload
        case LOGIN:
            return action.payload
        default:
            return state;
    }
}

export default profile;
