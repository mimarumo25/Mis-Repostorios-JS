import { types } from "../types/types";


const initialState = {
    repositorios: [],
    
}


export const listarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.listar:
            return {
                repositorios:  action.payload
            }
       
        default:
            return state;
    }
}