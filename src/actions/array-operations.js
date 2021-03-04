import { Constants } from "./constants";

// export const showArray = () => {
//     return dispatch => {
//         dispatch({
//             type: Constants.GET_ARRAY
//         })
//     }
// }

export const UpdateArray = (size) => {
    // generating a random array of the new size. Values of the array are from 0 to (size*50)
    var array = Array.from({length: size}, () => (Math.floor(Math.random() * 398)) + 1); 

    return dispatch => {
        dispatch({
            type: Constants.UPDATE_ARRAY,
            payload: {
                size,
                array
            }
        })
    }
}

export const UpdateSortingState = (sorting) => {
    return dispatch => {
        dispatch({
            type: Constants.UPDATE_SORTING_STATE,
            payload: {
                sorting
            }
        })
    }
}