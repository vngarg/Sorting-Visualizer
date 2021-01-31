import { Constants } from "../actinos/constants";

const initState = {
    size: 4,
    array: [1, 2, 3, 4],
}

export default (state = initState, action) => {
    switch(action.type) {
        case Constants.SHOW_ARRAY: 
            state = {
                ...initState
            }
            break;
        case Constants.UPDATE_ARRAY:
            state = {
                ...state, 
                size: action.payload.size,
            }
            break;
        default: 
            console.log('In default Case');
            break;
    }
    
    return state;
}