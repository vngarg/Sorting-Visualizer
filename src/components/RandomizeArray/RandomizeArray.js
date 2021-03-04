import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { UpdateArray } from '../../actions/array-operations';

const RandomizeArray = ({size}) => {
    var dispatch = useDispatch();
    var sorting = useSelector(state => state.arr.sorting);

    const randomizeArray = (size) => {
        dispatch(UpdateArray(size));
    }

    return <button disabled={sorting} style={{ 'width': '70px' }} onClick={() => randomizeArray(size)} className="btn">
        <i className="fas fa-sync-alt"></i>
    </button>
}

export default RandomizeArray
