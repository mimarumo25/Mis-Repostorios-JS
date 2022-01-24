import { types } from "../types/types";

export const registerReducer = (state={},action) =>{
    switch (action.type) {
        case types.register:
            
            return{
                ...state,
                name:action.payload.name,
                usergithub:action.payload.usergithub,
                email: action.payload.email,
                password: action.payload.password,
            }
            case types.registerError:
                return {
                  ...state,
                  error: action.payload.error
                };
    
        default:
            return state
    }
}
