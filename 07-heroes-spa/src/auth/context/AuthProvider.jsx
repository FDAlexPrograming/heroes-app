import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );
    return {
        logged: !!user, // doble negación -- si el usuario existe va a estar en true
        user: user,
    }
}

export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( authReducer, {}, init );
    
    const login = async( name = '' ) => {
        const user = { id: 'ABC', name }
        const action = { type:types.login, payload: user }
        localStorage.setItem('user', JSON.stringify( user ) );
        dispatch( action ) ;
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout };
        dispatch( action );
    }

    return (
        <AuthContext.Provider value={{ 
            ...state,

            // methods
            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}