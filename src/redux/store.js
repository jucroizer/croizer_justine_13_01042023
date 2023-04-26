import { CreateStore } from 'redux';

// Action est un objet qui contient un type et un payload
// Action creator est une fonction qui retourne une action
export const login = (token, firstName, lastName, id) => {
    return {
        type: 'LOGIN',
        payload: {
            token,
            firstName,
            lastName,
            id
        }
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

// Reducer est une fonction qui prends en paramètre un état et une action et qui retourne un nouvel état
const initialState = {
    token: null,
    id: null,
    firstName: null,
    lastName: null,
    isLogged: false
}

function reducer(state = initialState, action) {    
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.token,
                id: action.payload.id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                isLogged: true
            }
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                id: null,
                firstName: null,
                lastName: null,
                isLogged: false
            }
        default:
            return state;
    }
}

// Store est un objet qui contient le state de l'application
const store = CreateStore(reducer);
console.log(store.getState());

export default store;