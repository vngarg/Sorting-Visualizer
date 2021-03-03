import React from 'react';
import { useDispatch } from "react-redux";
import { UpdateArray } from '../../actinos/array-operations';

const RandomizeArray = ({size}) => {
    var dispatch = useDispatch();

    const randomizeArray = (size) => {
        dispatch(UpdateArray(size));
    }

    return <button onClick={() => randomizeArray(size)} className="btn">Reload</button>
}

export default RandomizeArray
