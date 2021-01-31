import { combineReducers } from 'redux';
import arrayOperations from './array-operations';

const reducer = combineReducers({
    arr: arrayOperations,
})

export default reducer