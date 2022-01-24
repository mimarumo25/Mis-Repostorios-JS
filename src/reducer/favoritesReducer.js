import { types } from "../types/types"
const initialState ={
    favorites:[]
}

export const favoritesReducer =(state=initialState, action) =>{

    switch (action.type) {
        case types.favorites:
            return{
                favorites:[...state.favorites, action.payload]
            }
    
        default:
           return state
    }
}