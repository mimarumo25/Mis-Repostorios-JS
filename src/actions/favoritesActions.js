import { types } from "../types/types"

export const favorites = (repos) => {
    return {
        type: types.favorites,
        payload: repos
    }
    
}
