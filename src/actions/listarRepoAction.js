import { types } from "../types/types"

export const listar = (repos) => {
    return {
        type: types.listar,
        payload: repos
    }
    
}
