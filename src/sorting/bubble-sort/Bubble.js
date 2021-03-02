import React from 'react';
import { useSelector } from 'react-redux';
import '../../App.css';
import { useDispatch } from "react-redux";
import { UpdateArray } from '../../actinos/array-operations';
import UpdatePillars from '../../components/UpdatePillarHeight/Update';

const Bubble = () => {
    const dispatch = useDispatch();
    var array = useSelector(state => state.arr.array);
    var size = useSelector(state => state.arr.size);

    function bubbleSort() {
        var swaps = -1;
        while(swaps !== 0) {
            swaps = 0;
            for(var i = 0;i<size-1;++i) {
                if(array[i+1] < array[i]) {
                    var temp = array[i+1];
                    array[i+1] = array[i];
                    array[i] = temp;
                    ++swaps;
                }
            }
            dispatch(UpdateArray);
        }
        UpdatePillars(array);
    }
    
    return (
        <div>
            <input type='button' value='Bubble Sort' className='btn' onClick={bubbleSort} />
        </div>
    )
}

export default Bubble
