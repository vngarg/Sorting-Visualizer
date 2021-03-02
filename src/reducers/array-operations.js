import { Constants } from "../actinos/constants";

const initState = {
    size: 16,
    array: Array.from({length: 16}, () => (Math.floor(Math.random() * 398)) + 1),
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