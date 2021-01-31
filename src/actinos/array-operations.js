import { Constants } from "./constants";

export const showArray = () => {
    return dispatch => {
        dispatch({
            type: Constants.SHOW_ARRAY
        })
    }
}

export const UpdateArray = (size) => {
    return dispatch => {
        dispatch({
            type: Constants.UPDATE_ARRAY,
            payload: {
                size
            }
        })
    }
}