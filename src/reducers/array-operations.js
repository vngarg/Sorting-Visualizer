import { Constants } from "../actinos/constants";

const initState = {
    size: 7,
    array: [7, 5, 3, 2, 4, 8, 9],
}

export default (state = initState, action) => {
    switch(action.type) {
        case Constants.GET_ARRAY: 
            state = {
                ...initState
            }
            break;
        case Constants.UPDATE_ARRAY:
            state = {
                ...state, 
                size: action.payload.size,
                array: action.payload.array
            }
            break;
        default: 
            break;
    }
    
    return state;
}