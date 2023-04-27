import { createStore } from 'redux';
// import { combineReducers } from 'redux';



// Action est un objet qui contient un type et un payload
// Action creator est une fonction qui retourne une action
// export const login = (token, firstName, lastName, id) => {
//     return {
//         type: 'LOGIN',
//         payload: {
//             token,
//             firstName,
//             lastName,
//             id
//         }
//     }
// }

// export const logout = () => {
//     return {
//         type: 'LOGOUT'
//     }
// }

// Reducer est une fonction qui prends en paramètre un état et une action et qui retourne un nouvel état
// const initialState = {
//     token: null,
//     id: null,
//     firstName: null,
//     lastName: null,
//     isLogged: false
// }

// function reducer(state = initialState, action) {    
//     switch (action.type) {
//         case 'LOGIN':
//             return {
//                 ...state,
//                 token: action.payload.token,
//                 id: action.payload.id,
//                 firstName: action.payload.firstName,
//                 lastName: action.payload.lastName,
//                 isLogged: true
//             }
//         case 'LOGOUT':
//             return {
//                 ...state,
//                 token: null,
//                 id: null,
//                 firstName: null,
//                 lastName: null,
//                 isLogged: false
//             }
//         default:
//             return state;
//     }
// }

// Store est un objet qui contient le state de l'application
// export const Store = createStore(reducer, initialState);
// console.log(Store.getState());

// export default Store;

// //**
//  * Version Courte
//  */ 

// import { createSlice } from '@reduxjs/toolkit'

// export const userSlice = createSlice({
//     name : "user",
//     initialState:{value:{connected:false, token:"oupo"}},
//     reducers : {
//         login : (state, action )=>{
//             state.value=action.payload
//         },
//         logout : (state) =>{
//             state.value={connected:false, token:""}
//         }
//     }

// })
// export const {login} = userSlice.actions;
// export const {logout} = userSlice.actions;

// export default userSlice.reducer;

/**
 * Version Longue
 */


// import { createStore } from "redux";
import produce from "immer";

//state initial
const initialState = {
  isLogged: false,
  firstName: "",
  lastName: "",
  token: "",
};

//action creator
export const login = (firstName, lastName, token) => ({
  type: "login",
  payload: { firstName: firstName, lastName: lastName, token: token },
});

// console.log("login", login)

export const logout = () => ({ type: "logout" });

export const nameChange = (firstName, lastName) => ({
  type: "nameChange",
  payload: { firstName: firstName, lastName: lastName },
});

function reducer(state = initialState, action) {
    
  //action login
  if (action.type === "login") {
    
    const firstName = action.payload.firstName;
    const lastName = action.payload.lastName;
    const token = action.payload.token;

    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("token", token);

    console.log("state", state);

    return produce(state, (draft) => {
      draft.isLogged = true;
      draft.firstName = firstName;
      draft.lastName = lastName;
      draft.token = token;
      console.log("draft", draft);
    });
  }

  //action logout
  if (action.type === "logout") {
    console.log('avant logout')
    return produce(state, (draft) => {
      draft.isLogged = false;
      draft.firstName = "";
      draft.lastName = "";
      draft.token = "";
    });
  }

  //action nameChange
  if (action.type === "nameChange") {
    const firstName = action.payload.firstName;
    const lastName = action.payload.lastName;

    return produce(state, (draft) => {
      draft.firstName = firstName;
      draft.lastName = lastName;
    });
  }

  //default state return
  return state;
}

//creation du store
export const Store = createStore(reducer, initialState);
console.log(Store.getState());