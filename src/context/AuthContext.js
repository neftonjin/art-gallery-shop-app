import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer" ;

const INITAL_STATE={
    currentUser:null,
}

export const AuthContext=createContext(INITAL_STATE);
export const AuthContextProvider=({children}) =>{
    const [state,dispatch]= useReducer(AuthReducer,INITAL_STATE);
    return (
    <AuthContext.Provider value={{currentUser:state.currentUser, dispatch}}>
     {children}
     </AuthContext.Provider>
    );
} ;